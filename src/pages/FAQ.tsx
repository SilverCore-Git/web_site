import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '@/src/constants';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Besoin d'aide ?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50"
          >
            Trouvez les réponses à vos questions sur Silvercore et nos services.
          </motion.p>
        </header>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark rounded-2xl border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold">{faq.question}</span>
                <ChevronDown
                  className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 text-white/50 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[2.5rem] glass border-primary/20 text-center">
           <MessageCircle className="mx-auto text-primary mb-6" size={48} />
           <h3 className="text-2xl font-display font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h3>
           <p className="text-white/50 mb-8">Demandez tout ce qui vous passe par la tête, nous répondons à tout.</p>
           <Link
             to="/contact"
             className="inline-flex bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
           >
             Nous contacter
           </Link>
        </div>
      </div>
    </div>
  );
}
