import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

/*
全ての投稿をリストで取得する関数
*/
export function getAllPosts() {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
        id: data.id,
        title: data.title,
        date: data.date,
        image: data.image,
        summary: data.summary,
    };
    });
}

/*
idと本文を取得
*/
export function getPostById(id: string) {
    const filePath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
        id: data.id,
        title: data.title,
        date: data.date,
        image: data.image,
        summary: data.summary,
        content,
    };
}
