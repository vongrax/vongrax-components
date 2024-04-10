// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

// Types
import { Sizes, Side } from "@/typespaces";

// Components
import VTagStory from "./VTagStory.vue";

export default {
    title: "Components/VTag",
    component: VTagStory,
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes),
        components: { VTagStory },
        template: `<VTagStory v-bind="$props" @click="action" />`,
        methods: { action: action("clicked") },
    }),
    argTypes: {
        size: {
            control: {
                type: "select",
            },
            options: [Sizes.XS, Sizes.S, Sizes.M],
        },
        iconPosition: {
            control: {
                type: "select",
            },
            options: [Side.RIGHT, Side.LEFT],
        },
    },
};

export const Tabs = {
    args: {
        data: [
            {
                id: 1,
                text: "Завтрак",
            },
            {
                id: 2,
                text: "Обед",
                icon: "https://avatars.mds.yandex.net/i?id=de27fbb4d1b35a98f71b18016730bf50ff7cafe5-10702304-images-thumbs&n=13",
            },
            {
                id: 3,
                text: "Ужин",
                icon: "https://cdn-icons-png.flaticon.com/512/2555/2555794.png",
            },
        ],
        iconPosition: Side.RIGHT,
        size: Sizes.XS,
    },
};
