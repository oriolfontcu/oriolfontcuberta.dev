import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home"},
    ],
    contact: {
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/oriolfontcu",
          icon: Icons.github,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://linkedin.com/in/oriolfontcuberta",
          icon: Icons.linkedin,
        },
        CV: {
          name: "CV",
          url: "/CV_FontcubertaAduart_Oriol.pdf",
          icon: Icons.CV,
        }
      },
    },
    technologies: [
      {
        name: "TypeScript",
        icon: Icons.TypeScript,
      },
      {
        name: "ReactJS",
        icon: Icons.ReactJS,
      },
      {
        name: "NextJS",
        icon: Icons.NextJS,
      },
      {
        name: "NodeJS",
        icon: Icons.NodeJS,
      },
      {
        name: "PHP",
        icon: Icons.PHP,
      },
      {
        name: "MySQL",
        icon: Icons.MySQL,
      },
    ],
    projects: [
      {
        title: "Chat Collect",
        href: "https://chatcollect.com",
        description:
          "With the release of the and monetize your GPT API usage.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Stripe",
          "Shadcn UI",
          "Magic UI",
        ],
      },
      {
        title: "Magic UI",
        href: "https://magicui.design",
        description:
          "Designed, developed and sold animated UI components for developers.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Stripe",
          "Shadcn UI",
          "Magic UI",
        ],
      },
      {
        title: "llm.report",
        href: "https://llm.report",
        description:
          "Designed, developed and sold animated UI components for developers.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Shadcn UI",
          "Magic UI",
          "Stripe",
          "Cloudflare Workers",
        ],
      },
      {
        title: "Automatic Chat",
        href: "https://automatic.chat",
        description:
          "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Shadcn UI",
          "Magic UI",
          "Stripe",
          "Cloudflare Workers",
        ],
      },
    ],
    experienceData: [
      {
        startDate: "Mar 2023",
        endDate: "Jun 2023",
        role: "IT Intern",
        company: "Atlas Language School | Dublin, Ireland",
        companyUrl: "https://atlaslanguageschool.com/",
        aboutRole: "Participated in an Erasmus internship program as part of my Technician in microcomputer systems and networks degree.",
      },
    ],
  };

