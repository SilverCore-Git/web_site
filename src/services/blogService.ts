export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
}

// Initial mock data
const INITIAL_POSTS: BlogPost[] = [
  {
    id: "bienvenue-chez-silvercore",
    title: "Bienvenue chez Silvercore",
    excerpt: "Découvrez notre mission et pourquoi nous avons créé Silvercore.",
    content: `
# Bienvenue chez Silvercore

Nous sommes ravis de vous accueillir sur notre nouveau site. Silvercore est né d'un constat simple : le web moderne est devenu un terrain de surveillance constante.

## Notre Mission

Notre mission est de redonner le contrôle aux utilisateurs. Nous croyons que la vie privée est un droit fondamental, pas un luxe.

### Pourquoi nous choisir ?

1. **Confidentialité par défaut** : Nous ne collectons que le strict nécessaire.
2. **Chiffrement** : Vos données sont chiffrées de bout en bout.
3. **Souveraineté** : Nos serveurs sont basés en France.

Restez à l'écoute pour plus de mises à jour !
    `,
    date: "2025-03-15",
    author: "L'équipe Silvercore",
    category: "Annonce"
  },
  {
    id: "securite-silvernote",
    title: "Comment Silvernote protège vos données",
    excerpt: "Une plongée technique dans le chiffrement de Silvernote.",
    content: `
# La sécurité de Silvernote

Silvernote utilise des algorithmes de chiffrement de pointe pour garantir que vous seul pouvez lire vos notes.

## Chiffrement AES-256

Toutes vos notes sont chiffrées côté client avant d'être envoyées sur nos serveurs. Même en cas d'accès non autorisé à nos bases de données, vos informations restent illisibles.

## Zéro connaissance

Nous appliquons une politique de "Zero Knowledge". Nous n'avons pas accès à vos clés de déchiffrement.
    `,
    date: "2025-04-01",
    author: "Tech Team",
    category: "Sécurité"
  }
];

export class BlogService {
  private static posts: BlogPost[] = [...INITIAL_POSTS];

  static getAllPosts(): BlogPost[] {
    return this.posts;
  }

  static getPostById(id: string): BlogPost | undefined {
    return this.posts.find(p => p.id === id);
  }

  static addPost(post: BlogPost) {
    this.posts = [post, ...this.posts];
  }
}
