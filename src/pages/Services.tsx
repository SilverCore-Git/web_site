import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatedText } from '@/src/components/ui/AnimatedText';
import { HoverCard } from '@/src/components/ui/HoverCard';
import { MagneticButton } from '@/src/components/ui/MagneticButton';

export function Services() {
  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary-light/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 mt-10">
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8">
            <AnimatedText text="Nos" className="inline-block mr-4 text-dark" />
            <span className="text-primary inline-block">
              <AnimatedText text="Services" delay={0.2} />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-dark/60 max-w-3xl leading-relaxed"
          >
            Silvercore propose des outils numériques modernes qui respectent votre vie privée. 
            Nos services sont simples, sécurisés et hébergés en France.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-16">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, type: "spring", stiffness: 50, damping: 20 }}
            >
              <HoverCard className="h-full rounded-[3rem]" glow={false}>
                <div className="flex flex-col lg:flex-row h-full bg-white/80 backdrop-blur-3xl relative z-10">
                  <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    
                    <div className="flex items-center gap-6 mb-10 relative z-10">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-20 h-20 bg-black/5 rounded-[2rem] flex items-center justify-center border border-black/5 overflow-hidden shadow-sm"
                      >
                        <img src={ service.icon } className='w-full h-full object-cover' />
                      </motion.div>
                      <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-2 text-dark">{service.name}</h2>
                        <span className="px-4 py-1 rounded-full bg-black/5 border border-black/5 text-xs font-bold uppercase tracking-widest text-primary-dark inline-block">
                          {service.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-xl text-dark/60 mb-10 leading-relaxed relative z-10">
                      {service.description}
                    </p>
                    
                    <div className="space-y-5 mb-12 relative z-10">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-black/5 border border-black/5"
                      >
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={24} />
                        <p className="text-dark/70 text-lg">{service.details}</p>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-black/5 border border-black/5"
                      >
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={24} />
                        <p className="text-dark/70 text-lg">Hébergement souverain en France</p>
                      </motion.div>
                    </div>

                    <div className="relative z-10">
                      <a href={service.link} target="_blank" rel="noopener noreferrer">
                        <MagneticButton className="bg-primary text-white w-full sm:w-auto hover:bg-primary-dark">
                          Ouvrir {service.name} <ArrowRight size={20} />
                        </MagneticButton>
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full flex items-center justify-center p-12 overflow-hidden border-t lg:border-t-0 lg:border-l border-black/5">
                    {/* Abstract background gradient for the right side */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-light/5 to-transparent" />
                    <motion.div 
                      className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay"
                      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    />
                    
                    <motion.div 
                      whileHover={{ scale: 1.05, rotateY: -10, rotateX: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-full aspect-video glass rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 flex items-center justify-center overflow-hidden relative z-10 perspective-[1000px]"
                    >
                      <img src={ service.preview } className="w-full h-full object-cover transform scale-105" alt={`${service.name} preview`} />
                    </motion.div>
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
