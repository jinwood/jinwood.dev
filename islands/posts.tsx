import { IS_BROWSER } from "$fresh/src/runtime/utils.ts";
import { useEffect, useMemo, useState } from "preact/hooks";
import { PostCard } from "../components/post-card/index.tsx";
import { Post } from "../types.ts";
import { getPosts } from "../utils/posts.ts";

export default function Posts(props: { posts: Post[] }) {
  const { posts } = props;
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    filterPosts();
  }, [selectedTags]);

  const setSelectedTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const memoizedFilteredPosts = useMemo(() => {
    return filteredPosts?.map((post) => (
      <PostCard post={post} setSelectedTag={setSelectedTag} />
    ));
  }, [filteredPosts]);

  const filterPosts = () => {
    if (selectedTags.length === 0) {
      setFilteredPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) => {
        return selectedTags.every((tag) => post.tags.includes(tag));
      });
      setFilteredPosts(filteredPosts);
    }
  };

  return <>{memoizedFilteredPosts}</>;
}
