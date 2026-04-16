import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Parlons de votre <span className="text-gradient">confidentialité</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/50 mb-12"
            >
              Une question, un retour ou simplement envie de dire bonjour ? 
              Notre équipe est à votre écoute.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-white/50">contact@silvercore.fr</p>
                  <p className="text-white/50">support@silvercore.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-secondary shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Discord</h4>
                  <p className="text-white/50">Rejoignez notre communauté pour un support rapide.</p>
                  <a href="#" className="text-secondary hover:underline text-sm font-bold">Ouvrir Discord</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Localisation</h4>
                  <p className="text-white/50">Hébergé et géré avec fierté en France.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 glass-dark rounded-2xl border-white/5 flex items-center gap-4">
               <ShieldCheck className="text-primary" size={32} />
               <p className="text-sm text-white/40">
                 Vos messages sont transmis via une connexion sécurisée et ne sont jamais partagés avec des tiers.
               </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-50" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative glass-dark rounded-[3rem] p-8 md:p-12 border-white/5"
            >
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mx-auto mb-8">
                    <Send size={40} />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4">Message envoyé !</h2>
                  <p className="text-white/50 mb-8">Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Nom complet</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all h-40 resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Envoyer le message <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
