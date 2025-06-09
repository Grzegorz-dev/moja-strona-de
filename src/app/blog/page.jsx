import { getAllPosts } from "../../../lib/posts";
import Link from "next/link";
import styles from './blog.module.css';
import Image from 'next/image';


export const metadata = {
  title: "Blog – Porady o stronach internetowych, aplikacjach i marketingu | Grzegorz Słowiaczek",
  description:
    "Czytaj praktyczne porady i inspiracje dotyczące stron internetowych, aplikacji mobilnych, marketingu online i SEO. Pomagam właścicielom firm lepiej wykorzystać technologie.",
  robots: "index,follow",
  openGraph: {
    title: "Blog – Wskazówki i porady o stronach i aplikacjach | Grzegorz Słowiaczek",
    description:
      "Dowiedz się, jak zaprojektować skuteczną stronę, zoptymalizować ją pod kątem SEO i zwiększyć konwersję.",
    url: "https://slowiaczek.pl/blog",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Blog – Grzegorz Słowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Strony internetowe i aplikacje | Grzegorz Słowiaczek",
    description:
      "Praktyczne porady i inspiracje dla firm. Sprawdź, jak lepiej wykorzystać technologię w swoim biznesie.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};

export default async function BlogPage() {

  const posts = getAllPosts(); // działa bez getStaticProps w App Routerze

  return (
    <main className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.content}>
          <h1>Blog</h1>
          <p>Wskazówki, inspiracje i porady dla właścicieli stron, firm i twórców treści.</p>
        </div>
      </section>

      <section className={styles.blogGrid}>
        {posts.map((post) => (
            <div className={styles.blogCard} key={post.slug}>
            {post.image && (
                <Image src={post.image} alt={post.title} className={styles.blogCardImage} />
            )}
            <div className={styles.blogCardContent}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                Czytaj więcej →
                </Link>
            </div>
            </div>
        ))}
      </section>
    </main>
  );
}


