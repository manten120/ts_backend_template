# TypeScript に関するメモ

## 型のみのimport, export

`import type { Hoge } from './hoge'` , `export type {Hoge} `で型のみのimport, exportができる。import文を書くときの推論が効かないのが難点。

参考: 
[TypeScript v3.8.1-rc 変更点 型のみのimport, exportのサポート](https://qiita.com/vvakame/items/72da760526ec7cc25c2d#%E5%9E%8B%E3%81%AE%E3%81%BF%E3%81%AEimport-export%E3%81%AE%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88)

## .d.ts

型定義ファイルは拡張子を`.d.ts`にするとコンパイルしたときjsファイルが作成されないのでよい。

## アロー関数のオーバーロード

## 読み取り専用のオブジェクト・配列の型

参考:

[【TypeScript】オブジェクトのプロパティを読み込み専用にする6通りの方法](https://qiita.com/manten120/items/acece27acd9a4296b40d)

[TypeScript: 読み取り専用の配列型を宣言する3つの方法](https://qiita.com/suin/items/27abbd6ba7ee8eca507c)





