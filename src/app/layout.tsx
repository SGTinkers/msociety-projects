import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>MSOCIETY Projects</title>
        <meta name="title" content="MSOCIETY Projects" />
        <meta name="description" content="Explore tech projects made by the members of MSOCIETY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MSOCIETY Projects" />
        <meta property="og:description" content="Explore tech projects made by the members of MSOCIETY" />
        <meta property="og:image" content="/msociety-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MSOCIETY Projects" />
        <meta name="twitter:description" content="Explore tech projects made by the members of MSOCIETY" />
        <meta name="twitter:image" content="/msociety-og.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
