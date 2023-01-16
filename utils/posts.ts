import { extract } from "https://deno.land/std@0.171.0/encoding/front_matter.ts";
import { join } from "$std/path/mod.ts";
import { Post } from "../types.ts";

export async function getPosts(tag?: string): Promise<Post[]> {
  const files = await Deno.readDir("./posts");
  const promises = [];

  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    console.log(slug);
    promises.push(getPost(slug));
  }

  const posts = (await Promise.all(promises)).filter(
    (post) =>
      post?.publishedAt instanceof Date && !isNaN(post.publishedAt.getTime())
  ) as Post[];

  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  if (tag) {
    return posts.filter((post) => post.tags.includes(tag));
  }

  return posts;
}

export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join("posts/", `${slug}.md`));
  const { attrs, body } = extract<Post>(text);
  return {
    slug,
    title: attrs.title,
    draft: attrs.draft,
    publishedAt: new Date(attrs.publishedAt),
    content: body,
    tags: attrs.tags,
    snippet: attrs.snippet,
  };
}
