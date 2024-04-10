<template>
    <IconWrapper :size="size" :width="width" :height="height">
        <path
            d="M8.80504 1.74298C8.50723 0.974568 7.41998 0.974572 7.12217 1.74298L5.72179 5.35615L1.85271 5.57146C1.02988 5.61725 0.693912 6.65128 1.33267 7.17197L4.33626 9.62035L3.34543 13.3666C3.13471 14.1633 4.01432 14.8024 4.7069 14.3558L7.96361 12.2558L11.2203 14.3558C11.9129 14.8024 12.7925 14.1633 12.5818 13.3666L11.5909 9.62035L14.5945 7.17197C15.2333 6.65128 14.8973 5.61725 14.0745 5.57146L10.2054 5.35615L8.80504 1.74298Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "StarFillIcon",
    components: { IconWrapper },
    props: {
        size: {
            type: String, // as PropType<IconSizes>
        },
        width: {
            type: String, // as PropType<IconSizes>
            default: "12px",
        },
        height: {
            type: String, // as PropType<IconSizes>
            default: "12px",
        },
        fill: {
            type: String,
            default: "var(--system-mono-900)",
        },
    },
};
</script>

<style lang="scss" scoped></style>
