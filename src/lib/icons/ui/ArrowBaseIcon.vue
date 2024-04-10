<template>
    <IconWrapper :size="size" :rotate="rotate">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0889 12.9226C10.7635 13.248 10.2359 13.248 9.91042 12.9226L4.98783 8.00002L9.91042 3.07743C10.2359 2.75199 10.7635 2.75199 11.0889 3.07743C11.4144 3.40287 11.4144 3.93051 11.0889 4.25594L7.34485 8.00002L11.0889 11.7441C11.4144 12.0695 11.4144 12.5972 11.0889 12.9226Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes, Side } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "ArrowBaseIcon",
    components: { IconWrapper },
    props: {
        size: {
            type: String, // as PropType<IconSizes>
            default: IconSizes.L,
        },
        fill: {
            type: String,
            default: "var(--system-mono-900)",
        },
        rotate: {
            type: String, // Side,
            default: Side.LEFT,
        },
    },
};
</script>

<style lang="scss" scoped></style>
