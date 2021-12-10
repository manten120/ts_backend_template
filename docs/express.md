# Expressに関するメモ

## expressをテンプレートエンジン無しで初期化する

1. Node.jsコンテナ内で `yarn global add express-generator`
- yarnはNode.jsコンテナに最初からインストール済み


2. `express-generator . --no-view`
- `.`で現在のディレクトリをexpressのフォルダとする。
- `express-generator hoge --no-view` とすると、現在のディレクトリにhogeフォルダが作成され、その中にexpressのファイル群が作成される

参考: <https://www.npmjs.com/package/express-generator#command-line-options>



