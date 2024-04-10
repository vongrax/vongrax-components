<template>
    <div class="tooltip">
        <div class="tooltip__content" @mouseenter="mouseenter" @mouseleave="mouseleave" @click="clickHandler">
            <slot />
        </div>
        <transition name="slide-fade">
            <div v-if="show || isVisible" class="tooltip__body" :class="classes" @click="clickHandler">
                <slot name="text">
                    {{ message }}
                </slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "VTooltip",
    emits: ["onClose"],
    props: {
        position: {
            type: String,
            default: "right",
            validator(value) {
                return ["right", "left", "bottom", "top", "bottomLeft", "topLeft"].includes(value);
            },
        },
        trigger: {
            type: String,
        },
        visible: {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
        },
        duration: {
            type: Number,
            default: 0,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            show: false,
            isVisible: false,
        };
    },
    computed: {
        classes() {
            return {
                [`tooltip__body_position_${this.position}`]: !!this.position,
            };
        },
    },
    methods: {
        mouseenter() {
            if (!this.disabled && this.trigger === "hover") {
                this.show = true;
            }
        },
        mouseleave() {
            if (this.trigger === "hover") {
                this.show = false;
            }
        },
        clickHandler() {
            if (!this.disabled && this.trigger === "click") {
                this.show = !this.show;
            }
        },
        onClose() {
            this.isVisible = false;
            this.$emit("onClose");
        },
    },
    watch: {
        visible: {
            handler(value) {
                if (!this.disabled && value && this.duration) {
                    this.isVisible = true;
                    setTimeout(() => {
                        this.onClose();
                    }, this.duration);
                }
                if (!this.duration) {
                    this.isVisible = value;
                }
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
}

.tooltip {
    position: relative;
}

.tooltip__body {
    position: absolute;
    z-index: 89;
    background-color: var(--system-mono-900);
    padding: 10px;
    border-radius: 10px;
    color: var(--system-mono-100);

    &:before {
        content: "";
        position: absolute;
        border-style: solid;
        border-color: transparent var(--system-mono-900) transparent transparent;
    }

    &_position {
        &_right {
            top: 50%;
            right: -10px;
            transform: translate(100%, -50%);

            &:before {
                top: calc(50% - 15px);
                left: -7px;
                border-width: 15px 12px 15px 0;
                border-color: transparent var(--system-mono-900) transparent transparent;
            }
        }

        &_top {
            bottom: calc(100% + 10px);
            left: 50%;
            transform: translate(-50%);

            &:before {
                bottom: -7px;
                left: calc(50% - 15px);
                border-width: 15px 12px 0 15px;
                border-color: var(--system-mono-900) transparent transparent transparent;
            }
        }

        &_bottom {
            top: calc(100% + 10px);
            right: 50%;
            transform: translate(50%);

            &:before {
                top: -7px;
                right: calc(50% - 15px);
                border-width: 0 15px 12px 15px;
                border-color: transparent transparent var(--system-mono-900) transparent;
            }
        }

        &_bottomLeft {
            top: calc(100% + 10px);

            &:before {
                top: -7px;
                left: 15px;
                border-width: 0 15px 12px 15px;
                border-color: transparent transparent var(--system-mono-900) transparent;
            }
        }

        &_topLeft {
            bottom: calc(100% + 10px);
            right: -16px;

            &:before {
                bottom: -7px;
                right: 15px;
                border-width: 15px 12px 0 15px;
                border-color: var(--system-mono-900) transparent transparent transparent;
            }
        }

        &_left {
            top: 50%;
            left: -10px;
            transform: translate(-100%, -50%);

            &:before {
                top: calc(50% - 15px);
                right: -7px;
                border-width: 15px 0 15px 12px;
                border-color: transparent transparent transparent var(--system-mono-900);
            }
        }
    }
}

.slide-fade-enter-active {
    transition: all 400ms ease;
    opacity: 1;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transition: all 600ms ease;
    opacity: 0;
}
</style>
