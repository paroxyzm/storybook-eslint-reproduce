module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 2020,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
  "overrides": [
    {
      "files": ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      "rules": {
        'storybook/hierarchy-separator': 'warn',
        'storybook/await-interactions': 'error',
      },
    }]
};
