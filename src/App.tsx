import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '@/src/components/Layout';
import { Home } from '@/src/pages/Home';
import { Services } from '@/src/pages/Services';
import { Blog } from '@/src/pages/Blog';
import { BlogPost } from '@/src/pages/BlogPost';
import { Admin } from '@/src/pages/Admin';
import { FAQ } from '@/src/pages/FAQ';
import { Contact } from '@/src/pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
