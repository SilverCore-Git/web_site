import { usePageMeta } from '@/src/seo';
import { PageHead } from '@/src/components/ui';
import { SOCIALS } from '@/src/constants';

export function Legal() {
  usePageMeta({ title: 'Mentions légales · Silvercore', description: 'Les mentions légales du site silvercore.fr : éditeur, hébergement et conditions d’utilisation.', path: '/legal' });
  return (
    <section className="section section--page" aria-labelledby="legal-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5">
            <PageHead id="legal-h" title="Mentions légales" lead="Dernière mise à jour : 6 décembre 2025" />
          </div>
          <div className="span-6 start-7 legal">
            <h2>1. Éditeur du site</h2>
            <p>Silvercore, organisation sans structure juridique actuellement déclarée, basée à Lyon (France).</p>
            <p>Directeur de la publication : Félix Cornudet</p>
            <p>Email : <a href="mailto:contact@silvercore.fr">contact@silvercore.fr</a></p>

            <h2>2. Hébergeur</h2>
            <p>Le site est auto-hébergé par Silvercore.</p>
            <p>Adresse : 69004 - Lyon - France</p>
            <p>Protection et sécurité renforcées via Cloudflare (anti-bot, anti-DDoS, cache, proxy).</p>

            <h2>3. Responsabilité</h2>
            <ul>
              <li>Les informations présentes sur le site sont fournies à titre indicatif.</li>
              <li>Silvercore ne saurait être tenu responsable des dommages liés à l’utilisation du site ou à des erreurs de contenu.</li>
              <li>L’utilisation du site se fait sous la responsabilité de l’utilisateur.</li>
            </ul>

            <h2>4. Données personnelles</h2>
            <p>Lorsque vous utilisez le formulaire de contact, nous collectons les informations suivantes : nom, email et message.</p>
            <p>Ces données sont utilisées uniquement pour répondre à vos demandes et ne sont pas partagées avec des tiers. Elles sont conservées pendant la durée nécessaire au traitement, puis supprimées.</p>
            <p>Les logs techniques collectés par le serveur et Cloudflare sont utilisés uniquement à des fins de sécurité et ne sont pas exploités par Silvercore.</p>
            <p>Conformément au RGPD, vous disposez des droits d’accès, de rectification, de suppression, d’opposition et de limitation du traitement de vos données personnelles.</p>

            <h2>5. Cookies</h2>
            <p>Aucun cookie publicitaire, marketing ou de suivi personnel n’est utilisé.</p>

            <h2>6. Contact</h2>
            <ul>
              <li>Email : <a href="mailto:contact@silvercore.fr">contact@silvercore.fr</a></li>
              <li>Discord : <a href={SOCIALS.discordSupport}>serveur support</a></li>
              <li>Discord : <a href={SOCIALS.discord}>serveur général</a></li>
            </ul>
            <p>Nous nous efforçons de répondre dans les plus brefs délais.</p>

            <h2>7. Mise à jour</h2>
            <p>Ces mentions légales peuvent être modifiées à tout moment afin de rester conformes à la législation en vigueur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
