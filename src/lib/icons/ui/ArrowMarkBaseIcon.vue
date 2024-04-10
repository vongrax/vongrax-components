<template>
    <IconWrapper :size="size" :rotate="rotate" view-box="0 0 16 13">
        <path
            d="M14 6.42635H1.99998M1.99998 6.42635C3.61141 8.41264 4.64445 9.44342 6.70845 11.1394M1.99998 6.42635C3.60912 4.44006 4.64217 3.40913 6.70845 1.71313"
            :stroke="fill"
            stroke-width="2.57143"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";
import { Side } from "@/typespaces/enums/side.enum";

export default {
    name: "ArrowMarkBaseIcon",
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
        rotate: {
            type: String, // Side,
            default: Side.LEFT,
        },
    },
};
</script>

<style lang="scss" scoped></style>
