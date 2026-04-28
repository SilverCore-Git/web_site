import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { BlogService, BlogPost } from '@/src/services/blogService';
import { Save, X, Eye, Edit3 } from 'lucide-react';
import Markdown from 'react-markdown';

export function Admin() {
  const navigate = useNavigate();
  const [isPreview, setIsPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Annonce',
    author: 'L\'équipe Silvercore'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: BlogPost = {
      ...formData,
      id: formData.title.toLowerCase().replace(/\s+/g, '-'),
      date: new Date().toISOString().split('T')[0],
    };
    BlogService.addPost(newPost);
    navigate('/blog');
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold">Panel <span className="text-gradient">Admin</span></h1>
            <p className="text-white/50">Ajouter un nouvel article au blog</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsPreview(!isPreview)}
              className="flex items-center gap-2 glass hover:bg-white/10 px-6 py-3 rounded-xl font-bold transition-all"
            >
              {isPreview ? <><Edit3 size={18} /> Éditer</> : <><Eye size={18} /> Aperçu</>}
            </button>
          </div>
        </header>

        <div className="glass-dark rounded-[2rem] p-8 md:p-12 border-white/5">
          {isPreview ? (
            <div className="prose prose-invert max-w-none">
              <h1 className="text-4xl font-display font-bold mb-4">{formData.title || "Titre de l'article"}</h1>
              <div className="markdown-body">
                <Markdown>{formData.content || "*Pas de contenu encore...*"}</Markdown>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Titre</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                    placeholder="Ex: La nouvelle version de Silvernote"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Catégorie</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                  >
                    <option value="Annonce">Annonce</option>
                    <option value="Sécurité">Sécurité</option>
                    <option value="Tutoriel">Tutoriel</option>
                    <option value="Tech">Tech</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Extrait (Résumé)</label>
                <textarea
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all h-24 resize-none"
                  placeholder="Un court résumé pour la liste des articles..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Contenu (Markdown)</label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all h-96 font-mono"
                  placeholder="# Titre de l'article\n\nContenu en markdown ici..."
                />
              </div>

              <div className="flex justify-end gap-4 pt-8">
                <button
                  type="button"
                  onClick={() => navigate('/blog')}
                  className="px-8 py-4 rounded-xl font-bold text-white/50 hover:text-white transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold transition-all hover:scale-105"
                >
                  <Save size={20} />
                  Publier l'article
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
