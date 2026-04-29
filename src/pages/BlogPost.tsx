import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { BlogService } from '@/src/services/blogService';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export function BlogPost() 
{
  
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BlogService.getPostById(id || "");

  if (!post) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-4xl font-display font-bold mb-8">Article non trouvé</h1>
        <Link to="/blog" className="text-primary hover:underline">Retour au blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour
        </motion.button>

        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-widest text-primary mb-4"
          >
            {post.category}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight"
          >
            {post.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-white/50 border-y border-white/5 py-6"
          >
            <span className="flex items-center gap-2"><Calendar size={18} /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={18} /> {post.author}</span>
            {/* <button className=" cursor-pointer flex items-center gap-2 hover:text-primary transition-colors ml-auto">
              <Share2 size={18} /> Partager
            </button> */}
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-primary max-w-none"
        >
          <div className="markdown-body">
            <Markdown>{post.content}</Markdown>
          </div>
        </motion.div>
        
        <footer className="mt-20 pt-10 border-t border-white/5">
           <div className="bg-dark-lighter p-8 rounded-3xl flex items-center gap-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                {post.author
                  .split(" ")
                  .map(word => word[0])
                  .join("")
                }
              </div>
              <div>
                 <h4 className="font-display font-bold text-lg">{post.author}</h4>
                 <p className="text-white/50 text-sm">Nous écrivons sur la vie privée, la sécurité et l'avenir du web.</p>
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
}
