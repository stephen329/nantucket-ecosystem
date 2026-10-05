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

**Edited after copying:** the eight `<!-- law: ... -->` markers under `brands/skill/` (five files) now cite `nantucket-ecosystem-integrated-strategy.md` instead of `docs/strategy/nantucket-ecosystem-integrated-strategy.md`, so the moved checker can resolve them. `amendments/2026-09-14-systems-of-record-map.md` was reconciled byte-for-byte with the proposed version reviewed and merged in Odin PR 647 at commit `edbe8d35601d88be1273e968da4a1667a4e6a5f3`, carrying forward the externally verifiable approval and release safeguards added upstream before the Odin cutover.

## Owner-supplied brand exports, 2026-10-05

The repository owner identified these committed HTML files as the owner-supplied, unmodified exports. The hashes below bind that attestation to the exact bytes committed. This identity record does not ratify export copy or change the authority order in `README.md` and `GOVERNANCE.md`.

| File | Source record | Bytes | SHA-256 |
|---|---|---:|---|
| `brands/assets/congdon-coleman/brand-guide.html` | Owner-supplied HTML; Drive PDF `1FnafPdQrcciEWYbd9J-zujv-z6WrXsSG` remains the earlier located copy | 13,195,378 | `cebcd285564f3fa75cc8a823f679c45c0104667b182f864bdd553405ea2b4ed3` |
| `brands/assets/nantucketrentals/brand-guide.html` | Owner-supplied HTML; Drive PDF `1iyHDHUYdiXsDoDv80_gMfN28QTtQfo-f` remains the earlier located copy | 639,211 | `de620abd88be080e95e8cadd0d5d51687917754c0014498fb53f8170e8dd366d` |
| `brands/assets/nantucket-houses/brand-guide.html` | Owner-supplied HTML from Claude artifact `7VQfzGMS6TyVZpSUCLQfyx` | 989,045 | `c4d49523320b3d55b4d6b16a2b169e3cb648299028766e5df52b0502502a538d` |
| `brands/assets/hello-nantucket/site-mockups.html` | Owner-supplied HTML from Claude artifact `UfVqXwjg3nnfcsiPoz2PTi`; mockups are not ratified copy | 953,545 | `8811ece37613e6c8058fa8637c0766c2052da553596ddbd555c8407ea04b4897` |

## Not yet moved

- The authority. Odin's `docs/strategy/` is still what 64 other files in Odin reference, including `src/lib/roadmap/amendment-status.ts` and its tests. The designation amendment was approved 2026-10-02 but takes effect at the Odin cutover; until that pull request merges, treat Odin as authoritative and this repository as a mirror.
- Related Odin documents outside `docs/strategy/`, such as `docs/legal/entity-and-listing-disclosures.md` and `docs/hello/`.
- Brand guide PDFs (see `resources/README.md`).
