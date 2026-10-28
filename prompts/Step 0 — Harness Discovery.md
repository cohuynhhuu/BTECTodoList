Act as an AI-DLC facilitator and repository analyst.

Inspect the existing BTEC TodoList repository, including the current .github/, /skills, /agents/ba, /agents/dev, /agents/qc folders and any related configuration.

Read relevant files and determine which instructions, agents, skills, and workflows are actually discoverable by GitHub Copilot Chat.

The project will use HTML, CSS, vanilla JavaScript, and LocalStorage.

Tasks:
1. Inventory the existing harness files.
2. Identify how each component is intended to be used.
3. Distinguish existing files from configurations that Copilot can actually load.
4. Map the existing harness to the AI-DLC workflow.
5. Identify missing configuration, conflicting instructions, and risks.
6. Recommend only the minimum changes needed for this workshop.

OUTPUT:
Create or update `specs/00-harness-assessment.md` containing:
- Repository and harness inventory
- Verified agent/instruction/skill discovery
- AI-DLC workflow mapping
- Gaps and risks
- Recommended next steps

Rules:
- Do not implement the TodoList application.
- Do not modify application source code.
- Do not assume files are active merely because they exist.
- Inspect existing files before creating or overwriting anything.
- Preserve unrelated work.

If repository access or a required configuration cannot be verified, document the limitation explicitly.

After writing the report, summarize the changes and wait for human approval.