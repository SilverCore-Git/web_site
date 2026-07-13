import { motion } from 'motion/react';
import { AnimatedText } from '@/src/components/ui/AnimatedText';
import { Shield, Server, FileText, Lock, Cookie, Mail, RefreshCw } from 'lucide-react';

export function Legal() {
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
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Document légal</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <AnimatedText text="Mentions" className="inline-block mr-4 text-dark" />
            <span className="text-primary inline-block">
              <AnimatedText text="Légales" delay={0.2} />
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
          {/* 1. Éditeur du site */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">1.</span> Éditeur du site
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-dark/70 text-lg">
              <p className="font-bold text-dark text-xl">Silvercore</p>
              <p>Organisation sans structure juridique actuellement déclarée.</p>
              <p>Basée à Lyon - France</p>
              <p>Directeur de la publication : <span className="text-dark font-medium">Félix Cornudet</span></p>
              <p>Email : <a href="mailto:contact@silvercore.fr" className="text-primary hover:text-primary-dark transition-colors underline underline-offset-4 decoration-primary/30">contact@silvercore.fr</a></p>
            </div>
          </motion.section>

          {/* 2. Hébergeur */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Server size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">2.</span> Hébergeur
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-dark/70 text-lg">
              <p>Le site est auto-hébergé par <span className="text-dark font-bold">Silvercore</span></p>
              <p className="flex items-start gap-3">
                 <span className="text-primary mt-1">📍</span>
                 <span>Adresse : 69004 - Lyon - France</span>
              </p>
              <div className="bg-black/5 p-4 rounded-2xl border border-black/5 mt-4">
                <p className="text-sm italic">
                  Protection et sécurité renforcées via Cloudflare (anti-bot, anti-DDoS, cache, proxy).
                </p>
              </div>
            </div>
          </motion.section>

          {/* 3. Responsabilité */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">3.</span> Responsabilité
              </h2>
            </div>
            <ul className="space-y-4 leading-relaxed text-dark/70 text-lg list-none">
              <li className="flex gap-3"><span className="text-primary mt-1 text-xl">▹</span> Les informations présentes sur le site sont fournies à titre indicatif.</li>
              <li className="flex gap-3"><span className="text-primary mt-1 text-xl">▹</span> Silvercore ne saurait être tenu responsable des dommages liés à l'utilisation du site ou à des erreurs de contenu.</li>
              <li className="flex gap-3"><span className="text-primary mt-1 text-xl">▹</span> L'utilisation du site se fait sous la responsabilité de l'utilisateur.</li>
            </ul>
          </motion.section>

          {/* 4. Données personnelles */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">4.</span> Données personnelles
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-dark/70 text-lg">
              <p>
                Lorsque vous utilisez le formulaire de contact, nous collectons les informations suivantes : <span className="text-dark font-medium">nom, email et message</span>.
              </p>
              <p>
                Ces données sont utilisées uniquement pour répondre à vos demandes et ne sont pas partagées avec des tiers. Elles sont conservées pendant la durée nécessaire au traitement, puis supprimées.
              </p>
              <p className="text-sm text-dark/40">
                Les logs techniques collectés par le serveur et Cloudflare sont utilisés uniquement à des fins de sécurité et ne sont pas exploités par Silvercore.
              </p>
              <div className="border-l-4 border-primary/50 bg-primary/5 pl-6 py-4 rounded-r-2xl mt-6">
                <p className="italic text-dark/80 font-display">
                  Conformément au RGPD, vous disposez des droits d'accès, de rectification, de suppression, d'opposition et de limitation du traitement de vos données personnelles.
                </p>
              </div>
            </div>
          </motion.section>

          {/* 5. Cookies */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Cookie size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">5.</span> Cookies
              </h2>
            </div>
            <p className="leading-relaxed text-dark/70 text-lg">
              Aucun cookie publicitaire, marketing ou de suivi personnel n'est utilisé.
            </p>
          </motion.section>

          {/* 6. Contact */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">6.</span> Contact
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="mailto:contact@silvercore.fr" className="bg-black/5 p-6 rounded-2xl border border-black/5 hover:border-primary/50 transition-colors group">
                <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-2">Email</p>
                <p className="text-sm font-bold text-dark group-hover:text-primary transition-colors">contact@silvercore.fr</p>
              </a>
              <a href="https://taap.it/silvercore.discord.support" className="bg-black/5 p-6 rounded-2xl border border-black/5 hover:border-primary/50 transition-colors group">
                <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-2">Discord</p>
                <p className="text-sm font-bold text-dark group-hover:text-primary transition-colors">Serveur Support</p>
              </a>
              <a href="https://taap.it/silvercore.discord" className="bg-black/5 p-6 rounded-2xl border border-black/5 hover:border-primary/50 transition-colors group">
                <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-2">Discord</p>
                <p className="text-sm font-bold text-dark group-hover:text-primary transition-colors">Serveur Général</p>
              </a>
            </div>
            <p className="mt-6 text-sm italic text-dark/40">Nous nous efforçons de répondre dans les plus brefs délais.</p>
          </motion.section>

          {/* 7. Mise à jour */}
          <motion.section variants={itemVariants} className="glass-panel p-8 md:p-10 border border-black/5 bg-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <RefreshCw size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-dark">
                <span className="text-primary mr-2">7.</span> Mise à jour
              </h2>
            </div>
            <p className="leading-relaxed text-dark/70 text-lg">
              Ces mentions légales peuvent être modifiées à tout moment afin de rester conformes à la législation en vigueur.
            </p>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
}