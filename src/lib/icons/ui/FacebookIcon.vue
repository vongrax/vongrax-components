<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.33301 8C1.33301 11.3 3.73301 14.0333 6.89967 14.6L6.93907 14.5678C6.93707 14.5674 6.93506 14.567 6.93305 14.5667V9.86667H5.26638V8.00001H6.93305V6.53334C6.93305 4.86667 7.99972 3.93334 9.53305 3.93334C9.99972 3.93334 10.5331 4.00001 10.9997 4.06667V5.76667H10.1331C9.33305 5.76667 9.13305 6.16667 9.13305 6.70001V8.00001H10.8997L10.5997 9.86667H9.13305V14.5667C9.11274 14.5704 9.09242 14.574 9.07211 14.5774L9.09967 14.6C12.2663 14.0333 14.6663 11.3 14.6663 8C14.6663 4.33334 11.6663 1.33334 7.99967 1.33334C4.33301 1.33334 1.33301 4.33334 1.33301 8Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "FacebookIcon",
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
