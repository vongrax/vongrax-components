<template>
    <IconWrapper :size="size">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.63483 4.70349C1.62489 4.73335 1.6158 4.76355 1.60758 4.79407C1.33301 5.83744 1.33301 8.00108 1.33301 8.00108C1.33301 8.00108 1.33301 10.1757 1.60758 11.2081C1.60797 11.2095 1.60836 11.211 1.60876 11.2124L4.07712 8.74408C4.40256 8.41864 4.93019 8.41864 5.25563 8.74408C5.58107 9.06952 5.58107 9.59715 5.25563 9.92259L2.79238 12.3858C3.86218 12.6688 7.99965 12.6688 7.99965 12.6688C7.99965 12.6688 12.1709 12.6688 13.2157 12.3945L10.7438 9.92259C10.4183 9.59715 10.4183 9.06952 10.7438 8.74408C11.0692 8.41864 11.5969 8.41864 11.9223 8.74408L14.3929 11.2147C14.6663 10.1696 14.6663 8.01206 14.6663 8.01206C14.6663 8.01206 14.6773 5.83744 14.3917 4.79407C14.3835 4.76353 14.3744 4.73335 14.3645 4.70353L8.92917 8.99461C8.38421 9.42484 7.61521 9.42484 7.07024 8.99461L1.63483 4.70349ZM13.0876 3.58821C11.8686 3.33334 7.99965 3.33334 7.99965 3.33334C7.99965 3.33334 4.10985 3.33334 2.90195 3.58039L7.99971 7.60494L13.0876 3.58821Z"
            :fill="fill"
        />
    </IconWrapper>
</template>
<script>
import IconWrapper from "./IconWrapper.vue";
import { IconSizes } from "@/typespaces";

export default {
    name: "MailIcon",
    components: { IconWrapper },
    props: {
        size: {
            type: String, // as PropType<IconSizes>,
            default: IconSizes.L,
        },
        fill: {
            type: String,
            default: "var(--system-mono-900)",
        },
    },
};
</script>
