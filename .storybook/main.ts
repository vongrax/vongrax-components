// @ts-nocheck
import type { StorybookConfig } from "@storybook/vue-webpack5";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import * as path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    webpackFinal: async (config) => {

        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '../src'),
                '~': path.resolve(__dirname, '../src'),
            };
        }

        config.module.rules.push({
            test: /\.s[ac]ss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../src"),
        });

        return config;

    },
    framework: {
        name: "@storybook/vue-webpack5",
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    docs: {
        autodocs: "tag",
    },
    core: {
        disableTelemetry: true,
    },
};
export default config;
