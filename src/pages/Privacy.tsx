import { motion } from 'motion/react';
import { AnimatedText } from '@/src/components/ui/AnimatedText';
import { Shield, Server, FileText, Lock, Cookie, EyeOff, RefreshCw } from 'lucide-react';

export function Privacy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="relative pt-32 pb-20 px-6 min-h-screen overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Document légal</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <AnimatedText text="Politique de" className="inline-block mr-4 text-dark" />
            <span className="text-primary inline-block">
              <AnimatedText text="Confidentialité" delay={0.2} />
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm font-bold text-dark/40 flex items-center gap-2 uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Dernière mise à jour : 2025-12-06
          </motion.p>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* 1. Introduction */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">1.</span> Introduction
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-dark/70 text-lg">
              <p className="font-bold text-dark text-xl">Silvercore</p>
              <p>Organisation sans structure juridique actuellement déclarée.</p>
              <p>Basée à Lyon - France</p>
              <p>Responsable de la publication : <span className="text-dark font-medium">Félix Cornudet</span></p>
              <p>Email : <a href="mailto:contact@silvercore.fr" className="text-primary hover:text-primary-dark transition-colors underline underline-offset-4 decoration-primary/30">contact@silvercore.fr</a></p>
            </div>
          </motion.section>

          {/* 2. Données collectées */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <EyeOff size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">2.</span> Données collectées
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-dark/70 text-lg">
              <p>Nous ne collectons aucune donnée personnelle lors de la navigation sur le site <a href="https://www.silvercore.fr" className="text-primary hover:text-primary-dark transition-colors underline underline-offset-4 decoration-primary/30">www.silvercore.fr</a>.</p>
              <p>Aucune information personnelle n'est stockée, transmise ou exploitée à des fins commerciales.</p>
            </div>
          </motion.section>

          {/* 3. Hébergement et sécurité */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Server size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">3.</span> Hébergement et sécurité
              </h2>
            </div>
            <ul className="space-y-4 leading-relaxed text-dark/70 text-lg list-none">
              <li className="flex gap-3"><span className="text-primary mt-1 text-xl">▹</span> Le site est hébergé en France, à Lyon, sur infrastructure auto-hébergée.</li>
              <li className="flex gap-3"><span className="text-primary mt-1 text-xl">▹</span> Les connexions sont sécurisées via HTTPS et renforcées par HSTS.</li>
              <li className="flex gap-3"><span className="text-primary mt-1 text-xl">▹</span> Ce site utilise les protections Cloudflare (anti-bot, anti-DDoS, cache, proxy).</li>
              <li className="flex gap-3"><span className="text-primary mt-1 text-xl">▹</span> Nous mettons en œuvre des mesures raisonnables pour protéger le site contre les accès non autorisés.</li>
            </ul>
          </motion.section>

          {/* 4. Cookies */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Cookie size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">4.</span> Cookies
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-dark/70 text-lg">
              <p>Aucun cookie n'est utilisé sur ce site.</p>
              <p>Aucune technologie de suivi, publicité ou analyse n’est mise en place.</p>
            </div>
          </motion.section>

          {/* 5. Vos droits */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">5.</span> Vos droits
              </h2>
            </div>
            <p className="mb-6 leading-relaxed text-dark/70 text-lg">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles, si un jour des données venaient à être collectées :
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 list-none bg-black/5 p-8 rounded-2xl border border-black/5 text-dark/80">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary"></span> Droit d’accès à vos données</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary"></span> Droit de rectification</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary"></span> Droit de suppression (effacement)</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary"></span> Droit d’opposition</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary"></span> Droit à la portabilité des données</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary"></span> Droit de limiter un traitement</li>
            </ul>
            <div className="border-l-4 border-primary/50 bg-primary/5 pl-6 py-4 rounded-r-2xl">
              <p className="text-dark/80 italic font-display">
                Nous rappelons que ces droits ne s'appliquent pas actuellement car aucune donnée personnelle n'est collectée.
              </p>
            </div>
          </motion.section>

          {/* 6. Transparence Cloudflare */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">6.</span> Transparence Cloudflare
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-dark/70 text-lg">
              <p><strong className="text-dark">Cloudflare</strong> peut collecter des données techniques (IP, User-Agent, informations de connexion réseau) à des fins de sécurité et d’anti-abus.</p>
              <p>Ces données ne sont pas exploitées par Silvercore et servent uniquement à protéger le site contre les attaques.</p>
            </div>
          </motion.section>

          {/* 7. Mise à jour */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <RefreshCw size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">7.</span> Mise à jour de cette politique
              </h2>
            </div>
            <p className="leading-relaxed text-dark/70 text-lg">
              Cette politique peut être modifiée à tout moment afin de rester conforme à la législation en vigueur.
            </p>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
}