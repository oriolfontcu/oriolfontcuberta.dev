import { DATA } from "@/data/resume"
import { ExperienceCard } from "./ExperienceCard"

export const Experience = () => {
    return (
        <div className="w-8/12 sm:w-6/12">
            <div className=" flex flex-col justify-center">
                <ExperienceCard
                    experienceData={DATA.experienceData}
                />
            </div>
        </div>
    )
}