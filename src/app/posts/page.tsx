import FilterPostsWrapper from "@/components/DataWrappers/FilterPostsWrapper";
import Loader from "@/components/Loader";
import { Suspense } from "react";

function Posts() {
  return (
    <>
      <hgroup className="mb-20">
        <h2 className="text-4xl font-bold mb-5">Posts</h2>
        <sub className="text-xl">
          Guides, references on programming, web development, games, <br />
          computers, about my learnings and life.
        </sub>
      </hgroup>
      <Suspense fallback={<Loader />}>
        <FilterPostsWrapper />
      </Suspense>
    </>
  );
}

export default Posts;
