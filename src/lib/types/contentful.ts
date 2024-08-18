import { Document } from "@contentful/rich-text-types";

// Asset
type AssetFile = {
  url: string;
  details: { size: number; image: { width: number; height: number } };
  fileName: string;
  contentType: string;
};

// Media of any types.
type Asset = {
  fields: {
    file: AssetFile;
    title?: string; // Optional, if present
    description?: string; // Optional, if present
  };
};

// Author content type
type Author = {
  fields: {
    name: string;
    picture: {
      fields: {
        file: AssetFile;
      };
    };
  };
};

export const categories = [
  "Work",
  "Code",
  "Snippet",
  "Life",
  "Others",
] as const;

export type Category = (typeof categories)[number];
export type CategoryValue = {
  sys: { id: string };
  fields: { category: Category };
  active?: boolean;
};

// Post content type
export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: Asset;
  content: string;
  author: Author;
  publishedDate: string;
  tags: string[];
  category: CategoryValue;
};
