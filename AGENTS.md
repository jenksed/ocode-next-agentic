<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

This repository is the single source of truth for how ocode-next-agentic is
built and maintained. Follow these rules for any change:

## 1. Repository Authority

The existing repo state and task requirements in this file outrank generic
preferences, Stack Overflow snippets, or tool defaults. Before inventing a
pattern, inspect existing files to see how the same concern is already
handled. If you cannot find an existing pattern, ask before introducing one.

## 2. Package Authority

pnpm is the only supported package manager. The `packageManager` field in
package.json pins the exact pnpm version. Do not switch to npm or yarn.
Install with `pnpm install`. Add dependencies with
`pnpm add <pkg>` or `pnpm add -D <pkg>`.

## 3. Source Ownership

- `src/app/` — Next.js App Router entry point. Pages, layouts, and route
  handlers live here.
- `src/components/ui/` — Reusable, framework-agnostic UI primitives
  (Button, Input, etc.). Must be generic and prop-driven.
- `src/components/composites/` — Higher-level UI built from `ui/` primitives
  (forms, cards, layouts). Still presentational.
- `src/features/` — Feature-scoped code (business logic, data schemas,
  state). Each feature owns its own sub-tree.
- `src/lib/` — Cross-cutting utilities not tied to a specific feature
  (formatting, validation, http clients). If a utility is used by only one
  feature, keep it in that feature instead.

## 4. Feature Locality

Feature-specific behavior stays feature-local unless demonstrated reuse
across multiple features exists. Avoid premature extraction into `lib/` or
`ui/`.

## 5. Next.js Boundaries

- App Router only. Do not mix with Pages Router.
- Prefer Server Components. Mark client components with
  `"use client"` only when interactivity is needed.
- Never leak secrets or server-only modules into client bundles. Keep
  `.env*` files server-side only.

## 6. Change Discipline

- Smallest coherent change. One concern per commit.
- No unrelated refactors, reorganization, speculative abstraction, or
  dependencies added "for later."
- Every change must pass `pnpm verify`.

## 7. Completion

`pnpm verify` is the canonical validation gate:
`pnpm lint && pnpm typecheck && pnpm build`.
Report evidence of each step passing.
