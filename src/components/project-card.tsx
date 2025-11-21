"use client"

import type { Project } from "@/types/project"
import Image from "next/image"
import React from 'react'
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
    project: Project
    onContributorClick: (handle: string) => void
    activeContributor: string | null
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onContributorClick, activeContributor }) => {
    return (
        <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-cyan-500/20 blur-xl -z-10"></div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="relative p-6 space-y-4">
                {/* Header with title and contributors */}
                <div className="flex justify-between items-start gap-3">
                    <h3 className="font-bold text-xl leading-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                    </h3>
                    <div className="flex gap-1 -space-x-2 flex-shrink-0">
                        {project.contributors.map((contributor) => (
                            <button
                                key={contributor.handle}
                                onClick={() => onContributorClick(contributor.handle)}
                                className={`relative z-0 hover:z-10 transition-all duration-300 rounded-full ring-2 ${
                                    activeContributor === contributor.handle
                                        ? "ring-blue-400 scale-110 shadow-lg shadow-blue-500/50"
                                        : "ring-white/10 hover:ring-blue-400/50 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                                }`}
                                title={`${contributor.name} (${contributor.handle})`}
                            >
                                <div className="relative h-9 w-9 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm">
                                    <Image
                                        src={contributor.avatar || "/placeholder.svg?height=36&width=36"}
                                        alt={contributor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Platform badge */}
                <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                        {project.platform}
                    </span>
                </div>

                {/* Visit link */}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-cyan-400 transition-colors group/link mt-2"
                >
                    Visit Project
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                </a>
            </div>

            {/* Bottom gradient accent */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
    )
}

export default ProjectCard

