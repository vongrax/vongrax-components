<template>
    <ValidationProvider
        v-slot="{ errors }"
        :name="name"
        :rules="{ required: required, ...rules }"
        :custom-messages="messages"
    >
        <label class="v-textarea">
            <p
                v-if="withoutHint && label"
                class="v-textarea__label"
                :class="{
                    'v-textarea__label_required': required,
                }"
            >
                {{ label }}
            </p>
            <div
                class="v-textarea__textarea-wrapper"
                :class="{
                    wrapperClasses,
                    'v-textarea__textarea-wrapper_error': errors.length,
                }"
                :style="wrapperStyles"
            >
                <span
                    v-if="inputValue && !withoutHint && !!label"
                    class="v-textarea__hint"
                    :class="{
                        'v-textarea__hint_required': required,
                    }"
                >
                    {{ label }}
                </span>
                <textarea
                    ref="textarea"
                    class="v-textarea__textarea"
                    :rows="minRows"
                    :value="inputValue"
                    :name="name"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :maxlength="maxlength"
                    @input="inputHandler"
                />
            </div>
            <span v-if="isShowError || errors.length" class="v-textarea__error-text">
                {{ errors[0] }}
            </span>
        </label>
    </ValidationProvider>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

export default {
    name: "VTextarea",
    components: { ValidationProvider },
    emits: ["input"],
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
        status: {
            type: String,
            validator(value) {
                return ["success", "error", "idle"].includes(value);
            },
            default: "idle",
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
        minRows: {
            type: String,
            default: "2",
        },
        maxlength: {
            type: String,
            default: "200",
        },
        autoSize: {
            type: Boolean,
            default: true,
        },
        rules: {
            type: Object, // { required: boolean, email: boolean}
        },
        messages: {
            type: Object, // { required: string, email: string}
        },
    },
    data() {
        return {
            inputValue: "",
            height: "",
        };
    },
    computed: {
        wrapperClasses() {
            return {
                [`v-textarea__textarea-wrapper_${this.status}`]: !!this.status,
                "v-textarea__textarea-wrapper_disabled": this.disabled,
                "v-textarea__textarea-wrapper_without-hint": this.withoutHint || !this.label,
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
    },
    methods: {
        resize() {
            const element = this.$refs.textarea;
            element.style.height = "auto";
            element.style.height = `${element.scrollHeight}px`;
        },
        inputHandler(event) {
            this.$emit("input", event.target.value);
            this.inputValue = event.target.value;
            if (this.autoSize) {
                this.resize();
            }
        },
    },
    watch: {
        value: {
            handler(value) {
                this.inputValue = value;
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
    },
};
</script>

<style lang="scss" scoped>
.v-textarea {
    position: relative;
    width: 100%;
}

.v-textarea__label {
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

.v-textarea__textarea-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 16px;
    border-width: 1px;
    border-color: var(--system-mono-300);
    border-radius: 18px;
    border-style: solid;
    background-color: var(--system-mono-100);

    &_without-hint {
        padding: 17px 16px;
    }

    &:has(.v-textarea__textarea:focus) {
        border-color: var(--system-mono-900);
    }

    &_success {
        border-color: var(--system-color-green);
    }

    &_error {
        border-color: var(--system-color-red);

        &:has(.v-textarea__textarea:focus) {
            border-color: var(--system-color-dark-red);
        }
    }

    &_disabled {
        .v-textarea__textarea {
            color: var(--system-mono-400);
        }
        background-color: var(--system-mono-200-alfa50);
        border-color: var(--system-mono-300);
    }
}

.v-textarea__textarea {
    width: 100%;
    height: 100%;
    resize: none;
    padding: 0;
    font: var(--font-l);
    border: none;
    outline: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: var(--system-mono-400);
    }
}

.v-textarea__hint {
    position: relative;
    display: inline-block;
    margin-top: -8px;
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

.v-textarea__error-text {
    margin-top: 4px;
    font: var(--font-m);
    color: var(--system-color-dark-red);
}
</style>
