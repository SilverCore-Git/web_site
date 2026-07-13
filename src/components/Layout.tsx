import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, Github, Instagram, ExternalLink } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { AnimatedText } from './ui/AnimatedText';
import { MagneticButton } from './ui/MagneticButton';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 100], ['100%', '80%']);
  const navY = useTransform(scrollY, [0, 100], [0, 20]);
  const navBg = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']);
  const navBorder = useTransform(scrollY, [0, 100], ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.05)']);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-6 pointer-events-none"
    >
      <motion.div
        style={{ width: navWidth, y: navY, backgroundColor: navBg, borderColor: navBorder }}
        className="pointer-events-auto border rounded-full backdrop-blur-xl transition-shadow shadow-sm flex items-center justify-between px-6 py-3 max-w-7xl"
      >
        <Link to="/" className="flex items-center gap-2 group relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src='/assets/logo/score/silvercore_logo_text.png'
            className='h-8 relative z-10'
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.path}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 flex flex-row gap-2 justify-center items-center group",
                  location.pathname === link.path ? "text-primary" : "text-dark/70 hover:text-dark"
                )}
              >
                {link.redirect ? <ExternalLink size={16} /> : undefined}
                <span>{link.name}</span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary rounded-full"
                  />
                )}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary-light transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-dark p-2 hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 10 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-6 right-6 border border-black/5 p-6 flex flex-col gap-4 md:hidden glass-panel pointer-events-auto"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.path}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "text-lg font-medium py-3 border-b border-black/5 flex flex-row gap-2 justify-start items-center z-20",
                    location.pathname === link.path ? "text-primary" : "text-dark/70 hover:text-dark"
                  )}
                >
                  {link.redirect ? <ExternalLink size={16} /> : undefined}
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#fafafa] border-t border-black/5 pt-32 pb-10 px-6 mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 z-10">
        <div className="col-span-1 md:col-span-2">
          <div className='flex flex-col gap-6 max-w-sm'>
            <Link to="/" className="flex items-center gap-2 mb-2 group">
              <img src='/assets/logo/score/silvercore_logo_text.png' className='h-10 group-hover:scale-105 transition-transform' />
            </Link>

            <iframe
              src="https://status.silvercore.fr/embed-badges/live-status?align=start&background-dark=fafafa&text-dark=111113"
              width="180"
              height="30"
              loading="lazy"
              title="Statut des services Silvercore"
              className="border-0 p-0  overflow-hidden"
              frameBorder={0}
              scrolling='no'
            />
          </div>

          <p className="text-dark/60 max-w-md mt-8 mb-8 text-lg font-light">
            SilverCore vous offre des services utilitaires originaux,
            respectueux de votre vie privée et accessibles à tous.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <Instagram size={20} />, href: 'https://taap.it/silvercore.insta' },
              { icon: <i className='bi bi-discord text-xl' />, href: 'https://taap.it/silvercore.discord' },
              { icon: <Github size={20} />, href: 'https://taap.it/silvercore.github' }
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-black/5 border border-black/5 w-12 h-12 cursor-pointer rounded-xl flex justify-center items-center text-dark/60 hover:text-primary hover:border-primary/30 transition-colors'
                href={social.href}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {[
          {
            title: "Information",
            links: [
              { name: "Confidentialité", path: "/privacy" },
              { name: "Mentions légales", path: "/legal" }
            ]
          },
          {
            title: "Contact",
            links: [
              { name: "Formulaire", path: "/contact" },
              { name: "Discord Silvercore", href: "https://taap.it/silvercore.discord" },
              { name: "Discord support", href: "https://taap.it/silvercore.discord.support" }
            ]
          },
          {
            title: "Nos services",
            links: [
              { name: "Silvernote", href: "https://www.silvernote.fr" },
              { name: "Silvertransfert", href: "https://www.silvertransfert.fr" }
            ]
          }
        ].map((column, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <h4 className="font-display font-bold text-xl mb-6 text-dark">{column.title}</h4>
            <ul className="space-y-4 text-dark/60">
              {column.links.map((link, j) => (
                <li key={j}>
                  {link.path ? (
                    <Link to={link.path} className="hover:text-primary transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-4" />
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-4" />
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="relative max-w-7xl mx-auto mt-32 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-dark/40 text-sm z-10"
      >
        <p>© {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.</p>
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
          Hébergé en France
        </p>
      </motion.div>
    </footer>
  );
}
