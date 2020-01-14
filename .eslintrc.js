module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style':'off',
    'max-len':'off',
    'no-unused-expressions': 'off',
    'consistent-return':'off',
    'no-param-reassign': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
