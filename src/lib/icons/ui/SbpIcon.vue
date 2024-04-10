<template>
    <IconWrapper :size="size" view-box="0 0 24 24">
        <path d="M2.30762 5.224L5.20328 10.419V13.5878L2.311 18.7726L2.30762 5.224Z" fill="#5B57A2" />
        <path d="M13.4258 8.5286L16.1391 6.8594L21.6921 6.8542L13.4258 11.937V8.5286Z" fill="#D90751" />
        <path d="M13.4105 5.1934L13.4259 12.0714L10.5234 10.2814V0L13.4107 5.1934H13.4105Z" fill="#FAB718" />
        <path d="M21.6922 6.8542L16.139 6.8594L13.4105 5.1934L10.5234 0L21.692 6.8542H21.6922Z" fill="#ED6F26" />
        <path d="M13.4259 18.8014V15.4644L10.5234 13.7084L10.525 24L13.4259 18.8014Z" fill="#63B22F" />
        <path
            d="M16.1324 17.1474L5.20308 10.419L2.30762 5.224L21.6804 17.1406L16.1322 17.1474H16.1324Z"
            fill="#1487C9"
        />
        <path d="M10.5254 24L13.4258 18.8014L16.1324 17.1474L21.6804 17.1406L10.5254 24Z" fill="#017F36" />
        <path d="M2.31055 18.7726L10.5466 13.7086L7.77768 12.0034L5.20282 13.5878L2.31055 18.7726Z" fill="#984995" />
    </IconWrapper>
</template>

<script>
import { IconSizes } from "@/typespaces";
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "SbpIcon",
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
