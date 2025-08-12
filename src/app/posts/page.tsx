import FilterPostsWrapper from "@/components/DataWrappers/FilterPostsWrapper";
import Loader from "@/components/Loader";
import { Suspense } from "react";
import { appLinks } from "@/lib/constants";

const defaultOgImage = `${appLinks.baseLink}/favicon.ico`;

export const metadata = {
  title: "Posts",
  description: "Posts on my thoughts and stuffs",
  alternates: {
    canonical: `${appLinks.baseLink}/posts`,
  },
  openGraph: {
    title: "Sai Teja - Posts",
    description: "Posts on my thoughts and stuffs",
    url: `${appLinks.baseLink}/posts`,
    siteName: "Sai Teja",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Sai Teja",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Teja - Posts",
    description: "Posts on my thoughts and stuffs",
    images: [defaultOgImage],
  },
};

export const dynamic = "force-dynamic";

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
