import { Badge } from "@/components/ui/badge";
import { 
    Card ,
    CardContent,
    CardDescription,
    CardTitle
  } from "@/components/ui/card";
import React from "react";
  
interface Project {
    title: string;
    href: string;
    description: string;
    technologies: readonly string[];
}

interface CardProjectProps {
    project: Project;
}

export function CardProject({project}: CardProjectProps) {
    const { title, href, description, technologies } = project;

    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <a href={href}>Click</a>
            <CardContent>
                <CardDescription>{description}</CardDescription>
                {technologies && technologies.length > 0 && (
                    <>
                        {technologies.map((technology) => (
                            <Badge
                                key={technology}
                            >{technology}</Badge>
                        ))}  
                    </>
                )}
            </CardContent>

        </Card>
    );
}
  