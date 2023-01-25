import { Post } from "../../types.ts";
import { PostCard } from "../post-card/index.tsx";

export default function Posts(props: { posts: Post[]; pathname: string }) {
  const { posts, pathname } = props;

  return (
    <>
      {posts?.map((post) => (
        <>
          <PostCard post={post} pathname={pathname} />
        </>
      ))}
    </>
  );
}
