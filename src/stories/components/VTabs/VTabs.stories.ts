// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Components
import { VTabs } from "@/lib/components";

// Styles
import "./VTabs.styles.scss";

export default {
    title: "Components/VTabs",
    component: VTabs,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes),
        components: { VTabs },
        template: `
            <div class="v-tabs-story-container">
                <VTabs v-bind="$props" @change="action" />
            </div>
        `,
        methods: { action: action("clicked") },
    }),
    argTypes: {
        type: {
            control: {
                type: "select",
            },
            options: ["default", "authorization"],
        },
    },
};

export const Tabs = {
    args: {
        tabData: [
            {
                text: "Tab 1",
                value: "tab-1",
            },
            {
                text: "Tab 2",
                value: "tab-2",
            },
            {
                text: "Tab 3",
                value: "tab-3",
            },
        ],

        value: "tab-3",
        width: "200px",
        type: "default",
    },
};
