// Page transitions. Internal links stay full page loads (the kit in public/assets/kit reads the DOM once
// when it starts, see kit.ts), so instead of a blank cut the page leaves and the next one arrives:
//   leave: the blocks on screen fade up and out one after the other, then the header and footer go;
//   enter: the header comes back, then the blocks on screen rise in one after the other.
// The home hero keeps the kit's own entrance (.hero[data-enter], motion.js). Reduced motion: no travel.

// the blocks that move, outermost first: a card moves as one, its title and text with it
const BLOCK = ':is(h1, h2, h3, p, ul:not(.post-rows, .post-next ul), ol, form, .btn-row, .card, .panel, .hero__window, .service-shot, .service-row__head, .faq__item, .post-lead, .post-rows > li, .post-next li, .post-cover, .section-head, .prose > *, .statement__type)';
const MAX = 14;
const EASE_OUT = 'cubic-bezier(.2, .7, .2, 1)';
const EASE_IN = 'cubic-bezier(.4, 0, .7, .2)';

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const html = document.documentElement;

/** the blocks of <main> that are on screen now, in reading order */
function onScreen(skip?: string): HTMLElement[] {
  const vh = innerHeight;
  const all = [...document.querySelectorAll<HTMLElement>(`main ${BLOCK}`)];
  const picked = all.filter((el) => {
    if (el.parentElement?.closest(BLOCK)) return false;            // inside a block that moves already
    if (skip && el.closest(skip)) return false;
    const r = el.getBoundingClientRect();
    return r.height > 0 && r.bottom > 0 && r.top < vh;
  });
  return picked
    .map((el) => ({ el, r: el.getBoundingClientRect() }))
    .sort((a, b) => (Math.abs(a.r.top - b.r.top) < 8 ? a.r.left - b.r.left : a.r.top - b.r.top))
    .slice(0, MAX)
    .map((x) => x.el);
}

const chrome = () => [...document.querySelectorAll<HTMLElement>('header.nav, footer.footer')];

let leaving = false;
let exits: Animation[] = [];
let entered = false;

function leave(url: string) {
  if (leaving) return;
  leaving = true;
  html.classList.add('is-leaving');
  const blocks = onScreen();
  const step = Math.min(45, 360 / Math.max(blocks.length, 1));
  const anims = blocks.map((el, i) =>
    el.animate(
      [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-14px)' }],
      { duration: 260, delay: i * step, easing: EASE_IN, fill: 'forwards' },
    ),
  );
  const t = blocks.length ? (blocks.length - 1) * step + 160 : 0;
  for (const el of chrome()) {
    anims.push(el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, delay: t, easing: 'ease-in', fill: 'forwards' }));
  }
  exits = anims;
  const go = () => { location.href = url; };
  Promise.all(anims.map((a) => a.finished)).then(go, go);
  setTimeout(go, 1200); // whatever stalls, the visitor still gets the page
}

export function enter() {
  if (entered || reduced()) return; // StrictMode runs effects twice in development
  entered = true;
  for (const el of chrome()) {
    el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: 'ease-out', fill: 'backwards' });
  }
  onScreen('.hero[data-enter]').forEach((el, i) => {
    el.animate(
      [{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'none' }],
      { duration: 560, delay: 90 + i * 70, easing: EASE_OUT, fill: 'backwards' },
    );
  });
}

function onClick(e: MouseEvent) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
  if (!a || a.target && a.target !== '_self' || a.hasAttribute('download')) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin) return;
  // a jump inside the page (#engagements on the home page, the skip link) scrolls as before
  if (url.pathname === location.pathname && url.search === location.search && (url.hash || a.getAttribute('href') === '#')) return;
  if (url.href === location.href) return;
  e.preventDefault();
  if (reduced()) { location.href = url.href; return; }
  leave(url.href);
}

export function startTransitions() {
  const w = window as unknown as { __transitions?: boolean };
  if (w.__transitions) return; // StrictMode runs effects twice in development
  w.__transitions = true;
  document.addEventListener('click', onClick);
  // back/forward restores the page from the cache as it was left: show it again
  addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    leaving = false;
    html.classList.remove('is-leaving');
    exits.forEach((an) => an.cancel()); // only ours: the kit's own animations keep running
    exits = [];
  });
}
