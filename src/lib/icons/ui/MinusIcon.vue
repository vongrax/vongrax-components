<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.84003 7.99333C1.84003 7.5331 2.21312 7.16 2.67336 7.16L13.34 7.16C13.8003 7.16 14.1734 7.5331 14.1734 7.99333C14.1734 8.45357 13.8003 8.82667 13.34 8.82667L2.67336 8.82667C2.21312 8.82667 1.84003 8.45357 1.84003 7.99333Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "MinusIcon",
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
    },
};
</script>

<style lang="scss" scoped></style>
