// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.tsx</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {/* ヒーローセクション */}
//       <section className="w-full bg-blue-500 text-white text-center py-16">
//         <h1 className="text-5xl font-bold">Welcome to My Blog</h1>
//         <p className="text-lg mt-4">学んだことを記録する技術ブログ</p>
//       </section>

//       {/* 記事一覧 */}
//       <section className="w-full max-w-3xl mt-8">
//         <h2 className="text-2xl font-bold mb-4">最新の記事</h2>
//         <div className="grid gap-4">
//           <div className="p-4 bg-white shadow-md rounded-lg">
//             <h3 className="text-lg font-semibold">記事タイトル 1</h3>
//             <p className="text-gray-600">2025-02-15</p>
//             <p className="mt-2 text-gray-700">記事の概要...</p>
//           </div>
//           <div className="p-4 bg-white shadow-md rounded-lg">
//             <h3 className="text-lg font-semibold">記事タイトル 2</h3>
//             <p className="text-gray-600">2025-02-14</p>
//             <p className="mt-2 text-gray-700">記事の概要...</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { getAllPosts } from "../lib/getPosts";
import ArticleCard from "../components/ArticleCard";

// export default function Home() {
//   const posts = getAllPosts();

  // return (
  //   <div className="flex-col items-center justify-center min-h-screen bg-gray-100">
  //     {/* ヒーローセクション */}
  //     <section className="w-full bg-blue-500 text-white text-center py-16">
  //       <h1 className="text-5xl font-bold">Welcome to My Blog</h1>
  //       <p className="text-lg mt-4">学んだことを記録する技術ブログ</p>
  //     </section>

      // {/* 記事一覧 */}
      // <section className="w-full max-w-3xl mt-8">
      //   <h2 className="text-2xl font-bold mb-4">最新の記事</h2>
      //   <div className="grid gap-4">
      //     {posts.map((post) => (
      //       <ArticleCard key={post.id} post={post} />
      //     ))}
      //   </div>
      // </section>
  //   </div>
  // );
export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="relative h-screen w-full">
      {/* 背景パターン */}
      <div className="absolute inset-0">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* ヒーローセクション */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
            <span className="text-sky-900"> Welcome to My Blog</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
            このブログは学んだことを記録し、他の開発者と共有するための技術ブログです。
          </p>
          {/* 記事一覧 */}
          <section className="w-full max-w-3xl mt-8">
            <h2 className="text-2xl font-bold mb-4">最新の記事</h2>
            <div className="grid gap-4">
              {posts.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
