export default function Tags(props: { tags: string[] }) {
  const { tags } = props;
  return (
    <div class="flex flex-wrap">
      {tags?.map((tag) => (
        <a
          href={`/blog/${tag}`}
          class="inline-block px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-b-none hover:bg-blue-200 cursor-pointer"
        >
          {tag}
        </a>
      ))}
    </div>
  );
}
