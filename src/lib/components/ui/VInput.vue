<template>
    <ValidationProvider
        v-slot="{ errors }"
        tag="div"
        :name="name"
        :rules="{ required: required, ...rules }"
        :custom-messages="messages"
    >
        <label class="v-input">
            <p
                v-if="withoutHint && label"
                class="v-input__label"
                :class="{
                    'v-input__label_required': required && !withoutStar,
                }"
            >
                {{ label }}
            </p>
            <div
                class="v-input__input-wrapper"
                :class="{
                    ...wrapperClasses,
                    'v-input__input-wrapper_error': errors.length || customError,
                }"
                :style="wrapperStyles"
            >
                <div v-if="iconLeft" class="v-input__icon-left">
                    <component :is="iconLeft" />
                </div>

                <div class="v-input__input-container" :class="containerClasses">
                    <span
                        v-if="inputValue && !withoutHint && !!label"
                        class="v-input__hint"
                        :class="{
                            'v-input__hint_required': required && !withoutStar,
                        }"
                    >
                        {{ label }}
                    </span>
                    <span
                        v-if="!inputValue && placeholder"
                        class="v-input__placeholder"
                        :class="{
                            'v-input__placeholder_required': required && !withoutStar,
                        }"
                    >
                        {{ placeholder }}
                    </span>
                    <input
                        ref="inputField"
                        :data-cp="dataCp"
                        :readonly="readonly"
                        :autocomplete="autocomplete"
                        :maxlength="maxLength"
                        class="v-input__input"
                        :class="{
                            'v-input__input_readonly': readonly,
                        }"
                        :type="type"
                        :value="inputValue"
                        :name="dataCp ? undefined : name"
                        :disabled="disabled"
                        @input="inputHandler($event, !!errors.length)"
                        @blur="handleBlur($event, !!errors.length)"
                        @focus="focusHandler"
                    />
                </div>

                <div v-if="isFeedback && !errors.length" class="v-input__icon-right">
                    <CheckmarkIcon :size="IconSizes.L" fill="var(--system-color-green)" />
                </div>
                <button
                    v-if="inputValue && allowClear && !disabled"
                    :disabled="disabled"
                    class="v-input__clear-button"
                    @click.prevent="clearHandler"
                >
                    <CrossFillIcon fill="var(--system-mono-400)" :size="IconSizes.L" class="input-form__clear-icon" />
                </button>

                <slot name="icon-right" :error="!!errors.length">
                    <div v-if="iconRight" class="v-input__icon-right">
                        <component :is="iconRight" />
                    </div>
                </slot>
            </div>
            <span v-if="isShowError || errors.length" class="v-input__error-text">
                {{ errors[0] }}
            </span>
            <span v-if="customError" class="v-input__error-text">
                {{ customError }}
            </span>
        </label>
    </ValidationProvider>
</template>

<script>
// Core
import { ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

// Types
import { IconSizes } from "@/typespaces";

// Components
import { CrossFillIcon, CheckmarkIcon } from "@/lib/icons";

export default {
    name: "VInput",
    components: { CheckmarkIcon, CrossFillIcon, ValidationProvider },
    emits: ["input", "focus", "clear", "blur", "focus"],
    props: {
        label: {
            type: String,
        },
        value: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        iconLeft: {
            type: String,
        },
        iconRight: {
            type: String,
        },
        isSuccess: {
            type: Boolean,
            default: false,
        },
        messages: {
            type: Object,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        withoutHint: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
        },
        width: {
            type: String,
        },
        allowClear: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            default: "text",
        },
        maxLength: {
            type: String,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        rules: {
            type: Object,
        },
        uppercase: {
            type: Boolean,
        },
        autocomplete: {
            type: String,
            default: "off",
        },
        withoutStar: {
            type: Boolean,
            default: false,
        },
        hasFeedback: {
            type: Boolean,
            default: false,
        },
        // настройка для cloudpayments
        dataCp: {
            type: String,
        },
        customError: {
            type: String,
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            inputValue: "",
            isBlur: false,
        };
    },
    computed: {
        IconSizes() {
            return IconSizes;
        },
        containerClasses() {
            return {
                "v-input__input-container_not-empty": !!this.value && !this.withoutHint && this.label,
            };
        },
        wrapperClasses() {
            return {
                "v-input__input-wrapper_success": this.isSuccess,
                "v-input__input-wrapper_disabled": this.disabled,
                "v-input__input-wrapper_without-hint": this.withoutHint || !this.label,
                "v-input__input-wrapper_readonly": this.readonly,
            };
        },
        wrapperStyles() {
            return {
                width: this.width || "100%",
            };
        },
        isShowError() {
            if (!this.disabled) {
                return this.status === "error";
            }
            return false;
        },
        isFeedback() {
            return !this.allowClear && this.hasFeedback && this.inputValue && this.isBlur;
        },
    },
    methods: {
        clearHandler() {
            this.$emit("input", "");
            this.$emit("clear", "");
        },
        focusHandler() {
            this.$emit("focus");
        },
        inputHandler(event, error) {
            this.isBlur = false;
            if (this.uppercase) {
                this.$emit("input", event.target.value.toUpperCase(), error);
            } else {
                this.$emit("input", event.target.value, error);
            }
        },
        handleBlur(event, error) {
            this.isBlur = true;
            this.$emit("blur", {
                name: this.name,
                value: event.target.value,
                error,
            });
        },
    },
    watch: {
        value: {
            handler(value) {
                if (this.uppercase) {
                    this.inputValue = value.toUpperCase();
                } else {
                    this.inputValue = value;
                }
            },
            immediate: true,
        },
    },
    mounted() {
        Object.keys(rules).forEach((rule) => {
            extend(rule, {
                ...rules[rule],
            });
        });
        if (this.autofocus) {
            this.$refs.inputField.focus();
        }
    },
};
</script>

<style lang="scss" scoped>
.v-input {
    position: relative;
}

.v-input__label {
    display: block;
    padding: 0 0 14px;
    margin: 0;
    position: relative;

    &_required {
        &:after {
            content: "*";
            font-size: 24px;
            color: var(--system-color-dark-red);
            position: absolute;
            top: -4px;
        }
    }
}

.v-input__input-wrapper {
    display: flex;
    position: relative;
    height: 64px;
    padding: 20px 16px;
    border-width: 1px;
    border-color: var(--system-mono-300);
    border-radius: 18px;
    border-style: solid;
    background-color: var(--system-mono-100);

    &_without-hint {
        height: 56px;
        padding: 17px 16px;
    }

    &:has(.v-input__input:focus) {
        border-color: var(--system-mono-900);
    }

    &_success {
        border-color: var(--system-color-green);
    }

    &_error {
        border-color: var(--system-color-red);

        &:has(.v-input__input:focus) {
            border-color: var(--system-color-dark-red);
        }
    }

    &_readonly {
        cursor: pointer;
    }

    &_disabled {
        .v-input__input {
            color: var(--system-mono-400);
            cursor: not-allowed;
        }

        cursor: not-allowed;
        background-color: var(--system-mono-200-alfa50);
        border-color: var(--system-mono-300);
    }
}

.v-input__input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &_not-empty {
        margin-top: -12px;
    }
}

.v-input__input {
    width: 100%;
    height: 20px;
    padding: 0;
    margin: 0;
    font: var(--font-l);
    border: none;
    outline: none;

    &_readonly {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: var(--system-mono-400);
    }
}

.v-input__placeholder {
    position: absolute;
    color: var(--system-mono-400);

    &_required {
        &:after {
            content: "*";
            position: absolute;
            top: -4px;
            font-size: 24px;
            color: var(--system-color-dark-red);
        }
    }
}

.v-input__icon-left {
    padding: 0 14px 0 2px;
    display: flex;
}

.v-input__icon-right {
    padding: 0 2px 0 14px;
    display: flex;
}

.v-input__hint {
    position: relative;
    margin-bottom: 4px;
    font: var(--font-s);
    color: var(--system-mono-400);

    &_required {
        &:after {
            content: "*";
            font-size: 24px;
            color: var(--system-color-dark-red);
            position: absolute;
            top: 3px;
        }
    }
}

.v-input__clear-button {
    background: none;
    padding: 0;
    border: none;
    margin-left: 9px;
}

.v-input__error-text {
    margin-top: 4px;
    font: var(--font-m);
    color: var(--system-color-dark-red);
}
</style>
