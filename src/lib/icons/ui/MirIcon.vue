<!--eslint-disable -->
<template>
    <IconWrapper :size="size" view-box="0 0 24 24">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.21936 8.7278C2.43377 8.72652 3.07099 8.66913 3.34091 9.58009C3.52273 10.1937 3.81235 11.1989 4.20979 12.5956H4.37164C4.79786 11.1231 5.09064 10.1179 5.25 9.58009C5.52273 8.65964 6.20455 8.72782 6.47727 8.72782L8.58143 8.72782V15.2733H6.43682V11.4159H6.293L5.09749 15.2733H3.48394L2.28842 11.4131H2.14461V15.2733H0V8.72782L2.21936 8.7278ZM11.661 8.72782V12.588H11.8321L13.2864 9.41381C13.5687 8.78213 14.1703 8.72782 14.1703 8.72782H16.2457V15.2733H14.0563V11.4131H13.8852L12.4595 14.5873C12.1772 15.2161 11.547 15.2733 11.547 15.2733H9.47165V8.72782H11.661ZM23.8132 11.8383C23.5078 12.7037 22.5487 13.3235 21.4869 13.3235H19.1909V15.2733H17.1089V11.8383H23.8132Z"
            fill="#0F754E"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.5876 8.72783H17C17.1092 10.1851 18.3641 11.4326 19.6632 11.4326H23.9582C24.206 10.2214 23.3528 8.72783 21.5876 8.72783Z"
            fill="url(#paint0_linear_1988_1263)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_1988_1263"
                x1="24.0003"
                y1="10.4292"
                x2="17"
                y2="10.4292"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#1F5CD7" />
                <stop offset="1" stop-color="#02AEFF" />
            </linearGradient>
        </defs>
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "MirIcon",
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
