import { render } from "preact";
import { useState, useEffect } from "preact/hooks";

interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  draft: boolean;
  content: string;
  snippet: string;
  tags: string[];
}

export default function Posts(props: { posts: Post[] }) {
  const { posts } = props;
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    filterPosts();
  }, [selectedTags]);

  const onTagClick = (tag: string) => {
    console.log(1);
    console.log(tag);
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filterPosts = () => {
    if (selectedTags.length === 0) {
      setFilteredPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) => {
        return selectedTags.every((tag: any) => post.tags.includes(tag));
      });
      setFilteredPosts(filteredPosts);
    }
  };

  const notBuggy = () => {
    return (
      <div>
        {filteredPosts.map((p) => (
          <>
            <button onClick={() => console.log(selectedTags)}>Log</button>
            <h2 class="text-2xl">{p.slug}</h2>
            {p.tags.map((t) => (
              <button
                class="inline-block px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-b-none hover:bg-blue-200 cursor-pointer"
                onClick={() => onTagClick(t)}
              >
                {t}
              </button>
            ))}
          </>
        ))}
      </div>
    );
  };

  const buggy = () => {
    return (
      <>
        {filteredPosts.map((p) => {
          const { slug, title, publishedAt, tags, snippet } = p;
          return (
            <div class="py-8 border(t gray-200)">
              <a class="sm:col-span-2" href={`/${slug}`}>
                <h3 class="text(3xl gray-900) font-bold">{title}</h3>
              </a>
              <div class="">
                <div class="flex flex-wrap">
                  {tags?.map((tag) => (
                    <button
                      onClick={() => onTagClick(tag)}
                      class="inline-block px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-b-none hover:bg-blue-200 cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>{" "}
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
        })}
      </>
    );
  };

  return <div>{buggy()}</div>;
}
