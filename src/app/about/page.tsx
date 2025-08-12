import ProfileImage from "./assets/sai.jpeg";

import Image from "next/image";
import CommonBox from "@/components/CommonBox";
import {
  DownloadIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import FrontendIcon from "./components/frontend-icon";
import BackendIcon from "./components/backend-icon";
import OtherToolIcon from "./components/other-tool-icon";
import Link from "next/link";
import { appLinks } from "@/lib/constants";
import ScrollableLink from "../../components/scrollable-link";
import ContactForm from "./components/contact-form";

export const metadata = {
  title: "Sai Teja | About Me",
  description: "Know more about me",
};

function About() {
  const sourceTitle = (
    <div className="flex items-center gap-2">
      Source <ExternalLinkIcon width={16} height={16} />
    </div>
  );
  const demoTitle = (
    <div className="flex items-center gap-2">
      Demo <ExternalLinkIcon width={16} height={16} />
    </div>
  );
  const projects = [
    {
      title: "Portfolio/Blog",
      description:
        "This website itself, it also has a posts section where you can view my posts",
      source: appLinks.blogSite,
      links: [
        {
          title: sourceTitle,
          link: appLinks.blogSite,
        },
        {
          title: demoTitle,
          link: "https://thesaiteja.com/",
        },
      ],
    },
    {
      title: "Topic Scouter",
      description:
        "An application to help view and create topics, rate them and view others' rating on it.",
      source: appLinks.topicScouter,

      links: [
        {
          title: sourceTitle,
          link: appLinks.topicScouter,
        },
        {
          title: demoTitle,
          link: "https://saiteja1224.github.io/topic-scouter/",
        },
      ],
    },
    {
      title: "Backend Starter Kit",
      description: "A starter kit to get your web server up and running.",
      source: appLinks.backendStarterKit,

      links: [
        {
          title: sourceTitle,
          link: appLinks.backendStarterKit,
        },
      ],
    },
    {
      title: "Utils Server",
      description:
        "A common server to use for general purpose needs (eg : Auth, email, SMS, schedulers etc.)",
      source: appLinks.utilsServer,

      links: [
        {
          title: sourceTitle,
          link: appLinks.utilsServer,
        },
      ],
    },
    {
      title: "YelpCamp",
      description:
        "An application where you can add campground sites, comment under the post and post reviews about the place you visit.",
      source: appLinks.yelpCamp,

      links: [
        {
          title: sourceTitle,
          link: appLinks.yelpCamp,
        },
      ],
    },
  ];
  const skillSets = [
    {
      title: "Frontend",
      icon: <FrontendIcon className="highlight" />,
      list: [
        "React",
        "Next.js",
        "Typescript",
        "Javascript",
        "HTML",
        "CSS",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      icon: <BackendIcon className="highlight" />,
      list: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose (ODM)",
        "Prisma (ORM)",
        "Bun",
        "Redis",
      ],
    },
    {
      title: "Other Tools",
      icon: <OtherToolIcon className="highlight" />,
      list: [
        "Git",
        "GitHub",
        "VSCode",
        "Webpack",
        "Nginx",
        "Linux",
        "Vite",
        "Babel",
        "OAuth",
        "JWT",
        "Zod",
        "Zustand",
        "Redux",
      ],
    },
  ];

  return (
    <article className="space-y-20">
      <div className="space-y-5">
        <section
          id="me"
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-0 sm:justify-between"
        >
          <div className="sm:basis-[50%]">
            {/* <h2 className="text-4xl font-semibold mb-5">Hello</h2> */}
            <p className="text-xl">
              Hey there! I&apos;m Sai, a{" "}
              <span className="highlight font-semibold">
                full-stack developer
              </span>{" "}
              who works mainly with <span className="highlight highlight-hover">JavaScript</span> and loves bringing ideas to life as interactive experiences. Over the past couple of years, I’ve been building smooth, responsive web apps, always aiming to make them feel intuitive and a little bit special.
            </p>
          </div>
          <Image
            src={ProfileImage}
            alt="sai teja"
            width={200}
            height={200}
            className="rounded-full w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] "
          />
        </section>
        <div
          id="cta"
          className="flex items-stretch justify-center sm:justify-start flex-wrap gap-3"
        >
          <CommonBox
            button
            noFocus
            hover
            className="hover:scale-105 transition"
          >
            <a
              href={appLinks.resume}
              download={true}
              className="text-xl p-2 flex items-center gap-2 hover-effect"
            >
              Download Resume <DownloadIcon width={20} height={20} />
            </a>
          </CommonBox>
          <CommonBox
            button
            noFocus
            hover
            className="hover:scale-105 transition"
          >
            <ScrollableLink
              id="contact"
              className="text-xl p-2 flex items-center gap-2 hover-effect"
            >
              Contact Me <PaperPlaneIcon width={20} height={20} />
            </ScrollableLink>
          </CommonBox>
          <CommonBox
            button
            noFocus
            hover
            className="hover:scale-105 transition flex items-center"
          >
            <Link
              href={appLinks.linkedIn}
              target="_blank"
              className="text-xl p-2 flex items-center hover-effect"
            >
              <LinkedInLogoIcon width={25} height={25} />
            </Link>
          </CommonBox>
          <CommonBox
            button
            noFocus
            hover
            className="hover:scale-105 transition flex items-center"
          >
            <Link
              href={appLinks.github}
              target="_blank"
              className="text-xl p-2 flex items-center hover-effect"
            >
              <GitHubLogoIcon width={25} height={25} />
            </Link>
          </CommonBox>
        </div>
      </div>
      <section id="about">
        <h2 className="text-4xl font-semibold mb-5">About Me </h2>
        <p className="text-xl leading-relaxed">
          I’m Sai Teja, a developer based in Hyderabad, 
          India, and I enjoy building intuitive and engaging web experiences. My journey in technology began with a degree in <span className="highlight">Computer Science</span>, where I discovered my love for programming.
          <br /> <br /> 
          Among the many branches of programming, <span className="highlight">web development</span> captured my heart the most—it lets me bring ideas to life, painting them onto a digital canvas for the world to experience. My core tech stack includes <span className="highlight">Next.js, React, Node.js, TypeScript, and MongoDB</span>, but I’m always eager to explore new tools and broaden my skill set.
          <br /> <br />
          When I’m not coding, you’ll often find me watching movies and shows, sketching, playing video games, or enjoying sports like badminton and cricket.
        </p>
      </section>
      <section id="skills" className="space-y-7">
        <h2 className="text-4xl font-semibold">What I Work With</h2>
        <CommonBox className="space-y-12 p-4">
          {skillSets.map((skillSet) => (
            <div className="flex items-center gap-5" key={skillSet.title}>
              <div className="basis-[10%] min-w-[10%]">{skillSet.icon}</div>
              <div className="flex flex-wrap gap-2">
                {skillSet.list.map((skill) => (
                  <CommonBox
                    fit
                    className="px-2 py-1 hover-effect cursor-default text-lg"
                    key={skill}
                  >
                    {skill}
                  </CommonBox>
                ))}
              </div>
            </div>
          ))}
        </CommonBox>
      </section>
      <section id="projects" className="space-y-7">
        <h2 className="text-4xl font-semibold">Things I’ve Built</h2>
        <div className="flex flex-wrap gap-10">
          {projects.map((project) => (
            <CommonBox
              key={project.title}
              className="flex-1 flex flex-col min-w-60 h-60 p-4 gap-3"
            >
              <Link
                href={project.source}
                className="text-2xl font-medium hover-effect highlight-hover"
              >
                {project.title}
              </Link>
              <p className="dark:text-stone-400 text-stone-600 text-base">
                {project.description}
              </p>
              <footer className="mt-auto flex gap-2">
                {project.links.map((link) => (
                  <CommonBox
                    key={link.link}
                    button
                    noFocus
                    hover
                    className="hover:scale-105 transition"
                  >
                    <Link
                      href={link.link}
                      target="_blank"
                      className="block hover-effect p-1"
                    >
                      {link.title}
                    </Link>
                  </CommonBox>
                ))}
              </footer>
            </CommonBox>
          ))}
        </div>
      </section>
      <section id="contact" className="space-y-7">
        <h2 className="text-4xl font-semibold">Let’s Connect</h2>
        <sub className="text-lg">
          Get in touch with me at{" "}
          <a
            className="highlight highlight-hover"
            href={"mailto:" + appLinks.email}
          >
            {appLinks.email}
          </a>{" "}
          or by the form below.
        </sub>
        <ContactForm />
      </section>
    </article>
  );
}

export default About;
