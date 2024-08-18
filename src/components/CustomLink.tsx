import { cn } from "@/lib/style";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
type CustomLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    href: string;
  };

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "hover:underline underline-offset-2 text-accent-secondary hover:text-accent-secondary-light dark:text-accent dark:hover:text-accent-light",
        props.className
      )}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
