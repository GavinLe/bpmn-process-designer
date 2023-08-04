module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-param-reassign": "off",
    "template-curly-spacing": "off",
    "linebreak-style": [0, "error", "windows"], // 默认unix
    "max-len": ["error", { code: 200 }],
    indent: "off",
    "no-undef": "off",
    "func-names": "off",
    "no-unused-expressions": "off",
    "space-before-function-paren": "off",
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    singleQuote: "off",
    "bracket-spacing": "off",
    "block-spacing": ["error", "never"],
    "prettier/prettier": "off",
    "no-unused-vars": "off",
  },
};
