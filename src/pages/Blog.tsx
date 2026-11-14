import { BlogService, type BlogPost } from '@/src/services/blogService';
import { Arrow, PageHead, formatDate } from '@/src/components/ui';

function Meta({ post }: { post: BlogPost }) {
  return (
    <p className="post-card__meta">
      <span className="post-card__cat">{post.category}</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span>{BlogService.readingMinutes(post)} min de lecture</span>
    </p>
  );
}

export function Blog() {
  const [lead, ...rest] = BlogService.getSortedPosts();

  return (
    <section className="section section--page" aria-labelledby="blog-h">
      <div className="wrap">
        <PageHead id="blog-h" title="Le blog de Silvercore" lead="Vie privée, chiffrement, hébergement et nouvelles de nos services." />

        {lead && (
          <a className="post-lead" href={`/blog/${lead.id}`}>
            <figure className="post-pic post-lead__pic">
              {lead.image && <img src={lead.image} alt={lead.imageAlt ?? ''} width="1600" height="1067" />}
            </figure>
            <div className="post-lead__text">
              <Meta post={lead} />
              <h2 className="post-lead__title">{lead.title}</h2>
              <p className="post-lead__excerpt">{lead.excerpt}</p>
              <span className="link">Lire l’article<Arrow /></span>
            </div>
          </a>
        )}

        <ul className="post-rows">
          {rest.map((post) => (
            <li key={post.id}>
              <a className="post-row" href={`/blog/${post.id}`}>
                <figure className="post-pic post-row__pic">
                  {post.image && <img src={post.image} alt={post.imageAlt ?? ''} width="1600" height="1067" loading="lazy" />}
                </figure>
                <div className="post-row__text">
                  <Meta post={post} />
                  <h2 className="post-row__title">{post.title}</h2>
                  <p className="post-row__excerpt">{post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {[lead, ...rest].some((p) => p?.imageCredit) && <p className="post-credits">
          Photos :{' '}
          {[lead, ...rest].filter((p) => p?.imageCredit).map((p, i, all) => (
            <span key={p.id}>
              <a href={p.imageSource}>{p.imageCredit}</a>{i < all.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>}
      </div>
    </section>
  );
}
