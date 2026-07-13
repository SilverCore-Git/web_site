import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BlogService, BlogPost as BlogPostType } from '@/src/services/blogService';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { AnimatedText } from '@/src/components/ui/AnimatedText';
import { HoverCard } from '@/src/components/ui/HoverCard';

export function Blog() {
  const [posts] = useState<BlogPostType[]>(BlogService.getAllPosts());

  return (
    <div className="relative pt-32 pb-20 px-6 min-h-screen overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#fafafa] to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-20">
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 mt-10">
          <div>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 flex items-center">
              <span className="text-dark mr-4">Le</span>
              <span className="text-primary">
                <AnimatedText text="Blog" delay={0.2} />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-dark/60 max-w-2xl leading-relaxed"
            >
              Actualités, guides et réflexions sur la vie privée et la technologie.
            </motion.p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.sort((a, b) => b.date.localeCompare(a.date)).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
              className="h-full"
            >
              <Link to={`/blog/${post.id}`} className="block h-full">
                <HoverCard className="h-full group">
                  <div className="flex flex-col h-full bg-white relative z-10 overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/5 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay" />
                      <div className="absolute inset-0 flex items-center justify-center text-dark/10 font-display font-black text-4xl tracking-widest transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
                          {post.category}
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-black/5 text-xs font-bold uppercase tracking-widest text-dark/80">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-primary mb-4 font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                      </div>
                      
                      <h2 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors leading-tight text-dark">
                        {post.title}
                      </h2>
                      
                      <p className="text-dark/60 mb-8 line-clamp-3 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-dark font-bold group-hover:text-primary transition-colors">
                        <span className="relative overflow-hidden">
                          Lire la suite
                          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </span>
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
