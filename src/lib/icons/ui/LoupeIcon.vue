<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6598 11.8387C9.686 12.568 8.47662 13 7.16634 13C3.94468 13 1.33301 10.3884 1.33301 7.16671C1.33301 3.94505 3.94468 1.33337 7.16634 1.33337C10.388 1.33337 12.9997 3.94505 12.9997 7.16671C12.9997 8.47699 12.5677 9.68636 11.8383 10.6602L14.4225 13.2443C14.7479 13.5698 14.7479 14.0974 14.4225 14.4228C14.097 14.7483 13.5694 14.7483 13.244 14.4228L10.6598 11.8387ZM11.333 7.16671C11.333 9.46789 9.46753 11.3334 7.16634 11.3334C4.86516 11.3334 2.99967 9.46789 2.99967 7.16671C2.99967 4.86552 4.86516 3.00004 7.16634 3.00004C9.46753 3.00004 11.333 4.86552 11.333 7.16671Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "LoupeIcon",
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
