# Amendment — bound review rounds so a non-blocking note cannot restart them

- **Date raised:** 2026-10-05
- **Status:** **Approved and ratified — Stephen Maury, 2026-10-05.** Owner direction in chat: submit the change for the required review and merge after a clean round.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** `DEVELOPMENT_REVIEW.md`; the 2026-10-03 portfolio development-review amendment; agent sessions that review `odin`, `cnc-web-fe`, `nr-web-fe`, `nrbe`, `nantuckethouses-platform`, and `hellonantucket`.

## Reason

Review rounds have run for hours without a new safety finding. The 2026-10-03 policy correctly refuses a stale SHA and a self-review, but any reviewer note can become a commit, and that commit invalidates both required reviews. Cosmetic fixes do not increment the three-round counter, yet they still require verification on the new SHA, so the clock runs while the counter stays put. A reviewer with no report deadline is then polled indefinitely. The result is repeated full passes on moving branches, including passes over docs-only brand-guide indexes.

## Change

`DEVELOPMENT_REVIEW.md` keeps the current minimum: an independent Codex review for every candidate, an independent Claude review for high-risk work on the same final SHA, no Grok review, and a stop after three substantive remediation rounds.

It adds these bounds and safeguards:

1. Freeze the candidate before requesting review. A report on any other SHA does not count.
2. Only a blocking finding may produce a remediation commit. Non-blocking findings are recorded and do not move the SHA.
3. After one consolidated low-risk fix, reviewers may re-check a SHA-bound delta as their final record. High-risk fixes and changes to gates, checks, exceptions, actors, or governing meaning require a full pass on the final SHA.
4. The reviewer assigns each finding's class. Findings whose failure paths affect high-risk work, critical/high-severity findings, and missing-required-evidence findings are blocking; the owner must record any override.
5. A required reviewer has 30 minutes per acknowledged attempt and one retry. No valid report after that is `required review unmet`, not another hour of polling. A late blocking finding still requires disposition.
6. The reviewed head and base are frozen. A rebase, base merge, conflict resolution, CI correction, or other tree change creates a new candidate.

Only index rows, unmodified supplied assets, and link targets may use a reviewer-owned checklist, and the full changed diff is still read. Every high-risk category in the canonical policy gets a full pass. Uncertainty stays a full pass.

## Affected metrics, gates, and parameters

No product metric, cohort definition, consent rule, or stage date changes. This changes the development-review gate: what may start a new round, when a review is valid, and when waiting stops. It does not reduce the required reviewer families.

## Copies that must change with it

This pull request updates `README.md` and the amendment index to record the amended approval date and status. Downstream repositories link to `DEVELOPMENT_REVIEW.md` and must not copy it. The local Studio review skill, if it restates round accounting, must keep deferring to this file rather than duplicating the new bounds.

## Approval

Approved by Stephen Maury in chat on 2026-10-05 with the instruction to submit the change for the required review and merge after a clean round. This amendment and the revised policy become effective together when this pull request merges. Candidates frozen before that merge remain governed by the pre-change policy unless the owner explicitly restarts them under this amendment.
