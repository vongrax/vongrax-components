// Core
import { CreateElement } from "vue";
import { ArgTypes } from "@storybook/vue";

// Components
import { VShimmerProvider, VShimmer } from "@/lib/components";

// Styles
import "./VShimmer.stories.scss";

export default {
    title: "Components/VShimmer",
    component: VShimmer,
    tags: ["autodocs"],
    render: (args: CreateElement, { argTypes }: ArgTypes) => ({
        props: Object.keys(argTypes),
        components: { VShimmerProvider, VShimmer },
        template: `
            <VShimmerProvider v-bind="$props" class="v-shimmer-story-container">
                <VShimmer v-bind="$props" class="v-shimmer-story-row">This is shimmered content</VShimmer>
                <VShimmer v-bind="$props" class="v-shimmer-story-row">This is shimmered content</VShimmer>
                <VShimmer v-bind="$props" class="v-shimmer-story-row">This is shimmered content</VShimmer>
            </VShimmerProvider>
           `,
    }),
};

export const Shimmer = {
    args: {
        loading: true,
        width: "100%",
        height: "45px",
        borderRadius: "16px",
        tag: "div",
    },
};
