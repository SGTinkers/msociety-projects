"use client"

import type { Project } from "@/types/project"
import Image from "next/image"
import React from 'react'

interface ProjectCardProps {
    project: Project
    onContributorClick: (handle: string) => void
    activeContributor: string | null
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onContributorClick, activeContributor }) => {
    return (
        <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{project.title}</h3>
                    <div className="flex gap-1 -space-x-1">
                        {project.contributors.map((contributor) => (
                            <button
                                key={contributor.handle}
                                onClick={() => onContributorClick(contributor.handle)}
                                className={`p-1 rounded-full relative z-0 hover:z-10 ${activeContributor === contributor.handle ? "bg-primary" : "bg-muted"}`}
                                title={contributor.name}
                            >
                                <div className="relative h-6 w-6 rounded-full overflow-hidden">
                                    <Image
                                        src={contributor.avatar || "/placeholder.svg?height=24&width=24"}
                                        alt={contributor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <p className="text-sm text-muted-foreground">{project.description}</p>

                <div className="flex gap-2 text-sm">
                    <span className="bg-muted px-2 py-1 rounded-md">{project.nature}</span>
                    <span className="bg-muted px-2 py-1 rounded-md">{project.platform}</span>
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-black text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-gray-800 transition duration-300"
                >
                    Visit Project
                </a>
            </div>
        </div>
    )
}

export default ProjectCard

