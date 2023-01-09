import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { Layout } from "../components/layout/index.tsx";
import { getPost } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (!post) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function Post(props: PageProps) {
  const { url } = props;
  const { pathname } = url;
  const post = props.data;
  return (
    <Layout pathname={pathname} title={post.title}>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold">{post.title}</h1>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
    </Layout>
  );
}
