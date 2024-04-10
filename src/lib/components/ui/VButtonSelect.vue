<template>
    <div
        :style="cssVars"
        :class="customClasses"
        class="v-button-select"
        @mouseenter.prevent="hoverShowHandler"
        @mouseleave.prevent="hoverShowHandler"
        @click.stop
    >
        <button
            ref="selectButton"
            class="v-button-select__button"
            :class="{ isRedefine: 'v-button-select__button-default' }"
            @click.prevent="showHandler"
            @mouseleave.prevent="onMouseleave"
            @keydown.down.prevent="highlightNext"
            @keydown.esc.prevent="closeHandler"
            @keydown.up.prevent="highlightPrev"
            @keydown.enter.prevent="selectHighlighted"
        >
            <div class="v-button-select__content">
                <div class="v-button-select__content-top">
                    <slot>
                        <span class="v-button-select__value">{{ value }}</span>
                    </slot>
                    <ArrowBaseIcon
                        v-if="!isHideArrow"
                        :class="{
                            'v-button-select__rotate-arrow': showDropdown,
                        }"
                        :rotate="Side.DOWN"
                    />
                </div>
                <span v-if="hint" class="v-button-select__hint">{{ hint }}</span>
            </div>
        </button>
        <div
            v-if="showDropdown && options.length > 1"
            class="v-button-select__dropdown"
            :class="{ 'v-button-select__dropdown-block': blockView }"
        >
            <VInput
                v-if="showSearch"
                :value="input"
                placeholder="Введите город"
                :allow-clear="true"
                without-star
                icon-left="LoupeIcon"
                @clear="inputHandler"
                @input="inputHandler"
            />
            <div class="v-button-select__dropdown-content">
                <ul v-show="filteredOptions.length" ref="options" class="v-button-select__list">
                    <li
                        v-for="(item, index) in filteredOptions"
                        :key="item.id"
                        class="v-button-select__item"
                        :class="{
                            'v-button-select__item_active': index === highlightedIndex,
                        }"
                    >
                        <button
                            class="v-button-select__item-button"
                            :class="{
                                'v-button-select__item-button_active': item[activeField] === value,
                            }"
                            @click.prevent="selectHandler(item)"
                        >
                            <slot name="option" :option="item">
                                <div class="option">
                                    <div v-if="item.marker !== undefined" class="option__marker">{{ item.marker }}</div>
                                    <span class="option-text">{{ item.label }}</span>
                                </div>
                            </slot>
                        </button>
                    </li>
                </ul>
                <p v-if="!filteredOptions.length" class="dropdown__no-results-message">
                    По вашему запросу ничего не найдено
                </p>
            </div>
        </div>
    </div>
</template>

<script>
// Core
import ClickOutside from "vue-click-outside";

// Types
import { Side } from "@/typespaces";

// Components
import VInput from "./VInput.vue";
import { ArrowBaseIcon } from "@/lib/icons";

export default {
    name: "VButtonSelect",
    components: { VInput, ArrowBaseIcon },
    directives: {
        ClickOutside,
    },
    emits: ["click", "select", "show"],
    props: {
        value: {
            type: String,
            required: false,
        },
        hint: {
            type: String,
            default: "",
        },
        isHideArrow: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array, // { label: string , value: string, redirect_url?: string, marker?: string }[]
        },
        isRedefine: {
            type: Boolean,
        },
        showOnHover: {
            type: Boolean,
        },
        activeField: {
            type: String,
            default: "label",
        },
        blockView: {
            type: Boolean,
        },
        showSearch: {
            type: Boolean,
            default: false,
            required: false,
        },
        dropdownMarginTop: {
            type: String,
            default: "unset",
        },
        dropdownMarginLeft: {
            type: String,
            default: "unset",
        },
        customClasses: {
            type: String,
            validator(value) {
                return ["city-select-dropdown"].includes(value);
            },
        },
    },
    data() {
        return {
            showDropdown: false,
            highlightedIndex: null,
            input: "",
        };
    },
    computed: {
        Side() {
            return Side;
        },
        cssVars() {
            return {
                "--dropdown-margin-top": this.dropdownMarginTop,
                "--dropdown-margin-left": this.dropdownMarginLeft,
                "--city-dropdown-max-height": this.showSearch ? "497px" : "553px",
                "--city-dropdown-columns-count": this.showSearch ? "3" : "unset",
            };
        },
        filteredOptions() {
            if (!this.input) {
                return this.options;
            } else {
                const regexp = new RegExp(`^${this.input}`, "i");
                return this.options.filter((option) => {
                    return regexp.test(option.label);
                });
            }
        },
    },
    methods: {
        inputHandler(value) {
            this.input = value;
        },
        highlight(index) {
            this.highlightedIndex = index;

            if (this.highlightedIndex < 0) {
                this.highlightedIndex = this.options.length - 1;
            }

            if (this.highlightedIndex > this.options.length - 1) {
                this.highlightedIndex = 0;
            }
            this.scrollToHighlighted();
        },
        highlightNext() {
            if (this.options.length) {
                this.highlight(this.highlightedIndex + 1);
            }
        },
        highlightPrev() {
            this.highlight(this.highlightedIndex - 1);
        },
        selectHighlighted() {
            if (this.options.length) {
                this.selectHandler(this.options[this.highlightedIndex]);
            }
        },
        scrollToHighlighted() {
            if (this.showDropdown) {
                this.$refs.options.children[this.highlightedIndex].scrollIntoView({
                    block: "nearest",
                });
            }
        },
        closeHandler() {
            this.showDropdown = false;
            this.highlightedIndex = null;
            document.removeEventListener("click", this.closeHandler);
        },
        showHandler() {
            this.$emit("click");
            this.showDropdown = !this.showDropdown;
            document.addEventListener("click", this.closeHandler);
        },
        hoverShowHandler() {
            if (this.showOnHover) {
                this.$refs.selectButton?.focus();
                this.showDropdown = !this.showDropdown;
                this.$emit("show", this.showDropdown);
            }
        },
        selectHandler(item) {
            this.closeHandler();
            this.$emit("select", item);
        },
        onMouseleave() {
            if (!this.showDropdown) {
                this.$refs.selectButton?.blur();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.v-button-select {
    position: relative;
    padding: 4px 0;
    @media (max-width: 860px) {
        padding: 0;
    }
}

.v-button-select__button {
    display: flex;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;

    &-default {
        gap: 8px;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        border-radius: 12px;

        &:focus {
            background: var(--system-mono-200);
        }

        &:hover:not(:focus) {
            background: var(--system-mono-200-alfa50);
        }
    }
}

.v-button-select__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.v-button-select__content-top {
    display: flex;
    column-gap: 8px;
    align-items: center;
}

.v-button-select__value {
    font: var(--font-m-bold);
}

.v-button-select__hint {
    font: var(--font-xs);
    color: var(--system-mono-400);
}

.v-button-select__rotate-arrow {
    transform: rotate(180deg);
}

.v-button-select__dropdown {
    background: var(--system-mono-100);
    box-shadow: var(--shadow-l);
    border-radius: 16px;
    overflow: hidden;
    position: absolute;
    top: 100%;
    z-index: 1;

    @media (min-width: 860px) {
        margin-top: var(--dropdown-margin-top);
        margin-left: var(--dropdown-margin-left);
    }
}

.v-button-select__dropdown-block {
    position: static;
    box-shadow: none;
}

.v-button-select__dropdown-content {
    padding: 0 0 0 8px;
    overflow-y: scroll;

    @media (min-width: 860px) {
        width: var(--dropdown-content-desktop-min-width);
    }

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        margin: 12px 0;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--system-mono-200);
        border: 4px solid var(--system-mono-100);
        border-radius: 9999px;
    }
}

.v-button-select__list {
    margin: 0;
    padding: 8px 4px 8px 8px;
    list-style-type: none;
}

.v-button-select__item {
    margin-bottom: 6px;
    border-radius: 10px;

    &:last-child {
        margin-bottom: 0;
    }

    &_active,
    &:hover {
        background-color: var(--system-mono-200-alfa50);
    }
}

.v-button-select__item-button {
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

.option {
    display: flex;
}

.option__marker {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-right: 8px;
    color: var(--system-mono-400);
}

.dropdown__no-results-message {
    padding: 0;
    @media (min-width: 860px) {
        min-width: 755px;
        padding-left: 8px;
    }
}

.city-select-dropdown {
    & .v-button-select__dropdown {
        @media (max-width: 860px) {
            width: 100%;
        }
    }

    & .v-button-select__dropdown-content {
        max-height: var(--city-dropdown-max-height);
        @media (max-width: 479px) {
            max-height: calc(var(--100vh) - 142px);
        }
        @media (max-width: 860px) {
            width: 100%;
        }
    }

    & .v-button-select__list {
        @media (min-width: 860px) {
            columns: var(--city-dropdown-columns-count);
        }
    }

    & .v-button-select__item {
        min-width: 237px;
    }
}
</style>
