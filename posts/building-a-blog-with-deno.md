---
title: Building a blog with Deno
snippet: This is the first post
publishedAt: 2021-01-08
---

[Deno](https://deno.land) is a relatively new JavaScript runtime that is built
on top of V8, Rust, and Tokio. I've been interested in trying it out since its
release back in May 2020 and decided to take the plunge this week and actually
build something. I'm utilising [Fresh](https://fresh.deno.dev), a
next-generation web framework which has some really cool features like island
hydration, server-side rendering and an extremely lightweight runtime (no
JavaScript shipped OOTB).

This is not going to be an exhaustive guide, more a high-level overview of the
changes you'll need to make to get features like Markdown rendering.

So, to get started, make sure you have a recent version of Deno installed and
then run the following command:

```bash
deno run -A -r https://fresh.deno.dev my-fresh-blog
```

This will create a new directory called `my-fresh-blog`. `cd` into it and run
`deno task start` and your new app will be up and running.

## Adding Markdown rendering

You can leave the default directories and files if you like, the most important
thing is to create a new file somewhere for all your markdown concerns. In my
project, this is in `utils/posts.ts`. This file will contain two functions,
`getPosts` and `getPost`. No prizes for guessing what each of them does.

```ts
export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  draft: boolean;
  content: string;
  snippet: string;
}

export async function getPosts(): Promise<Post[]> {
  const files = await Deno.readDir("./posts");
  const promises = [];

  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    console.log(slug);
    promises.push(getPost(slug));
  }

  const posts = (await Promise.all(promises)).filter(
    (post) =>
      post?.publishedAt instanceof Date && !isNaN(post.publishedAt.getTime()),
  ) as Post[];
  posts.sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime());
  return posts;
}
```
