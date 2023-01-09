import { Handlers } from "$fresh/server.ts";
import { extract } from "$std/encoding/front_matter.ts";
import { PageProps } from "$fresh/server.ts";
import { PostCard } from "../components/post-card/index.tsx";
import { Post } from "../types.ts";
import { Layout } from "../components/layout/index.tsx";
import { getPosts } from "../utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const { url } = props;
  const { pathname } = url;
  const posts = props.data;
  return (
    <Layout pathname={pathname} title="Home">
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <div class="mt-8">
          {posts?.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
