<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="['v-button', buttonClasses]"
        :style="buttonStyles"
        @click="clickHandler"
    >
        <LoaderIcon v-if="loading" :view="view" :size="iconSizes" />
        <template v-else>
            <div v-if="iconLeft" class="v-button__icon-right">
                <component :is="iconLeft" />
            </div>
            <slot />
            <div v-if="iconRight" class="v-button__icon-left">
                <component :is="iconRight" />
            </div>
        </template>
    </button>
</template>

<script>
import { IconSizes, Sizes } from "@/typespaces";
import { LoaderIcon } from "@/lib/icons";

export default {
    name: "VButton",
    components: { LoaderIcon },
    emits: ["click"],
    props: {
        size: {
            type: String, // as PropType<Sizes>,
            default: "m",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        iconLeft: {
            type: String,
        },
        iconRight: {
            type: String,
        },
        loading: {
            type: Boolean,
        },
        edges: {
            type: Boolean,
            default: false,
        },
        view: {
            type: String, // as PropType<ButtonTypes>,
            default: "primary",
        },
        width: {
            type: String,
        },
        onlyIcon: {
            type: Boolean,
        },
        type: {
            type: String,
            default: "button",
        },
    },
    computed: {
        iconSizes() {
            switch (this.size) {
                case Sizes.XL:
                case Sizes.L:
                    return IconSizes.L;
                case Sizes.M:
                    return IconSizes.M;
                case Sizes.S:
                case Sizes.XS:
                    return IconSizes.S;
                default:
                    return IconSizes.L;
            }
        },
        buttonClasses() {
            return {
                [`v-button_size_${this.size}`]: !!this.size,
                [`v-button_view_${this.view}`]: !!this.view,
                "v-button_edges": this.edges,
                [`v-button_size_${this.size}_only-icon`]: this.onlyIcon,
            };
        },
        buttonStyles() {
            if (this.onlyIcon) {
                return;
            }
            if (this.width && isNaN(Number(this.width))) {
                return {
                    width: this.width,
                };
            }
            return {
                width: this.width ? `${+this.width}px` : "100%",
            };
        },
    },
    methods: {
        clickHandler() {
            this.$emit("click");
        },
    },
};
</script>

<style lang="scss" scoped>
.v-button {
    background: var(--system-mono-200);
    border: none;
    max-width: 100%;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:disabled {
        background-color: var(--system-mono-200);
        color: var(--system-mono-400);
        cursor: not-allowed;
        pointer-events: all;

        &::v-deep path {
            fill: var(--system-mono-400);
        }
    }

    &_size {
        &_xs {
            padding: 9px 16px;
            border-radius: 10px;
            font: var(--font-xs-bold);

            .v-button__icon-left > :first-child {
                margin-left: 9px;
            }

            .v-button__icon-right > :first-child {
                margin-right: 9px;
            }
            &_only-icon {
                width: 32px;
                height: 32px;
            }
        }

        &_s {
            height: 40px;
            padding: 10px 18px;
            border-radius: 12px;
            font: var(--font-s-bold);

            .v-button__icon-left > :first-child {
                margin-left: 9px;
            }

            .v-button__icon-right > :first-child {
                margin-right: 9px;
            }
            &_only-icon {
                width: 40px;
                height: 40px;
            }
        }

        &_m {
            padding: 14px 20px;
            border-radius: 14px;
            font: var(--font-m-bold);
            height: 48px;

            .v-button__icon-left > :first-child {
                margin-left: 14px;
            }

            .v-button__icon-right > :first-child {
                margin-right: 14px;
            }
            &_only-icon {
                width: 48px;
            }
        }

        &_l {
            padding: 16px 22px;
            border-radius: 16px;
            font: var(--font-l-bold);

            .v-button__icon-left > :first-child {
                margin-left: 14px;
            }

            .v-button__icon-right > :first-child {
                margin-right: 14px;
            }
            &_only-icon {
                width: 56px;
                height: 56px;
            }
        }

        &_xl {
            padding: 16px 24px;
            border-radius: 18px;
            font: var(--font-xl-bold);

            .v-button__icon-left > :first-child {
                margin-left: 14px;
            }

            .v-button__icon-right > :first-child {
                margin-right: 14px;
            }
            &_only-icon {
                width: 64px;
                height: 64px;
            }
        }
    }

    &_view {
        &_primary {
            color: var(--system-mono-100);
            background-color: var(--color-primary);

            &:hover:not(:disabled) {
                color: var(--system-mono-100);
                background-color: var(--color-primary-push);
            }

            &::v-deep path {
                fill: var(--system-mono-100);
            }
        }

        &_secondary {
            background-color: var(--color-secondary);
            color: var(--color-primary);

            &:hover:not(:disabled) {
                background-color: var(--color-secondary);
                color: var(--color-primary);
            }

            &::v-deep path {
                fill: var(--color-primary);
            }
        }

        &_ghost {
            background-color: var(--system-mono-200);
            color: var(--system-mono-900);

            &:hover:not(:disabled) {
                background-color: var(--system-mono-300);
                color: var(--system-mono-900);
            }

            &::v-deep path {
                fill: var(--system-mono-900);
            }
        }

        &_clear {
            background-color: transparent;
            color: var(--color-primary);

            &:hover:not(:disabled) {
                background-color: var(--color-secondary);
                color: var(--color-primary);
            }

            &:disabled {
                background-color: transparent;
            }

            &::v-deep path {
                fill: var(--color-primary);
            }
        }

        &_select {
            background-color: transparent;

            &:hover:not(:disabled) {
                background-color: var(--system-mono-200);
            }

            &:disabled {
                background-color: transparent;
            }
        }
    }

    &_edges {
        justify-content: space-between;
    }

    &:focus-visible {
        outline: 2px solid var(--system-color-yellow-alfa30);
    }
}
</style>
