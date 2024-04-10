// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Components
import { VCheckbox, VForm } from "@/lib/components";

export default {
    title: "Components/VCheckbox",
    component: VCheckbox,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes).filter((key) => key !== "value"),
        components: { VCheckbox, VForm },
        data() {
            return {
                value: false,
            };
        },
        template: `
            <VForm>
                <VCheckbox v-bind="$props" v-model="value" @input="action">Check me</VCheckbox>
            </VForm>
        `,
        methods: {
            action: action("clicked"),
        },
    }),
    argTypes: {},
};

export const Input = {
    args: {
        messages: {
            required: "Заполните поле",
        },
    },
};
