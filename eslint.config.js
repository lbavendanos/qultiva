import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginSvelte from 'eslint-plugin-svelte'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
