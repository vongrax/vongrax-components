<template>
    <IconWrapper :size="size">
        <path
            d="M7.99967 7.49998C8.45991 7.49998 8.83301 7.87308 8.83301 8.33331V10.6666C8.83301 11.1269 8.45991 11.5 7.99967 11.5C7.53944 11.5 7.16634 11.1269 7.16634 10.6666V8.33331C7.16634 7.87308 7.53944 7.49998 7.99967 7.49998Z"
            :fill="fill"
        />
        <path
            d="M7.99967 4.66665C7.53944 4.66665 7.16634 5.03974 7.16634 5.49998C7.16634 5.96022 7.53944 6.33331 7.99967 6.33331C8.45991 6.33331 8.83301 5.96022 8.83301 5.49998C8.83301 5.03974 8.45991 4.66665 7.99967 4.66665Z"
            :fill="fill"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.33301 7.99998C1.33301 4.31808 4.31778 1.33331 7.99967 1.33331C11.6816 1.33331 14.6663 4.31808 14.6663 7.99998C14.6663 11.6819 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6819 1.33301 7.99998ZM7.99967 2.99998C5.23825 2.99998 2.99967 5.23856 2.99967 7.99998C2.99967 10.7614 5.23825 13 7.99967 13C10.7611 13 12.9997 10.7614 12.9997 7.99998C12.9997 5.23856 10.7611 2.99998 7.99967 2.99998Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "InfoIcon",
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
