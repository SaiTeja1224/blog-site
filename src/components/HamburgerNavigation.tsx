"use client";
import React, { useEffect, useState } from "react";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import CommonBox from "./CommonBox";
import ScrollableLink from "@/components/scrollable-link";
import { appLinks } from "@/lib/constants";

function HamburgerNavigation() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        event.target.id !== "menu-icon"
      ) {
        if (!event.target.closest("#hamburger-menu")) {
          setOpen(false);
        }
      }
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <CommonBox
        id={"menu-icon"}
        fit
        hover
        button
        active={open}
        className="hover-effect sm:hidden"
        onClick={handleOpen}
      >
        <HamburgerMenuIcon width={20} height={20} className="m-2 " />
      </CommonBox>
      {open && (
        <div
          id="hamburger-menu"
          className="absolute lg:inset-[50%] inset-[5%] top-[72px] sm:hidden"
        >
          <CommonBox className="dark:bg-stone-900 bg-stone-200 py-4">
            <ul>
              {appLinks.portfolioNavigations.map(({ id, title }) => {
                return (
                  <li
                    key={id}
                    className="block cursor-pointer dark:hover:bg-accent dark:hover:text-stone-900 hover:bg-accent-secondary hover:text-stone-200 transition"
                    onClick={handleOpen}
                  >
                    <ScrollableLink className="block px-4 py-3" id={id}>
                      {title}
                    </ScrollableLink>
                  </li>
                );
              })}
            </ul>
          </CommonBox>
        </div>
      )}
    </>
  );
}

export default HamburgerNavigation;
