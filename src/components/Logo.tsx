"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo() {
  const pathname = usePathname();
  const isPortfolio = pathname.includes("portfolio");
  return (
    <hgroup className="active:scale-95">
      <Link href={isPortfolio ? "/portfolio" : "/"}>
        <p className="text-2xl leading-none font-bold">Sai Teja</p>
        <p className="dark:text-accent text-accent-secondary">web dev</p>
      </Link>
    </hgroup>
  );
}

export default Logo;
