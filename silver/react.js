module.exports = {
  extends: 'airbnb/rules/react.js',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    'react',
  ],

  rules: {
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/no-did-update-set-state': 0,
    'react/jsx-boolean-value': 0,
  },
};
