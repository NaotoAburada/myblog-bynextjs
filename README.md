# ブログの公開先 URL

[Naoto Aburada Blog.](https://myblog-bynextjs.now.sh/)

# 概要

今回作成したブログでは、サーバサイド側を必要としなったためフロントエンド側の実装しか行って行っていません。

作成期間が短かったのでスタイルを考える時間を減らすために、Material-ui を積極的に利用しました。

テストコードについては今回は機能が多くなかったため打鍵ですませています。そのためテストコードはありません。

# 機能ついて

- CMS に投稿してあるブログ記事の一覧表示（最大 100 件）
- ブログ記事ごとのコメント一覧表示（最大 100 件）
- ブログ記事へのコメント投稿機能
- 表示しているブログ記事の前後に投稿されたブログ記事へ移動する
- 今後追加予定の機能
  - ブログ記事へのタグ機能追加
  - タグごとの記事を表示する機能
  - 月別に投稿されたブログ記事の件数表示
  - ブログ記事の検索機能
  - ページ機能

# 採用技術

- TypeScript
- next.js
- Material-ui
- SWR
- Tailwind CSS
- Node.js(npm)
- CMS として microCMS を使用
- 公開するためのデプロイ先は vercel を使用
