import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import { Layout } from "../components/layout/index.tsx";
import { getPost } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (!post) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps) {
  const { url } = props;
  const { pathname } = url;
  const post = props.data;
  return (
    <>
      <Head>
        <style>{CSS}</style>
        <style>
          {`
          .markdown-body a{
            color: #0070f3;
          `}
        </style>
      </Head>

      <Layout pathname={pathname} title={post.title}>
        <main class="max-w-screen-md px-4 pt-16 mx-auto pb-20">
          <h1 class="text-5xl font-bold">{post.title}</h1>
          <time class="text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString("en-gb", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div class="">
            <div
              class="mt-8 markdown-body"
              dangerouslySetInnerHTML={{ __html: render(post.content) }}
            />
          </div>
        </main>
      </Layout>
    </>
  );
}
