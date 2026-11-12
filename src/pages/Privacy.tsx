import { PageHead } from '@/src/components/ui';

export function Privacy() {
  return (
    <section className="section section--page" aria-labelledby="privacy-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5">
            <PageHead id="privacy-h" title="Politique de confidentialité" lead="Dernière mise à jour : 6 décembre 2025" />
          </div>
          <div className="span-6 start-7 legal">
            <h2>1. Introduction</h2>
            <p>Silvercore, organisation sans structure juridique actuellement déclarée, basée à Lyon (France).</p>
            <p>Responsable de la publication : Félix Cornudet</p>
            <p>Email : <a href="mailto:contact@silvercore.fr">contact@silvercore.fr</a></p>

            <h2>2. Données collectées</h2>
            <p>Nous ne collectons aucune donnée personnelle lors de la navigation sur le site <a href="https://www.silvercore.fr">www.silvercore.fr</a>.</p>
            <p>Aucune information personnelle n’est stockée, transmise ou exploitée à des fins commerciales.</p>

            <h2>3. Hébergement et sécurité</h2>
            <ul>
              <li>Le site est hébergé en France, à Lyon, sur infrastructure auto-hébergée.</li>
              <li>Les connexions sont sécurisées via HTTPS et renforcées par HSTS.</li>
              <li>Ce site utilise les protections Cloudflare (anti-bot, anti-DDoS, cache, proxy).</li>
              <li>Nous mettons en œuvre des mesures raisonnables pour protéger le site contre les accès non autorisés.</li>
            </ul>

            <h2>4. Cookies</h2>
            <p>Aucun cookie n’est utilisé sur ce site.</p>
            <p>Aucune technologie de suivi, publicité ou analyse n’est mise en place.</p>

            <h2>5. Vos droits</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles, si un jour des données venaient à être collectées :</p>
            <ul>
              <li>Droit d’accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit de suppression (effacement)</li>
              <li>Droit d’opposition</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit de limiter un traitement</li>
            </ul>
            <p>Nous rappelons que ces droits ne s’appliquent pas actuellement car aucune donnée personnelle n’est collectée.</p>

            <h2>6. Transparence Cloudflare</h2>
            <p>Cloudflare peut collecter des données techniques (IP, User-Agent, informations de connexion réseau) à des fins de sécurité et d’anti-abus.</p>
            <p>Ces données ne sont pas exploitées par Silvercore et servent uniquement à protéger le site contre les attaques.</p>

            <h2>7. Mise à jour de cette politique</h2>
            <p>Cette politique peut être modifiée à tout moment afin de rester conforme à la législation en vigueur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
