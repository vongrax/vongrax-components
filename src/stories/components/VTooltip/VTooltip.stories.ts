import { VTooltip } from "@/lib/components";
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import "./VTooltip.stories.scss";

export default {
    title: "Components/VTooltip",
    component: VTooltip,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes),
        components: { VTooltip },
        template: `
            <div class="v-tooltip-story-container">
                <VTooltip v-bind="$props">VTooltip</VTooltip>
            </div>
           `,
    }),
    argTypes: {
        trigger: {
            control: { type: "select" },
            options: ["hover", "click"],
        },
    },
};

export const Tooltip = {
    args: {
        primary: true,
        trigger: "hover",
        position: "right",
        message: "This is some message",
        duration: 3000,
        visible: false,
        disabled: false,
    },
};
