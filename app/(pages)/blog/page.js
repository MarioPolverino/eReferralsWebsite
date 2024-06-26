import BlogList from "../../../views/blog/BlogList";
import styles from "./blog.module.css";
import FeaturedPost from "../../../components/FeaturedPost";
import NewsletterSignup from "../../../views/home/nwsletter/NewsletterSignup";
import { fetchNewsletterSubscription } from "../../../lib/fetchData";
export const revalidate = 10;

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/api/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  const newsletterSubscriptionContent = await fetchNewsletterSubscription();

  return (
    <div className="wrapper">
      <div className="container">
        <main className={styles.blogContainer}>
          <FeaturedPost />
          <div className={styles.blogPosts}>
            <h1 className={styles.blogTitle}>Recent blog posts</h1>
            <BlogList posts={posts} />
          </div>

          <div className={styles.newsletterSection}>
            <NewsletterSignup content={newsletterSubscriptionContent} />
          </div>
        </main>
      </div>
    </div>
  );
}
