<template>
    <label class="v-switcher" :class="classes">
        <span
            class="v-switcher__frame"
            :class="switcherClasses"
            tabindex="0"
            @click="toggle"
            @keydown.space.prevent="toggle"
        >
            <span class="v-switcher__circle" :class="circleClasses" />
        </span>
        <slot>
            <span :class="labelClasses" class="v-switcher__label" @click="toggle">{{ label }}</span>
        </slot>
    </label>
</template>

<script>
export default {
    name: "VSwitcher",
    model: {
        prop: "toggled",
        event: "toggle",
    },
    emits: ["toggle"],
    props: {
        toggled: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "l",
        },
        label: {
            type: String,
        },
        direction: {
            type: String,
            default: "row",
        },
        textDensity: {
            type: String,
            default: "regular",
            validator(value) {
                return ["regular", "bold"].includes(value);
            },
        },
    },

    data() {
        return {
            value: false,
        };
    },
    computed: {
        switcherClasses() {
            return {
                [`v-switcher__frame_size_${this.size}`]: this.size,
                "v-switcher__frame_checked": this.value,
                "v-switcher__frame_disabled": this.disabled,
                "v-switcher__frame_disabled_checked": this.disabled && this.value,
            };
        },
        circleClasses() {
            return {
                [`v-switcher__circle_size_${this.size}`]: this.size,
                [`v-switcher__circle_size_${this.size}_checked`]: this.value,
                "v-switcher__circle_checked": this.value,
            };
        },
        classes() {
            return {
                "v-switcher__column": this.direction === "column",
            };
        },
        labelClasses() {
            return {
                "v-switcher__label-bold": this.textDensity === "bold",
            };
        },
    },
    methods: {
        toggle() {
            if (!this.disabled) {
                this.value = !this.value;
                this.$emit("toggle", !this.toggled);
            }
        },
    },
    watch: {
        toggled: {
            handler(toggle) {
                this.value = toggle;
            },
            immediate: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.v-switcher {
    display: flex;
    align-items: center;
    gap: 16px;

    &__column {
        align-items: flex-start;
        flex-direction: column-reverse;
    }
}
.v-switcher__frame {
    position: relative;
    display: inline-block;
    border-radius: 9999px;
    cursor: pointer;
    border-width: 2px;
    border-style: solid;
    border-color: var(--system-mono-300);
    background-color: var(--system-mono-100);
    flex-shrink: 0;

    &_size {
        &_l {
            width: 80px;
            height: 40px;
        }
        &_m {
            width: 60px;
            height: 32px;
        }
    }

    &:focus-visible {
        outline: 2px solid var(--system-color-yellow-alfa30);
    }

    &_checked {
        background-color: var(--color-primary);
        border-color: var(--color-primary);
    }

    &:not(&_checked):not(&_disabled) {
        &:hover {
            & .v-switcher__circle {
                background-color: var(--color-primary);
            }
        }
    }

    &_disabled {
        cursor: not-allowed;
        background-color: var(--system-mono-200-alfa50);
        border-color: var(--system-mono-300);

        &_checked {
            background-color: var(--system-mono-300);
            border-color: var(--system-mono-300);
        }
    }
}

.v-switcher__circle {
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    left: 3px;
    background-color: var(--system-mono-300);
    transition: transform 0.2s ease;
    transform: translateX(0);

    &_size {
        &_l {
            height: 30px;
            width: 30px;
            top: 50%;
            transform: translate(0, -50%);

            &_checked {
                transform: translate(42px, -50%);
                width: 28px;
                height: 28px;
            }
        }

        &_m {
            height: 20px;
            width: 20px;
            top: 50%;
            transform: translate(0, -50%);

            &_checked {
                transform: translate(28px, -50%);
                width: 22px;
                height: 22px;
            }
        }
    }

    &_checked {
        background-color: var(--system-mono-100);
    }
}

.v-switcher__label-bold {
    font: var(--font-l-bold);
}
</style>
