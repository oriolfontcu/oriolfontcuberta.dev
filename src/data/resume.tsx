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
  };

