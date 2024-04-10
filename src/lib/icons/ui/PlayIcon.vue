<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.72328 3.04348C3.39083 2.87725 2.99967 3.119 2.99967 3.49069V12.5093C2.99967 12.881 3.39083 13.1227 3.72328 12.9565L12.7419 8.44719C13.1104 8.26293 13.1104 7.73702 12.7419 7.55276L3.72328 3.04348ZM1.33301 3.49069C1.33301 1.88002 3.02802 0.832457 4.46864 1.55276L13.4872 6.06205C15.0842 6.86052 15.0841 9.13944 13.4872 9.9379L4.46864 14.4472C3.02802 15.1675 1.33301 14.1199 1.33301 12.5093V3.49069Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "PlayIcon",
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
