<template>
    <IconWrapper :size="size" view-box="0 0 24 24">
        <path d="M15.238 6.16573H8.74316V17.8343H15.238V6.16573Z" fill="#FF5A00" />
        <path
            d="M9.17534 12C9.17534 9.62931 10.2898 7.52522 12 6.16573C10.7414 5.17614 9.15372 4.57806 7.42194 4.57806C3.31946 4.57806 0 7.89752 0 12C0 16.1025 3.31946 19.4219 7.42194 19.4219C9.15372 19.4219 10.7414 18.8239 12 17.8343C10.2874 16.494 9.17534 14.3707 9.17534 12Z"
            fill="#EB001B"
        />
        <path
            d="M24 12C24 16.1025 20.6805 19.4219 16.5781 19.4219C14.8463 19.4219 13.2586 18.8239 12 17.8343C13.7318 16.4724 14.8247 14.3707 14.8247 12C14.8247 9.62931 13.7102 7.52522 12 6.16573C13.2562 5.17614 14.8439 4.57806 16.5757 4.57806C20.6805 4.57806 24 7.91914 24 12Z"
            fill="#F79E1B"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "MastercardIcon",
    components: { IconWrapper },
    props: {
        size: {
            type: String, // as PropType<IconSizes>
            default: IconSizes.L,
        },
    },
};
</script>

<style lang="scss" scoped></style>
