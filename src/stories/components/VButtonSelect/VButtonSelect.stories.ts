// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Components
import { VButtonSelect } from "@/lib/components";

export default {
    title: "Components/VButtonSelect",
    component: VButtonSelect,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes).filter((key) => key !== "value"),
        components: { VButtonSelect },
        data() {
            return {
                value: "Option 1",
            };
        },
        template: `<VButtonSelect v-bind="$props" @click="action" :value="value" />`,
        methods: {
            action: action("clicked"),
        },
    }),
    argTypes: {},
};

export const ButtonSelect = {
    args: {
        hint: "Hint",
        options: [
            {
                label: "Option 1",
                value: "1",
            },
            {
                label: "Option 2",
                value: "2",
            },
            {
                label: "Option 3",
                value: "3",
            },
        ],
    },
};
