<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2165 3.61889C13.7877 3.77265 14.238 4.22295 14.3917 4.79407C14.6773 5.83744 14.6663 8.01206 14.6663 8.01206C14.6663 8.01206 14.6663 10.1757 14.3917 11.2191C14.238 11.7902 13.7877 12.2405 13.2165 12.3943C12.1732 12.6688 7.99965 12.6688 7.99965 12.6688C7.99965 12.6688 3.83712 12.6688 2.78275 12.3833C2.21164 12.2295 1.76134 11.7792 1.60758 11.2081C1.33301 10.1757 1.33301 8.00108 1.33301 8.00108C1.33301 8.00108 1.33301 5.83744 1.60758 4.79407C1.76134 4.22295 2.22263 3.76167 2.78275 3.60791C3.82613 3.33334 7.99965 3.33334 7.99965 3.33334C7.99965 3.33334 12.1732 3.33334 13.2165 3.61889ZM10.1413 8.00108L6.67072 9.99997V6.00219L10.1413 8.00108Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "YouTubeIcon",
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
