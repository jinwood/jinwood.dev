import { Post } from "../../types.ts";
import { PostCard } from "../post-card/index.tsx";

export default function Posts(props: { posts: Post[] }) {
  const { posts } = props;

  return (
    <>
      {posts?.map((post) => (
        <>
          <PostCard post={post} />
        </>
      ))}
    </>
  );
}
