import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import { Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Services() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Nos <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-3xl"
          >
            Silvercore propose des outils numériques modernes qui respectent votre vie privée. 
            Nos services sont simple, sécurisé et hébergés en France.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-[3rem] overflow-hidden border-white/5 flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <img src={ service.icon } className='rounded-xl' />
                  </div>
                  <div>
                    <h2 className="text-4xl font-display font-bold">{service.name}</h2>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60">{service.status}</span>
                  </div>
                </div>
                
                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-12">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <p className="text-white/50">{service.details}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <p className="text-white/50">Hébergement souverain en France</p>
                  </div>
                </div>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  Ouvrir {service.name} <ArrowRight size={20} />
                </a>
              </div>
              
              <div className="lg:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 relative min-h-[400px] flex items-center justify-center p-12">
                 <div className="w-full aspect-video glass rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="text-white/20 font-display font-black text-4xl rotate-[-10deg] select-none">
                       <img src={ service.preview } />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
