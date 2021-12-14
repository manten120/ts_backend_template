# docker についてメモ

## 参考にしたページ

### docker ドキュメント

- [英語](https://docs.docker.com/)
- [日本語](docs.docker.j)

### [いい加減 docker-compose で links を使うのをやめて network でコンテナ間名前解決をする](https://qiita.com/dyoshikawa/items/05d627b962da35f7d5b6)

docker-compose の`links`は不要。

> リンク機能（links）とは、他のサービスから到達可能なエイリアス（別名）を定義するものです。サービス間で通信するために必要ではありません。すなわち、 デフォルトでは、あらゆるサービスはサービス名を通して到達できます

```yml
service:
  app:
    links: # 不要
      - db # 不要
  db:
```

### [docker-compose up したコンテナを起動させ続ける方法](https://qiita.com/sekitaka_1214/items/2af73d5dc56c6af8a167)

`tty: true` で `docker-compose up -d` の `-d` が不要になる? → 不要にはならなかった。

`tty: true` が無いとコンテナの起動が継続しなかった。(express サーバーを起動すれば継続するかも)

とりあえず、コンテナの起動を継続させるために `tty: true` が必要

## docker-machine を作成し起動する

`default`という名前の docker machine が起動済みのとき、`sub`という名前の docker machine を作成し起動したい。

```
docker-machine create --driver virtualbox sub
```

```
docker-machine env sub
```

```
eval $("C:\Program Files\Docker Toolbox\docker-machine.exe" env sub)
```

## 起動方法

### docker-compose でコンテナをビルド・起動する

`docker-compose up -d`

### コンテナのなかに入る

`docker-compose exec app bash`

または `docker exec -it node16 bash`

## 停止方法

### コンテナ、イメージ、ネットワークを削除

`docker-compose down --rmi all`

## 環境変数を docker-compose.yml でつかう

`docker-compose.yml`と同じディレクトリに`.env`ファイルを作成し環境変数を書く。

環境変数の値は`$key`または`${key}`で取得できる。

`MYSQL_USER=username`は`docker-compose.yml`のなかで`$MYSQL_USER`でつかえる。

環境変数と文字列を組み合わせたいときは`${}`で囲んで`${MYSQL_USER}_HOGEHOGE`とする。



