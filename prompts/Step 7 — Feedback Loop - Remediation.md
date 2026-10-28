Act as the DEV Agent responding to the independent QC findings.

Read:
- `specs/02-requirements.md`
- `specs/06-qc-report.md`
- Applicable DEV instructions and skills

For every reported defect:
1. Verify the finding against the actual code or reproduce it where possible.
2. Identify the root cause.
3. Map the defect to the affected acceptance criterion.
4. Apply the smallest safe fix.
5. Add or update regression checks.
6. Rerun relevant checks.
7. Record actual evidence and remaining limitations.

Do not fix unrelated issues or weaken approved acceptance criteria.

OUTPUT:
1. Update only the necessary application source files.
2. Create or update `specs/07-remediation-report.md` containing:
   - QC defect reference
   - Verification and root cause
   - Files changed
   - Remediation applied
   - Regression checks executed
   - Actual results and evidence
   - Remaining issues and limitations

Rules:
- Do not change approved requirements.
- Do not mark a defect resolved without re-verification.
- If a finding cannot be reproduced, document the discrepancy and request clarification.

Summarize the fixes and hand the implementation back to QC for regression testing.