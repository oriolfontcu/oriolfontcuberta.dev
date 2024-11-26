import { DATA } from "@/data/resume"
import { ExperienceCard } from "./ExperienceCard"

export const Experience = () => {
    return (
        <div className="w-7/12 sm:w-8/12">
            <div className="flex flex-col justify-center items-center">
                <ExperienceCard
                    experienceData={DATA.experienceData}
                />
            </div>
        </div>
    )
}