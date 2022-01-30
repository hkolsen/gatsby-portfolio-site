module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-jsdoc'],
  // NOTE: apparently setting tsdoc to true causes @example to not work
  // properly, and the jsdoc plugin seems to work perfectly fine on TypeScript
  // code without it.
  // tsdoc: true,
};