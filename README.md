This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

https://k-blog-xi.vercel.app/

## 1. ディレクトリとファイルの詳細

・ `public/`

ブログに使用する画像を配置しておくディレクトリ。

例：`pulbic/logo.png`という画像がある場合、以下のようにアクセス可能
```
<img src="/logo.png" alt="Logo" />
```

・ `src/app/`

Next.jsのApp Routerでは`src/app/`にページを作成する。`favicon.ico`(ブラウザのタブに表示されるサイトアイコン),
`globals.css`(サイト全体に適用する グローバルな CSS（Tailwind やリセットCSSなど）)
,`layout.tsx`(全ページの共通レイアウト)
, `page.module.css`(トップページ専用の CSSモジュール)
, `page.tsx`(トップページのコンポーネント)がある。

・その他のファイル

`eslint.config.mjs`: コード品質チェックツール（ESLint）の設定の定義

`next.config.ts`: Next.jsのカスタマイズ設定を行う

`package-lock.json`:`package.json`で管理されている`npm`パッケージのバージョンを固定するファイル、手動編集NG

`package.json`: プロジェクトで使用する`npm`パッケージの情報を管理

`postcss.config.js`: Tailwind CSS や CSS の自動最適化をするツール（PostCSS）の設定

`tailwind.config.js`: Tailwind CSS のカスタマイズ設定を管理、カラーテーマやbレークポイント、プラグインなどを設定

`tsconfig.json`: TypeScriptのコンパイル設定を管理



