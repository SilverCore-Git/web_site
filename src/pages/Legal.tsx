export function Legal()
{
  return (
    <div className="min-h-screen bg-dark text-gray-300 font-sans py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto bg-dark-lighter rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
        <div className="p-8 sm:p-12">
          
          {/* En-tête */}
          <header className="mb-10 border-b border-gray-800 pb-8">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Mentions Légales
            </h1>
            <p className="text-sm font-medium text-secondary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Dernière mise à jour : 2025-12-06
            </p>
          </header>

          {/* Contenu */}
          <div className="space-y-10">
            
            {/* 1. Éditeur du site */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-primary">1.</span> Éditeur du site
              </h2>
              <div className="space-y-2 leading-relaxed bg-dark p-6 rounded-xl border border-gray-800/50">
                <p className="font-bold text-white text-lg">Silvercore</p>
                <p>Organisation sans structure juridique actuellement déclarée.</p>
                <p>Basée à Lyon - France</p>
                <p>Directeur de la publication : <span className="text-white">Félix Cornudet</span></p>
                <p>Email : <a href="mailto:contact@silvercore.fr" className="text-primary hover:text-secondary transition-colors underline underline-offset-4 decoration-primary/30">contact@silvercore.fr</a></p>
              </div>
            </section>

            {/* 2. Hébergeur */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">2.</span> Hébergeur
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>Le site est auto-hébergé par <span className="text-white font-medium">Silvercore</span></p>
                <p className="flex items-start gap-2">
                   <span className="text-primary mt-1">📍</span>
                   <span>Adresse : 69004 - Lyon - France</span>
                </p>
                <p className="text-sm bg-dark/50 p-3 rounded border border-gray-800 italic">
                  Protection et sécurité renforcées via Cloudflare (anti-bot, anti-DDoS, cache, proxy).
                </p>
              </div>
            </section>

            {/* 3. Responsabilité */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">3.</span> Responsabilité
              </h2>
              <ul className="space-y-2 leading-relaxed list-none">
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Les informations présentes sur le site sont fournies à titre indicatif.</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Silvercore ne saurait être tenu responsable des dommages liés à l'utilisation du site ou à des erreurs de contenu.</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> L'utilisation du site se fait sous la responsabilité de l'utilisateur.</li>
              </ul>
            </section>

            {/* 4. Données personnelles */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">4.</span> Données personnelles
              </h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Lorsque vous utilisez le formulaire de contact, nous collectons les informations suivantes : <span className="text-white">nom, email et message</span>.
                </p>
                <p>
                  Ces données sont utilisées uniquement pour répondre à vos demandes et ne sont pas partagées avec des tiers. Elles sont conservées pendant la durée nécessaire au traitement, puis supprimées.
                </p>
                <p className="text-sm text-gray-400">
                  Les logs techniques collectés par le serveur et Cloudflare sont utilisés uniquement à des fins de sécurité et ne sont pas exploités par Silvercore.
                </p>
                <p className="border-l-2 border-secondary pl-4 py-1 italic">
                  Conformément au RGPD, vous disposez des droits d'accès, de rectification, de suppression, d'opposition et de limitation du traitement de vos données personnelles.
                </p>
              </div>
            </section>

            {/* 5. Cookies */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">5.</span> Cookies
              </h2>
              <p className="leading-relaxed">
                Aucun cookie publicitaire, marketing ou de suivi personnel n'est utilisé.
              </p>
            </section>

            {/* 6. Contact */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-primary">6.</span> Contact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="mailto:contact@silvercore.fr" className="bg-dark p-4 rounded-xl border border-gray-800 hover:border-primary transition-colors group">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Email</p>
                  <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">contact@silvercore.fr</p>
                </a>
                <a href="#" className="bg-dark p-4 rounded-xl border border-gray-800 hover:border-primary transition-colors group">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Discord</p>
                  <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Serveur Support</p>
                </a>
                <a href="#" className="bg-dark p-4 rounded-xl border border-gray-800 hover:border-primary transition-colors group">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Discord</p>
                  <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Serveur Général</p>
                </a>
              </div>
              <p className="mt-4 text-sm italic text-gray-500">Nous nous efforçons de répondre dans les plus brefs délais.</p>
            </section>

            {/* 7. Mise à jour */}
            <section className="pt-6 border-t border-gray-800">
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">7.</span> Mise à jour
              </h2>
              <p className="leading-relaxed">
                Ces mentions légales peuvent être modifiées à tout moment afin de rester conformes à la législation en vigueur.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}