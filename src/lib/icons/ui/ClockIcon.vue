<template>
    <IconWrapper :size="size">
        <path
            d="M9.16634 6.33337C9.16634 5.87314 8.79324 5.50004 8.33301 5.50004C7.87277 5.50004 7.49967 5.87314 7.49967 6.33337V7.9347L6.14494 9.01786C5.78547 9.30526 5.72705 9.82966 6.01446 10.1891C6.30186 10.5486 6.82626 10.607 7.18572 10.3196L8.8534 8.98624C9.05119 8.8281 9.16634 8.5886 9.16634 8.33536V6.33337Z"
            :fill="fill"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004ZM12.9997 8.00004C12.9997 10.7615 10.7611 13 7.99967 13C5.23825 13 2.99967 10.7615 2.99967 8.00004C2.99967 5.23862 5.23825 3.00004 7.99967 3.00004C10.7611 3.00004 12.9997 5.23862 12.9997 8.00004Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "ClockIcon",
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
    },
};
</script>

<style lang="scss" scoped></style>
