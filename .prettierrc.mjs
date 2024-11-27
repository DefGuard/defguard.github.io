/** @type {import("prettier").Config} */
export default {
  useTabs: false,
  singleQuote: false,
  semi: true,
  printWidth: 90,
  plugins: ["prettier-plugin-astro"],
  trailingComma: "all",
  endOfLine: "lf",
  jsxSingleQuote: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
