export function Privacy() 
{
  return (
    <div className="min-h-screen bg-dark text-gray-300 font-sans py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto bg-dark-lighter rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
        <div className="p-8 sm:p-12">
          
          {/* En-tête */}
          <header className="mb-10 border-b border-gray-800 pb-8">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-sm font-medium text-secondary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Dernière mise à jour : 2025-12-06
            </p>
          </header>

          {/* Contenu */}
          <div className="space-y-10">
            
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-primary">1.</span> Introduction
              </h2>
              <div className="space-y-2 leading-relaxed bg-dark p-6 rounded-xl border border-gray-800/50">
                <p className="font-bold text-white">Silvercore</p>
                <p>Organisation sans structure juridique actuellement déclarée.</p>
                <p>Basée à Lyon - France</p>
                <p>Responsable de la publication : Félix Cornudet</p>
                <p>Email : <a href="mailto:contact@silvercore.fr" className="text-primary hover:text-secondary transition-colors underline underline-offset-4 decoration-primary/30">contact@silvercore.fr</a></p>
              </div>
            </section>

            {/* 2. Données collectées */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">2.</span> Données collectées
              </h2>
              <div className="space-y-2 leading-relaxed">
                <p>Nous ne collectons aucune donnée personnelle lors de la navigation sur le site <a href="https://www.silvercore.fr" className="text-primary hover:underline">www.silvercore.fr</a>.</p>
                <p>Aucune information personnelle n'est stockée, transmise ou exploitée à des fins commerciales.</p>
              </div>
            </section>

            {/* 3. Hébergement et sécurité */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">3.</span> Hébergement et sécurité
              </h2>
              <ul className="space-y-2 leading-relaxed list-none">
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Le site est hébergé en France, à Lyon, sur infrastructure auto-hébergée.</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Les connexions sont sécurisées via HTTPS et renforcées par HSTS.</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Ce site utilise les protections Cloudflare (anti-bot, anti-DDoS, cache, proxy).</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Nous mettons en œuvre des mesures raisonnables pour protéger le site contre les accès non autorisés.</li>
              </ul>
            </section>

            {/* 4. Cookies */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">4.</span> Cookies
              </h2>
              <div className="space-y-2 leading-relaxed">
                <p>Aucun cookie n'est utilisé sur ce site.</p>
                <p>Aucune technologie de suivi, publicité ou analyse n’est mise en place.</p>
              </div>
            </section>

            {/* 5. Vos droits */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">5.</span> Vos droits
              </h2>
              <p className="mb-4 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles, si un jour des données venaient à être collectées :
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 list-none bg-dark p-6 rounded-xl border border-gray-800/50">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Droit d’accès à vos données</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Droit de rectification</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Droit de suppression (effacement)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Droit d’opposition</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Droit à la portabilité des données</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Droit de limiter un traitement</li>
              </ul>
              <p className="text-sm text-gray-400 italic border-l-2 border-primary pl-4">
                Nous rappelons que ces droits ne s'appliquent pas actuellement car aucune donnée personnelle n'est collectée.
              </p>
            </section>

            {/* 6. Transparence Cloudflare */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">6.</span> Transparence Cloudflare
              </h2>
              <div className="space-y-2 leading-relaxed">
                <p><strong>Cloudflare</strong> peut collecter des données techniques (IP, User-Agent, informations de connexion réseau) à des fins de sécurité et d’anti-abus.</p>
                <p>Ces données ne sont pas exploitées par Silvercore et servent uniquement à protéger le site contre les attaques.</p>
              </div>
            </section>

            {/* 7. Mise à jour */}
            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">7.</span> Mise à jour de cette politique
              </h2>
              <p className="leading-relaxed">
                Cette politique peut être modifiée à tout moment afin de rester conforme à la législation en vigueur.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}