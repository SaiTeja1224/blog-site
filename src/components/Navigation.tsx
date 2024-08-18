"use client";

import { appLinks } from "@/lib/constants";
import { cn } from "@/lib/style";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    title: "Home",
    link: "/",
    id: "/",
  },
  {
    title: "Posts",
    link: appLinks.postsLink,
    id: "posts",
  },
  // Need to add later
  // {
  //   title: "About Me",
  //   link: "/about",
  // },
];
function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      <ul className="flex gap-4 text-xl dark:text-stone-300">
        {nav.map(({ link, title, id }) => {
          return (
            <li
              key={link}
              className={cn(
                "transition active:scale-95 hover:text-accent-secondary-light dark:hover:text-accent-light px-2 border border-transparent dark:hover:bg-stone-800 hover:bg-stone-500 hover:border-accent-secondary-light dark:hover:border-accent cursor-pointer",
                {
                  "dark:text-accent  text-accent-secondary":
                    link === "/" ? pathname === link : pathname.includes(id),
                }
              )}
            >
              <Link href={link}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
