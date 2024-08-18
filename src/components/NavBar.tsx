import Link from "next/link";
import Navigation from "./Navigation";
import ThemeSelector from "./ThemeSelector";

function BlogHeader() {
  return (
    <nav className="pt-5 mt-0 dark:bg-neutral-900 bg-stone-200 sticky top-0 z-50">
      <div className="border-b pb-1 border-stone-700 flex justify-between items-center lg:max-w-[50%] max-w-[90%] mx-auto ">
        <hgroup className="active:scale-95">
          <Link href={"/"}>
            <h1 className="text-2xl leading-none font-bold">Sai Teja</h1>
            <p className="dark:text-accent text-accent-secondary">A web dev</p>
          </Link>
        </hgroup>
        <Navigation />
        <ThemeSelector />
      </div>
    </nav>
  );
}

export default BlogHeader;
