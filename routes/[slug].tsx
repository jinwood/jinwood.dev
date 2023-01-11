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

export default function Post(props: PageProps) {
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
        <main class="max-w-screen-md px-4 pt-16 mx-auto">
          <h1 class="text-5xl font-bold">{post.title}</h1>
          <time class="text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
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

// const modest = `
// .markdown{
//   @media print {
//     *,
//     *:before,
//     *:after {
//       background: transparent !important;
//       color: #000 !important;
//       box-shadow: none !important;
//       text-shadow: none !important;
//     }

//     a,
//     a:visited {
//       text-decoration: underline;
//     }

//     a[href]:after {
//       content: " (" attr(href) ")";
//     }

//     abbr[title]:after {
//       content: " (" attr(title) ")";
//     }

//     a[href^="#"]:after,
//     a[href^="javascript:"]:after {
//       content: "";
//     }

//     pre,
//     blockquote {
//       border: 1px solid #999;
//       page-break-inside: avoid;
//     }

//     thead {
//       display: table-header-group;
//     }

//     tr,
//     img {
//       page-break-inside: avoid;
//     }

//     img {
//       max-width: 100% !important;
//     }

//     p,
//     h2,
//     h3 {
//       orphans: 3;
//       widows: 3;
//     }

//     h2,
//     h3 {
//       page-break-after: avoid;
//     }
//   }

//   pre,
//   code {
//     font-family: Menlo, Monaco, "Courier New", monospace;
//   }

//   pre {
//     padding: .5rem;
//     line-height: 1.25;
//     overflow-x: scroll;
//   }

//   a,
//   a:visited {
//     color: #3498db;
//   }

//   a:hover,
//   a:focus,
//   a:active {
//     color: #2980b9;
//   }

//   .modest-no-decoration {
//     text-decoration: none;
//   }

//   html {
//     font-size: 12px;
//   }

//   @media screen and (min-width: 32rem) and (max-width: 48rem) {
//     html {
//       font-size: 15px;
//     }
//   }

//   @media screen and (min-width: 48rem) {
//     html {
//       font-size: 16px;
//     }
//   }

//   body {
//     line-height: 1.85;
//   }

//   p,
//   .modest-p {
//     font-size: 1rem;
//     margin-bottom: 1.3rem;
//   }

//   h1,
//   .modest-h1,
//   h2,
//   .modest-h2,
//   h3,
//   .modest-h3,
//   h4,
//   .modest-h4 {
//     margin: 1.414rem 0 .5rem;
//     font-weight: inherit;
//     line-height: 1.42;
//   }

//   h1,
//   .modest-h1 {
//     margin-top: 0;
//     font-size: 3.998rem;
//   }

//   h2,
//   .modest-h2 {
//     font-size: 2.827rem;
//   }

//   h3,
//   .modest-h3 {
//     font-size: 1.999rem;
//   }

//   h4,
//   .modest-h4 {
//     font-size: 1.414rem;
//   }

//   h5,
//   .modest-h5 {
//     font-size: 1.121rem;
//   }

//   h6,
//   .modest-h6 {
//     font-size: .88rem;
//   }

//   small,
//   .modest-small {
//     font-size: .707em;
//   }

//   /* https://github.com/mrmrs/fluidity */

//   img,
//   canvas,
//   iframe,
//   video,
//   svg,
//   select,
//   textarea {
//     max-width: 100%;
//   }

//   @import url(http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);

//   @import url(http://fonts.googleapis.com/css?family=Arimo:700,700italic);

//   html {
//     font-size: 18px;
//     max-width: 100%;
//   }

//   body {
//     color: #444;
//     font-family: 'Open Sans Condensed', sans-serif;
//     font-weight: 300;
//     margin: 0 auto;
//     max-width: 48rem;
//     line-height: 1.45;
//     padding: .25rem;
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     font-family: Arimo, Helvetica, sans-serif;
//   }

//   h1,
//   h2,
//   h3 {
//     border-bottom: 2px solid #fafafa;
//     margin-bottom: 1.15rem;
//     padding-bottom: .5rem;
//     text-align: center;
//   }

//   blockquote {
//     border-left: 8px solid #fafafa;
//     padding: 1rem;
//   }

//   pre,
//   code {
//     background-color: #fafafa;
//   }
// }
// `;
