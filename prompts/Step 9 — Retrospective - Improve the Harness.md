Act as the AI-DLC facilitator.

Read the available artifacts:
- `specs/00-harness-assessment.md`
- `specs/01-discovery.md`
- `specs/02-requirements.md`
- `specs/03-solution-design.md`
- `specs/04-implementation-plan.md`
- `specs/05-implementation-report.md`
- `specs/06-qc-report.md`
- `specs/07-remediation-report.md`
- `specs/08-final-validation.md`

Analyze the development lifecycle and identify:
1. Which harness components improved the workflow?
2. Which instructions or requirements were ambiguous?
3. Which defects escaped implementation checks and were caught by QC?
4. Which recurring issues could be prevented by improved instructions or automated checks?
5. Whether each agent respected its intended responsibilities.
6. Whether the final acceptance decision is supported by evidence.
7. The smallest high-value improvements for the next AI-DLC iteration.

OUTPUT:
Create or update `specs/09-retrospective.md` containing:
- Summary of the AI-DLC workflow
- Evidence-based observations
- Effective harness components
- Workflow bottlenecks and failure modes
- Proposed harness improvements with rationale
- Prioritized action items
- Lessons learned for future projects

Rules:
- Do not modify source code or harness configuration.
- Distinguish observed facts from hypotheses.
- Do not claim improvements were implemented unless they were actually applied.
- Do not change previous artifacts merely to make the retrospective consistent.

Conclude by explaining how the harness supported requirements, execution, feedback, and verification.

Wait for human approval before making any proposed harness changes.