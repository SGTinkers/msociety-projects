# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MSOCIETY is a Next.js 15 project showcase website that displays community projects with filtering capabilities. It's a static, client-side rendered application with no backend, database, or external APIs.

## Common Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack (http://localhost:3000)

# Build & Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint checks
```

## Architecture

**Framework**: Next.js 15.2.2 with App Router (primary routing in `/src/app`)

**Stack**:
- TypeScript (strict mode)
- React 19
- Tailwind CSS v4 with CSS variables for theming
- shadcn/ui components (New York style)
- Radix UI primitives for accessibility
- Lucide React icons

**Key Directories**:
```
/src
├── /app              # App Router (layout.tsx, page.tsx)
├── /components       # React components
│   ├── /ui          # shadcn/ui components (Select, Button, Card, Badge)
│   └── *.tsx        # Feature components (ProjectsDisplay, ProjectCard, FilterDropdown)
├── /data            # Static data
│   └── projects.ts  # Hard-coded projects array (main data source)
├── /types           # TypeScript definitions
│   └── project.ts   # Project and Contributor interfaces
└── /lib             # Utilities
    └── utils.ts     # cn() utility for class merging
```

## Data Flow

All project data is **hard-coded** in `/src/data/projects.ts`. To add/edit projects, modify this file directly.

**State Management**:
- Client-side only, using React hooks in `ProjectsDisplay.tsx`
- Three filter states: `natureFilter`, `platformFilter`, `contributorFilter`
- Filters combine with AND logic
- No global state management (no Redux, Zustand, etc.)

**Component Flow**:
```
ProjectsDisplay (manages filter state)
  ├→ FilterDropdown (nature/platform filters)
  ├→ Filter logic (derives filtered projects)
  └→ ProjectCard[] (renders filtered results)
      └→ Handles contributor clicks (updates contributorFilter)
```

## Styling Conventions

**Tailwind CSS v4**:
- Uses CSS custom properties for all colors (e.g., `--primary`, `--background`)
- OKLCH color model for modern color representation
- Theme configuration in `/src/app/globals.css` with `:root` and `.dark` variants
- Mobile-first responsive design

**Component Styling**:
- Use `cn()` utility from `/src/lib/utils.ts` for merging classes
- Class Variance Authority (CVA) for variant-based component styling
- Data attributes for state styling (e.g., `data-[state=open]`)

**shadcn/ui Components**:
- All UI primitives are in `/src/components/ui/`
- Built on Radix UI for accessibility
- Exported as composable parts (e.g., `Select.Trigger`, `Select.Item`)

## Key Patterns

1. **Client Components**: Use `"use client"` for interactive components (filters, clicks)
2. **Server Components**: Layout and page components are server components by default
3. **Type Safety**: All data strictly typed with TypeScript interfaces in `/src/types/`
4. **Path Aliases**: Use `@/` prefix for imports (e.g., `@/components/ui/button`)
5. **Responsive Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` pattern

## Important Files

- `/src/data/projects.ts` - **Main data source** for all projects
- `/src/types/project.ts` - TypeScript interfaces for Project and Contributor
- `/src/components/projects-display.tsx` - Core filtering logic
- `/src/app/globals.css` - Theme and color system
- `/src/components/ui/` - Reusable shadcn/ui components

## Adding New Projects

Edit `/src/data/projects.ts` and add objects matching the `Project` interface:

```typescript
{
  title: string,
  description: string,
  url: string,
  nature: "Side Project" | "Startup" | "Freelance",
  platform: "Web App" | "Mobile App" | "Mobile Game" | "Telegram Bot" | "Library",
  contributors: Contributor[]
}
```

Contributors require `name`, `handle` (with @ prefix), and `profilePicture` (path in `/public/dp/`).

## Modifying Filters

To add new filter types:
1. Update `Project` type in `/src/types/project.ts`
2. Add filter state and logic in `ProjectsDisplay.tsx`
3. Add FilterDropdown component with new options
4. Update filter combination logic in the derived filter function

## Configuration

- **next.config.ts**: Minimal configuration (uses defaults)
- **tailwind.config.js**: Custom theme with container settings and animations
- **tsconfig.json**: Path alias `@/*` → `./src/*`
- **components.json**: shadcn/ui configuration (New York style, RSC enabled)
