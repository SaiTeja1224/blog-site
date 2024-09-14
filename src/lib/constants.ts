export const appLinks = {
  portfolioLink: "https://saiteja1224.github.io/portfolio/",

  postsLink: "/posts/",
  tagsLink: "/tags/",
  about: "/about/",

  getTagLink(tag: string) {
    return this.tagsLink + tag;
  },
  getPostLink(slug: string) {
    return this.postsLink + slug;
  },
  getCategoryLink(category: string) {
    return "/category/" + category;
  },
};
