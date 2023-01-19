import { Post } from "../../types.ts";
import Tags from "../../islands/tags.tsx";

export function PostCard(props: { post: Post }) {
  const { post } = props;
  const { title, publishedAt, snippet, tags, slug } = post;

  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/${slug}`}>
        <h3 class="text(3xl gray-900) font-bold">{title}</h3>
      </a>
      <div class="">
        <Tags tags={tags} />
      </div>
      <time class="text-gray-500">
        {new Date(publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <div class="mt-4 text-gray-900">{snippet}</div>
    </div>
  );
}
