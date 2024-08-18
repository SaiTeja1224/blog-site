import { Post } from "@/lib/types/contentful";
import PostsList from "./PostsList";

function PostsByYears({ posts }: { posts: [string, Post[]][] }) {
  return (
    <section>
      {posts.map(([year, posts]) => {
        return (
          <div key={year} className="space-y-6 mt-10">
            <h3 className="text-3xl font-semibold">{year}</h3>
            <PostsList posts={posts} />
          </div>
        );
      })}
    </section>
  );
}

export default PostsByYears;
