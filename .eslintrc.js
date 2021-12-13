const config = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".js", ".tsx"] }],
    "react/jsx-handler-names": 2,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": 0,
    "arrow-body-style": 0,

    // allow special triple slashes comment: "/// <reference />"
    "spaced-comment": [2, "always", { line: { markers: ["/"] }, block: { balanced: true } }],

    // override original rules
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
    "no-array-constructor": 0,
    "@typescript-eslint/no-array-constructor": 2,

    "@typescript-eslint/adjacent-overload-signatures": 2,
    "@typescript-eslint/ban-ts-comment": [
      2,
      {
        "ts-expect-error": false,
        "ts-ignore": true,
        "ts-nocheck": false,
        "ts-check": false,
      },
    ],
    "@typescript-eslint/consistent-type-assertions": 2,
    "@typescript-eslint/consistent-type-imports": 0,
    "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
    "@typescript-eslint/no-non-null-asserted-optional-chain": 2,
    // allow require for power-assert
    // '@typescript-eslint/no-require-imports': 2,
    "@typescript-eslint/no-var-requires": 2,
    "@typescript-eslint/prefer-literal-enum-member": 2,
    "@typescript-eslint/prefer-namespace-keyword": 2,
  },
  settings: {
    jsdoc: {
      mode: "typescript",
    },
    node: {
      tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
};

module.exports = config;