import { useEffect } from 'react';
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

export default function App() {
  useEffect(() => { startKit(); }, []);

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
