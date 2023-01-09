import { Handlers } from "$fresh/server.ts";
import { extract } from "$std/encoding/front_matter.ts";
import { PageProps } from "$fresh/server.ts";
import { PostCard } from "../components/post-card/index.tsx";
import { Post } from "../types.ts";
import { Layout } from "../components/layout/index.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

async function getPosts(): Promise<Post[]> {
  const files = await Deno.readDir("./posts");
  const promises = [];

  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }

  const posts = (await Promise.all(promises)) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(`./posts/${slug}.md`);
  const { attrs, body } = extract(text);
  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.publishedAt),
    content: body,
    snippet: attrs.snippet,
  };
}

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const { url } = props;
  const { pathname } = url;
  console.log("href: ", pathname);
  const posts = props.data;
  return (
    <Layout pathname={pathname}>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <div class="mt-8">
          {posts.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
