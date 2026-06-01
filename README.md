# ExamNexx

AI-powered exam revision platform built around learning from mistakes.

## What is scaffolded

- `apps/web`: Next.js App Router frontend with TypeScript and Tailwind-ready styling.
- `apps/api`: FastAPI backend entrypoint with a health check and app configuration.
- PostgreSQL via `docker-compose.yml`.
- Workspace config for a pnpm-based monorepo.

## Getting started

1. Copy `.env.example` to `.env` and adjust values if needed.
2. Start PostgreSQL with `docker compose up -d`.
3. Run the frontend with `pnpm dev:web`.
4. Run the API with `pnpm dev:api`.

## Next implementation targets

- Authentication with JWT and role-based access control.
- Exam, question, attempt, and mistake persistence.
- Revision knowledge base and personalized practice generation.
- RAG-backed AI revision assistant.