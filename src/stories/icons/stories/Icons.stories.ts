import IconsView from "../IconsView.vue";
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { IconSizes, Side } from "@/typespaces";

export default {
    title: "Icons/Icons",
    component: IconsView,
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes),
        components: { IconsView },
        template: `
            <IconsView v-bind="$props" />
        `,
    }),
    argTypes: {
        size: {
            control: {
                type: "select",
            },
            options: [IconSizes.S, IconSizes.M, IconSizes.L],
        },
        rotate: {
            control: {
                type: "select",
            },
            options: [Side.UP, Side.RIGHT, Side.DOWN, Side.LEFT, Side.DIAGONALLY],
        },
        fill: {
            control: {
                type: "color",
            },
        },
    },
};

export const Template = {
    args: {
        size: IconSizes.L,
        fill: "var(--system-mono-900)",
        rotate: Side.LEFT,
    },
};
