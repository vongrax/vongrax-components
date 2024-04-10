// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Types
import { Sizes } from "@/typespaces/enums/sizes";

// Components
import { VSwitcher } from "@/lib/components";

export default {
    title: "Components/VSwitcher",
    component: VSwitcher,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes),
        components: { VSwitcher },
        template: `<VSwitcher v-bind="$props" @toggle="action" />`,
        methods: { action: action("clicked") },
    }),
    argTypes: {
        size: {
            control: {
                type: "select",
            },
            options: [Sizes.M, Sizes.L],
        },
        direction: {
            control: {
                type: "select",
            },
            options: ["row", "column"],
        },
        textDensity: {
            control: {
                type: "select",
            },
            options: ["regular", "bold"],
        },
    },
};

export const Switcher = {
    args: {
        label: "Label",
        textDensity: "regular",
        direction: "row",
        size: Sizes.L,
        toggled: false,
        disabled: false,
    },
};
