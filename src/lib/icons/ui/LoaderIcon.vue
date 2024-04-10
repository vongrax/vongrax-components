<template>
    <IconWrapper :class="['v-icon-loader', classes]" :size="size" view-box="24 24 50 50" :fill="fill">
        <path
            :fill="fill"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
            />
        </path>
    </IconWrapper>
</template>

<script>
import IconWrapper from "./IconWrapper.vue";
import { IconSizes } from "@/typespaces";

export default {
    name: "LoaderIcon",
    components: { IconWrapper },
    props: {
        size: {
            type: String, // as PropType<IconSizes>,
            default: IconSizes.S,
        },
        fill: {
            type: String,
            default: "var(--system-mono-900)",
        },
        view: {
            type: String, // as PropType<ButtonTypes>,
        },
    },
    computed: {
        classes() {
            return {
                [`v-icon-loader_view_${this.view}`]: !!this.view,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.v-icon-loader {
    &_view {
        &_primary {
            path {
                fill: var(--system-mono-100);
            }
        }

        &_secondary {
            path {
                fill: var(--color-primary);
            }
        }

        &_ghost {
            & path {
                fill: var(--system-mono-900);
            }
        }

        &_clear {
            path {
                fill: var(--color-primary);
            }
        }
    }
}
</style>
