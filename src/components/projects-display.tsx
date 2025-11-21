"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { projectsData } from "@/data/projects"
import type { Project } from "@/types/project"

export default function ProjectsDisplay() {
    const [contributorFilter, setContributorFilter] = useState<string | null>(null)

    // Filter projects based on contributor
    const filteredProjects = projectsData.filter((project) => {
        // Apply contributor filter
        if (contributorFilter) {
            return project.contributors.some((contributor) => contributor.handle === contributorFilter)
        }

        return true
    })

    // Group filtered projects by nature (ordered: Community Project, Startup, Side Project)
    const groupedProjects: Record<string, Project[]> = {
        "Community Project": [],
        "Startup": [],
        "Side Project": []
    }

    filteredProjects.forEach((project) => {
        if (groupedProjects[project.nature]) {
            groupedProjects[project.nature].push(project)
        }
    })

    // Handle contributor click
    const handleContributorClick = (handle: string) => {
        setContributorFilter(handle === contributorFilter ? null : handle)
    }

    // Reset all filters
    const resetFilters = () => {
        setContributorFilter(null)
    }

    const sectionConfig = {
        "Side Project": {
            icon: "🚀",
            description: "Personal passion projects built by our community members",
            gradient: "from-blue-500/10 to-cyan-500/10"
        },
        "Startup": {
            icon: "💡",
            description: "Ventures and businesses launched by the community",
            gradient: "from-purple-500/10 to-pink-500/10"
        },
        "Community Project": {
            icon: "🌱",
            description: "Collaborative projects built for and by the community",
            gradient: "from-green-500/10 to-emerald-500/10"
        }
    }

    const hasAnyFilters = contributorFilter

    return (
        <div className="space-y-12">
            {/* Contributor Filter Section */}
            {contributorFilter && (
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-3 text-sm bg-white/5 backdrop-blur-sm text-white px-5 py-3 rounded-xl border border-white/10">
                        <span className="font-medium text-white/70">Filtering by:</span>
                        <span className="font-semibold text-blue-400">{contributorFilter}</span>
                    </div>
                    <button
                        onClick={resetFilters}
                        className="text-sm text-white/60 hover:text-white transition-colors underline underline-offset-4 hover:underline-offset-8"
                    >
                        Clear filter
                    </button>
                </div>
            )}

            {/* Projects Sections */}
            {filteredProjects.length === 0 ? (
                <div className="text-center py-24">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                        <span className="text-3xl">🔍</span>
                    </div>
                    <p className="text-white/60 text-xl mb-6">No projects match the selected filters</p>
                    <button
                        onClick={resetFilters}
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all duration-300"
                    >
                        Clear filter
                    </button>
                </div>
            ) : (
                <div className="space-y-16">
                    {Object.entries(groupedProjects).map(([nature, projects]) => {
                        if (projects.length === 0) return null

                        const config = sectionConfig[nature as keyof typeof sectionConfig]

                        return (
                            <section key={nature} id={nature.toLowerCase().replace(' ', '-')} className="space-y-8 scroll-mt-24">
                                {/* Section Header with Glassmorphism */}
                                <div className={`relative group rounded-3xl p-8 md:p-10 bg-gradient-to-br ${config.gradient} backdrop-blur-sm border border-white/10 overflow-hidden`}>
                                    {/* Animated background effect */}
                                    <div className="absolute inset-0 opacity-50">
                                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${config.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700`}></div>
                                    </div>

                                    <div className="relative flex items-start gap-5">
                                        <span className="hidden md:block text-5xl md:text-6xl drop-shadow-lg">{config.icon}</span>
                                        <div className="flex-1">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                                                {nature === "Startup" ? "Startups" : `${nature}s`}
                                                <span className="hidden md:inline ml-4 text-lg font-normal text-white/50">
                                                    {projects.length} {projects.length === 1 ? 'project' : 'projects'}
                                                </span>
                                            </h2>
                                            <p className="text-white/70 text-base md:text-lg">{config.description}</p>
                                        </div>
                                    </div>

                                    {/* Bottom shine effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                </div>

                                {/* Projects Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {projects.map((project, index) => (
                                        <ProjectCard
                                            key={index}
                                            project={project}
                                            onContributorClick={handleContributorClick}
                                            activeContributor={contributorFilter}
                                        />
                                    ))}
                                </div>
                            </section>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

