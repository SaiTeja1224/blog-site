import PostsByYears from "@/components/PostsByYears";
import {
  getCategoryByName,
  getPostsSegregatedByYears,
} from "@/lib/actions/posts";

async function TagDetails({
  params: { category },
}: {
  params: { category: string };
}) {
  const data = await getCategoryByName(category);
  const posts = await getPostsSegregatedByYears({ categoryId: data.sys.id });

  return (
    <>
      <hgroup className="mb-20 space-y-2">
        <sub className="text-lg dark:text-stone-300">
          <span className="text-accent-secondary dark:text-accent">
            {posts.length}
          </span>{" "}
          post(s) categorized as:
        </sub>
        <h2 className="text-5xl font-semibold">{category}</h2>
      </hgroup>
      <PostsByYears posts={posts} />
    </>
  );
}

export default TagDetails;
