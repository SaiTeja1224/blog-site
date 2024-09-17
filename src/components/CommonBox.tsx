"use client";

import { cn } from "@/lib/style";
import { MouseEvent } from "react";

function CommonBox({
  id,
  children,
  active,
  hover,
  fit,
  noFocus,
  button,
  onClick,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  active?: boolean;
  hover?: boolean;
  fit?: boolean;
  noFocus?: boolean;
  button?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  className?: string;
}) {
  let classes = cn(
    "border dark:bg-stone-800/50 bg-stone-300/30 border-stone-500/50 dark:border-stone-200/25",
    className,
    {
      "w-fit": fit,
      "dark:hover:bg-stone-600/25 hover:bg-stone-500 dark:hover:border-accent hover:border-accent-secondary-light":
        hover,
      "dark:bg-stone-600/25 bg-stone-500 dark:border-accent border-accent-secondary-light dark:text-accent-light text-accent-secondary-light":
        active,
    }
  );
  if (button) {
    classes += " cursor-pointer active:scale-95";
    return (
      <button
        id={id}
        tabIndex={noFocus ? -1 : 0}
        className={classes}
        onClick={(e) => {
          if (!!onClick) {
            onClick(e);
          }
        }}
      >
        {children}
      </button>
    );
  }
  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}

export default CommonBox;
