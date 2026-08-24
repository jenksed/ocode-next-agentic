# ocode-next-agentic

A lean Next.js App Router substrate for agent-assisted development.

## Requirements

- Node.js >= 20.9.0
- pnpm 10.4.0

## Install

```bash
pnpm install
```

## Develop

```bash
pnpm dev
```

## Verify

```bash
pnpm verify
```

Runs lint, typecheck, and build in sequence.

## Source map

| Path                       | Purpose                                         |
| -------------------------- | ----------------------------------------------- |
| `src/app/`                 | Next.js App Router — pages, layouts, routes     |
| `src/components/ui/`       | Reusable UI primitives                          |
| `src/components/composites/` | Higher-level UI composed from `ui/` primitives |
| `src/features/`            | Feature-scoped business logic                   |
| `src/lib/`                 | Cross-cutting utilities                          |

See `AGENTS.md` for the full change discipline.

## Not yet included

Testing frameworks, Docker, CI/CD, databases, and authentication are
out of scope for this pass.
