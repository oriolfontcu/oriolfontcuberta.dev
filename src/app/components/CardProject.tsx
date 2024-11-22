"use client";

import { Badge } from "@/components/ui/badge";
import { 
    Card,
    CardContent,
    CardDescription,
    CardTitle
} from "@/components/ui/card";

import { ArrowUpRight } from "lucide-react";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface Position {
    x: number;
    y: number;
}
interface Project {
    title: string;
    href: string;
    description: string;
    technologies: readonly string[];
}

interface CardProjectProps {
    project: Project;
    className?: string;
}

export function CardProject({ className, project }: CardProjectProps) {
    const { title, href, description, technologies } = project;

    const divRef = useRef<HTMLDivElement | null>(null);
    const [focused, setFocused] = useState(false);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!divRef.current || focused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleFocus = () => {
        setFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => setOpacity(1);

    const handleMouseLeave = () => setOpacity(0);

    return (
        <Card
            className={cn("relative", className)}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(97, 97, 97, 0.2), transparent 60%)`,
                }}
            ></div>
            <CardContent>
            <CardTitle className="mt-5">
                <a
                    href={href}
                    className="group flex flex-row gap-1 items-center text-base font-medium decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
                >
                    {title}
                    <ArrowUpRight
                        size={15}
                        className="opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100"
                    />
                </a>
            </CardTitle>
                <CardDescription className="m-1 mb-4">{description}</CardDescription>
                {technologies && technologies.length > 0 && (
                    <>
                        {technologies.map((technology) => (
                            <Badge
                                className="m-1"
                                key={technology}
                            >
                                {technology}
                            </Badge>
                        ))}
                    </>
                )}
            </CardContent>
        </Card>
    );
}
