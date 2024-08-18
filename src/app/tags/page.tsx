import CommonBox from "@/components/CommonBox";
import { getTags } from "@/lib/actions/posts";
import { appLinks } from "@/lib/constants";
import Link from "next/link";

async function Tags() {
  const tags = await getTags();

  const mappedTags: Record<string, typeof tags> = {};
  tags.map((tag) => {
    const firstLetter = tag.name.substring(0, 1).toUpperCase();
    if (mappedTags[firstLetter]) {
      mappedTags[firstLetter].push(tag);
    } else {
      mappedTags[firstLetter] = [tag];
    }
  });

  return (
    <>
      <hgroup className="mb-20">
        <h2 className="text-4xl font-bold mb-5">Tags</h2>
        <sub className="text-xl">
          Tags are attached to posts basically an easier <br /> way to filter
          your posts.
        </sub>
      </hgroup>
      <div className="space-y-3">
        {Object.entries(mappedTags).map(([letter, tags]) => {
          return (
            <div
              key={letter}
              className="flex gap-5 border-b border-stone-700 pb-3"
            >
              <p className="basis-[5%] text-3xl text-accent-secondary dark:text-accent">
                {letter}
              </p>
              {tags.map((tag) => {
                return (
                  <CommonBox key={tag.name} hover>
                    <Link
                      href={appLinks.getTagLink(tag.name)}
                      className="px-2 h-full block text-xl dark:hover:text-accent-light hover:text-accent-secondary-light"
                    >
                      {tag.name}
                    </Link>
                  </CommonBox>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tags;
