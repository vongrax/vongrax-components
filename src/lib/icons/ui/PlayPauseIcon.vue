<template>
    <IconWrapper :size="size" :rotate="rotate">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.99967 3.80516V12.1948L9.99108 8L2.99967 3.80516ZM1.33301 3.51079C1.33301 2.34485 2.60496 1.62468 3.60475 2.22455L11.0868 6.71376C12.0578 7.29637 12.0578 8.70363 11.0868 9.28624L3.60475 13.7754C2.60496 14.3753 1.33301 13.6551 1.33301 12.4892V3.51079Z"
            :fill="fill"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.833 2C14.2932 2 14.6663 2.3731 14.6663 2.83333V13.1667C14.6663 13.6269 14.2932 14 13.833 14C13.3728 14 12.9997 13.6269 12.9997 13.1667V2.83333C12.9997 2.3731 13.3728 2 13.833 2Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";
import { Side } from "@/typespaces/enums/side.enum";

export default {
    name: "PlayPauseIcon",
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
            type: String,
            default: Side.LEFT,
        },
    },
};
</script>

<style lang="scss" scoped></style>
