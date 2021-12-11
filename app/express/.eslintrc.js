module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier', // eslint-config-prettier prettierと競合するルールをオフにする。TypeScriptに関するルールも含む() https://github.com/prettier/eslint-config-prettier
  ],
  parser: '@typescript-eslint/parser', // TypeScriptのパーサー。@typescript-eslint/eslint-pluginを使うときに必要。https://github.com/typescript-eslint/typescript-eslint/tree/b9407c560c8ab625fd546af73f71cce8178b9e05/packages/parser
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint', // @typescript-eslint/eslint-plugin TypeScriptのLintルール https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'prefer-arrow-functions',
  ],
  rules: {
    'prefer-arrow-functions/prefer-arrow-functions': [
      // 関数をアロー関数に統一する。参考: https://www.npmjs.com/package/eslint-plugin-prefer-arrow-functions
      'error',
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        returnStyle: 'implicit',
        singleReturnOnly: false,
      },
    ],
  },
};