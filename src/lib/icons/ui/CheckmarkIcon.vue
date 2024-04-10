<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.9226 4.40408C13.248 4.72952 13.248 5.25716 12.9226 5.58259L6.66665 11.8385L3.07739 8.24926C2.75195 7.92382 2.75195 7.39618 3.07739 7.07075C3.40283 6.74531 3.93047 6.74531 4.2559 7.07075L6.66665 9.48149L11.7441 4.40408C12.0695 4.07864 12.5971 4.07864 12.9226 4.40408Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "CheckmarkIcon",
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
