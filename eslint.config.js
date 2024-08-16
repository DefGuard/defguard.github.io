export default [
  {
    extends: ["plugin:astro/recommended"],
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
          extraFileExtensions: [".astro"],
        },
        rules: {
          "max-len": [
            "error",
            {
              code: 90,
              comments: 140,
              tabWidth: 2,
              ignorePattern: "^import .* |.*LL\\..*|.*d=.* | *from .*",
              ignoreComments: true,
              ignoreRegExpLiterals: true,
              ignoreTemplateLiterals: true,
            },
          ],
        },
      },
    ],
  },
];
