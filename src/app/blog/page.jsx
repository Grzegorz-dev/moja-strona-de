import { getAllPosts } from "../../../lib/posts";
import Link from "next/link";
import "./blog.css";
import Head from 'next/head';

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
    <main>
      <section className="baner-blog">
        <div className="baner-tresc">
          <h1>Blog</h1>
          <p>Wskazówki, inspiracje i porady dla właścicieli stron, firm i twórców treści.</p>
        </div>
      </section>

      <section className="blog-grid">
        {posts.map((post) => (
            <div className="blog-card" key={post.slug}>
            {post.image && (
                <img src={post.image} alt={post.title} className="blog-card-image" />
            )}
            <div className="blog-card-content">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="read-more">
                Czytaj więcej →
                </Link>
            </div>
            </div>
        ))}
      </section>
    </main>
  );
}


