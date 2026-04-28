import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Instagram, ExternalLink } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      
      <div className={cn(
        "absolute inset-0 transition-all duration-300",
        scrolled ? "bg-dark/80 backdrop-blur-lg" : "bg-transparent"
      )} />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src='/assets/logo/score/silvercore_logo_text.png' className='h-9' />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex flex-row gap-2 justify-center items-center",
                location.pathname === link.path ? "text-primary" : "text-white/70"
              )}
            >
                { link.redirect ? <ExternalLink size={16} /> : undefined }
                {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full inset-x-0 border-b border-white/5 p-6 flex flex-col gap-4 md:hidden"
          >
            <div className="absolute inset-0 transition-all duration-300 z-10 bg-dark/80 backdrop-blur-lg" />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 border-b border-white/5 flex flex-row gap-2 justify-center items-center z-20",
                  location.pathname === link.path ? "text-primary" : "text-white/70"
                )}
              >
                { link.redirect ? <ExternalLink size={16} /> : undefined }
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-white/5 pt-20 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="col-span-1 md:col-span-2">

          <div className='flex justify-between max-w-sm'>

            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src='/assets/logo/score/silvercore_logo_text.png' className='h-9' />
            </Link>

            <iframe 
              src="https://status.silvercore.fr/embed-badges/live-status?align=start&background-dark=1a1a1a&text-dark=ffffff" 
              width="190" 
              height="30" 
              loading="lazy"
              title="Statut des services Silvercore"
              className="mb-6 "
              frameBorder={0}
              scrolling='no'
            />

          </div>
          
          <p className="text-white/50 max-w-md mb-8">
            SilverCore vous offre des services utilitaires originaux, 
            respectueux de votre vie privée et accessibles à tous.
          </p>
          <div className="flex gap-4">
            
            <a 
              className='
                bg-dark w-10 h-10 cursor-pointer 
                hover:scale-110 transition-all duration-300 
                rounded-lg flex justify-center items-center
              '
              href='https://taap.it/silvercore.insta'
            >
              <Instagram size={20} />
            </a>

            <a 
              className='
                bg-dark w-10 h-10 cursor-pointer 
                hover:scale-110 transition-all duration-300 
                rounded-lg flex justify-center items-center
              '
              href='https://taap.it/silvercore.discord'
            >
              <i className='bi bi-discord text-xl' />
            </a>

            <a 
              className='
                bg-dark w-10 h-10 cursor-pointer 
                hover:scale-110 transition-all duration-300 
                rounded-lg flex justify-center items-center
              '
              href='https://taap.it/silvercore.github'
            >
              <Github size={20} />
            </a>

          </div>
        </div>

        <div>

          <h4 className="font-display font-bold mb-6">Information</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Confidentialité</Link></li>
            <li><Link to="/legal" className="hover:text-primary transition-colors">Mentions légales</Link></li>
          </ul>

        </div>

        <div>

          <h4 className="font-display font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><Link to="/contact" className="hover:text-primary transition-colors">Formulaire</Link></li>
            <li><a href="https://taap.it/silvercore.discord" className="hover:text-primary transition-colors">Discord Silvercore</a></li>
            <li><a href="https://taap.it/silvercore.discord.support" className="hover:text-primary transition-colors">Discord support</a></li>
          </ul>

        </div>

        <div>

          <h4 className="font-display font-bold mb-6">Nos services</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><a href="https://www.silvernote.fr" className="hover:text-primary transition-colors">Silvernote</a></li>
            <li><a href="https://www.silvertransfert.fr" className="hover:text-primary transition-colors">Silvertransfert</a></li>
          </ul>
          
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white text-xs ">
        <p>© {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.</p>
        <p>Hébergé en France</p>
      </div>
    </footer>
  );
}
