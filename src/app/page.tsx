import ProjectsDisplay from "@/components/projects-display"
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MSOCIETY Projects</title>
        <meta name="title" content="MSOCIETY Projects" />
        <meta name="description" content="Explore fun projects made by the members of MSOCIETY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">MSOCIETY Projects</h1>
          <p className="text-muted-foreground">Showcasing projects by the members of msociety</p>
        </header>
        <ProjectsDisplay />
      </main>
    </>
  )
}

