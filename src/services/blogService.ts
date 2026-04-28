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
}

// Initial mock data
const INITIAL_POSTS: BlogPost[] = blogPosts;

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
