import { getAllPosts } from "../../../lib/posts";
import Link from "next/link";
import styles from './blog.module.css';
import Image from 'next/image';


export const metadata = {
  title: "Blog – Tipps zu Websites, Apps und Online-Marketing | Grzegorz Słowiaczek",
  description:
    "Praktische Tipps und Inspirationen rund um Websites, mobile Apps, Online-Marketing und SEO. Ich helfe Unternehmern, Technologien effektiver zu nutzen.",
  robots: "index,follow",
  openGraph: {
    title: "Blog – Ratgeber zu Websites & Apps | Grzegorz Słowiaczek",
    description:
      "Erfahre, wie du eine erfolgreiche Website gestaltest, für SEO optimierst und mehr Conversions erzielst.",
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
    title: "Blog – Websites und Apps für Unternehmen | Grzegorz Słowiaczek",
    description:
      "Praktische Tipps und Inspirationen für Unternehmen. Nutze Technologie gezielt für deinen Geschäftserfolg.",
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
          <p>Tipps, Inspirationen und Ratschläge für Website-Betreiber, Unternehmen und Content-Ersteller.</p>
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
                Mehr erfahren →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );

}


