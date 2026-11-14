import { useLayoutEffect } from 'react';

// Each page's title, description and canonical address. index.html carries the home page's; every
// route is the same index.html, so without this every page would declare the home page as its canonical
// address and share its title. Google runs the script and reads what this sets.

export const SITE_URL = 'https://www.silvercore.fr';

type PageMeta = {
  title: string;               // the full <title>
  description: string;         // 140 to 160 characters reads whole in results
  path: string;                // '/blog', never the domain
  type?: 'website' | 'article';
  noindex?: boolean;
  jsonLd?: object;             // structured data for this page only
};

function meta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function usePageMeta({ title, description, path, type = 'website', noindex, jsonLd }: PageMeta) {
  const ld = jsonLd ? JSON.stringify(jsonLd) : '';
  useLayoutEffect(() => {
    const url = SITE_URL + path;
    document.title = title;
    meta('name', 'description', description);
    meta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    meta('property', 'og:type', type);
    meta('property', 'og:title', title);
    meta('property', 'og:description', description);
    meta('property', 'og:url', url);
    meta('name', 'twitter:title', title);
    meta('name', 'twitter:description', description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;

    document.getElementById('ld-page')?.remove();
    if (ld) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = 'ld-page';
      s.textContent = ld;
      document.head.appendChild(s);
    }
  }, [title, description, path, type, noindex, ld]);
}

/** the home page's, also written by hand in index.html for the crawlers that do not run scripts */
export const HOME = {
  title: 'Silvercore : services européens chiffrés, hébergés en France',
  description: 'Silvernote pour vos notes, Silvertransfert pour vos fichiers : des services européens et souverains, chiffrés et hébergés en France, sans pub ni pisteurs.',
};
