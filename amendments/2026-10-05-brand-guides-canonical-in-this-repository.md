# Amendment — the per-brand style guides are canonical in this repository

- **Date raised:** 2026-10-05
- **Status:** **Proposed — awaiting owner approval.**
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** `README.md` (line 5), `GOVERNANCE.md` authority order item 4, `GAPS.md` item 6, `resources/README.md`, the `brands/assets/*/` READMEs, and the brand-guide copies in `stephen329/cnc-web-fe`, `stephen329/nr-web-fe`, `stephen329/nrbe`, `stephen329/nantuckethouses-platform`, and `stephen329/hellonantucket`.

<!--
Drafted by Claude from the owner's 2026-10-05 direction in chat, while resolving blocking findings on pull request 6: "The purpose of this repo is to ensure conformity between the various other repos. Therefore canonical guides should be in this repo." The owner asked for it to be written as Proposed; the owner changes the Status bullet when approving.
-->

## Reason

`README.md` says product assets stay canonical in the repos that use them. That leaves no single place where a brand guide can be amended once and every repository made to conform, which is the purpose of this repository. The two statements need one answer, and the owner has directed that the canonical guides live here.

## Change

1. The brand-guide files under `brands/assets/<brand>/` (the HTML exports, and `tokens.json` for Congdon & Coleman) become the canonical copy of the guides for NantucketRentals.com, Congdon & Coleman, and Nantucket Houses.
2. A guide change lands here first. Each downstream repository's copy is then updated to match in its own pull request, which cites the change here. A downstream copy that differs from this repository is a conformity defect to fix downstream, not an alternate source.
3. The guides stay subordinate to the strategy, its amendments, and the brand records, as `GOVERNANCE.md` authority order item 4 already states. A guide never overrides ratified strings or canonical naming. Where an export carries wording the records retire, the record governs and the export is not a source for that wording. (The NantucketRentals export contains "same family of companies" in a message template.)
4. The Hello Nantucket site mockups are recorded here but are **not** canonical and are not ratified copy. The working guide in `stephen329/hellonantucket` (`index.html`) remains the in-repo guide until a later change reconciles the two.
5. Code, design tokens as shipped, and other product assets stay canonical in the repositories that use them, and must conform to the guides canonical here. `README.md` line 5 is amended accordingly.
6. The earlier Google Drive PDFs for NantucketRentals.com and Congdon & Coleman are retained as earlier located copies and are not edited.

## Affected metrics, gates, and parameters

No product metric, cohort definition, consent rule, stage date, or customer-data system of record changes. No ratified string changes. Changing which repository is canonical for a record class is an authoritative-system change, which is why this needs an amendment.

## Copies that must change with it

- This repository, on approval: `README.md` line 5, `GOVERNANCE.md` authority order item 4 if needed, and the `brands/assets/*/` READMEs (replace "records provenance only" with the canonical-copy and downstream-conformity rule for the three canonical guides). Until approval, those READMEs correctly say the exports record provenance only.
- `cnc-web-fe`, `nr-web-fe`, `nrbe`, `nantuckethouses-platform`: conform any local brand-guide copy to this repository, each in its own pull request. This amendment does not require those changes to land together.

## Approval

<!-- Filled in by the owner when approved: who, when, and how (PR link). -->
