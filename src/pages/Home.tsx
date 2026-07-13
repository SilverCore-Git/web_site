import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, ArrowRight, Lock, Zap, Globe, Leaf, Heart, CheckCircle2, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, POLICIES } from '@/src/constants';
import { Background3D } from '@/src/components/ui/Background3D';
import { AnimatedText } from '@/src/components/ui/AnimatedText';
import { MagneticButton } from '@/src/components/ui/MagneticButton';
import { HoverCard } from '@/src/components/ui/HoverCard';

export function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        <Background3D />
        
        <motion.div 
          style={{ y, opacity }}
          className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
        >


          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.1] mb-8 text-dark">
            <AnimatedText text="Des services numériques" wordAnimation />
            <span className="block mt-2">
              <span className="text-dark">pensés pour votre </span>
              <span className="text-primary inline-block">
                <AnimatedText text="confidentialité" once delay={0.5} />
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-lg md:text-xl text-dark/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Silvercore conçoit des outils numériques basés sur la simplicité et l'intuitivité tout en garantissant une sécurité maximale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Link to="/services" className="w-full sm:w-auto">
              <MagneticButton className="w-full bg-primary hover:bg-primary-dark text-white shadow-[0_4px_20px_rgba(100,108,255,0.3)]">
                Découvrir nos services
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </Link>
            <Link to="/blog" className="w-full sm:w-auto">
              <MagneticButton className="w-full bg-black/5 hover:bg-black/10 text-dark">
                Lire le blog
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-dark/40">Scroll</span>
          <div className="w-[1px] h-12 bg-black/10 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 w-full h-1/2 bg-primary"
              animate={{ y: ['0%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Lock />, title: "Sécurité Maximale", desc: "Chiffrement de bout en bout systématique lorsque l'architecture le permet. Vos données sont inaccessibles, même pour nous.", color: "text-primary", bg: "bg-primary/10" },
              { icon: <Zap />, title: "Simplicité & Vitesse", desc: "Des interfaces épurées, sans fioritures, conçues pour être prises en main en quelques secondes seulement.", color: "text-primary-dark", bg: "bg-primary-dark/10" },
              { icon: <Globe />, title: "100% Français", desc: "Hébergement souverain en France. Nous respectons les normes RGPD les plus strictes pour protéger vos droits.", color: "text-dark", bg: "bg-black/5" }
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              >
                <HoverCard className="h-full">
                  <div className="p-8 h-full flex flex-col relative z-10">
                    <div className={`w-14 h-14 ${feat.bg} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                      <span className={feat.color}>{feat.icon}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4 text-dark">{feat.title}</h3>
                    <p className="text-dark/60 leading-relaxed group-hover:text-dark/80 transition-colors duration-300">
                      {feat.desc}
                    </p>
                  </div>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-display font-bold mb-6 text-dark"
            >
              Nos outils <span className="text-primary">phares</span>
            </motion.h2>
            <p className="text-dark/60 text-xl max-w-2xl mx-auto">
              Des solutions modernes qui respectent votre vie privée, sans compromis sur les fonctionnalités.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? 15 : -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                className="perspective-[1000px]"
              >
                <HoverCard glow={true}>
                  <div className="p-10 h-full flex flex-col relative z-10 group/card">
                    <div className="flex justify-between items-start mb-10">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 bg-black/5 rounded-3xl flex items-center justify-center overflow-hidden border border-black/5 group-hover/card:border-primary/50"
                      >
                        <img src={ service.icon } className='w-full h-full object-cover' />
                      </motion.div>
                      <span className="px-4 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-bold uppercase tracking-widest text-primary-dark">
                        {service.status}
                      </span>
                    </div>
                    <h3 className="text-4xl font-display font-bold mb-6 text-dark">{service.name}</h3>
                    <p className="text-dark/60 text-lg mb-10 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-primary font-bold group-hover/card:gap-6 group-hover/card:text-primary-dark transition-all duration-300"
                    >
                      <span className="relative">
                        Accéder au service
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover/card:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight className="w-5 h-5 bg-primary/10 rounded-full p-1 text-primary group-hover/card:bg-primary group-hover/card:text-white transition-colors" />
                    </a>
                  </div>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies / Values */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 origin-top-left -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {POLICIES.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col gap-6 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-black/5 group-hover:bg-primary/10 transition-colors duration-500">
                    {index === 0 && <Leaf className="text-primary-dark" size={32} />}
                    {index === 1 && <Heart className="text-primary" size={32} />}
                    {index === 2 && <Shield className="text-dark" size={32} />}
                  </div>
                  <h4 className="text-3xl font-display font-bold text-dark">{policy.title}</h4>
                </div>
                <p className="text-dark/60 leading-relaxed text-lg">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Hosting Approach */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-dark"
            >
              Notre démarche d'<span className="text-primary">auto-hébergement</span>
            </motion.h2>
            <p className="text-dark/60 text-xl max-w-2xl mx-auto">
              Découvrez pourquoi nous avons choisi de contrôler nos propres infrastructures et ce que cela signifie pour vous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Server />, title: "Souveraineté numérique", desc: "En hébergeant nos services en France sur nos propres serveurs, nous ne dépendons d'aucun géant technologique américain ou chinois. Vos données restent sous contrôle français.", delay: 0 },
              { icon: <CheckCircle2 />, title: "RGPD strict", desc: "En tant qu'acteur français, nous appliquons le Règlement Général de Protection des Données de façon rigoureuse. Aucune vente de données, aucun suivi invasif.", delay: 0.1 },
              { icon: <Lock />, title: "Transparence totale", desc: "Vous savez exactement où sont hébergées vos données, comment elles sont traitées, et qui y a accès. Pas de mystère, pas de surprises.", delay: 0.2 },
              { icon: <Shield />, title: "Performance garantie", desc: "L'auto-hébergement nous permet d'optimiser chaque aspect de nos services pour vous offrir une latence minimale et une disponibilité maximale.", delay: 0.3 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: item.delay, type: "spring" }}
              >
                <HoverCard className="h-full" glow={false}>
                  <div className="p-10 relative z-10 flex flex-col h-full bg-gradient-to-br from-black/[0.02] to-transparent">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
                      <span className="text-primary scale-150">{item.icon}</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-4 text-dark">{item.title}</h3>
                    <p className="text-dark/60 leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
