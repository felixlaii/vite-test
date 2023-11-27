
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    plugins: ['vue', '@typescript-eslint'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },

  };
  