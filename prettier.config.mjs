/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-svelte",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["cn", "cva"],
};

export default config;
