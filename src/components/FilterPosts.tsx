"use client";

import { CategoryValue, Post } from "@/lib/types/contentful";
import CommonBox from "./CommonBox";
import { Suspense, useState } from "react";
import { getPostsSegregatedByYears } from "@/lib/actions/posts";
import Link from "next/link";
import PostsByYears from "./PostsByYears";
import CustomLink from "./CustomLink";
import { appLinks } from "@/lib/constants";
import Loader from "./Loader";

type AllPostsProps = {
  tags: { name: string; active: boolean }[];
  categories: CategoryValue[];
  postsByYears: [string, Post[]][];
};

function FilterPosts({ tags, categories, postsByYears }: AllPostsProps) {
  const [loading, setLoading] = useState(false);
  const [tagsData, setTagsData] = useState(tags);
  const [categoriesData, setCategoriesData] = useState(categories);
  const [postsData, setPostsData] = useState(postsByYears);

  const handleSelectCategory = async (idx: number) => {
    setLoading(true);
    const newCategories = categoriesData.map((item, i) => {
      const newCategory = { ...item };
      if (i === idx) {
        newCategory.active = !newCategory.active;
      } else {
        newCategory.active = false;
      }
      return newCategory;
    });
    setCategoriesData(newCategories);

    // Get new data
    const tagsFilter = tagsData
      .filter((item) => !!item.active)
      .map((item) => {
        return item.name;
      })
      .join(",");
    const categoryIdFilter = newCategories[idx].active
      ? newCategories[idx].sys.id
      : undefined;
    const filter = {
      categoryId: categoryIdFilter,
      tags: tagsFilter || undefined,
    };
    const newFilteredPosts = await getPostsSegregatedByYears(filter);
    setPostsData(newFilteredPosts);
    setLoading(false);
  };
  const handleSelectTag = async (idx: number) => {
    setLoading(true);
    const newTags = tagsData.map((item, i) => {
      const newTag = { ...item };
      if (i === idx) {
        newTag.active = !newTag.active;
      }
      return newTag;
    });
    setTagsData(newTags);

    // Get new data
    const tagsFilter = newTags
      .filter((item) => !!item.active)
      .map((item) => {
        return item.name;
      })
      .join(",");
    const categoryIdFilter = categoriesData
      .filter((item) => !!item.active)
      .map((item) => {
        return item.sys.id;
      })[0];

    const filter = {
      categoryId: categoryIdFilter,
      tags: tagsFilter || undefined,
    };
    const newFilteredPosts = await getPostsSegregatedByYears(filter);
    setPostsData(newFilteredPosts);
    setLoading(false);
  };

  return (
    <>
      <div className="flex gap-10 mb-20">
        <section className="space-y-5 space-x-5 basis-[50%]">
          <h2 className="text-3xl">Categories</h2>
          {categoriesData.map((category, idx) => {
            return (
              <CommonBox
                key={category.sys.id}
                button
                hover
                active={category.active}
                onClick={() => {
                  handleSelectCategory(idx);
                }}
              >
                <div className="px-2 text-xl dark:hover:text-accent-light hover:text-accent-secondary-light">
                  {category.fields.category}
                </div>
              </CommonBox>
            );
          })}
        </section>
        <section className="space-y-5  space-x-5 basis-[50%]">
          <h2 className="text-3xl flex justify-between items-center">
            Tags{" "}
            <CustomLink className="text-lg" href={appLinks.tagsLink}>
              View All
            </CustomLink>
          </h2>
          {tagsData.map((tag, idx) => {
            return (
              <CommonBox
                key={tag.name}
                button
                hover
                active={tag.active}
                onClick={() => {
                  handleSelectTag(idx);
                }}
              >
                <div className="px-2 text-xl dark:hover:text-accent-light hover:text-accent-secondary-light">
                  {tag.name}
                </div>
              </CommonBox>
            );
          })}
        </section>
      </div>
        {loading ? <Loader /> : <PostsByYears posts={postsData} />}
    </>
  );
}

export default FilterPosts;
