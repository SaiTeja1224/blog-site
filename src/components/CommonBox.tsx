"use client";

import { cn } from "@/lib/style";
import { MouseEvent } from "react";

function CommonBox({
  children,
  active,
  hover,
  fit,
  button,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  hover?: boolean;
  fit?: boolean;
  button?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}) {
  let className = cn(
    "border dark:bg-stone-800/50 bg-stone-300/30 border-stone-500/50 dark:border-accent-light dark:border-stone-200/25",
    {
      "w-fit": fit,
      "dark:hover:bg-stone-600/25 hover:bg-stone-500 dark:hover:border-accent hover:border-accent-secondary-light":
        hover,
      "dark:bg-stone-600/25 bg-stone-500 dark:border-accent border-accent-secondary-light dark:text-accent-light text-accent-secondary-light":
        active,
    }
  );

  if (button) {
    className += " cursor-pointer active:scale-95";
    return (
      <button
        className={className}
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
  return <div className={className}>{children}</div>;
}

export default CommonBox;
