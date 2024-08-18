import FilterPosts from "@/components/FilterPosts";
import {
  getCategories,
  getPostsSegregatedByYears,
  getTags,
} from "@/lib/actions/posts";

async function Posts() {
  const tags = await getTags();
  const categories = await getCategories();
  const postsByYears = await getPostsSegregatedByYears();

  return (
    <>
      <hgroup className="mb-20">
        <h2 className="text-4xl font-bold mb-5">Posts</h2>
        <sub className="text-xl">
          Guides, references on programming, web development, games, <br />
          computers, about my learnings and life.
        </sub>
      </hgroup>
      <FilterPosts
        categories={categories}
        tags={tags}
        postsByYears={postsByYears}
      />
    </>
  );
}

export default Posts;
