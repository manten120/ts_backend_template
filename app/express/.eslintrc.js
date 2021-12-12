// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base', // eslint-config-airbnb-base JSのコーディングルール https://github.com/airbnb/javascript
    'plugin:import/recommended', // importに関するルール。pluginsに書いてもよいが'plugin:import/typescript'に合わせてここに書いた。https://github.com/import-js/eslint-plugin-import
    'plugin:import/typescript', // TypeScriptのimportのパスを解決する。pluginsに書くと他のimportのrulesが無効になってしまうのでここに書いた。https://www.npmjs.com/package/eslint-import-resolver-typescript https://github.com/import-js/eslint-plugin-import#typescript
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
    'import/no-commonjs': 'error', // require, module.exportを禁止してimport, export に統一する。https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
    'import/prefer-default-export': 'off', // 名前付きエクスポートを許可する
    'import/no-default-export': 'error', // defaultエクスポートを禁止する
    'import/extensions': [
      // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/extensions.md
      'error',
      'always', // すべてのimportで拡張子の省略を禁止する
      {
        js: 'never', // .jsは省略可
        ts: 'never', // .tsは省略可
      },
    ],

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

    'no-unused-vars': [
      // 未使用の変数・定数の定義を禁止する https://eslint.org/docs/rules/no-unused-vars
      'error',
      {
        vars: 'all',
        args: 'none', // 関数の引数は許可する
      },
    ],
  },
};
