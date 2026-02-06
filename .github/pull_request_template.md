## 🤖 Claude Automation Report

### Summary
### 🛠 Proposed Changes
- [ ] Added/Updated logic in `src/`
- [ ] Added unit tests in `tests/`
- [ ] Updated `CLAUDE.md` or documentation if applicable

### 🧪 Verification Results
**Tests Run:** `bun test`
**Status:** ✅ PASSING

```bash
# Claude's Test Output Snippet:
[Paste snippet of successful test run here]

### 🔗 Related Issues
Closes # ```

### How the Automation Trigger Works
When Claude fills that out (e.g., `Closes #1`), GitHub creates a "Development" link in the sidebar of both the Issue and the PR.



### Why this is powerful for your setup:
* **Automatic Cleanup:** When you click "Merge" on Claude's PR, the associated Issue is **instantly closed**. You don't have to manually manage your task list.
* **Contextual History:** If you look at the Issue six months from now, it will have a permanent link to the PR where Claude wrote the code.
* **Visibility:** It tells anyone else looking at the repo exactly which bug or feature request this specific code change is addressing.

---

### Pro-Tip: Update your `CLAUDE.md` to enforce this
To make sure Claude doesn't forget to fill in that specific line in the template, add this to your `CLAUDE.md` under the "Git Workflow" section:

```markdown
- **PR Linking:** When creating a PR, always update the "Related Issues" section. 
- Use the syntax "Closes #ID" to ensure the issue is automatically resolved.