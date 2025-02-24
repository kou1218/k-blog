"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full p-4 z-50 nav-animation ${
                isScrolled ? "bg-white/10 shadow-lg" : "bg-transparent"
            }`}
        >

        <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* ロゴ */}

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">K-Blog</h1>

            {/* ナビゲーション */}
            <nav className="md:flex space-x-6 text-lg">
            <Link href="/" className="hover:text-sky-600 transition">ホーム</Link>
            <Link href="/blog" className="hover:text-sky-600 transition">ブログ</Link>
            <Link href="/about" className="hover:text-sky-600 transition">プロフィール</Link>
            </nav>
        </div>
        </header>
    );
}
