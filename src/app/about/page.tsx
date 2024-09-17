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
            <h2 className="text-4xl font-semibold mb-5">Hello</h2>
            <p className="text-xl">
              Hey there! I&apos;m Sai. A{" "}
              <span className="highlight font-semibold">
                full-stack developer
              </span>{" "}
              with <span className="highlight">2</span> year of experience. I
              have a passion for creating sites & apps with a slick and
              responsive design.{" "}
              <span className="highlight highlight-hover">
                React, Next & Node
              </span>{" "}
              are my primary fields.
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
          I am Sai Teja a passionate and creative developer based in Hyderabad,
          Telangana, India. As I studied{" "}
          <span className="highlight">computer science</span> , I discovered I
          enjoy programming. It sparked my interest and made me curious about
          all the cool things you can do with tech. Out of many streams in
          programming <span className="highlight">web development</span>{" "}
          appealed to me the most. It allows me paint my idea on the canvas and
          provide it for the world to see. My core stack is{" "}
          <span className="highlight">
            Next.js, React, Node.js, Typescript, and MongoDB
          </span>
          . I&apos;m always eager to embrace new technologies and expand my
          skill set. I&apos;m looking forward to working with any of you
          interested. <br /> <br /> While I&apos;m not coding, I enjoy watching
          movies and shows, drawing pictures, playing video games and traveling.
        </p>
      </section>
      <section id="skills" className="space-y-7">
        <h2 className="text-4xl font-semibold">Skill Set</h2>
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
        <h2 className="text-4xl font-semibold">Projects</h2>
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
        <h2 className="text-4xl font-semibold">Contact</h2>
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
