# Amendment — portfolio development review policy is canonical in this repository

- **Date raised:** 2026-10-03
- **Status:** **Approved and ratified — Stephen Maury, 2026-10-03.** Directed in chat: record the updated review process in `nantucket-ecosystem` and make every other portfolio repository refer to it.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** `GOVERNANCE.md`, `DEVELOPMENT_REVIEW.md`, agent instructions in this repository, and agent instructions in `stephen329/odin`, `stephen329/cnc-web-fe`, `stephen329/nr-web-fe`, `stephen329/nrbe`, `stephen329/nantuckethouses-platform`, and `stephen329/hellonantucket`.

## Reason

Review rules were duplicated across repository instructions and a local Studio
skill, and those copies disagreed about reviewer selection and remediation-round
rollover. That disagreement led to two Grok review attempts even though Grok had
been removed from the intended process. A single portfolio record is required so
reviewers, writers, and repositories do not silently choose different gates.

## Change

1. `DEVELOPMENT_REVIEW.md` in this repository is the portfolio minimum for
   implementation review.
2. Every candidate requires an independent Codex review. High-risk work also
   requires an independent Claude review on the same final commit.
3. Grok is not a reviewer, escalation path, substitute, compensating control, or
   merge gate in this process.
4. Three substantive remediation rounds are counted against the original scope.
   A new task, branch, worktree, pull request, writer, or candidate does not reset
   the count. After the third round, verification may finish; another substantive
   correction requires recorded owner direction.
5. Each affected repository links to the canonical file from its agent
   instructions. Repository-specific rules may add stricter controls but cannot
   weaken the portfolio minimum.

## Affected metrics, gates, and parameters

No product metric, cohort definition, consent rule, stage date, or customer-data
system of record changes. This amendment centralizes and clarifies the development
review authority and strengthens the minimum reviewer/round-accounting contract.

## Copies that must change with it

- This repository: `README.md`, `GOVERNANCE.md`, `AGENTS.md`, and `CLAUDE.md`.
- Odin: `AGENTS.md` and `CLAUDE.md`, coordinated through the active strategy-
  repository cutover rather than a competing writer.
- `cnc-web-fe`: `AGENTS.md` and `CLAUDE.md`.
- `nr-web-fe`: `AGENTS.md` and `CLAUDE.md`.
- `nrbe`: add `AGENTS.md` and `CLAUDE.md`.
- `nantuckethouses-platform`: `AGENTS.md` and `CLAUDE.md`.
- `hellonantucket`: add `AGENTS.md` and update `CLAUDE.md`.

Each downstream change depends on this amendment and `DEVELOPMENT_REVIEW.md`
landing on `nantucket-ecosystem/main`.

## Approval

Approved by Stephen Maury in chat on 2026-10-03 with the instruction: “We should
record the updated review process in the nantucket-ecosystem repo and in each other
repo record instructions to refer to it.”
