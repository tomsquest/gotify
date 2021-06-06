module.exports = {
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: 2015,
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "jest-formatting",
    "radar",
    "only-error",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/recommended",
    "plugin:radar/recommended",
    // Must be last in the chain
    "prettier",
  ],
};
