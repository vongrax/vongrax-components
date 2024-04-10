<template>
    <ValidationProvider
        v-slot="{ errors }"
        :name="name"
        :rules="{ required: { allowFalse: !required } }"
        :custom-messages="messages"
    >
        <label class="checkbox" :class="{ checkbox_disabled: disabled }">
            <div
                class="checkbox__input-wrapper"
                :class="{ ...classes, 'checkbox__input-wrapper_error': errors.length }"
                tabindex="0"
            >
                <input
                    class="checkbox__input"
                    :disabled="disabled"
                    :name="name"
                    :value="inputValue"
                    type="checkbox"
                    @input="changeHandler"
                />
                <CheckmarkIcon v-if="inputValue" fill="var(--system-mono-100)" />
            </div>
            <span class="checkbox__label"><slot /></span>
        </label>
        <span v-if="errors.length" class="checkbox__error-text">
            {{ errors[0] }}
        </span>
    </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { CheckmarkIcon } from "@/lib/icons";

export default {
    name: "VCheckbox",
    components: {
        ValidationProvider,
        CheckmarkIcon,
    },
    emits: ["input"],
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        messages: {
            type: Object,
        },
    },
    data() {
        return {
            inputValue: false,
        };
    },
    computed: {
        classes() {
            return {
                "checkbox__input-wrapper_checked": this.inputValue,
                "checkbox__input-wrapper_disabled": this.disabled,
                "checkbox__input-wrapper_disabled_checked": this.disabled && this.inputValue,
            };
        },
    },
    methods: {
        changeHandler() {
            this.inputValue = !this.inputValue;
            this.$emit("input", this.inputValue);
        },
    },
    watch: {
        value: {
            handler(value) {
                this.inputValue = value;
            },
            deep: true,
            immediate: true,
        },
    },
};
</script>

<style scoped lang="scss">
.checkbox {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        .checkbox__input-wrapper {
            border-color: var(--color-primary);
        }
    }
    &:focus-visible {
        outline: 2px solid var(--system-color-yellow-alfa30);
    }

    &_disabled {
        cursor: not-allowed;

        &:hover {
            .checkbox__input-wrapper {
                border-color: var(--system-mono-400);
            }
        }
    }
}

.checkbox__input-wrapper {
    min-width: 24px;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    background-color: var(--system-mono-100);
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-style: solid;
    border-color: var(--system-mono-600);
    outline: 0;

    &:focus-visible {
        outline: 2px solid var(--system-color-yellow-alfa30);
    }

    &_checked {
        border-color: var(--color-primary);
        background-color: var(--color-primary);
    }

    &_disabled {
        border-color: var(--system-mono-400);
        background: var(--system-mono-200);

        &_checked {
            background: var(--system-mono-400);
        }

        &:focus {
            box-shadow: none;
        }
    }
}

.checkbox__input {
    opacity: 0;
    width: 0;
    margin: 0;
}

.checkbox__label {
    transform: translateY(2px);
    align-items: center;
    font: var(--font-s);
    color: var(--system-mono-900);
}

.checkbox__error-text {
    display: inline-block;
    margin-top: 4px;
    color: var(--system-color-dark-red);
    font: var(--font-s);
}
</style>
