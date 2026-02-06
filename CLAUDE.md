# Project Context: Bun REST API (Agentic Mode)

## 🎯 Strategic Intent
This is a high-performance REST API built with Bun and Elysia. Claude acts as a Senior Automator. Every task should result in a verified, tested, and documented Pull Request.

## 🛠 Tech Stack & Commands
- **Runtime:** Bun (v1.1+)
- **Framework:** Elysia.js
- **Database:** SQLite (`bun:sqlite`)
- **Validation:** TypeBox (Elysia default)
- **Primary Commands:**
  - Build: `bun run build`
  - Test: `bun test`
  - Lint/Fix: `bun x biome check --write .`

## 🤖 GitHub Automation Workflow (MANDATORY)
When an issue is assigned or @claude is mentioned, follow this loop:
1. **Explore:** Read relevant files and the current `schema.sql`.
2. **Plan:** Write a brief execution plan in a comment.
3. **Branch:** Create a branch `feat/issue-[ID]-description` or `fix/issue-[ID]-description`.
4. **Implement:** Write code + Unit Tests.
5. **Verify:** Run `bun test`. If tests fail, you MUST fix them before proceeding.
6. **Push & PR:** - Commit with: `Co-authored-by: Claude <noreply@anthropic.com>`
   - Use `gh pr create --title "..." --body "..."` to open a PR.
   - Link the issue: "Closes #[ID]" in the PR body.

## 📏 Coding Standards
- **Errors:** Use `set.status` for HTTP codes; return `{ "error": "message" }`.
- **Types:** Always export types for API responses in `src/types/`.
- **Formatting:** Use Biome (enforced via `bun test`).

## 📂 Progressive Context
- Detailed DB Schema: See `docs/DATABASE.md`
- API Spec: See `docs/OPENAPI.md`
- PR Template: See `.github/pull_request_template.md`

## PR Formatting Rules
- Always identify the Issue ID you are working on.
- In the PR body, you MUST include "Closes #[ID]" to ensure the issue is resolved upon merge.

## Development Patterns
- **Environment Variables:** Always use `process.env.VARIABLE_NAME`. 
- **Required Vars:** The project requires `JWT_SECRET` for authentication logic.
- **Testing:** When writing tests, assume `JWT_SECRET` is available in the environment.