export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  draft: boolean;
  content: string;
  snippet: string;
}
