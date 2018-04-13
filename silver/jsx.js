module.exports = {
  extends: 'airbnb/rules/react-a11y.js',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'jsx-quotes': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/interactive-supports-focus': 0,
  },
};
