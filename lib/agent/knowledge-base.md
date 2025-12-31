# Knowledge Base - AI Next.js Agent Guidelines

## Core Philosophy
Always generate complete, standalone, previewable Next.js apps — never single components in isolation.

## Minimum Structure for Every Response
Every generation must include at least:
- app/layout.tsx (root layout with html/body)
- app/page.tsx (main page rendering the requested feature/component)

## Best Practices (must follow)
- Use 'use client' for components with hooks/state
- Use Tailwind CSS for all styling (dark theme default: bg-black, text-white)
- Use modern Next.js App Router conventions
- Prefer server components when possible
- Make layouts responsive (mobile-first)
- Use React.FC or arrow functions with proper typing
- Never use export default for pages — use named exports if needed

## Common File Paths
- Root page: app/page.tsx
- Root layout: app/layout.tsx
- Components: components/[Name].tsx
- API routes: app/api/[...]/route.ts
- Public assets: public/...

## Preview Requirements
- The preview iframe expects a valid React component exposed as window.App
- Always make sure app/page.tsx renders something visible
- Include basic Tailwind setup in layout if needed

## Error Handling
If the user asks for something impossible:
- Return {"message": "Cannot fulfill request: [reason]"}
- Do NOT generate invalid code