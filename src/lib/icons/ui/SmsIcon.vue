<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.33301 5.66667C1.33301 4.28596 2.4523 3.16667 3.83301 3.16667H12.1663C13.5471 3.16667 14.6663 4.28596 14.6663 5.66667V10.3333C14.6663 11.714 13.5471 12.8333 12.1663 12.8333H7.01152L4.93035 14.9145C4.27938 15.5655 3.16634 15.1044 3.16634 14.1838V12.7435C2.10928 12.4517 1.33301 11.4832 1.33301 10.3333V5.66667ZM5.66634 8C5.66634 8.55229 5.21863 9 4.66634 9C4.11406 9 3.66634 8.55229 3.66634 8C3.66634 7.44772 4.11406 7 4.66634 7C5.21863 7 5.66634 7.44772 5.66634 8ZM7.99967 9C8.55196 9 8.99967 8.55229 8.99967 8C8.99967 7.44772 8.55196 7 7.99967 7C7.44739 7 6.99967 7.44772 6.99967 8C6.99967 8.55229 7.44739 9 7.99967 9ZM11.333 9C11.8853 9 12.333 8.55229 12.333 8C12.333 7.44772 11.8853 7 11.333 7C10.7807 7 10.333 7.44772 10.333 8C10.333 8.55229 10.7807 9 11.333 9Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "SmsIcon",
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
