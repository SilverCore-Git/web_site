import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '@/src/constants';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedText } from '@/src/components/ui/AnimatedText';
import { MagneticButton } from '@/src/components/ui/MagneticButton';
import { HoverCard } from '@/src/components/ui/HoverCard';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-light/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-24 mt-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 flex justify-center text-dark">
            <AnimatedText text="Besoin d'aide ?" wordAnimation delay={0.2} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-dark/60"
          >
            Trouvez les réponses à vos questions sur Silvercore et nos services.
          </motion.p>
        </header>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 60 }}
              className="group"
            >
              <div 
                className={`glass-panel overflow-hidden transition-colors duration-500 ${openIndex === index ? 'border-primary/30 bg-black/5' : 'border-black/5 hover:border-black/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-8 text-left flex items-center justify-between"
                >
                  <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-dark'}`}>
                    {faq.question}
                  </span>
                  <motion.div 
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary/10 text-primary' : 'bg-black/5 text-dark/50 group-hover:text-dark'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 text-dark/60 leading-relaxed text-lg">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className="mt-32"
        >
          <HoverCard glow={true}>
            <div className="p-16 text-center relative z-10 flex flex-col items-center">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20"
              >
                <MessageCircle className="text-primary" size={40} />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-dark">Vous n'avez pas trouvé votre réponse ?</h3>
              <p className="text-dark/60 mb-10 text-xl max-w-xl">
                Demandez tout ce qui vous passe par la tête, nous répondons à toutes les demandes avec plaisir.
              </p>
              <Link to="/contact">
                <MagneticButton className="bg-primary hover:bg-primary-dark text-white text-lg px-10">
                  Nous contacter
                </MagneticButton>
              </Link>
            </div>
          </HoverCard>
        </motion.div>
      </div>
    </div>
  );
}
