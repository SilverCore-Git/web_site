import { SERVICES } from '@/src/constants';
import { Check, PageHead } from '@/src/components/ui';

export function Services() {
  return (
    <section className="section section--page" aria-labelledby="services-h">
      <div className="wrap">
        <PageHead
          id="services-h"
          title="Les services Silvercore"
          lead="Des services européens et souverains, pensés pour la sécurité : chiffrés et hébergés sur nos serveurs en France. Chacun a une version gratuite, et des options en plus par abonnement."
        />
        <div className="stack-services">
          {SERVICES.map((s) => (
            <div className="grid grid--top service-row" id={s.id} key={s.id}>
              <div className="span-5 stack-5">
                <div className="service-row__head">
                  <img src={s.icon} alt="" width="48" height="48" />
                  <div>
                    <h2>{s.name}</h2>
                    <span className="t-label">{s.status}</span>
                  </div>
                </div>
                <p className="t-lead">{s.description}</p>
                <ul>
                  {s.points.map((p) => <li key={p}><Check /><span>{p}</span></li>)}
                </ul>
                <div className="btn-row">
                  <a className="btn btn--secondary" href={s.link}>{s.action}</a>
                </div>
              </div>
              <a className={`service-shot span-6 start-7${s.id === 'silvertransfert' ? ' service-shot--phone' : ''}`} href={s.link}>
                <img src={s.preview} alt={s.previewAlt} loading="lazy" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
