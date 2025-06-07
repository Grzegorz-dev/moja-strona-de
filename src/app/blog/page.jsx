import { getAllPosts } from "../../../lib/posts";
import Link from "next/link";
import styles from './blog.module.css';
import Head from 'next/head';
import Image from 'next/image';

export default async function BlogPage() {
    <Head>
      <title>Blog – Porady o stronach internetowych, aplikacjach i marketingu | Grzegorz Słowiaczek</title>
      <meta name="description" content="Czytaj praktyczne porady i inspiracje dotyczące stron internetowych, aplikacji mobilnych, marketingu online i SEO. Pomagam właścicielom firm lepiej wykorzystać technologie."/>
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      <meta property="og:title" content="Blog – Wskazówki i porady o stronach i aplikacjach | Grzegorz Słowiaczek" />
      <meta property="og:description" content="Dowiedz się, jak zaprojektować skuteczną stronę, zoptymalizować ją pod kątem SEO i zwiększyć konwersję." />
      <meta property="og:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
      <meta property="og:url" content="https://slowiaczek.pl/blog" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog – Strony internetowe i aplikacje | Grzegorz Słowiaczek" />
      <meta name="twitter:description" content="Praktyczne porady i inspiracje dla firm. Sprawdź, jak lepiej wykorzystać technologię w swoim biznesie." />
      <meta name="twitter:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
    </Head>

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


