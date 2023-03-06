/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  env: {
    node: true
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
