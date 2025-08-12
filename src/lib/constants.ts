export const appLinks = {
  baseLink: "https://thesaiteja.com",
  github: "https://github.com/saiTeja1224",
  linkedIn: "https://www.linkedin.com/in/sai-teja-j/",
  resume: "/sai-resume.pdf",
  email: "saitejaj07@gmail.com",

  // Projects
  blogSite: "https://github.com/SaiTeja1224/blog-site",
  yelpCamp: "https://github.com/SaiTeja1224/YelpCamp",
  topicScouter: "https://github.com/SaiTeja1224/topic-scouter",
  backendStarterKit: "https://github.com/SaiTeja1224/base-backend-express",
  utilsServer: "https://github.com/SaiTeja1224/util-server",

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
  portfolioNavigations: [
    {
      title: "Me",
      id: "me",
    },
    {
      title: "Skills",
      id: "skills",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ],
};
