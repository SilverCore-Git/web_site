import { BlogService } from '@/src/services/blogService';
import { PageHead, formatDate } from '@/src/components/ui';

export function Blog() {
  const posts = [...BlogService.getAllPosts()].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="section section--page" aria-labelledby="blog-h">
      <div className="wrap">
        <PageHead id="blog-h" title="Le blog de Silvercore" lead="Vie privée, chiffrement, hébergement et nouvelles de nos services." />
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/blog/${post.id}`}>
                <span className="meta">{post.category}</span>
                <span>
                  <h2 className="t-card">{post.title}</h2>
                  <p>{post.excerpt}</p>
                </span>
                <time className="meta" dateTime={post.date}>{formatDate(post.date)}</time>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
