import { VIEW, DOTS_FR, DOTS_EU, DOTS_OUT, SERVERS, CITIES } from '@/src/data/europeMap';

// The hero's banner: Europe in dots (the Union in violet, France in white), our servers in France, and
// encrypted links arriving there from the Union's capitals. The visitor's own city, read from the
// browser's time zone (nothing is asked, nothing is sent), gets its own link and is named below.

const ROUTES = ['Dublin', 'Amsterdam', 'Copenhague', 'Berlin', 'Varsovie', 'Vienne', 'Budapest', 'Rome', 'Madrid', 'Lisbonne', 'Bruxelles', 'Prague'];

const ZONES: Record<string, string> = {
  'Europe/Paris': 'Paris', 'Europe/Brussels': 'Bruxelles', 'Europe/Amsterdam': 'Amsterdam', 'Europe/Berlin': 'Berlin',
  'Europe/Madrid': 'Madrid', 'Europe/Lisbon': 'Lisbonne', 'Europe/Rome': 'Rome', 'Europe/Vienna': 'Vienne',
  'Europe/Warsaw': 'Varsovie', 'Europe/Prague': 'Prague', 'Europe/Copenhagen': 'Copenhague', 'Europe/Stockholm': 'Stockholm',
  'Europe/Dublin': 'Dublin', 'Europe/Athens': 'Athènes', 'Europe/Budapest': 'Budapest', 'Europe/Bucharest': 'Bucarest',
  'Europe/Helsinki': 'Helsinki', 'Europe/Luxembourg': 'Luxembourg', 'Europe/Zagreb': 'Zagreb', 'Europe/Ljubljana': 'Ljubljana',
  'Europe/Bratislava': 'Bratislava', 'Europe/Sofia': 'Sofia', 'Europe/Riga': 'Riga', 'Europe/Vilnius': 'Vilnius',
  'Europe/Tallinn': 'Tallinn', 'Europe/Malta': 'La Valette', 'Asia/Nicosia': 'Nicosie', 'Europe/Nicosia': 'Nicosie',
};

function visitorCity(): string | null {
  try { return ZONES[Intl.DateTimeFormat().resolvedOptions().timeZone] ?? null; } catch { return null; }
}

/** a link from a city to the servers, bowed upward by a third of its length */
function arc([x1, y1]: readonly [number, number]) {
  const [x2, y2] = SERVERS;
  const d = Math.hypot(x2 - x1, y2 - y1);
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - d * 0.3;
  return `M${x1} ${y1}Q${mx.toFixed(2)} ${my.toFixed(2)} ${x2} ${y2}`;
}

export function EuropeMap() {
  const city = visitorCity();
  const routes = ROUTES.filter((c) => c !== city);
  const [sx, sy] = SERVERS;

  return (
    <div className="hero__window eu-map">
      <svg className="eu-map__svg" viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`} preserveAspectRatio="xMidYMid slice"
        role="img" aria-label="Carte de l’Europe : les capitales de l’Union européenne reliées par des liens chiffrés aux serveurs de Silvercore, en France">
        <path className="eu-map__dots eu-map__dots--out" d={DOTS_OUT} />
        <path className="eu-map__dots eu-map__dots--eu" d={DOTS_EU} />
        <path className="eu-map__dots eu-map__dots--fr" d={DOTS_FR} />
        {routes.map((c, i) => (
          <g key={c} className="eu-map__route" style={{ '--i': i } as React.CSSProperties}>
            <path className="eu-map__line" d={arc(CITIES[c])} />
            <path className="eu-map__packet" d={arc(CITIES[c])} pathLength={100} />
            <circle className="eu-map__city" cx={CITIES[c][0]} cy={CITIES[c][1]} r=".32" />
          </g>
        ))}
        {city && city !== 'Paris' && CITIES[city] && (
          <g className="eu-map__route eu-map__route--you">
            <path className="eu-map__line" d={arc(CITIES[city])} />
            <path className="eu-map__packet" d={arc(CITIES[city])} pathLength={100} />
          </g>
        )}
        {city && CITIES[city] && (
          <g className="eu-map__you">
            <circle className="eu-map__ring" cx={CITIES[city][0]} cy={CITIES[city][1]} r=".9" />
            <circle cx={CITIES[city][0]} cy={CITIES[city][1]} r=".45" />
          </g>
        )}
        <g className="eu-map__servers">
          <circle className="eu-map__ring" cx={sx} cy={sy} r="1.4" />
          <circle className="eu-map__ring eu-map__ring--late" cx={sx} cy={sy} r="1.4" />
          <circle cx={sx} cy={sy} r=".7" />
        </g>
      </svg>
      <div className="eu-map__caption">
        <p className="eu-map__title">Hébergé en France, protégé par le RGPD.</p>
        <p className="eu-map__live">
          {city
            ? <>Depuis {city}, vos données arrivent chiffrées sur nos serveurs en France.</>
            : <>Où que vous soyez, vos données arrivent chiffrées sur nos serveurs en France.</>}
        </p>
        <ul className="eu-map__legend" aria-hidden="true">
          <li><i className="is-fr"></i>Nos serveurs, en France</li>
          <li><i className="is-eu"></i>Union européenne</li>
          {city && <li><i className="is-you"></i>Vous, à {city}</li>}
        </ul>
      </div>
    </div>
  );
}
