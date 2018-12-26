import tea from "@axel669/teascript/rollup";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

export default {
    input: "src/main.tea",
    output: [
        {
            file: "app/app.js",
            format: "iife",
            // name: "Wat"
        }
    ],
    plugins: [
        tea({
            include: "src/**.tea"
        }),
        resolve({
            browser: true
        }),
        commonjs({
            include: [
                "node_modules/**"
            ],
            namedExports: {
                "node_modules/react/index.js": ["Children", "Component", "createElement"],
                "node_modules/react-dom/index.js": ["render"]
            }
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify("development")
        })
    ]
};
