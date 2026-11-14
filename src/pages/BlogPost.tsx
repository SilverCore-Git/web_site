import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogService } from '@/src/services/blogService';
import { formatDate } from '@/src/components/ui';
import { usePageMeta, SITE_URL } from '@/src/seo';

export function BlogPost() {
  const { id } = useParams();
  const post = BlogService.getPostById(id || '');
  usePageMeta(post ? {
    title: `${post.title} · Silvercore`,
    description: post.excerpt,
    path: `/blog/${post.id}`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      inLanguage: 'fr-FR',
      mainEntityOfPage: `${SITE_URL}/blog/${post.id}`,
      author: { '@type': 'Organization', name: post.author, url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'Silvercore', logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo/scoreV2/silvercore_logo.png` } },
      image: `${SITE_URL}/assets/img/og-banner.png`,
    },
  } : {
    title: 'Article introuvable · Silvercore',
    description: 'Cet article n’existe pas ou a été déplacé.',
    path: `/blog/${id ?? ''}`,
    noindex: true,
  });

  if (!post) {
    return (
      <section className="section section--page" aria-labelledby="post-h">
        <div className="wrap stack-5">
          <h1 id="post-h">Article introuvable</h1>
          <p className="t-lead muted">Cet article n’existe pas ou a été déplacé.</p>
          <a className="link" href="/blog">Voir tous les articles</a>
        </div>
      </section>
    );
  }

  const next = BlogService.getSortedPosts().filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <article className="section section--page" aria-labelledby="post-h">
      <div className="wrap">
        <a className="link post-back" href="/blog">Tous les articles</a>
        <header className="post-head">
          <p className="post-card__meta">
            <span className="post-card__cat">{post.category}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{BlogService.readingMinutes(post)} min de lecture</span>
            <span>{post.author}</span>
          </p>
          <h1 id="post-h">{post.title}</h1>
          <p className="post-head__excerpt">{post.excerpt}</p>
        </header>
        {post.image && (
          <figure className="post-cover">
            <div className="post-pic"><img src={post.image} alt={post.imageAlt ?? ''} width="1600" height="1067" /></div>
            {post.imageCredit && <figcaption>Photo : <a href={post.imageSource}>{post.imageCredit}</a></figcaption>}
          </figure>
        )}
        <div className="prose post-body">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>

        {next.length > 0 && (
          <aside className="post-next" aria-labelledby="next-h">
            <h2 id="next-h">À lire ensuite</h2>
            <ul>
              {next.map((p) => (
                <li key={p.id}>
                  <a className="post-row post-row--small" href={`/blog/${p.id}`}>
                    <figure className="post-pic post-row__pic">
                      {p.image && <img src={p.image} alt={p.imageAlt ?? ''} width="1600" height="1067" loading="lazy" />}
                    </figure>
                    <div className="post-row__text">
                      <p className="post-card__meta"><span className="post-card__cat">{p.category}</span><time dateTime={p.date}>{formatDate(p.date)}</time></p>
                      <h3 className="post-row__title">{p.title}</h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </article>
  );
}
