<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668 4.31808 11.6821 1.33331 8.00016 1.33331ZM6.47157 5.52857C6.21122 5.26823 5.78911 5.26823 5.52876 5.52857C5.26841 5.78892 5.26841 6.21103 5.52876 6.47138L7.05735 7.99998L5.52876 9.52857C5.26841 9.78892 5.26841 10.211 5.52876 10.4714C5.78911 10.7317 6.21122 10.7317 6.47157 10.4714L8.00016 8.94279L9.52876 10.4714C9.78911 10.7317 10.2112 10.7317 10.4716 10.4714C10.7319 10.211 10.7319 9.78892 10.4716 9.52857L8.94297 7.99998L10.4716 6.47138C10.7319 6.21103 10.7319 5.78892 10.4716 5.52857C10.2112 5.26823 9.78911 5.26823 9.52876 5.52857L8.00016 7.05717L6.47157 5.52857Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "CrossFillIcon",
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
