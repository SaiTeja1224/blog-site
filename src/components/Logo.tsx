"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo() {
  const pathname = usePathname();
  const isPortfolio = pathname.includes("portfolio");
  return (
    <hgroup className="active:scale-95">
      <Link href={isPortfolio ? "/portfolio" : "/"}>
        <h1 className="text-2xl leading-none font-bold">Sai Teja</h1>
        <p className="dark:text-accent text-accent-secondary">web dev</p>
      </Link>
    </hgroup>
  );
}

export default Logo;
