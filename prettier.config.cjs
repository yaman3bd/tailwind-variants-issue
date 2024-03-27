// prettier.config.js
module.exports = {
  singleQuote: false,
  bracketSpacing: true,
  semi: true,
  trailingComma: "none",
  printWidth: 120,
  tabWidth: 2,
  singleAttributePerLine: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^@/",
    "^@/components/(.*)$|^components/(.*)$",
    "^@/components$|^components$",
    "^@heroicons",
    "^@msaaqco",
    "^@/lib/(.*)$",
    "^@/styles/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require("./prettier-plugins.cjs")]
};
