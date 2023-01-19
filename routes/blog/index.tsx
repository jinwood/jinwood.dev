import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts } from "../../utils/posts.ts";
import { Post } from "../../types.ts";
import { Layout } from "../../components/layout/index.tsx";
import Posts from "../../components/posts/index.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const post = await getPosts();
    if (!post) return ctx.renderNotFound();
    return ctx.render(post);
  },
};
export default function BlogIndexPage(props: PageProps<Post[]>) {
  const { url } = props;
  const { pathname } = url;
  const posts = props.data;

  return (
    <Layout pathname={pathname} title="Home">
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <Posts posts={posts} />
      </main>
    </Layout>
  );
}
