import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '@/src/components/Layout';
import { Home } from '@/src/pages/Home';
import { Services } from '@/src/pages/Services';
import { Blog } from '@/src/pages/Blog';
import { BlogPost } from '@/src/pages/BlogPost';
import { FAQ } from '@/src/pages/FAQ';
import { Contact } from '@/src/pages/Contact';
import { Legal } from '@/src/pages/Legal';
import { Privacy } from '@/src/pages/Privacy';
import { startKit } from '@/src/kit';
import { startTransitions, enter } from '@/src/transitions';

export default function App() {
  useEffect(() => { startKit(); }, []);
  // before the first paint, so the blocks start hidden and rise in instead of flashing
  useLayoutEffect(() => { startTransitions(); enter(); }, []);

  return (
    <Router>
      <Navbar />
      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
