import { getAllPosts, getPostBySlug } from "../../../../lib/posts";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import styles from '../blog.module.css';
import Image from "next/image";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const processed = await remark()
    .use(html, { sanitize: false }) // <-- to umożliwia np. <br>, <p>, <span> itd.
    .process(post.content);
  const contentHtml = processed.toString();

  return (
     <main className={`${styles.blogArticle} ${post.customClass || ""}`}>
      <div className={`${styles.blogBanner} ${styles.authorStyle}`}>
        <div className={styles.authorPhoto}>
          <Image
            src={post.authorImage}
            alt="Autor wpisu"
            width={80}
            height={80}
            className={styles.authorImg}
          />
        </div>
        <div className={styles.authorText}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </div>


      <div className={styles.blogBody}>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={500}
            className={styles.blogImage}
          />
        )}
        <article
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </main>
  );
}


