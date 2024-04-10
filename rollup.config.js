import vue from "rollup-plugin-vue2";
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import path from "path";
import styles from "rollup-plugin-styles";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [{
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
            assetFileNames: "vongrax-components[extname]",
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
            assetFileNames: "vongrax-components[extname]",
        },
    ],
    plugins: [
        resolve(),
        nodeResolve({ resolveOnly: ["html-to-text"] }),
        commonjs(),
        vue({
            css: true,
            compileTemplate: true,
        }),
        styles({
            mode: [
                "inject",
                { container: "body", singleTag: true, prepend: true, attributes: { id: "global" } },
            ],
        }),
        alias({
            entries: {
                "@": path.resolve(__dirname, "src"),
                "~": path.resolve(__dirname, "src"),
            }
        }),
        terser(),
        typescript({
            tsconfig: "./tsconfig.json",
            exclude: ["src/**/*.stories.ts"],
        }),
        babel({
            exclude: "node_modules/**",
        }),
    ],
    external: ["vue"], // Указываем, что Vue является внешней зависимостью
},
    {
        input: "src/index.ts",
        plugins: [dts()],
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        external: [/\.(css|vue)$/],
    },
];
