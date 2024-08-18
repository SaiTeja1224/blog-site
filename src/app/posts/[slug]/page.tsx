import CommonBox from "@/components/CommonBox";
import { getPostBySlug } from "@/lib/actions/posts";
import { appLinks } from "@/lib/constants";
import { formatDate } from "@/lib/date";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

async function Post({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPostBySlug(slug);
  const coverImageUrl = post.coverImage.fields.file.url.startsWith("http")
    ? post.coverImage.fields.file.url
    : `https:${post.coverImage.fields.file.url}`;
  return (
    <>
      <section
        className="prose prose-stone prose-lg dark:prose-invert max-w-full pb-10
      prose-h2:border-b prose-h2:border-stone-700   prose-h2:pb-2
      prose-a:decoration-transparent dark:prose-a:text-accent prose-a:text-accent-secondary hover:prose-a:bg-accent-secondary-light dark:hover:prose-a:bg-accent hover:prose-a:text-stone-900 
      prose-blockquote:border-l-accent-secondary dark:prose-blockquote:border-l-accent
      prose-pre:border prose-pre:border-stone-200/25"
      >
        <h1 id="title" className="text-5xl font-extrabold italic">
          {post.title}
        </h1>
        <section id="excerpt">
          <p>{post.excerpt}</p>
        </section>
        <section>
          <Image
            src={coverImageUrl}
            width={1000}
            height={20}
            className="w-full"
            alt="cover image for blog"
          />
        </section>
        <Markdown rehypePlugins={[rehypeRaw]}>{post.content}</Markdown>
        <footer className="prose dark:prose-invert prose-stone prose-lg max-w-full space-y-10">
          <CommonBox>
            <div className="flex flex-wrap md:flex-nowrap justify-between  items-start gap-7 p-5">
              <section className="sm:basis-[40%]">
                <h3 className=" mt-0 font-semibold">Post Details</h3>
                <ul className="marker:text-stone-500 dark:text-stone-300/90">
                  <li className="font-bold">
                    Published Date:{" "}
                    <span className="font-normal">
                      {formatDate(new Date(post.publishedDate))}
                    </span>
                  </li>
                  <li className="font-bold">
                    Category:{" "}
                    <span className="font-normal">
                      <Link
                        href={appLinks.getCategoryLink(
                          post.category.fields.category
                        )}
                      >
                        {post.category.fields.category}{" "}
                      </Link>
                    </span>
                  </li>
                </ul>
              </section>
              <div className="hidden md:block border border-stone-500/35 my-5 self-stretch"></div>
              <section className="sm:basis-[40%]">
                <h3 className="mt-0 font-semibold">Tags</h3>
                <section id="tags" className="flex flex-wrap gap-3 ps-3">
                  {post.tags.map((tag) => {
                    return (
                      <CommonBox key={tag} hover>
                        <Link
                          href={appLinks.getTagLink(tag)}
                          className="px-2 block"
                        >
                          {tag}
                        </Link>
                      </CommonBox>
                    );
                  })}
                </section>
              </section>
            </div>
          </CommonBox>
          <CommonBox>
            <div className="space-y-3 p-5 dark:text-stone-300/90">
              <h3 className="w-full mt-0 font-semibold">About Me</h3>
              <p className="">
                Hey there! I&apos;m{" "}
                <Link href={appLinks.portfolioLink} target="_blank">
                  Sai Teja
                </Link>
                . Welcome to my domain. This is just a place for me to dump
                stuff I know and what I do in my day to day. Thanks for visiting
                my site.
              </p>
              <p>
                I am a software engineer, I like building, creating sites &
                apps. This is one of my personal sites free to access, use it
                however you&apos;d like to.
              </p>
            </div>
          </CommonBox>
        </footer>
      </section>
    </>
  );
}

export default Post;
