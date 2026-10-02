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
4. **Cutover** is a single dated change in `stephen329/odin` that removes `docs/strategy/` and repoints Odin's tooling to read from this repository (see Mechanism). Before it merges: the files in this repository are re-compared against Odin `main` and any difference since snapshot `c76ccb2` is reconciled here first; no edits to `docs/strategy/` land in Odin during that window.

## Mechanism — decided by the owner, 2026-10-02

**Odin's tooling is repointed to read the strategy and brand records from this repository.** Odin does not keep a copy and does not mount this repository as a submodule. Recorded from the owner's direction in chat on 2026-10-02; this amendment remains **Proposed** until the owner approves it.

### What the cutover changes in `stephen329/odin`

Functional references found in the 2026-10-02 snapshot (`c76ccb2`). Prose documents that merely cite a path are listed separately.

| Kind | Where | What has to change |
|---|---|---|
| Tests that read the files | `src/lib/roadmap/amendment-status.test.ts` (line 99), `src/lib/roadmap/items.test.ts` (line 39) | Read from the strategy checkout instead of `docs/strategy/amendments` |
| Scripts that read the files | `scripts/brands/check-skill-citations.ts` (`SKILL_DIR`), `scripts/brands/check-header-coverage.ts` (`ROOTS`), `scripts/docs/check-line-citations.ts` (`AMENDMENTS`), `scripts/agents/design-consistency.py` (line 195; whether it reads the files was not checked) | Same |
| CI path triggers | `.github/workflows/brand-skill.yml`, `blog-brand.yml` (both filter on `docs/strategy/**`), and the doc-citations workflow | The filter stops firing once the files leave Odin. See consequence 1 |
| Path constants in app code | `src/lib/roadmap/items.ts` (nine `path:` entries), `src/cms/referral-disclosure.ts:39`, `src/lib/content-performance/topic-seed-v1.ts` (lines 38, 39, 152) | Repoint to this repository's paths; `items.test.ts` likely verifies they exist (not checked) |
| Path text shown to users or in messages | `src/app/(odin)/workspace/_components/WorkspaceFrame.tsx:146`, `src/lib/legal/disclosures.ts:290`, `src/clients/views/lease/financial-summary/LeasePaymentDisbursementForm.tsx:149` | Update the citation text |
| Agent context | `CLAUDE.md`, `AGENTS.md` brand blocks | Update upstream references to this repository |
| Prose documents | About 20 Odin docs, most heavily `docs/vendor-retirement-and-identity-unification.md` and `docs/blog-multi-brand-administration.md` | Historical citations. Decide whether to rewrite them or leave them as records of what the path was at the time. Relative links such as `./strategy/amendments/...` will break either way |

### Consequences of this mechanism — owner answers, 2026-10-02

1. **The strategy-side guard checks run in this repository.** The brand-skill citation check, the header-coverage check, and the ratified-strings check run in this repository's CI, so a strategy change is checked where it merges. *Implementation still to be done:* those scripts are Odin code (they use `src/lib/brands/header-coverage.ts`, `mdast-util-from-markdown`, and Odin's `yarn` setup), so moving them means porting or vendoring their dependencies. Odin's path-filtered workflows (`brand-skill.yml`, `blog-brand.yml`) lose their `docs/strategy/**` trigger at cutover.
2. **This repository is private.** Odin's CI therefore needs a read credential for it, which only the owner can create. This answer does not yet say how local runs and agent sessions obtain the checkout; the cutover PR specifies that.
3. **Odin reads a pinned commit of this repository.** A strategy change reaches Odin only when the pin is bumped, so an unrelated Odin PR cannot fail because of an upstream strategy edit. Because the guards in item 1 run here against this repository's own head, strategy-versus-skill drift is caught at merge in this repository, not when Odin next bumps the pin.

### Still open `[DECIDE]`

- Whether Odin's tests fail or skip when the checkout is absent. Failing is safer: a skip is a guard that disconnects without saying so.
- Who bumps the pin, and when (for example, at each amendment approval).
- Whether the ~20 Odin prose documents that cite `docs/strategy/...` are rewritten or left as historical records.

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
