const { resolve } = require("node:path");

const { JAVASCRIPT_FILES } = require("@vercel/style-guide/eslint/constants");

const project = resolve(__dirname, "tsconfig.json");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['vite.config.ts'],
  extends: [
    "prettier",
    "plugin:tailwindcss/recommended",
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/react"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
  ],
  parserOptions: { project },
  plugins: ["prettier"],
  settings: {
    "import/resolver": { typescript: { project } },
    "jsx-a11y": {
      polymorphicPropName: "component",
      components: {
        Button: "button",
        Image: "img",
        Input: "input",
        Link: "a",
        Textarea: "textarea",
      },
    },
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { ignoreArrowShorthand: true },
    ],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowRegExp: false,
        allowNever: false,
      },
    ],
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: "last",
        reservedFirst: true,
      },
    ],
    // Ordenar imports
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc" },
      },
    ],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
  },
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
    // Excepción para declaraciones de módulos
    {
      files: ["**/*.d.ts"],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
