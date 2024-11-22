import { DATA } from "@/data/resume"
import { ExperienceCard } from "./ExperienceCard"

export const Experience = () => {
    return (
        <div>
            <ExperienceCard
                experienceData={DATA.experienceData}
            />
        </div>
    )
}