import type { Preview } from "@storybook/vue";
import "../src/styles/main.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const globalTypes = {
    theme: {
        toolbar: {
            items: [
                {
                    value: "default",
                    title: "vongrax-components",
                },
            ],
            title: true,
            dynamicTitle: true,
        },
    },
};

export default preview;
