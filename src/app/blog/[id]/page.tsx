import { getPostById } from "../../../lib/getPosts";
import { markdownToHtml } from "../../../lib/markdownToHtml";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogPost({ params }: Props) {
    const { id } = await params
    const post = getPostById(id);

    if (!post) {
        return notFound();
    }

    const contentHtml = await markdownToHtml(post.content);

    return (
        <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600">{post.date}</p>
        <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg mt-4"
        />
        <p className="mt-4 text-gray-700">{post.summary}</p>
        <div className="mt-6 prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    );
}
type Params = Promise<{ [key: string]: string }>
type Props = {
    params: Params
}


