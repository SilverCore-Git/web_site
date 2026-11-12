import { MAIN_ACTION, SERVICES, FAQS, STATUS_URL } from '@/src/constants';
import { BlogService } from '@/src/services/blogService';
import { Arrow, Check, formatDate } from '@/src/components/ui';

const [note, transfer] = SERVICES;

const STATUS = [
  { logo: '/assets/logo/snote/favicon.svg', name: 'Silvernote', role: 'Notes chiffrées', st: 'Opérationnel' },
  { logo: '/assets/logo/stransfert/favicon.png', name: 'Silvertransfert', role: 'Transferts jusqu’à 10 Go', st: 'Opérationnel' },
  { logo: '/assets/logo/scoreV2/silvercore_logo.svg', name: 'silvercore.fr', role: 'Site et blog', st: 'Vérification' },
  { logo: '/assets/logo/scoreV2/silvercore_logo.svg', name: 'Page d’état', role: 'status.silvercore.fr', st: 'Vérification' },
];

const FILES = [
  { name: 'Contrat de location.pdf', kind: 'PDF', icon: 'pdf' },
  { name: 'Mémoire final.docx', kind: 'Word', icon: 'docx' },
  { name: 'Budget 2026.xlsx', kind: 'Excel', icon: 'xlsx' },
  { name: 'Photos Lisbonne.zip', kind: 'ZIP', icon: 'zip' },
  { name: 'Plan cuisine.png', kind: 'Image', icon: 'image' },
  { name: 'Notes réunion.md', kind: 'Markdown', icon: 'md' },
];

const E2E = JSON.stringify({
  layout: 'lanes',
  curve: 'curve',
  alt: 'Un fichier est chiffré sur votre appareil, stocké illisible sur nos serveurs, puis déchiffré seulement par son destinataire.',
  input: { label: 'Votre fichier', icon: 'pdf', meta: 'sur votre appareil' },
  core: { label: 'AES-256', icon: 'ui:lock' },
  lanes: [
    { label: 'Nos serveurs', icon: 'ui:server', meta: 'illisible', done: true },
    { label: 'Lien de partage', icon: 'ui:link', meta: '30 jours', done: true },
    { label: 'Destinataire', icon: 'ui:key-round', meta: 'déchiffre', done: true },
  ],
});

const HOSTING = JSON.stringify({
  layout: 'hub',
  alt: 'Silvernote, Silvertransfert, le site et la page d’état tournent tous sur les serveurs de Silvercore, en France.',
  center: { label: 'Serveurs Silvercore', icon: '/assets/logo/scoreV2/silvercore_logo.svg' },
  spokes: [
    { label: 'Silvernote', icon: '/assets/logo/snote/favicon.svg' },
    { label: 'Silvertransfert', icon: '/assets/logo/stransfert/favicon.png' },
    { label: 'Site et blog', icon: 'ui:globe' },
    { label: 'Page d’état', icon: 'ui:activity' },
  ],
});

export function Home() {
  const posts = [...BlogService.getAllPosts()].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <>
      {/* HERO: centred. The company in one line, then the state of its services in one window */}
      <section className="hero hero--centred" data-enter aria-labelledby="hero-h">
        <div className="wrap">
          <div className="hero-text">
            <div className="hero__c">
              <a className="pill" href={`/services#${transfer.id}`}><span>Nouveau : Silvertransfert</span><span className="muted">Envois chiffrés jusqu’à 10&nbsp;Go</span></a>
              <h1 id="hero-h" aria-label="Services souverains et sécurisés">
                <img className="h1-mark" src="/assets/logo/scoreV2/silvercore_logo.svg" alt="" aria-hidden="true" /> Services souverains et sécurisés
              </h1>
              <p className="hero__lead">
                Silvercore conçoit des outils du quotidien pour vos notes et vos fichiers, chiffrés et hébergés sur
                nos propres serveurs en France. Sans pisteurs, sans revente de données.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href={MAIN_ACTION.href}>{MAIN_ACTION.label}<Arrow /></a>
                <a className="btn btn--secondary" href="#engagements">Lire nos engagements</a>
              </div>
            </div>
            <div className="hero__window" role="img" aria-label="La page d’état de Silvercore : Silvernote, Silvertransfert, le site et la page d’état, tous opérationnels et hébergés en France">
              <div className="ly-piece" aria-hidden="true" data-ui-loop>
                <div className="ui ui-panel ui-win" data-ui="window" data-open="Vérification" data-work="Test en cours" data-done="Opérationnel">
                  <div className="ui-win__bar">
                    <span className="ui-dots"><i></i><i></i><i></i></span>
                    <span className="ui-win__crumb"><img className="ui-brand" src="/assets/logo/scoreV2/silvercore_logo.svg" alt="" />Silvercore <i>/</i> <b>État des services</b></span>
                    <span className="ui-spacer"></span>
                    <span className="ui-win__search"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M8 1.8 13 4v3.6c0 3-2.1 5.4-5 6.6-2.9-1.2-5-3.6-5-6.6V4z" /></svg><span className="ui-win__ph">Hébergé en France</span></span>
                  </div>
                  <div className="ui-win__body">
                    <nav className="ui-win__side">
                      <span className="ui-win__nav is-on"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M2 8h3l2-4 2 8 2-4h3" /></svg>Services</span>
                      <span className="ui-win__nav"><svg className="ui-icon" viewBox="0 0 16 16"><rect x="2.5" y="3" width="11" height="4" rx="1" /><rect x="2.5" y="9" width="11" height="4" rx="1" /></svg>Serveurs</span>
                      <span className="ui-win__nav"><svg className="ui-icon" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5.5" /><path d="M8 5v3l2 1.5" /></svg>Historique</span>
                      <span className="ui-win__label">Hébergement</span>
                      <span className="ui-win__nav"><span className="ui-win__hash">#</span>France</span>
                    </nav>
                    <div className="ui-win__main">
                      <div className="ui-win__cols"><span>Service</span><span>Rôle</span><span>État</span><span>Lieu</span></div>
                      <ul className="ui-win__rows">
                        {STATUS.map((s) => (
                          <li className="ui-win__row" data-row key={s.name}>
                            <span className="ui-avatar ui-avatar--logo"><img src={s.logo} alt="" /></span>
                            <span className="ui-win__who">{s.name}</span>
                            <span className="ui-win__sub">{s.role}</span>
                            <span className={s.st === 'Opérationnel' ? 'ui-win__st is-done' : 'ui-win__st'} data-st>{s.st}</span>
                            <span className="ui-win__age">France</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES: the family, one card each, each showing its own app at work */}
      <section className="section" id="services" aria-labelledby="services-h">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="services-h">Nos services. <span className="muted">Gratuits pour l’essentiel.</span></h2>
            <a className="link" href={MAIN_ACTION.href}>Comparer les deux services</a>
          </div>
          <div className="grid fill">
            <article className="card card--row card--open span-6 service-card">
              <div className="service-card__head"><img src={note.icon} alt="" width="40" height="40" /><h3>{note.name}</h3><span className="t-label muted">{note.status}</span></div>
              <p>Prenez vos notes, classez-les par dossier et écrivez à plusieurs en temps réel. Chaque note est chiffrée.</p>
              <a className="link" href={note.link}>{note.action}</a>
              <div className="panel">
                <div className="stage stage--fade-b" aria-hidden="true">
                  <div className="at-corner to-edge" style={{ '--ax': '40px', '--ay': '40px' } as React.CSSProperties} data-ui-loop>
                    <div className="ui ui-doc" data-ui="doc">
                      <article className="ui-doc__page">
                        <div className="ui-doc__label">Projets · partagée avec 2 personnes</div>
                        <div className="ui-doc__title">Todo de la semaine</div>
                        <div className="ui-doc__text">Lundi : finir le <mark className="ui-doc__mark is-on">dossier de stage</mark> et l’envoyer avant 18 h.</div>
                        <div className="ui-doc__text">Mardi : réviser le chapitre 4, puis <mark className="ui-doc__mark" data-kind="Ajout" data-msg="Ligne ajoutée depuis un autre téléphone." data-where="Synchronisée sur 3 appareils">réserver la salle pour jeudi</mark>.</div>
                        <div className="ui-doc__text">Mercredi : courses pour samedi, la liste est dans le dossier Maison.</div>
                        <div className="ui-doc__text">Jeudi : répétition à 19 h, prendre les partitions.</div>
                      </article>
                      <aside className="ui-doc__note ui-panel is-on">
                        <div className="ui-doc__kind"><span className="ui-doc__dot"></span><span data-doc-kind>Modifiée</span></div>
                        <div className="ui-doc__msg" data-doc-msg>Une personne du dossier écrit dans cette note.</div>
                        <div className="ui-doc__where" data-doc-where>Chiffrée avant l’enregistrement</div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="card card--row card--open span-6 service-card">
              <div className="service-card__head"><img src={transfer.icon} alt="" width="40" height="40" /><h3>{transfer.name}</h3><span className="t-label muted">{transfer.status}</span></div>
              <p>Envoyez jusqu’à 10&nbsp;Go par un simple lien. Chiffré de bout en bout, supprimé après 30 jours.</p>
              <a className="link" href={transfer.link}>{transfer.action}</a>
              <div className="panel">
                <div className="stage stage--fade-br" aria-hidden="true">
                  <div className="at-corner wide" style={{ '--ax': '40px', '--ay': '40px', '--w': '560px' } as React.CSSProperties}>
                    <div className="ui ui-files" data-ui="files" data-reading="Chiffrement de {n} sur {total}">
                      <div className="ui-files__status"><span className="ui-dot"></span><span data-files-status>6 fichiers chiffrés</span></div>
                      <ul className="ui-files__grid">
                        {FILES.map((f) => (
                          <li className="ui-file is-done" key={f.name}>
                            <span className="ui-file__icon"><img src={`/assets/kit/icons/${f.icon}.svg`} alt="" /></span>
                            <span className="ui-file__name">{f.name}</span>
                            <span className="ui-file__kind">{f.kind}</span>
                            <span className="ui-file__bar"><i></i></span>
                            <span className="ui-file__check"><Check /></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* STATEMENT: sovereignty, set large, with the dealt moment (liquid-type) */}
      <section className="section statement" id="souverainete" aria-labelledby="souverainete-h" data-moment="liquid-type">
        <div className="statement__glow" aria-hidden="true"></div>
        <div className="wrap">
          <p className="t-label statement__label">Souveraineté</p>
          <h2 id="souverainete-h" className="mo-lt__type statement__type">Vos données restent en France</h2>
          <p className="t-lead statement__lead">
            Nos services tournent sur nos propres serveurs, sans dépendre des géants américains ou chinois du cloud.
            Vous savez où sont vos données et qui y a accès.
          </p>
          <a className="link" href="/blog/pourquoi-heberger-en-france">Lire pourquoi nous hébergeons en France</a>
        </div>
      </section>

      {/* ENGAGEMENTS 2x2 on the surface band, two screens as two groups */}
      <section className="section g2 ground-surface" id="engagements" aria-labelledby="engagements-h">
        <div className="wrap">
          <div className="group">
            <div className="section-head">
              <h2 id="engagements-h">Nos engagements. <span className="muted">Ce que nous faisons de vos données, et ce que nous refusons.</span></h2>
            </div>
            <div className="grid">
              <article className="card card--row card--open span-6">
                <h3>Chiffre vos contenus de bout en bout</h3>
                <p>Vos fichiers sont chiffrés en AES-256 avant de quitter votre appareil. Même nous ne pouvons pas les lire.</p>
                <div className="panel"><div className="dg" data-diagram={E2E}></div></div>
              </article>
              <article className="card card--row card--open span-6">
                <h3>Héberge tout sur nos serveurs</h3>
                <p>Chaque service tourne chez nous, en France. Les rares outils externes sont français ou européens.</p>
                <div className="panel"><div className="dg" data-diagram={HOSTING}></div></div>
              </article>
            </div>
          </div>
          <div className="grid">
            <article className="card card--row card--open span-6">
              <h3>Ne revend jamais vos données</h3>
              <p>Pas de publicité ciblée ni de pisteurs tiers. Nos services vivent de leurs abonnements, pas de vous.</p>
              <div className="panel">
                <div className="stage stage--fade-b" aria-hidden="true">
                  <div className="at-right to-edge" style={{ '--ax': '32px', '--ay': '56px' } as React.CSSProperties}>
                    <div className="ui ui-panel ui-toggles" data-ui="toggles">
                      <div className="ui-head">
                        <svg className="ui-icon ui-toggles__ico" viewBox="0 0 16 16"><path d="M8 1.8 13 4v3.6c0 3-2.1 5.4-5 6.6-2.9-1.2-5-3.6-5-6.6V4z" /><path d="m5.8 8 1.6 1.6 3-3.2" /></svg>
                        <div className="ui-title">Ce que Silvercore fait de vos données</div>
                        <span className="ui-spacer"></span>
                        <div className="ui-meta" data-tg-count>2 sur 5</div>
                      </div>
                      <ul className="ui-toggles__list">
                        <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Héberger en France</span><span className="ui-tg__sub">Sur nos propres serveurs</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Héberger en France" tabIndex={-1}><i></i></button></li>
                        <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Chiffrer vos contenus</span><span className="ui-tg__sub">De bout en bout ou en base</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Chiffrer vos contenus" tabIndex={-1}><i></i></button></li>
                        <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Publicité ciblée</span><span className="ui-tg__sub">Jamais</span></span><button className="ui-switch" type="button" role="switch" aria-checked="false" aria-label="Publicité ciblée" tabIndex={-1}><i></i></button></li>
                        <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Revente à des tiers</span><span className="ui-tg__sub">Jamais</span></span><button className="ui-switch" type="button" role="switch" aria-checked="false" aria-label="Revente à des tiers" tabIndex={-1}><i></i></button></li>
                        <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Pisteurs tiers</span><span className="ui-tg__sub">Jamais</span></span><button className="ui-switch" type="button" role="switch" aria-checked="false" aria-label="Pisteurs tiers" tabIndex={-1}><i></i></button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="card card--row card--open span-6">
              <h3>Respecte le RGPD à la lettre</h3>
              <p>Vos droits sur vos données s’appliquent sans détour : accès, correction, effacement, portabilité.</p>
              <div className="panel">
                <div className="stage stage--fade-b" aria-hidden="true">
                  <div className="at-rise fit" style={{ '--fit-max': '340px', '--ay': '40px' } as React.CSSProperties}>
                    <div className="ui ui-panel ui-checks" data-ui="checklist">
                      <div className="ui-checks__head"><div className="ui-title">Vos droits RGPD</div><span className="ui-spacer"></span><div className="ui-meta" data-checks-count>2 sur 5</div></div>
                      <div className="ui-checks__bar"><i data-checks-bar style={{ '--k': 0.4 } as React.CSSProperties}></i></div>
                      <ul className="ui-checks__list">
                        <li className="ui-check is-done"><span className="ui-check__box"><Check /></span><span className="ui-check__label">Accès à vos données</span></li>
                        <li className="ui-check is-done"><span className="ui-check__box"><Check /></span><span className="ui-check__label">Rectification</span></li>
                        <li className="ui-check"><span className="ui-check__box"><Check /></span><span className="ui-check__label">Effacement</span></li>
                        <li className="ui-check"><span className="ui-check__box"><Check /></span><span className="ui-check__label">Portabilité</span></li>
                        <li className="ui-check"><span className="ui-check__box"><Check /></span><span className="ui-check__label">Opposition au traitement</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BLOG: the latest articles as rows (a calm section) */}
      <section className="section" id="blog" aria-labelledby="blog-h">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="blog-h">Le blog. <span className="muted">Vie privée, chiffrement, hébergement.</span></h2>
            <a className="link" href="/blog">Voir tous les articles</a>
          </div>
          <ul className="post-list post-list--home">
            {posts.map((post) => (
              <li key={post.id}>
                <a href={`/blog/${post.id}`}>
                  <span className="meta">{post.category}</span>
                  <span>
                    <h3 className="t-card">{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </span>
                  <time className="meta" dateTime={post.date}>{formatDate(post.date)}</time>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ: every answer open */}
      <section className="section ground-surface" id="questions" aria-labelledby="questions-h">
        <div className="wrap">
          <div className="grid grid--top">
            <div className="span-5 stack-4">
              <h2 id="questions-h">Questions</h2>
              <p className="muted">Ce qu’on nous demande le plus souvent.</p>
              <a className="link" href="/faq">Lire toutes les réponses</a>
              <a className="link" href={STATUS_URL}>Consulter l’état des services</a>
            </div>
            <div className="faq span-6 start-7">
              {FAQS.slice(0, 5).map((f) => (
                <div className="faq__item" key={f.question}>
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
