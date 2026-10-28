Act as the DEV Agent.

Read:
- `specs/00-harness-assessment.md`
- `specs/02-requirements.md`
- `specs/btectodolist-design.png` for UI design
- Applicable project and DEV instructions and skills

Verify that the requirements have been approved.

Design a simple solution for the BTEC TodoList MVP using HTML, CSS, vanilla JavaScript, and LocalStorage.

Cover:
1. File responsibilities and proposed structure.
2. Task data model with a stable ID, title, and completion status.
3. LocalStorage key, serialization, and initialization.
4. Application rendering and event handling.
5. Task creation and completion flows.
6. Validation and safe DOM rendering.
7. Handling malformed or unavailable storage.
8. Verification strategy for each acceptance criterion.

Prefer readable code suitable for BTEC students. Respect the existing repository structure.

OUTPUT:
Create or update `specs/03-solution-design.md` containing:
- Approved requirements referenced by ID
- Proposed architecture and file responsibilities
- Data model and persistence design
- Key implementation decisions
- Error-handling approach
- Acceptance-criteria traceability
- Design assumptions and unresolved decisions

Rules:
- Do not implement source code.
- Do not introduce dependencies or out-of-scope features.
- Do not contradict approved requirements.
- If the requirements are not approved, stop and request approval.

Present the design for human review and wait before implementation planning.