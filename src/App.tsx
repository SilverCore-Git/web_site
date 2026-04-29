import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '@/src/components/Layout';
import { Home } from '@/src/pages/Home';
import { Services } from '@/src/pages/Services';
import { Blog } from '@/src/pages/Blog';
import { BlogPost } from '@/src/pages/BlogPost';
import { FAQ } from '@/src/pages/FAQ';
import { Contact } from '@/src/pages/Contact';
import { Legal } from './pages/Legal';
import { Privacy } from './pages/Privacy';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/legal' element={<Legal />} />
            <Route path='/privacy' element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
