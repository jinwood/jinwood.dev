import { PageProps, Handlers } from "$fresh/server.ts";
import { Layout } from "../../components/layout/index.tsx";
import { PostCard } from "../../components/post-card/index.tsx";
import { Post } from "../../types.ts";
import { getPosts } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { slug } = ctx.params;
    const posts = await getPosts([slug]);
    return ctx.render(posts);
  },
};

export default function Blog(props: PageProps<Post[]>) {
  const { url } = props;
  const { pathname } = url;
  const posts = props.data;

  return (
    <Layout pathname={pathname} title={pathname}>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <a
          href="/blog"
          class="inline-block px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-b-none hover:bg-blue-200 cursor-pointer"
        >
          clear
        </a>
        {posts?.map((post) => (
          <PostCard post={post} pathname={pathname} />
        ))}
      </main>
    </Layout>
  );
}
