export const appLinks = {
  portfolioLink: "https://saiteja1224.github.io/portfolio/",
  github: "https://github.com/saiTeja1224",
  linkedIn: "https://www.linkedin.com/in/sai-teja-j/",
  resume: "/sai-resume.pdf",

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
