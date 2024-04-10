<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.16699 4.00002C2.16699 3.53978 2.54009 3.16669 3.00033 3.16669H13.0003C13.4606 3.16669 13.8337 3.53978 13.8337 4.00002C13.8337 4.46026 13.4606 4.83335 13.0003 4.83335H3.00033C2.54009 4.83335 2.16699 4.46026 2.16699 4.00002ZM2.16699 8.00002C2.16699 7.53978 2.54009 7.16669 3.00033 7.16669H13.0003C13.4606 7.16669 13.8337 7.53978 13.8337 8.00002C13.8337 8.46026 13.4606 8.83335 13.0003 8.83335H3.00033C2.54009 8.83335 2.16699 8.46026 2.16699 8.00002ZM3.00033 11.1667L13.0003 11.1667C13.4606 11.1667 13.8337 11.5398 13.8337 12C13.8337 12.4603 13.4606 12.8334 13.0003 12.8334H3.00033C2.54009 12.8334 2.16699 12.4603 2.16699 12C2.16699 11.5398 2.54009 11.1667 3.00033 11.1667Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "BurgerIcon",
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
