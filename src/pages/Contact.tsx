import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AnimatedText } from '@/src/components/ui/AnimatedText';
import { MagneticButton } from '@/src/components/ui/MagneticButton';
import { HoverCard } from '@/src/components/ui/HoverCard';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    // Keep form default behavior for formspree
  };

  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-dark">
              <AnimatedText text="Parlons de votre" className="mb-2" />
              <span className="text-primary">
                <AnimatedText text="confidentialité" delay={0.3} />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-dark/60 mb-16 leading-relaxed max-w-lg"
            >
              Une question, un retour ou simplement envie de dire bonjour ? 
              Notre équipe est à votre écoute pour échanger sur vos besoins.
            </motion.p>

            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl mb-3 text-dark">Email</h4>
                  <div className="space-y-2 text-dark/60">
                    <p className="flex items-center gap-2 hover:text-dark transition-colors">
                      <a href="mailto:contact@silvercore.fr" className="font-medium text-primary">contact@silvercore.fr</a>
                      <span className="text-sm">→ contact général</span>
                    </p>
                    <p className="flex items-center gap-2 hover:text-dark transition-colors">
                      <a href="mailto:support@silvercore.fr" className="font-medium text-primary">support@silvercore.fr</a>
                      <span className="text-sm">→ service client</span>
                    </p>
                    <p className="flex items-center gap-2 hover:text-dark transition-colors">
                      <a href="mailto:host@silvercore.fr" className="font-medium text-primary">host@silvercore.fr</a>
                      <span className="text-sm">→ service infrastructures</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary-dark shrink-0 group-hover:scale-110 group-hover:bg-primary-dark/10 transition-all duration-300">
                  <MessageSquare size={28} />
                </div>
                <div className='flex flex-col'>
                  <h4 className="font-display font-bold text-2xl mb-3 text-dark">Discord</h4>
                  <p className="text-dark/60 mb-3">Rejoignez notre communauté pour un support rapide et des échanges en direct.</p>
                  <div className="flex flex-col gap-2">
                    <a href="https://taap.it/silvercore.discord" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary font-bold group/link">
                      <span className="w-0 h-[2px] bg-primary-dark group-hover/link:w-4 transition-all" />
                      Discord Silvercore
                    </a>
                    <a href="https://taap.it/silvercore.discord.support" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary font-bold group/link">
                      <span className="w-0 h-[2px] bg-primary-dark group-hover/link:w-4 transition-all" />
                      Discord Support
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
              className="perspective-[1000px] h-full"
            >
              <HoverCard className="h-full rounded-[3rem]" glow={true}>
                <div className="relative p-8 md:p-12 h-full flex flex-col justify-center bg-white/80 backdrop-blur-2xl z-10">
                  <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none" />
                  
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20 relative z-10"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, delay: 0.2 }}
                        className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8 border border-primary/20"
                      >
                        <CheckCircle2 size={48} />
                      </motion.div>
                      <h2 className="text-4xl font-display font-bold mb-4 text-dark">Message envoyé !</h2>
                      <p className="text-dark/60 mb-10 text-lg">Merci de nous avoir contacté.<br/>Nous vous répondrons dans les plus brefs délais.</p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-bold hover:text-primary-dark transition-colors"
                      >
                        Envoyer un autre message
                      </button>
                    </motion.div>
                  ) : (
                    <form action="https://formspree.io/f/xvzdjvoy" method="POST" className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                      <div className="space-y-2 relative group">
                        <label className={`absolute left-6 transition-all duration-300 pointer-events-none font-bold uppercase tracking-wider ${focusedInput === 'name' ? '-top-3 text-xs text-primary bg-white px-2' : 'top-5 text-sm text-dark/40'}`}>
                          Nom complet
                        </label>
                        <input
                          type="text"
                          name='name'
                          required
                          onFocus={() => setFocusedInput('name')}
                          onBlur={(e) => setFocusedInput(e.target.value ? 'name' : null)}
                          className="w-full bg-black/[0.02] border border-black/10 rounded-2xl px-6 py-5 focus:border-primary outline-none transition-all focus:bg-black/[0.05] focus:shadow-[0_0_20px_rgba(100,108,255,0.1)] text-dark"
                        />
                      </div>
                      
                      <div className="space-y-2 relative group">
                        <label className={`absolute left-6 transition-all duration-300 pointer-events-none font-bold uppercase tracking-wider ${focusedInput === 'email' ? '-top-3 text-xs text-primary bg-white px-2' : 'top-5 text-sm text-dark/40'}`}>
                          Email
                        </label>
                        <input
                          type="email"
                          name='email'
                          required
                          onFocus={() => setFocusedInput('email')}
                          onBlur={(e) => setFocusedInput(e.target.value ? 'email' : null)}
                          className="w-full bg-black/[0.02] border border-black/10 rounded-2xl px-6 py-5 focus:border-primary outline-none transition-all focus:bg-black/[0.05] focus:shadow-[0_0_20px_rgba(100,108,255,0.1)] text-dark"
                        />
                      </div>
                      
                      <div className="space-y-2 relative group">
                        <label className={`absolute left-6 transition-all duration-300 pointer-events-none font-bold uppercase tracking-wider ${focusedInput === 'message' ? '-top-3 text-xs text-primary bg-white px-2' : 'top-5 text-sm text-dark/40'}`}>
                          Message
                        </label>
                        <textarea
                          name='message'
                          required
                          onFocus={() => setFocusedInput('message')}
                          onBlur={(e) => setFocusedInput(e.target.value ? 'message' : null)}
                          className="w-full bg-black/[0.02] border border-black/10 rounded-2xl px-6 py-5 focus:border-primary outline-none transition-all h-40 resize-none focus:bg-black/[0.05] focus:shadow-[0_0_20px_rgba(100,108,255,0.1)] text-dark"
                        />
                      </div>
                      
                      <MagneticButton
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-bold text-lg shadow-[0_4px_20px_rgba(100,108,255,0.2)]"
                      >
                        Envoyer le message <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </MagneticButton>
                    </form>
                  )}
                </div>
              </HoverCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
