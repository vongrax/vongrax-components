// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Components
import { VForm, VInput } from "@/lib/components";

export default {
    title: "Components/VInput",
    component: VInput,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes).filter((key) => key !== "value"),
        components: { VInput, VForm },
        data() {
            return {
                value: "",
            };
        },
        template: `
            <VForm>
                <VInput v-bind="$props" v-model="value" @click="action" />
            </VForm>
        `,
        methods: { action: action("clicked") },
    }),
    argTypes: {},
};

export const Input = {
    args: {
        label: "Label",
        placeholder: "Placeholder",
        messages: {
            required: "Заполните поле",
        },
        width: "300px",
    },
};
