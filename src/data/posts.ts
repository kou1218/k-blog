export type Post = {
    id: string;
    title: string;
    date: string;
    image: string;
    summary: string;
};

export const posts: Post[] = [
    {
        id: "nextjs-guide",
        title: "Next.js の基本",
        date: "2025-02-15",
        image: "/images/nextjs.png", // public/images/ に画像を保存
        summary: "Next.js を使った Web 開発の基本を解説します。",
    },
    {
        id: "tailwind-guide",
        title: "Tailwind CSS でデザインを強化",
        date: "2025-02-14",
        image: "/images/tailwind.png",
        summary: "Tailwind CSS を使ってスタイルを簡単に適用する方法を紹介します。",
    },
];
