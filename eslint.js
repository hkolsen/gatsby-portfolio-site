const path = require('path');

module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [path.join(__dirname, 'common.js'), 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    // We use TypeScript to verify prop-types
    'react/prop-types': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    // Unable to detect render functions separately from function components
    'react/display-name': 'off',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': ['error', 'never'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': [
      'error',
      { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],

    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
  },
};