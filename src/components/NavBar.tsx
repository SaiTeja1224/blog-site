import Link from "next/link";
import Navigation from "./Navigation";
import ThemeSelector from "./ThemeSelector";
import Logo from "./Logo";

function BlogHeader() {
  return (
    <nav className="pt-5 mt-0 dark:bg-neutral-900 bg-stone-200 sticky top-0 z-50">
      <div className="border-b pb-1 border-stone-700 flex justify-between items-center lg:max-w-[50%] max-w-[90%] mx-auto ">
        <Logo />
        <Navigation />
        <ThemeSelector />
      </div>
    </nav>
  );
}

export default BlogHeader;
