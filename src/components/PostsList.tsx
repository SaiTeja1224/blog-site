import BlogItem from "./PostItem";
import { Post } from "@/lib/types/contentful";

function PostsList({ posts }: { posts: Post[] }) {
  return (
    <article>
      <ul className="space-y-5">
        {posts.map((post) => {
          return <BlogItem key={post.slug} post={post} />;
        })}
      </ul>
    </article>
  );
}

export default PostsList;