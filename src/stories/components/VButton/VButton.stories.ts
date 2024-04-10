// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Types
import { Sizes, ButtonTypes } from "@/typespaces";

// Components
import { VButton } from "@/lib/components";

export default {
    title: "Components/VButton",
    component: VButton,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes),
        components: { VButton },
        template: '<VButton v-bind="$props" @click="action" >VButton</VButton>',
        methods: { action: action("clicked") },
    }),
    argTypes: {
        size: {
            control: {
                type: "select",
            },
            options: [Sizes.S, Sizes.M, Sizes.L, Sizes.XL],
        },
        view: {
            control: {
                type: "select",
            },
            options: [
                ButtonTypes.CLEAR,
                ButtonTypes.PRIMARY,
                ButtonTypes.SECONDARY,
                ButtonTypes.GHOST,
                ButtonTypes.SELECT,
            ],
        },
    },
};

export const Button = {
    args: {
        loading: false,
        view: ButtonTypes.PRIMARY,
        size: Sizes.M,
        width: "unset",
        onlyIcon: false,
        disabled: false,
    },
};
