module.exports = {
  plugins: [
    'import',
  ],

  rules: {
    'indent': 0,
    'browser': true,
    'comma-dangle': 1,
    'eol-last': 0,
    'prefer-destructuring': 0,
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    'function-paren-newline': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'max-len': ['error', 10, { 'ignoreComments': true }],
    'padded-blocks': 0,

    'no-undef': 'error',
    'no-console': 'error',
    'no-prototype-builtins': 0,
    'no-restricted-syntax': 0,
    'no-throw-literal': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-trailing-spaces': 0,

    'import/newline-after-import': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
  },
};
