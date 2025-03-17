"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { projectsData } from "@/data/projects"
import FilterDropdown from "./filter-dropdown"

export default function ProjectsDisplay() {
    const [natureFilter, setNatureFilter] = useState<string | null>(null)
    const [platformFilter, setPlatformFilter] = useState<string | null>(null)
    const [contributorFilter, setContributorFilter] = useState<string | null>(null)

    // Get unique nature values
    const natureOptions = Array.from(new Set(projectsData.map((project) => project.nature)))

    // Get unique platform values
    const platformOptions = Array.from(new Set(projectsData.map((project) => project.platform)))

    // Filter projects based on selected filters
    const filteredProjects = projectsData.filter((project) => {
        // Apply nature filter
        if (natureFilter && project.nature !== natureFilter) {
            return false
        }

        // Apply platform filter
        if (platformFilter && project.platform !== platformFilter) {
            return false
        }

        // Apply contributor filter
        if (contributorFilter) {
            return project.contributors.some((contributor) => contributor.handle === contributorFilter)
        }

        return true
    })

    // Handle contributor click
    const handleContributorClick = (handle: string) => {
        setContributorFilter(handle === contributorFilter ? null : handle)
    }

    // Reset all filters
    const resetFilters = () => {
        setNatureFilter(null)
        setPlatformFilter(null)
        setContributorFilter(null)
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-center gap-4">
                <FilterDropdown
                    label="Platform"
                    options={platformOptions}
                    value={platformFilter}
                    onChange={setPlatformFilter}
                />
                <FilterDropdown
                    label="Project Type"
                    options={natureOptions}
                    value={natureFilter}
                    onChange={setNatureFilter}
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 items-start">
                {(natureFilter || platformFilter || contributorFilter) && (
                    <button onClick={resetFilters} className="text-sm text-primary hover:underline">
                        Reset filters
                    </button>
                )}

                {contributorFilter && (
                    <div className="text-sm bg-muted px-3 py-1 rounded-full">Showing projects by: {contributorFilter}</div>
                )}
            </div>

            {filteredProjects.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No projects match the selected filters.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onContributorClick={handleContributorClick}
                            activeContributor={contributorFilter}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

