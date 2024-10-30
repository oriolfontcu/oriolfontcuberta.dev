import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
    navbar: [
      { href: "#", icon: HomeIcon, label: "Home" },
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
        X: {
          name: "X",
          url: "https://x.com/oriolfontcu",
          icon: Icons.x,
        },
      },
    },
    projects: [
      {
        title: "Chat Collect",
        href: "https://chatcollect.com",
        dates: "Jan 2024 - Feb 2024",
        active: true,
        description:
          "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
        links: [
          {
            type: "Website",
            href: "https://chatcollect.com",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "",
        video:
          "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
      },
      {
        title: "Magic UI",
        href: "https://magicui.design",
        dates: "June 2023 - Present",
        active: true,
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
        links: [
          {
            type: "Website",
            href: "https://magicui.design",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source",
            href: "https://github.com/magicuidesign/magicui",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "https://cdn.magicui.design/bento-grid.mp4",
      },
      {
        title: "llm.report",
        href: "https://llm.report",
        dates: "April 2023 - September 2023",
        active: true,
        description:
          "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
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
        links: [
          {
            type: "Website",
            href: "https://llm.report",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source",
            href: "https://github.com/dillionverma/llm.report",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "https://cdn.llm.report/openai-demo.mp4",
      },
      {
        title: "Automatic Chat",
        href: "https://automatic.chat",
        dates: "April 2023 - March 2024",
        active: true,
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
        links: [
          {
            type: "Website",
            href: "https://automatic.chat",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "",
        video:
          "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
      },
    ],
  };

