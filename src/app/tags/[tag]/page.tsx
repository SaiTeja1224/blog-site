import PostsByYears from "@/components/PostsByYears";
import { getPostsSegregatedByYears } from "@/lib/actions/posts";

export function generateMetadata({ params: { tag } }: { params: { tag: string } }) {
  return {
    title: "Posts tagged with " + tag,
    description : "Posts tagged with " + tag
  }
}

async function TagDetails({ params: { tag } }: { params: { tag: string } }) {
  const posts = await getPostsSegregatedByYears({ tags: tag });
  return (
    <>
      <hgroup className="mb-20 space-y-2">
        <sub className="text-lg dark:text-stone-300">
          <span className="text-accent-secondary dark:text-accent">
            {posts.length}
          </span>{" "}
          post(s) tagged:
        </sub>
        <h2 className="text-5xl font-semibold">{tag}</h2>
      </hgroup>
      <PostsByYears posts={posts} />
    </>
  );
}

export default TagDetails;
