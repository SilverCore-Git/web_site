import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogService } from '@/src/services/blogService';
import { formatDate } from '@/src/components/ui';

export function BlogPost() {
  const { id } = useParams();
  const post = BlogService.getPostById(id || '');

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

  return (
    <article className="section section--page" aria-labelledby="post-h">
      <div className="wrap">
        <a className="link" href="/blog">Tous les articles</a>
        <header className="page-head post-head">
          <p className="t-label muted">{post.category}</p>
          <h1 id="post-h">{post.title}</h1>
          <div className="post-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.author}</span>
          </div>
        </header>
        <div className="prose">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>
      </div>
    </article>
  );
}
