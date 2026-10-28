Act as the BA Agent.

Read:
- `specs/00-harness-assessment.md`
- `specs/01-discovery.md`
- Applicable project and BA instructions

Convert the approved discovery findings into a testable MVP specification.

Define:
1. User stories.
2. Functional requirements with unique IDs.
3. Acceptance criteria with unique IDs.
4. Negative and edge-case scenarios.
5. Relevant non-functional requirements.
6. Requirement-to-verification traceability.

Cover at least:
- Adding a task with a valid title.
- Rejecting empty or whitespace-only titles.
- Marking a task as completed.
- Preserving tasks and completion status after reload.
- Empty-list behavior.
- Malformed or unavailable LocalStorage.
- Rendering user input safely as text.

Keep the MVP small. Do not introduce authentication, task sharing, due dates, categories, or backend services.

OUTPUT:
Create or update `specs/02-requirements.md` containing:
- Scope and out-of-scope items
- User stories
- Functional and non-functional requirements
- Numbered acceptance criteria (AC-01, AC-02, etc.)
- Edge cases and expected behavior
- Traceability matrix
- Open questions and approval status

Every acceptance criterion must be objectively verifiable.

Rules:
- Do not edit application code.
- Do not silently change approved discovery decisions.
- Record unresolved decisions instead of inventing requirements.
- Preserve existing approved decisions.

Present the proposed requirements and wait for human approval before implementation planning.