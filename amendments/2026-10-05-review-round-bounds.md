# Amendment — bound review rounds so a non-blocking note cannot restart them

- **Date raised:** 2026-10-05
- **Status:** **Proposed — awaiting owner approval.**
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** `DEVELOPMENT_REVIEW.md`; the 2026-10-03 portfolio development-review amendment; agent sessions that review `odin`, `cnc-web-fe`, `nr-web-fe`, `nrbe`, `nantuckethouses-platform`, and `hellonantucket`.

## Reason

Review rounds have run for hours without a new safety finding. The 2026-10-03 policy correctly refuses a stale SHA and a self-review, but any reviewer note can become a commit, and that commit invalidates both required reviews. Cosmetic fixes do not increment the three-round counter, yet they still require verification on the new SHA, so the clock runs while the counter stays put. A reviewer with no report deadline is then polled indefinitely. The result is repeated full passes on moving branches, including passes over docs-only brand-guide indexes.

## Change

`DEVELOPMENT_REVIEW.md` keeps the current minimum: an independent Codex review for every candidate, an independent Claude review for high-risk work on the same final SHA, no Grok review, and a stop after three substantive remediation rounds.

It adds four bounds:

1. Freeze the candidate before requesting review. A report on any other SHA does not count.
2. Only a blocking finding may produce a remediation commit. Non-blocking findings are recorded and do not move the SHA.
3. After one consolidated fix, reviewers re-check the delta. A full reread is required only when the fix changes a gate, an exception, or governing meaning.
4. A required reviewer has 30 minutes and one retry. No valid report after that is `required review unmet`, not another hour of polling.

Docs-only indexes and unmodified supplied assets use a checklist. Auth, consent, payment, privacy, migrations, and governing-rule meaning still get a full pass. Uncertainty stays a full pass.

## Affected metrics, gates, and parameters

No product metric, cohort definition, consent rule, or stage date changes. This changes the development-review gate: what may start a new round, when a review is valid, and when waiting stops. It does not reduce the required reviewer families.

## Copies that must change with it

None. Downstream repositories link to `DEVELOPMENT_REVIEW.md` and must not copy it. The local Studio review skill, if it restates round accounting, must keep deferring to this file rather than duplicating the new bounds.

## Approval

Proposed by Stephen Maury on 2026-10-05 with the instruction to submit the review-process changes and rationale as a pull request. This status is not approval. The owner approves in the pull request.
