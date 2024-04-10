<template>
    <IconWrapper :size="size" view-box="0 0 24 24">
        <path
            d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
            :fill="fill"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1C12.6904 1 13.25 1.55964 13.25 2.25V3.59127C16.9438 4.13566 19.8643 7.05617 20.4087 10.75H21.75C22.4404 10.75 23 11.3096 23 12C23 12.6904 22.4404 13.25 21.75 13.25H20.4087C19.8643 16.9438 16.9438 19.8643 13.25 20.4087V21.75C13.25 22.4404 12.6904 23 12 23C11.3096 23 10.75 22.4404 10.75 21.75V20.4087C7.05617 19.8643 4.13566 16.9438 3.59127 13.25H2.25C1.55964 13.25 1 12.6904 1 12C1 11.3096 1.55964 10.75 2.25 10.75H3.59127C4.13566 7.05617 7.05617 4.13566 10.75 3.59127V2.25C10.75 1.55964 11.3096 1 12 1ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "TargetIcon",
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
