import ProjectsDisplay from "@/components/projects-display"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Enhanced Visuals */}
      <div className="relative overflow-hidden border-b border-white/5">

        {/* Animated Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-block animate-fade-in">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Community Projects Showcase
                </span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
              <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                MSOCIETY
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                Projects
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Discover tech projects from our members <span className="inline-block">from <a href="#community-project" className="text-green-400 hover:text-green-300 underline decoration-green-400/30 hover:decoration-green-400 underline-offset-4 transition-all duration-200">community projects</a> & <a href="#side-project" className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-400 underline-offset-4 transition-all duration-200">side projects</a> to <a href="#startup" className="text-purple-400 hover:text-purple-300 underline decoration-purple-400/30 hover:decoration-purple-400 underline-offset-4 transition-all duration-200">startups</a>. ✨</span>
            </p>

            {/* Decorative Line */}
            <div className="flex justify-center pt-4 animate-fade-in-up delay-300">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
            </div>
          </div>

          {/* CTA Button - Desktop top-right */}
          <div className="hidden md:block absolute top-6 right-6 z-10 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="group bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeGXhi7kVCRkt2KQjAiSYdeVifdSbiZ7xkI3CFCtsVd8ehHzA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Plus className="size-5 group-hover:rotate-90 transition-transform duration-300" />
                Submit Project
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Button - Mobile FAB */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 animate-fade-in">
        <Button
          asChild
          className="group bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border border-white/20 hover:border-white/30 transition-all duration-300 shadow-xl h-14 w-14 rounded-full p-0"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeGXhi7kVCRkt2KQjAiSYdeVifdSbiZ7xkI3CFCtsVd8ehHzA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Plus className="size-6 group-hover:rotate-90 transition-transform duration-300" />
          </a>
        </Button>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ProjectsDisplay />
      </div>
    </main>
  )
}

