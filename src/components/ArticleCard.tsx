import Image from "next/image";
import Link from "next/link";
import { Post } from "../data/posts";

export default function ArticleCard({ post }: { post: Post }) {
    return (
        <Link href={`/blog/${post.id}`} className="block">
        <div className="p-4 bg-white shadow-md rounded-lg flex hover:bg-gray-100 transition">
            {/* 記事の画像 */}
            <div className="w-1/3">
            <Image
                src={post.image}
                alt={post.title}
                width={150}
                height={100}
                className="rounded-lg object-cover"
            />
            </div>

            {/* 記事の詳細 */}
            <div className="w-2/3 ml-4">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.summary}</p>
            </div>
        </div>
        </Link>
    );
}
