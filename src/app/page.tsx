import PostsList from "@/components/PostsList";
import { Metadata } from "next";
import { getPosts } from "@/lib/actions/posts";
import CustomLink from "@/components/CustomLink";
import { appLinks } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sai Teja's Blogs",
  description:
    "Learn more about Sai Teja, about his ways in web development, in general his life and other cool thoughts",
};

export default async function Home() {
  const posts = await getPosts({ limit: 5 });
  return (
    <article className="base-container space-y-7">
      <hgroup className="mb-20">
        <h2 className="text-4xl font-bold mb-5">Hey I&apos;m Sai</h2>
        <p className="text-xl mb-5">
          I&apos;m a software developer, interested in web applications, coding,
          <br />
          computers, games and many more.
        </p>
        <p className="text-xl">
          Here in this site you can check out my{" "}
          <CustomLink href={appLinks.postsLink}>posts</CustomLink>,{" "}
          <CustomLink href={appLinks.about}>about me</CustomLink> and <br />{" "}
          other cool things going about my day to day.
        </p>
      </hgroup>
      <h2 className="text-3xl font-semibold">My Thoughts, Posts and Stuff</h2>
      <PostsList posts={posts} />
    </article>
  );
}
