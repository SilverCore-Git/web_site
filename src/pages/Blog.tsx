import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BlogService, BlogPost } from '@/src/services/blogService';
import { Calendar, User, ArrowRight, PlusCircle } from 'lucide-react';

export function Blog() {
  const [posts] = useState<BlogPost[]>(BlogService.getAllPosts());

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              Le <span className="text-gradient">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/50 max-w-2xl"
            >
              Actualités, guides et réflexions sur la vie privée et la technologie.
            </motion.p>
          </div>
          
          <Link
            to="/admin"
            className="flex items-center gap-2 text-white/30 hover:text-primary transition-colors text-sm font-medium"
          >
            <PlusCircle size={18} />
            Espace Admin
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark rounded-3xl overflow-hidden border-white/5 group hover:border-primary/30 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                 <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display font-bold text-2xl">
                    {post.category}
                 </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-white/40 mb-4 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                
                <h2 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-white/50 mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                >
                  Lire la suite <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
