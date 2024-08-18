import FilterPosts from "../FilterPosts";
import {
  getCategories,
  getPostsSegregatedByYears,
  getTags,
} from "@/lib/actions/posts";

async function FilterPostsWrapper() {
  const tags = await getTags();
  const categories = await getCategories();
  const postsByYears = await getPostsSegregatedByYears();

  return (
    <FilterPosts
      categories={categories}
      tags={tags}
      postsByYears={postsByYears}
    />
  );
}

export default FilterPostsWrapper;
