// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Components
import { VSelect } from "@/lib/components";

// Styles
import "./VSelect.stories.scss";

export default {
    title: "Components/VSelect",
    component: VSelect,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes).filter((key) => key !== "value"),
        components: { VSelect },
        data() {
            return {
                value: "",
            };
        },
        template: `
            <div class="v-select-story-container">
                <VSelect v-bind="$props" v-model="value" @onSelect="action" name="VSelect"/>
            </div>
        `,
        methods: {
            action: action("clicked"),
        },
    }),
    argTypes: {},
};

export const Select = {
    args: {
        label: "Label",
        placeholder: "Placeholder",
        required: false,
        name: "VSelect",
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
        messages: {
            required: "Заполните поле",
        },
    },
};
