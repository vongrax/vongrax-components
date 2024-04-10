// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Components
import { VTextarea, VForm } from "@/lib/components";

export default {
    title: "Components/VTextarea",
    component: VTextarea,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes).filter((key) => key !== "value"),
        components: { VTextarea, VForm },
        data() {
            return {
                value: "",
            };
        },
        template: `
            <VForm>
                <VTextarea v-bind="$props" v-model="value" @click="action" />
            </VForm>
        `,
        methods: { action: action("clicked") },
    }),
    argTypes: {
        status: {
            control: {
                type: "select",
                options: ["success", "error", "idle"],
            },
        },
    },
};

export const Textarea = {
    args: {
        label: "Label",
        placeholder: "Placeholder",
        status: "idle",
        required: false,
        autoSize: false,
        width: "300px",
        maxlength: "200",
        disabled: false,
        minRows: "2",
        messages: {
            required: "Заполните поле",
        },
    },
};
