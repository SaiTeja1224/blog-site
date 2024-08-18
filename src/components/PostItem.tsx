import { appLinks } from "@/lib/constants";
import { formatDate } from "@/lib/date";
import { Post } from "@/lib/types/contentful";
import Link from "next/link";

type BlogItemProp = { post: Post };

function PostItem({ post }: BlogItemProp) {
  return (
    <li className="group shadow-sm active:scale-95 hover:scale-105 shadow-stone-600 hover:shadow-accent-secondary dark:hover:shadow-accent bg-stone-300/30 dark:bg-stone-900/35 dark:hover:bg-stone-800/30 hover:bg-stone-500 transition">
      <Link
        href={appLinks.getPostLink(post.slug)}
        className="p-5 flex justify-between"
      >
        <div>
          <h3 className="text-xl font-semibold leading-none text-accent-secondary dark:text-accent dark:group-hover:text-accent-light group-hover:text-accent-secondary-light">
            {post.title}
          </h3>
          <sub className="text-sm dark:text-stone-400 group-hover:text-stone-200">
            {post.category.fields.category}
          </sub>
        </div>
        <p className="dark:text-stone-400 group-hover:text-stone-200">
          {formatDate(new Date(post.publishedDate))}
        </p>
      </Link>
    </li>
  );
}

export default PostItem;
