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
  plugins: [
    "react",
    "jest",
    "prettier",
    "@typescript-eslint",
    "import",
    "react-hooks",
  ],
  rules: {
    "import/prefer-default-export": 0,
    "prettier/prettier": "error",
    "react/jsx-fragments": 0,
    "react/prop-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "import/extensions": [
      "error",
      "never",
      {
        css: "always",
        gif: "always",
        gql: "always",
        graphql: "always",
        jpg: "always",
        json: "always",
        mp4: "always",
        ogg: "always",
        png: "always",
        scss: "always",
        svg: "always",
        webp: "always",
        woff: "always",
      },
    ],
    "@typescript-eslint/no-empty-function": 0,
    "react/require-default-props": 0,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
