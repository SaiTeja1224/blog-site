import PostsList from "@/components/PostsList";
import { Metadata } from "next";
import { getPosts } from "@/lib/actions/posts";
import CustomLink from "@/components/CustomLink";
import { appLinks } from "@/lib/constants";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sai Teja",
  description:
    "Learn more about Sai Teja, about his ways in web development, in general his life and other cool thoughts",
};

export default async function Home() {
  const posts = await getPosts({ limit: 5 });
  return (
    <article className="base-container space-y-7">
      <hgroup className="mb-20">
        <h2 className="text-4xl font-bold mb-5">Hey there</h2>
        <p className="text-xl mb-5">
          I&apos;m Sai. Programmer, web dev. I love arts, computers, watching stuff,
          <br />
          video games and sports. It&apos;s nice to see you all here.
        </p>
        <p className="text-xl">
          Over here you can check out my{" "}
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
