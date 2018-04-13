module.exports = {
  extends: [
    './silver/base',
    './silver/compat',
    './silver/flow',
    './silver/jsx',
    './silver/react',
  ].map(require.resolve),

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
};
