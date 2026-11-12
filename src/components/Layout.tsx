import { SERVICES, MAIN_ACTION, STATUS_URL, SOCIALS } from '@/src/constants';
import { Arrow } from '@/src/components/ui';

const NAV = [
  { name: 'Engagements', path: '/#engagements' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

function current(path: string): 'page' | undefined {
  if (typeof window === 'undefined') return undefined;
  const here = window.location.pathname;
  return path !== '/' && !path.includes('#') && (here === path || here.startsWith(path + '/')) ? 'page' : undefined;
}

export function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Aller au contenu</a>
        <a className="nav__logo" href="/" aria-label="Silvercore, accueil">
          <img className="logo-img" src="/assets/logo/scoreV2/silvercore_logo_text_white.svg" alt="Silvercore" width="131" height="30" />
        </a>
        <nav className="nav__links" aria-label="Principale">
          <div className="nav__item">
            <a className="nav__link" href="/services" aria-current={current('/services')}>
              Services
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Nos outils</p>
                  {SERVICES.map((s) => (
                    <a key={s.id} href={`/services#${s.id}`}>{s.name}<span>{s.short}</span></a>
                  ))}
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Silvercore</p>
                  <a href="/#engagements">Engagements<span>Chiffrement, France, RGPD</span></a>
                  <a href="/#souverainete">Souveraineté<span>Nos propres serveurs</span></a>
                  <a href={STATUS_URL}>Statut<span>L’état des serveurs en direct</span></a>
                </div>
                <a className="menu-card span-3 start-10" href="/services#silvertransfert">
                  <div className="panel"><img className="frame__img" src="/assets/img/mockup_phone_silvertransfert_little.png" alt="L’écran d’accueil de Silvertransfert sur un téléphone" /></div>
                  <span className="t-card">Silvertransfert</span>
                  <span className="t-small muted">Envois chiffrés jusqu’à 10 Go</span>
                </a>
              </div>
            </div>
          </div>
          {NAV.map((l) => (
            <div className="nav__item" key={l.path}>
              <a className="nav__link" href={l.path} aria-current={current(l.path)}>{l.name}</a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="nav__link" href={STATUS_URL}>Statut</a>
          <a className="btn btn--primary" href={MAIN_ACTION.href}>{MAIN_ACTION.label}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Des outils qui restent en France</h2>
            <p className="t-small muted">Silvernote et Silvertransfert, gratuits pour l’essentiel, chiffrés et hébergés chez nous.</p>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href={MAIN_ACTION.href}>{MAIN_ACTION.label}<Arrow /></a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo footer__mark" href="/" aria-label="Silvercore, accueil">
                <img className="logo-img logo-img--lg" src="/assets/logo/scoreV2/silvercore_logo_text_white.svg" alt="Silvercore" width="168" height="39" />
              </a>
              <p className="footer__lede">Des outils chiffrés, hébergés en France.</p>
            </div>
            <div className="span-2 footer__col">
              <h3>Services</h3>
              <ul>
                {SERVICES.map((s) => <li key={s.id}><a href={s.link}>{s.name}</a></li>)}
                <li><a href={STATUS_URL}>Statut</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Silvercore</h3>
              <ul>
                <li><a href="/#engagements">Engagements</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Contact</h3>
              <ul>
                <li><a href="/contact">Formulaire</a></li>
                <li><a href={SOCIALS.discord}>Discord</a></li>
                <li><a href={SOCIALS.discordSupport}>Discord support</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Légal</h3>
              <ul>
                <li><a href="/privacy">Confidentialité</a></li>
                <li><a href="/legal">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>© {year} Silvercore · Hébergé en France</span>
            <div className="socials">
              <a href={SOCIALS.instagram} aria-label="Instagram"><img src="/assets/kit/icons/instagram.svg" alt="" width="20" height="20" /></a>
              <a href={SOCIALS.discord} aria-label="Discord"><img src="/assets/kit/icons/discord.svg" alt="" width="20" height="20" /></a>
              <a href={SOCIALS.github} aria-label="GitHub"><img src="/assets/kit/icons/github.svg" alt="" width="20" height="20" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
