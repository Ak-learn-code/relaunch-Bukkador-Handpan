import astro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  ...astro.configs.recommended,
  { files: ['**/*.astro'], languageOptions: { parserOptions: { parser: tsParser } } },
  { files: ['**/*.ts'], languageOptions: { parser: tsParser } },
  { ignores: ['dist/**', '.astro/**', 'node_modules/**', 'reference/**', 'public/**'] },
];
