import { PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { Layout } from "../components/layout/index.tsx";

export default function Projects(props: PageProps) {
  const { url } = props;
  const { pathname } = url;
  console.log(props);
  return (
    <Layout pathname={pathname}>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1>Projects (coming soon)</h1>
      </main>
    </Layout>
  );
}
