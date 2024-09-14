import ProfileImage from "./assets/sai.jpeg";

import Image from "next/image";
import CommonBox from "@/components/CommonBox";
import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import FrontendIcon from "./components/frontend-icon";
import BackendIcon from "./components/backend-icon";
import OtherToolIcon from "./components/other-tool-icon";
import Link from "next/link";
import { appLinks } from "@/lib/constants";

export const metadata = {
  title: "Sai Teja | About Me",
  description: "Know more about me",
};

function About() {
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
        <section className="flex items-center justify-between">
          <div className="basis-[50%]">
            <h2 className="text-4xl font-semibold mb-5">Me</h2>
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
            className="rounded-full"
          />
        </section>
        <div className="flex items-stretch gap-3">
          <CommonBox button hover className="hover:scale-105 transition">
            <a
              href={appLinks.resume}
              download={true}
              className="text-xl p-2 flex items-center gap-2 hover:text-accent-secondary-light dark:hover:text-accent-light"
            >
              Download Resume <DownloadIcon width={20} height={20} />
            </a>
          </CommonBox>
          <CommonBox button hover className="hover:scale-105 transition">
            <div className="text-xl p-2 flex items-center gap-2 hover:text-accent-secondary-light dark:hover:text-accent-light">
              Contact Me <PaperPlaneIcon width={20} height={20} />
            </div>
          </CommonBox>
          <CommonBox button hover className="hover:scale-105 transition">
            <Link
              href={appLinks.linkedIn}
              target="_blank"
              className="text-xl p-2 flex items-center hover:text-accent-secondary-light dark:hover:text-accent-light"
            >
              <LinkedInLogoIcon width={25} height={25} />
            </Link>
          </CommonBox>
          <CommonBox button hover className="hover:scale-105 transition">
            <Link
              href={appLinks.github}
              target="_blank"
              className="text-xl p-2 flex items-center hover:text-accent-secondary-light dark:hover:text-accent-light"
            >
              <GitHubLogoIcon width={25} height={25} />
            </Link>
          </CommonBox>
        </div>
      </div>
      <section>
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
      <section className="space-y-5">
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
    </article>
  );
}

export default About;
