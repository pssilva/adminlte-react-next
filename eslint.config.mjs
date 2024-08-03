import { fixupConfigRules } from "@eslint/compat";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "next/core-web-vitals",
    "next",
    "plugin:compat/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:unicorn/recommended",
    "xo",
    "xo/browser",
)), {
    languageOptions: {
        globals: {
            ...globals.jquery,
        },
    },

    rules: {
        "arrow-body-style": "off",
        "capitalized-comments": "off",
        "comma-dangle": ["error", "never"],
        eqeqeq: "off",

        indent: ["error", 2, {
            MemberExpression: "off",
            SwitchCase: 1,
        }],

        "multiline-ternary": ["error", "always-multiline"],

        "new-cap": ["error", {
            properties: false,
        }],

        "no-eq-null": "off",
        "no-negated-condition": "off",
        "no-console": "error",
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": ["error", "after"],
        "prefer-template": "error",
        "prefer-named-capture-group": "off",
        semi: ["error", "never"],
        "unicorn/filename-case": "off",
        "unicorn/consistent-destructuring": "off",
        "unicorn/no-array-callback-reference": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-for-loop": "off",
        "unicorn/no-null": "off",
        "unicorn/no-unused-properties": "error",
        "unicorn/prefer-dom-node-append": "off",
        "unicorn/prefer-dom-node-dataset": "off",
        "unicorn/prefer-dom-node-remove": "off",
        "unicorn/prefer-export-from": "off",
        "unicorn/prefer-includes": "off",
        "unicorn/prefer-number-properties": "off",
        "unicorn/prefer-optional-catch-binding": "off",
        "unicorn/prefer-query-selector": "off",
        "unicorn/prefer-set-has": "off",
        "unicorn/prevent-abbreviations": "off",
    },
}];