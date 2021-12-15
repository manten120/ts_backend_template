# Jest に関するメモ

## typeorm に関するテスト。

テストファイルのトップレベルに`beforeAll(() => connectToDB());`と書く。

## --verbose オプション

各テストの結果をテストの名前(describe()とtest()の第一引数)と一緒に表示する

[Jest CLI オプション --verbose](https://jestjs.io/ja/docs/cli#--verbose)

## --forceExit

テスト終了時に"Jestがまだ終了してない"旨のメッセージがでてしまうとき、このオプションをつかう。

[Jest CLI オプション --forceExist]<https://jestjs.io/ja/docs/cli#--forceexit>

