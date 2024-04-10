<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.28818 1.90963C7.586 1.14123 8.67324 1.14122 8.97106 1.90963L10.3714 5.52281L14.2405 5.73812C15.0633 5.78391 15.3993 6.81793 14.7606 7.33863L11.757 9.787L12.7478 13.5332C12.9585 14.3299 12.0789 14.969 11.3863 14.5224L8.12962 12.4224L4.87292 14.5224C4.18033 14.969 3.30072 14.33 3.51144 13.5332L4.50228 9.787L1.49869 7.33863C0.859927 6.81794 1.19589 5.78391 2.01873 5.73812L5.8878 5.52281L7.28818 1.90963ZM8.12962 4.35052L7.26374 6.58461C7.1357 6.91496 6.8262 7.13983 6.47244 7.15952L4.08013 7.29265L5.9373 8.80652C6.21193 9.03038 6.33014 9.39423 6.23955 9.73675L5.6269 12.0531L7.64057 10.7546C7.93834 10.5626 8.32091 10.5626 8.61867 10.7546L10.6323 12.0531L10.0197 9.73675C9.9291 9.39422 10.0473 9.03038 10.3219 8.80652L12.1791 7.29265L9.7868 7.15952C9.43304 7.13983 9.12354 6.91496 8.9955 6.58461L8.12962 4.35052Z"
            :fill="fill"
        />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "StarIcon",
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
