<template>
    <div v-click-outside="closeHandler" class="autocomplete">
        <VInput
            :class="{ 'v-select__searchable': !searchable }"
            :icon-right="dropdownButton ? 'ArrowDownDark' : ''"
            :icon-left="iconLeft"
            :name="name"
            :value="inputValue"
            :placeholder="placeholder"
            :label="label"
            :required="required"
            :disabled="disabled"
            :allow-clear="allowClear"
            :readonly="!searchable"
            :rules="rules"
            :messages="messages"
            :is-success="isSuccess"
            @input="inputHandler"
            @clear="clearHandler"
            @keydown.down.native.prevent="highlightNext"
            @click.native="showHandler"
            @keydown.esc.native.prevent="closeHandler"
            @keydown.up.native.prevent="highlightPrev"
            @keydown.enter.native.prevent="selectHighlighted"
        >
            <template #icon-right>
                <VButton
                    v-if="dropdownButton"
                    :disabled="disabled"
                    :view="ButtonTypes.SELECT"
                    class="autocomplete__arrow-button"
                    :class="{
                        'autocomplete__arrow-button_small': !label,
                    }"
                    width="47px"
                    @click.stop.native.prevent="showDropdown = !showDropdown"
                >
                    <ArrowBaseIcon
                        class="autocomplete__arrow-button-icon"
                        :class="{
                            'autocomplete__arrow-button-icon_rotate': showDropdown,
                        }"
                    />
                </VButton>
            </template>
        </VInput>
        <div v-if="showDropdown && options.length" class="autocomplete__dropdown">
            <div v-if="!filterOptions.length" class="select_empty">{{ $t("noResultsWereFoundForYourRequest") }}</div>
            <ul v-show="options.length" ref="options" class="autocomplete__list">
                <li
                    v-for="(item, index) in filterOptions"
                    :key="generateKey(index)"
                    class="autocomplete__item"
                    :class="{
                        autocomplete__item_active: index === highlightedIndex,
                    }"
                >
                    <button
                        class="autocomplete__item-button"
                        :class="{
                            'autocomplete__item-button_active':
                                fieldNames && fieldNames.value && item[fieldNames.value].toString() === activeElement,
                        }"
                        @click="selectHandler(item)"
                    >
                        <slot name="option" :option="item">
                            {{ fieldNames && fieldNames.label && item[fieldNames.label] }}
                        </slot>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// Core
import ClickOutside from "vue-click-outside";
import { v4 as uuidv4 } from "uuid";

// Types
import { IconSizes, ButtonTypes } from "@/typespaces";

// Components
import VButton from "./VButton.vue";
import VInput from "./VInput.vue";
import { ArrowBaseIcon } from "@/lib/icons";

export default {
    name: "VSelect",
    components: { VButton, VInput, ArrowBaseIcon },
    directives: {
        ClickOutside,
    },
    emits: ["input", "onSelect", "blur"],
    props: {
        options: {
            type: Array, // { label: string , value: string}[]
            default: () => [],
        },
        value: {
            type: String,
        },
        label: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        required: {
            type: Boolean,
        },
        isSuccess: {
            type: Boolean,
            default: false,
        },
        messages: {
            type: Object, // { required: string , email: string}
        },
        name: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
        },
        allowClear: {
            type: Boolean,
            default: false,
        },
        searchable: {
            type: Boolean,
        },
        fieldNames: {
            type: Object,
            default: () => ({ label: "label", value: "value" }),
        },
        rules: {
            type: Object, // { required: boolean, email: boolean}
        },
        iconLeft: {
            type: String,
        },
        dropdownButton: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            showDropdown: false,
            highlightedIndex: null,
            inputValue: "",
            activeElement: null, // для выделения активного пункта при фильтрации
        };
    },
    computed: {
        IconSizes() {
            return IconSizes;
        },
        ButtonTypes() {
            return ButtonTypes;
        },
        filterOptions() {
            if (this.searchable && this.fieldNames?.label) {
                return this.options.filter((item) =>
                    item[this.fieldNames.label]
                        ?.replace(",", "")
                        ?.toLowerCase()
                        .includes(this.inputValue.toLowerCase().replace(",", ""))
                );
            }
            return this.options;
        },
    },
    methods: {
        inputHandler(value) {
            this.showDropdown = true;
            this.inputValue = value;
            this.$emit("input", value);
        },
        clearHandler() {
            this.activeElement = null;
            this.$emit("input", "");
            this.$emit("onSelect", "");
        },
        selectHandler(item) {
            this.showDropdown = !this.showDropdown;
            if (item && this.fieldNames.label) {
                this.$emit("onSelect", item, item[this.fieldNames.value].toString());
                this.activeElement = item[this.fieldNames.value].toString();
                this.inputValue = item[this.fieldNames.label].toString();
            }
        },
        // Подсветка активного пункта
        highlight(index) {
            this.highlightedIndex = index;

            if (this.highlightedIndex < 0) {
                this.highlightedIndex = this.filterOptions.length - 1;
            }

            if (this.highlightedIndex > this.filterOptions.length - 1) {
                this.highlightedIndex = 0;
            }
            this.scrollToHighlighted();
        },
        highlightNext() {
            if (this.filterOptions.length) {
                this.highlight(this.highlightedIndex + 1);
            }
        },
        highlightPrev() {
            this.highlight(this.highlightedIndex - 1);
        },
        selectHighlighted() {
            if (this.filterOptions.length) {
                this.selectHandler(this.filterOptions[this.highlightedIndex]);
            }
        },
        closeHandler() {
            this.showDropdown = false;
            this.highlightedIndex = null;
        },
        showHandler() {
            if (!this.disabled) {
                this.showDropdown = true;
            }
        },
        // Для прокрутки к выделеному елементу
        scrollToHighlighted() {
            this.$refs.options.children[this.highlightedIndex].scrollIntoView({
                block: "nearest",
            });
        },
        generateKey(value) {
            return uuidv4(value);
        },
    },
    watch: {
        value: {
            handler(value) {
                if (!this.activeElement) {
                    this.activeElement = value.toString();
                }
                const option = this.options?.find((item) => item[this.fieldNames.value]?.toString() === value);
                if (option) {
                    this.inputValue = option[this.fieldNames.label];
                } else {
                    this.inputValue = value;
                }
            },
            immediate: true,
            deep: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.v-select__searchable {
    cursor: pointer;
}

.autocomplete {
    position: relative;
}

.autocomplete__dropdown {
    margin-top: 4px;
    background: var(--system-mono-100);
    box-shadow: var(--shadow-l);
    padding: 8px 4px 8px 8px;
    border-radius: 16px;
    overflow: hidden;
    position: absolute;
    top: 64px;
    width: 100%;
    z-index: 1;
}

.autocomplete__arrow-button {
    height: 56px;
    width: 56px;
    position: relative;
    top: -17px;
    right: -13px;

    &_small {
        height: 47px;
        width: 47px;
        top: -13px;
        right: -12px;
    }
}

.autocomplete__arrow-button-icon {
    rotate: -90deg;

    &_rotate {
        rotate: 90deg;
    }
}

.autocomplete__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    max-height: 335px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--system-mono-200);
        border-radius: 9999px;
    }
}

.autocomplete__item {
    margin-bottom: 4px;
    border-radius: 8px;

    &:last-child {
        margin-bottom: 0;
    }

    &_active,
    &:hover {
        background-color: var(--system-mono-200-alfa50);
    }
}

.select_empty {
    padding: 16px;
    color: var(--system-mono-400);
}

.autocomplete__item-button {
    padding: 8px;
    margin: 0;
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    text-align: left;
    outline: 0;

    &_active {
        color: var(--color-primary);
    }
}
</style>
