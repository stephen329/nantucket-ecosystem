# Provenance

## Source of every file in the initial commit

All files except the ones listed under "Written for this repository" were copied **byte-for-byte** on 2026-10-02 from `docs/strategy/` in `stephen329/odin` at commit `c76ccb2568e75434067a918ca74e988ed7353b99` (shallow clone of the default branch).

**Path mapping:** drop the `docs/strategy/` prefix. `docs/strategy/brands/canonical-naming.md` in Odin is `brands/canonical-naming.md` here.

**Stale internal references:** the copied documents were not edited, so text inside them that cites `docs/strategy/...` paths, `docs/legal/...`, or Odin PR numbers still refers to Odin. That is intentional: edits to ratified text belong in a reviewed change, not in a migration.

**History:** this is a snapshot. Git history for these files, including who changed what and when, remains in the Odin repository.

## Written for this repository

`README.md`, `GOVERNANCE.md`, `DEVELOPMENT_REVIEW.md`, `AGENTS.md`, `CLAUDE.md`,
`PROVENANCE.md`, `GAPS.md`, `.github/PULL_REQUEST_TEMPLATE.md`,
`.github/CODEOWNERS`, `amendments/README.md` (generated from the Status bullets),
`amendments/TEMPLATE.md`,
`amendments/2026-10-02-strategy-repository-designation.md`,
`amendments/2026-10-03-portfolio-development-review-policy.md`,
`resources/README.md`, `tools/` (see `tools/README.md` for its own provenance),
`.github/workflows/guards.yml`, `package.json`, `yarn.lock`, `.nvmrc`, `.gitignore`.

**Edited after copying:** the eight `<!-- law: ... -->` markers under `brands/skill/` (five files) now cite `nantucket-ecosystem-integrated-strategy.md` instead of `docs/strategy/nantucket-ecosystem-integrated-strategy.md`, so the moved checker can resolve them. No other copied file was edited.

## Not yet moved

- The authority. Odin's `docs/strategy/` is still what 64 other files in Odin reference, including `src/lib/roadmap/amendment-status.ts` and its tests. The designation amendment was approved 2026-10-02 but takes effect at the Odin cutover; until that pull request merges, treat Odin as authoritative and this repository as a mirror.
- Related Odin documents outside `docs/strategy/`, such as `docs/legal/entity-and-listing-disclosures.md` and `docs/hello/`.
- Brand guide PDFs (see `resources/README.md`).
