import { motion } from 'motion/react';
import { Shield, ArrowRight, Lock, Zap, Globe, Leaf, Heart, CheckCircle2, Server, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, POLICIES, SITE_NAME } from '@/src/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-bold leading-[1.1] mb-8"
          >
            Des services numériques pensés pour votre <span className="text-gradient">confidentialité</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Silvercore conçoit des outils numériques basés sur la simplicité et l'intuitivité tout en garant une sécurisés maximal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/services"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Découvrir nos services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/blog"
              className="w-full sm:w-auto glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
            >
              Lire le blog
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 bg-dark-lighter/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-dark border-white/5"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Sécurité Maximale</h3>
              <p className="text-white/50 leading-relaxed">
                Chiffrement de bout en bout systématique lorsque l'architecture le permet. Vos données sont inaccessibles, même pour nous.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl glass-dark border-white/5"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Simplicité & Vitesse</h3>
              <p className="text-white/50 leading-relaxed">
                Des interfaces épurées, sans fioritures, conçues pour être prises en main en quelques secondes seulement.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-3xl glass-dark border-white/5"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">100% Français</h3>
              <p className="text-white/50 leading-relaxed">
                Hébergement souverain en France. Nous respectons les normes RGPD les plus strictes pour protéger vos droits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Nos outils phares</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Des solutions modernes qui respectent votre vie privée, sans compromis sur les fonctionnalités.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                viewport={{ once: true }}
                className="
                  group relative p-1 rounded-[2.5rem] 
                  bg-gradient-to-br from-white/10 to-transparent 
                  hover:from-primary/50 hover:to-secondary/50 
                  transition-all duration-500
                "
              >
                <a href={service.link} className="bg-dark rounded-[2.4rem] p-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <img src={ service.icon } className='rounded-xl' />
                    </div>
                    <span className="px-4 py-1 rounded-full bg-white/5 text-xs font-bold uppercase tracking-widest text-white/40">
                      {service.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">{service.name}</h3>
                  <p className="text-white/60 text-lg mb-8 flex-grow">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Accéder au service <ArrowRight size={20} />
                  </a>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies / Values */}
      <section className="py-32 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {POLICIES.map((policy, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  {index === 0 && <Leaf className="text-secondary" />}
                  {index === 1 && <Heart className="text-primary" />}
                  {index === 2 && <Shield className="text-white" />}
                  <h4 className="text-2xl font-display font-bold">{policy.title}</h4>
                </div>
                <p className="text-white/50 leading-relaxed">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Hosting Approach */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Notre démarche d'auto-hébergement</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Découvrez pourquoi nous avons choisi de contrôler nos propres infrastructures et ce que cela signifie pour vous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-dark border-white/5"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Server className="text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Souveraineté numérique</h3>
              <p className="text-white/50 leading-relaxed">
                En hébergeant nos services en France sur nos propres serveurs, nous ne dépendons d'aucun géant technologique américain ou chinois. Vos données restent sous contrôle français.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl glass-dark border-white/5"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">RGPD strict</h3>
              <p className="text-white/50 leading-relaxed">
                En tant qu'acteur français, nous appliquons le Règlement Général de Protection des Données de façon rigoureuse. Aucune vente de données, aucun suivi invasif.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-3xl glass-dark border-white/5"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Transparence totale</h3>
              <p className="text-white/50 leading-relaxed">
                Vous savez exactement où sont hébergées vos données, comment elles sont traitées, et qui y a accès. Pas de mystère, pas de surprises.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-8 rounded-3xl glass-dark border-white/5"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Performance garantie</h3>
              <p className="text-white/50 leading-relaxed">
                L'auto-hébergement nous permet d'optimiser chaque aspect de nos services pour vous offrir une latence minimale et une disponibilité maximale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
