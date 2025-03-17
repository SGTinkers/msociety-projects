export interface Contributor {
    name: string
    avatar: string
    handle: string
}

export type Project = {
    title: string
    link: string
    description: string
    nature: ProjectNature
    platform: ProjectPlatform
    thumbnail: string
    contributors: {
        name: string
        avatar: string
        handle: string
    }[]
}

export type ProjectNature =
    | "Side Project"
    | "Startup"
    | "Freelance"

export type ProjectPlatform =
    | "Web App"
    | "Mobile App"
    | "Mobile Game"
    | "Telegram Bot"
    | "Library"

