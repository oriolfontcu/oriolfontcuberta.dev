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
        // CV: {
        //   name: "CV",
        //   url: "/CV_FontcubertaAduart_Oriol.pdf",
        //   icon: Icons.CV,
        // }
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
        title: "McPolitics",
        href: "#",
        description:
          "An online political strategy game simulating politics, economy, and warfare. Contributed to frontend and backend development.",
        technologies: [
          "React.js",
          "Typescript",
          "MongoDB",
          "TailwindCSS",
          "Node.JS",
        ],
      },
      {
        title: "ClientSeeker",
        href: "#",
        description:
          "A SaaS tool to identify and target businesses without an online presence. Built to streamline lead generation and boost client acquisition efficiency.",
        technologies: [
          "Next.js",
          "Typescript",
          "Prisma",
          "PostgreSQL",
          "TailwindCSS",
          "Shadcn UI",
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

