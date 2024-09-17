"use client";

import ScrollableLink from "@/app/about/components/scrollable-link";
import { appLinks } from "@/lib/constants";
import { cn } from "@/lib/style";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerNavigation from "./HamburgerNavigation";

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
  {
    title: "About",
    link: appLinks.about,
    id: "about",
  },
];
const portfolioLinks = [
  {
    title: "Me",
    id: "me",
  },
  {
    title: "Skills",
    id: "skills",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Contact",
    id: "contact",
  },
];
function Navigation() {
  const pathname = usePathname();
  const isPortfolio = pathname.includes("portfolio");
  return (
    <nav>
      <ul className="flex gap-4 text-xl dark:text-stone-300">
        {isPortfolio ? (
          <>
            {portfolioLinks.map(({ title, id }) => {
              return (
                <li
                  key={id}
                  className={cn(
                    "hidden sm:block transition active:scale-95 hover:text-accent-secondary-light dark:hover:text-accent-light border border-transparent dark:hover:bg-stone-800 hover:bg-stone-500 hover:border-accent-secondary-light dark:hover:border-accent cursor-pointer",
                    {
                      "dark:text-accent  text-accent-secondary": false,
                    }
                  )}
                >
                  <ScrollableLink className="px-2" id={id}>
                    {title}
                  </ScrollableLink>
                </li>
              );
            })}
            <HamburgerNavigation />
          </>
        ) : (
          nav.map(({ link, title, id }) => {
            return (
              <li
                key={link}
                className={cn(
                  "transition active:scale-95 hover:text-accent-secondary-light dark:hover:text-accent-light border border-transparent dark:hover:bg-stone-800 hover:bg-stone-500 hover:border-accent-secondary-light dark:hover:border-accent cursor-pointer",
                  {
                    "dark:text-accent  text-accent-secondary":
                      link === "/" ? pathname === link : pathname.includes(id),
                  }
                )}
              >
                <Link className="block px-2" href={link}>
                  {title}
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
