<template>
    <IconWrapper :size="size">
        <path
            d="M4.66667 7.33333C4.66667 8.06971 4.06971 8.66667 3.33333 8.66667C2.59695 8.66667 2 8.06971 2 7.33333C2 6.59695 2.59695 6 3.33333 6C4.06971 6 4.66667 6.59695 4.66667 7.33333Z"
            :fill="fill"
        />
        <path
            d="M14 7.33333C14 8.06971 13.403 8.66667 12.6667 8.66667C11.9303 8.66667 11.3333 8.06971 11.3333 7.33333C11.3333 6.59695 11.9303 6 12.6667 6C13.403 6 14 6.59695 14 7.33333Z"
            :fill="fill"
        />
        <path
            d="M11.1975 12.5322C10.311 11.7569 9.16423 11.3317 7.97972 11.3333C6.79521 11.3349 5.64963 11.7631 4.76527 12.5409C4.41967 12.8448 4.3859 13.3714 4.68984 13.717C4.99378 14.0626 5.52034 14.0964 5.86594 13.7924C6.44237 13.2855 7.19611 13.0011 7.98197 13C8.76783 12.9989 9.52242 13.2813 10.1003 13.7868C10.4468 14.0897 10.9732 14.0545 11.2762 13.7081C11.5792 13.3616 11.544 12.8352 11.1975 12.5322Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "FaceSadIcon",
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
