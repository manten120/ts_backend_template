# MySQL についてメモ

## 文字コードについて

- utf8 は絵文字を保存できない。他に𩸽など一部漢字を保存できない
- utf8mb4 なら保存できる

参考: [utf8とutf8mb4の違い【MySQL】](https://penpen-dev.com/blog/mysql-utf8-utf8mb4/)

## 文字コードの設定

コンテナ内の`/etc/mysql/conf.d/`に設定を書いた`.cnf`ファイルを作成する。

あらかじめホストに`my.cnf`を作成しておき`Dockerfile`で`/etc/mysql/conf.d/`にコピーするといい。

`collation-server=utf8mb4_bin`の設定は大文字小文字絵文字を区別してくれる

現在の文字コードは`show variables like '%char%';`で確認できる。

参考: 

[Dockerの公式MySQLの文字コードをutf8mb4に設定する](https://qiita.com/Suzuki09/items/c05664c7c0c08a19cebe#%E6%96%B9%E6%B3%951-mycnf%E3%81%AE%E6%9B%B8%E3%81%8D%E6%8F%9B%E3%81%88)

[MySQL 文字コード確認](https://qiita.com/yukiyoshimura/items/d44a98021608c8f8a52a)

[MySQL 8 のデフォルト文字セット系をすべて utf8mb4 にする cnf の書き方メモ](https://oki2a24.com/2018/10/21/how-to-set-mysql-8-cnf-to-utf8mb4/)

[MySQLにおける文字コードutf8mb4の設定 collation-serverパラメータ](https://qiita.com/k8uwall/items/79dbe6dd03aa8b0ed119#collation-server%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF)



## コンテナ起動時にユーザー名、パスワード、データベースを作成する

下のキーの環境変数を与えると初回起動時に作成してくれる。volume をマウントしておけば永続化する。

- MYSQL_DATABASE
- MYSQL_USER
- MYSQL_PASSWORD
- MYSQL_ROOT_PASSWORD

`docker-compose.yml`で下のように環境変数を渡すことができる。

```yml
  db:

　　# 中略

    environment:
      - MYSQL_DATABASE=$MYSQL_DATABASE
      - MYSQL_USER=$MYSQL_USER
      - MYSQL_PASSWORD=$MYSQL_PASSWORD
      - MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD
```
