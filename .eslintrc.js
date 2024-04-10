module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
        "prettier",
        "plugin:storybook/recommended"
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    plugins: [
        "@typescript-eslint",
        "vue",
        "prettier"
    ],
    rules: {
        "no-console": "error",
        "vue/require-default-prop": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "vue/no-deprecated-v-on-native-modifier": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "vue/order-in-components": [
            "error",
            {
                // Конфигурация порядка определения свойств Vue компонентов
                order: [
                    "name",
                    "model",
                    ["components", "directives"],
                    "emits",
                    "mixins",
                    ["props", "propsData"],
                    "data",
                    "computed",
                    "methods",
                    "watch",
                    "LIFECYCLE_HOOKS",
                ],
            },
        ],
    }
}
