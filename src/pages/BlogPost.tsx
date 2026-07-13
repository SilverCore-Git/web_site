import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import Markdown from 'react-markdown';
import { BlogService } from '@/src/services/blogService';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import remarkGfm from 'remark-gfm';
import { AnimatedText } from '@/src/components/ui/AnimatedText';

export function BlogPost() 
{
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BlogService.getPostById(id || "");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const markdownComponents = {
    h1: ({ node, ...props }) => <h1 className="text-4xl md:text-5xl font-display font-bold mt-16 mb-8 text-dark leading-tight" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-3xl font-display font-bold mt-12 mb-6 text-dark leading-tight" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-2xl font-display font-bold mt-10 mb-4 text-dark/90" {...props} />,
    p: ({ node, ...props }) => <p className="leading-loose mb-8 text-dark/70 text-lg" {...props} />,
    a: ({ node, ...props }) => <a className="text-primary hover:text-primary-dark underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 mb-8 space-y-3 text-dark/70 text-lg marker:text-primary" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 mb-8 space-y-3 text-dark/70 text-lg marker:text-primary" {...props} />,
    code: ({ node, inline, ...props }) => 
      inline 
        ? <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded font-mono text-sm" {...props} />
        : <code className="block bg-white border border-black/10 p-6 rounded-2xl font-mono text-sm text-dark/80 overflow-x-auto my-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]" {...props} />,
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 pr-4 py-4 rounded-r-2xl italic text-dark/70 my-10 text-xl font-display" {...props} />
    ),
  };

  if (!post) 
  {
    return (
      <div className="pt-40 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-display font-bold mb-8 text-dark">Article non trouvé</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 bg-black/5 hover:bg-black/10 text-dark px-6 py-3 rounded-full transition-colors">
          <ArrowLeft size={18} /> Retour au blog
        </Link>
      </div>
    );
  }

  // Calculate rough reading time
  const words = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light origin-left z-50"
        style={{ scaleX }}
      />
      <div className="relative pt-32 pb-20 px-6 min-h-screen">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-dark/50 hover:text-dark mb-16 transition-colors px-4 py-2 rounded-full hover:bg-black/5"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Retour aux articles
          </motion.button>

          <header className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8"
            >
              <span className="text-sm font-bold tracking-widest text-primary uppercase">{post.category}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-[1.15] text-dark">
              <AnimatedText text={post.title} wordAnimation />
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-dark/50 border-y border-black/5 py-6"
            >
              <span className="flex items-center gap-2 text-sm uppercase tracking-wider font-bold"><Calendar size={16} className="text-primary" /> {post.date}</span>
              <span className="flex items-center gap-2 text-sm uppercase tracking-wider font-bold"><User size={16} className="text-primary" /> {post.author}</span>
              <span className="flex items-center gap-2 text-sm uppercase tracking-wider font-bold"><Clock size={16} className="text-primary-light" /> {readingTime} min de lecture</span>
            </motion.div>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="prose prose-primary max-w-none text-lg leading-relaxed text-dark/80"
          >
            <Markdown 
              remarkPlugins={[remarkGfm]}
              components={markdownComponents as any}
            >
              {post.content}
            </Markdown>
          </motion.div>
          
          <motion.footer 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 pt-12 border-t border-black/5 relative"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
             <div className="bg-black/[0.02] border border-black/5 p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-3xl shadow-[0_0_30px_rgba(100,108,255,0.1)] border border-primary/20">
                  {post.author
                    .split(" ")
                    .map(word => word[0])
                    .join("")
                  }
                </div>
                <div>
                   <h4 className="font-display font-bold text-2xl mb-2 text-dark">{post.author}</h4>
                   <p className="text-dark/60 text-lg max-w-md">Nous écrivons sur la vie privée, la sécurité et l'avenir du web libre.</p>
                </div>
             </div>
          </motion.footer>
        </div>
      </div>
    </>
  );
}
