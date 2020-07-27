module.exports = {
  extends: 'airbnb-base/legacy',
  parserOptions: {
    ecmaVersion: 6
  },
  parser: 'esprima',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  rules: {
    strict: 'off',
    'no-tabs': 'off',
    indent: 'off',
    'comma-dangle': 'off',
    'no-shadow': 'off',
    'func-names': 'off',
    'space-before-function-paren': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
  }
};
