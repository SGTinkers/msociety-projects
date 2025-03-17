import ProjectsDisplay from "@/components/projects-display"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">MSOCIETY Projects</h1>
        <p className="text-muted-foreground">Showcasing projects by the cool peeps of msociety</p>
      </header>
      <ProjectsDisplay />
    </main>
  )
}

