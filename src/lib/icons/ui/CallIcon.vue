<template>
    <IconWrapper :size="size">
        <path
            d="M2.34026 1.36909L4.76635 1.45689C5.27736 1.47537 5.73084 1.79807 5.92669 2.28256L6.64404 4.05718C6.811 4.47015 6.76607 4.94134 6.52429 5.31332L5.60521 6.72742C6.14936 7.50882 7.62947 9.33962 9.19667 10.4113L10.3653 9.69209C10.6623 9.50929 11.0179 9.45502 11.3539 9.54116L13.6771 10.1369C14.2949 10.2954 14.7113 10.8879 14.6625 11.5392L14.5133 13.5281C14.4609 14.226 13.8897 14.7737 13.2117 14.6949C4.2613 13.6542 -0.987366 1.36907 2.34026 1.36909Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "CallIcon",
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
