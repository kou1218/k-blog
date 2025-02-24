/*
全ページ共通のHTMLの構造を定義するファイル
*/

import type { Metadata } from "next"; // メタ情報 (タイトルなど)
import { Geist, Geist_Mono } from "next/font/google"; // Google Fonts を読み込む
import "./globals.css"; // CSS を適用
import Header from "../components/Header";

// フォントの設定
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO のためのメタ情報
export const metadata: Metadata = {
  title: "K-Blog", //ページのージのタイトル
  description: "技術ブログ", // 説明文
};

// レイアウトの定義
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 text-gray-900">
        {/* ヘッダー */}
        <Header />

        {/* メインコンテンツ */}
        <main className="w-full">{children}</main>

        {/* フッター */}
        <footer className="text-center text-gray-600 mt-10 p-4 border-t">
          © 2025 My Blog
        </footer>
      </body>
    </html>
  );
}

