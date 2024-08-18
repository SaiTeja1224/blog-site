import { cache } from "react";
import client from "@/lib/contentful-client";
import { CategoryValue, Post } from "@/lib/types/contentful";

export const getPosts = cache(
  async (filter?: {
    slug?: string;
    tags?: string;
    categoryId?: string;
    limit?: number;
  }) => {
    const payloadFilters = {
      "fields.slug": filter?.slug,
      "fields.tags[in]": filter?.tags,
      "fields.category.sys.id[in]": filter?.categoryId,
    };

    const response = await client.getEntries({
      content_type: "post",
      ...payloadFilters,
      limit: filter?.limit,
      order: ["-fields.publishedDate"],
    });
    const posts: Post[] = response.items.map((element) => {
      const newPost: any = {
        ...element.fields,
      };
      return newPost;
    });

    posts.sort(
      (a, b) => +new Date(b.publishedDate) - +new Date(a.publishedDate)
    );
    return posts;
  }
);
export const getPostBySlug = async (slug: string) => {
  const posts = await getPosts({ slug });
  const post = posts.filter((post) => post.slug === slug);
  return post[0] || null;
};

export const getTags = async () => {
  const entries = await getPosts();
  const tags = entries.flatMap((entry) => entry.tags);

  // @ts-ignore
  const uniqueTags: string[] = [...new Set(tags.map((tag) => tag))];
  const formattedUniqueTags = uniqueTags.map((tag) => {
    return {
      name: tag,
      active: false,
    };
  });
  return formattedUniqueTags;
};
export const getCategories = async (name?: string) => {
  const response = await client.getEntries({
    content_type: "categories",
    "fields.category": name,
  });
  const uniqueCategories: CategoryValue[] = response.items.map((element) => {
    const newCategory: any = { ...element, active: false };
    return newCategory;
  });
  return uniqueCategories;
};
export const getCategoryByName = async (name: string) => {
  const categories = await getCategories(name);
  const category = categories.filter(
    (category) => category.fields.category === name
  );
  return category[0] || null;
};

export const getPostsSegregatedByYears = cache(
  async (filter?: { slug?: string; tags?: string; categoryId?: string }) => {
    const posts = await getPosts(filter);

    const groupedPosts = posts.reduce((acc: Record<string, Post[]>, post) => {
      const year = new Date(post.publishedDate).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    }, {});

    const sortedGroupedPosts = Object.keys(groupedPosts)
      .sort((a, b) => Number(b) - Number(a)) // Sort years in descending order
      .map((year) => [year, groupedPosts[year]] as [string, Post[]]);

    return sortedGroupedPosts;
  }
);
