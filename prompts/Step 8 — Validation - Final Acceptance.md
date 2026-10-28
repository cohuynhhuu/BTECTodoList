Act as the QC Agent performing final acceptance validation.

Read:
- `specs/02-requirements.md`
- `specs/06-qc-report.md`
- `specs/07-remediation-report.md`
- Applicable QC instructions and skills

Inspect the current source code and rerun relevant checks.

Verify:
- Adding a valid task.
- Rejecting empty or whitespace-only input.
- Marking tasks completed.
- Preserving tasks and completion status after reload.
- Empty-list behavior.
- Safe rendering of user-entered text.
- Malformed or unavailable LocalStorage behavior, where feasible.
- Regression behavior after remediation.

OUTPUT:
Create or update `specs/08-final-validation.md` containing:
- Approved requirements and acceptance criteria references
- Final result for each criterion
- Actual tests executed and results
- Evidence for each verified behavior
- Remaining unverified items and limitations
- Open defects
- Final release recommendation

Rules:
- Do not modify application code.
- Do not infer successful runtime behavior from code inspection alone.
- Do not automatically accept the release if critical criteria remain failed or unverified.
- Preserve the history of previous QC findings.

Save the final validation artifact and wait for human release approval.