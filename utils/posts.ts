import { extract } from "https://deno.land/std@0.171.0/encoding/front_matter.ts";
import { join } from "$std/path/mod.ts";
import { Post } from "../types.ts";

export async function getPosts(): Promise<Post[]> {
  const files = await Deno.readDir("./posts");
  const promises = [];

  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    console.log(slug);
    promises.push(getPost(slug));
  }

  const posts = (await Promise.all(promises)) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

export async function getPost(slug: string): Promise<Post | null> {
  console.log(slug);
  const text = await Deno.readTextFile(join("posts/", `${slug}.md`));
  const { attrs, body } = extract<Post>(text);
  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.publishedAt),
    content: body,
    snippet: attrs.snippet,
  };
}
