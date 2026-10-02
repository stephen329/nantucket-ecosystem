# Amendment — this repository is the designated strategy repository; the strategy and brand records move out of Odin

- **Date raised:** 2026-10-02
- **Status:** **Proposed — awaiting owner approval.**
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** Version 1.0 decision record ("authoritative systems" in the change protocol); strategy §12 deliverable 14; `brands/README.md` rule 3; `brands/skill/README.md` (publishing steps); and, in `stephen329/odin`: `docs/strategy/`, `src/lib/roadmap/` tests, `.github/workflows/brand-skill.yml`, `blog-brand.yml`, the doc-citations workflow, `scripts/brands/`, `scripts/docs/check-line-citations.ts`, `scripts/agents/design-consistency.py`, `CLAUDE.md`, `AGENTS.md`. Per-repo brand context blocks in `cnc-web-fe`, `nrbe`, `nantuckethouses-platform` (named in `brands/README.md` rule 3) and `hellonantucket`.

<!--
Drafted by Claude from the owner's 2026-10-02 direction to move these documents out of Odin. Not approved. Nothing below is in effect until the owner replaces the Status bullet.
-->

## Reason

The strategy, its amendments, and the brand records govern four brands and five repositories, but live inside one of them. Odin's `docs/strategy/` is the only copy that is reviewed and merged, so every other repository restates it by hand and has drifted before (see `brands/README.md` rule 3, odin#455). A repository that holds only governing records gives all four brands one place to amend and one review history. Strategy §12 deliverable 14 already calls for a "designated strategy repository, with a named document owner, next review date, and amendments recorded."

## Change

1. `stephen329/nantucket-ecosystem` is the designated strategy repository. The strategy, the Version 1.0 decision record, `amendments/`, and `brands/` (including `brands/skill/`, the source of record for the `nantucket-brands` skill) are authoritative here from the date Odin's copy is cut over (step 4 below).
2. Version 1.0 and its decision record are not edited by this move. They remain recoverable, as the change protocol requires. Odin's git history keeps their per-file history.
3. The change protocol in `GOVERNANCE.md` applies in this repository from the cutover date.
4. **Cutover** is a single dated change in `stephen329/odin` that removes `docs/strategy/` as a directory of Odin-owned files and provides it from this repository instead. Before it merges: the files in this repository are re-compared against Odin `main` and any difference since snapshot `c76ccb2` is reconciled here first; no edits to `docs/strategy/` land in Odin during that window.

## Decision still needed — mechanism `[DECIDE]`

How Odin gets the files after cutover. Recorded here, not chosen:

| Option | Keeps Odin's paths and tests working | Cost |
|---|---|---|
| Git submodule mounted at `docs/strategy` | Yes, unchanged | Every workflow that reads the files needs submodule checkout with credentials for a private repository; a strategy change is two steps (merge here, then bump Odin's pointer) |
| Odin keeps a synced copy | Yes | Two copies again, the failure this amendment exists to remove |
| Odin tooling repointed to read from this repository in CI | No, paths and tests change | The most editing in Odin |

## Affected metrics, gates, and parameters

No gate, cohort definition, consent rule, or stage date changes. The authoritative system for the strategy and brand records changes (Odin to this repository), which is why this is an amendment.

## Copies that must change with it

- Odin: the tests, workflows, scripts, `CLAUDE.md`, and `AGENTS.md` listed under Affects.
- `cnc-web-fe`, `nrbe`, `nantuckethouses-platform`, `hellonantucket`: brand context blocks that cite the upstream path.
- The `nantucket-brands` account skill: republish from `brands/skill/` after cutover (manual upload, per `brands/skill/README.md`).
- `GAPS.md` item 1 and `PROVENANCE.md`: update to record the cutover date and mechanism.

## Rollback

Until the Odin cutover merges, Odin remains authoritative and this repository is a mirror, so rejecting this amendment loses nothing. After cutover, reverting Odin's change restores its copy; any amendments merged here in the meantime must be carried back by hand.

## Approval

<!-- Filled in by the owner when approved: who, when, and the PR link. Resolve the [DECIDE] above first. -->
