import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Technologies() {
    return (
        <div className="w-8/12 sm:w-6/12">
            <div className=" flex flex-col justify-center">
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
                {DATA.technologies.map((technologies, index) => (
                    <li key={index}>
                        <ol><technologies.icon /></ol>
                    </li>
                ))}
                </ol>
            </section>
            </div>
        </div>
    )
}