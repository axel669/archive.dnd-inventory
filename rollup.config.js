import tea from "@axel669/teascript/rollup";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

const alias = (aliasOptions) => {
    const regex = new RegExp(`^(${Object.keys(aliasOptions).join("|")})`);

    return {
        resolveId(importee) {
            const matched = importee.replace(
                regex,
                (s, name) => aliasOptions[name]
            );

            if (matched !== importee) {
                return require.resolve(matched);
            }

            return null;
        }
    }
};

export default {
    input: "./src/main.tea",
    output: [
        {
            file: "app/app.js",
            format: "iife"
        }
    ],
    plugins: [
        alias({
            "@state": "./src/state.tea"
        }),
        tea({
            include: "**.tea"
        }),
        resolve({
            browser: true
        }),
        commonjs({
            include: [
                "node_modules/**"
            ],
            namedExports: {
                "node_modules/react/index.js": [
                    "Children",
                    "Component",
                    "createElement",
                    "PureComponent"
                ],
                "node_modules/react-dom/index.js": ["render"]
            }
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify("development")
        })
    ]
};
