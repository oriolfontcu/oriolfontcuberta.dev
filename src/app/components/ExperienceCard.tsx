import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface Experience {
    startDate: string;
    endDate: string;
    role: string;
    company: string;
    companyUrl: string;
    aboutRole: string;
  }
  
interface ExperienceSectionProps {
    experienceData: Experience[];
}
  
export function ExperienceCard({ experienceData }: ExperienceSectionProps) {
    return (
      <section
        className={cn(
          "flex flex-col space-y-4",
          "delay-200 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards"
        )}
      >
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-medium">Experience</h2>
        </div>
  
        <ol className="relative space-y-6 border-l-2 border-neutral-300 dark:border-neutral-800">
          {experienceData.map((experience, index) => (
            <li key={index} className="ml-5 mt-1">
              <div
                className={cn(
                  "absolute -left-[6.5px] mt-2 h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800"
                )}
              ></div>
              <time className="mb-2 font-mono text-xs font-normal leading-none text-neutral-600 dark:text-neutral-400">
                {experience.startDate} - {experience.endDate}
              </time>
              <div className="mt-2 flex flex-col space-y-0.5">
                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  {experience.role}
                </h3>
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-max items-center text-sm text-neutral-600 transition-colors duration-150 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
                >
                  <span>{experience.company}</span>
                  <ArrowUpRight
                    className="ml-1 duration-150 group-hover:translate-x-[1.5px]"
                    size={12}
                    strokeWidth={1.5}
                  />
                </a>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                {experience.aboutRole}
              </p>
            </li>
          ))}
        </ol>
      </section>
    );
  }