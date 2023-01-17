import { PostCard } from "../components/post-card/index.tsx";
import { Post } from "../types.ts";

export default function Posts(props: { posts: Post[] }) {
  const { posts } = props;
  const setSelectedTag = () => {};
  return (
    <>
      {posts?.map((post) => (
        <PostCard post={post} setSelectedTag={setSelectedTag} />
      ))}{" "}
    </>
  );
}
