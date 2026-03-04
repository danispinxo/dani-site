import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [".next/**", "node_modules/**", ".cache/**"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
          FunctionDeclaration: {
            parameters: "first",
          },
          FunctionExpression: {
            parameters: "first",
          },
          CallExpression: {
            arguments: "first",
          },
          ArrayExpression: "first",
          ObjectExpression: "first",
        },
      ],
      "linebreak-style": ["error", "unix"],
      quotes: ["warn", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      "prefer-const": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
    },
  },
]);
