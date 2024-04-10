<template>
    <label class="v-radio" tabindex="0">
        <input
            :disabled="disabled"
            :name="name"
            class="v-radio__input"
            type="radio"
            :checked="isChecked"
            :value="value"
            @change="$emit('change', $event.target.value)"
        />
        <span class="v-radio__checkmark" :class="{ 'v-radio__checkmark_disabled': disabled }" />
        <slot>
            <span class="v-radio__label" :class="labelClasses">
                {{ label }}
            </span>
        </slot>
    </label>
</template>

<script>
export default {
    name: "VRadio",
    model: {
        prop: "modelValue",
        event: "change",
    },
    emits: ["change"],
    props: {
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            default: "",
        },
        value: {
            type: String,
        },
        name: {
            type: String,
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        bold: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isChecked() {
            return this.modelValue === this.value;
        },
        labelClasses() {
            return {
                "v-radio__label_required": this.required,
                "v-radio__label_disabled": this.disabled,
                "v-radio__label_bold": this.bold,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.v-radio {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        & .v-radio__checkmark:not(.v-radio__checkmark_disabled) {
            border-width: 3px;
            border-color: var(--color-primary);

            &:after {
                width: 10px;
                height: 10px;
            }
        }
    }
    &:focus-visible {
        outline: none;
        & .v-radio__checkmark:not(.v-radio__checkmark_disabled) {
            outline: 2px solid var(--system-color-yellow-alfa30);
        }
    }
}

.v-radio__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
        & ~ .v-radio__checkmark {
            background-color: var(--color-primary);
            border-color: var(--color-primary);

            &_disabled {
                border-color: var(--system-mono-400);
                background-color: var(--system-mono-400);
            }
        }
        & ~ .v-radio__checkmark {
            &:after {
                display: block;
            }
        }
    }
}

.v-radio__checkmark {
    height: 20px;
    width: 20px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--system-mono-100);
    position: relative;
    border-width: 2px;
    border-style: solid;
    border-color: var(--system-mono-600);
    margin-right: 12px;

    &:after {
        content: "";
        position: absolute;
        display: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--system-mono-100);
    }

    &_disabled {
        border-color: var(--system-mono-400);
        background: var(--system-mono-200);
    }
}

.v-radio__label {
    &_required {
        &:after {
            content: "*";
            font-size: 24px;
            color: var(--system-color-dark-red);
            position: absolute;
            top: -4px;
        }
    }
    &_disabled {
        color: var(--system-mono-400);
    }

    &_bold {
        font: var(--font-m-bold);
    }
}
</style>
