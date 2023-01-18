import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { PostCard } from "../components/post-card/index.tsx";
import { Post } from "../types.ts";
import { Layout } from "../components/layout/index.tsx";
import { getPosts } from "../utils/posts.ts";
import { useState } from "preact/hooks";
import Posts from "../islands/posts.tsx";
import Bug from "../islands/bug.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const setSelectedTag = (tag: string) => {
    console.log("tag", tag);
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const { url } = props;
  const { pathname } = url;
  const posts = props.data;

  return (
    <Layout pathname={pathname} title="Home">
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <picture class="w-full">
          <source srcset="/images/home.webp" type="image/webp" />
          <img
            src="/images/desk.jpg"
            alt="Desk"
            class="w-full h-96 object-cover rounded-xl"
          />
        </picture>
        <div class="mt-8">
          <Bug posts={posts} />
          {/* <Posts posts={posts} /> */}
        </div>
      </main>
    </Layout>
  );
}
