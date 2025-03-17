import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>MSOCIETY Projects</title>
        <meta name="title" content="MSOCIETY Projects" />
        <meta name="description" content="Explore fun projects made by the members of MSOCIETY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body>{children}</body>
    </html>
  )
}
