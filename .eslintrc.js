module.exports = {
  env: {
    browser: true,
    es2020: true,
    "jest/globals": true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "jest", "prettier", "@typescript-eslint"],
  rules: {
    "import/prefer-default-export": 0,
    "prettier/prettier": "error",
    "react/jsx-fragments": 0,
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
  },
};
