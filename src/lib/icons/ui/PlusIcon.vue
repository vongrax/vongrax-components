<template>
    <IconWrapper :size="size" :rotate="rotate">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.99668 1.83C8.45692 1.83 8.83002 2.2031 8.83002 2.66333V7.16333H13.33C13.7903 7.16333 14.1633 7.53643 14.1633 7.99667C14.1633 8.4569 13.7903 8.83 13.33 8.83H8.83002V13.33C8.83002 13.7902 8.45692 14.1633 7.99668 14.1633C7.53645 14.1633 7.16335 13.7902 7.16335 13.33V8.83H2.66335C2.20311 8.83 1.83002 8.4569 1.83002 7.99667C1.83002 7.53643 2.20311 7.16333 2.66335 7.16333L7.16335 7.16333V2.66333C7.16335 2.2031 7.53645 1.83 7.99668 1.83Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";
import { Side } from "@/typespaces/enums/side.enum";

export default {
    name: "PlusIcon",
    components: { IconWrapper },
    props: {
        size: {
            type: String, // as PropType<IconSizes>,
            default: IconSizes.L,
        },
        fill: {
            type: String,
            default: "var(--system-mono-900)",
        },
        rotate: {
            type: String,
            default: Side.LEFT,
        },
    },
};
</script>

<style lang="scss" scoped></style>
