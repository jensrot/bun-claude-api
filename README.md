# bun-claude-api

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.7. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

---

## 🔄 Agentic Workflow: How We Build Together

This repository utilizes an **Agentic Development Loop** with Claude. To maintain code quality and automation, we follow this strictly defined flow:

### 1. Define (Human) ✍️
* **Action:** Create a GitHub Issue describing the feature, bug, or refactor.
* **Detail:** Be as specific as possible with requirements (e.g., "Add a `POST /register` endpoint using SQLite").

### 2. Summon (Human) 🤖
* **Action:** Mention `@claude` in an issue comment.
* **Result:** This triggers the **GitHub Action** (`claude.yml`), which spins up a Bun environment in the cloud.

### 3. Implement (Claude) 🛠️
* **Action:** Claude reads `CLAUDE.md` to learn the project standards and tech stack.
* **Execution:**
    * It creates a dedicated feature branch (e.g., `feat/issue-1-auth`).
    * It writes the source code in `src/` and unit tests in `tests/`.
    * It attempts to fix any errors it encounters during the build process.

### 4. Verify (Automation) ✅
* **Action:** Claude runs `bun test` inside the runner.
* **Requirement:** The AI will not open a Pull Request until the test suite passes 100%.

### 5. Review & Merge (Human) 🚀
* **Action:** Claude opens a PR using the `pull_request_template.md`.
* **Traceability:** The PR is automatically linked to the issue via "Closes #ID".
* **Completion:** Once you approve and merge, GitHub automatically closes the issue and cleans up the branch.

---

> **Note:** This repository is to test out the Agentic Coding way using Claude (describing Issues and letting it create PRs).
