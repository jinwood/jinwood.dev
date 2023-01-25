export default function Tags(props: { tags: string[]; pathname: string }) {
  const { tags, pathname } = props;
  return (
    <div class="flex flex-wrap">
      {tags?.map((tag) => {
        const pathContainsTag = pathname ? pathname.includes(tag) : false;
        const css = `inline-block px-2 py-1 mr-2 text-sm font-medium text-gray-800 ${
          pathContainsTag ? "bg-gray-100" : ""
        } rounded-b-none hover:bg-blue-200 cursor-pointer`;
        return (
          <a href={`/blog/${tag}`} class={css}>
            {tag}
          </a>
        );
      })}
    </div>
  );
}
