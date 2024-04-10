<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9336 3.47749L4.31282 8.79993H7.19677C7.82812 8.79993 8.39189 9.19526 8.60701 9.78884L9.54552 12.3784L11.9336 3.47749ZM11.3542 1.84925C12.5017 1.04777 14.0245 2.11577 13.6618 3.46771L11.018 13.3218C10.6378 14.7389 8.65897 14.8237 8.15903 13.4442L7.0799 10.4666H3.7831C2.31572 10.4666 1.72118 8.57705 2.92422 7.73684L11.3542 1.84925Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "LocationIcon",
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
