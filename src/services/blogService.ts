import blogPosts from '../data/Blog.json';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageSource?: string;
}

// Initial mock data
const INITIAL_POSTS: BlogPost[] = blogPosts;

export class BlogService {
  private static posts: BlogPost[] = [...INITIAL_POSTS];

  static getAllPosts(): BlogPost[] {
    return this.posts;
  }

  /** newest first */
  static getSortedPosts(): BlogPost[] {
    return [...this.posts].sort((a, b) => b.date.localeCompare(a.date));
  }

  /** about 200 words a minute, at least one */
  static readingMinutes(post: BlogPost): number {
    return Math.max(1, Math.round(post.content.split(/\s+/).filter(Boolean).length / 200));
  }

  static getPostById(id: string): BlogPost | undefined {
    return this.posts.find(p => p.id === id);
  }

  static addPost(post: BlogPost) {
    this.posts = [post, ...this.posts];
  }
}
