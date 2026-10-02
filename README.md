# nantucket-ecosystem

The governing documents for the Nantucket house of brands: **Congdon & Coleman**, **NantucketRentals.com**, **Nantucket Houses**, and **Hello Nantucket**, with Odin as the internal orchestration layer.

This repository is the "designated strategy repository" called for by strategy §12, deliverable 14. It holds rules and decisions, not implementations. Code, design tokens as shipped, and product assets stay canonical in the repos that use them.

**Document owner:** Stephen Maury · **Review cadence:** monthly, on the 15th

## Layout

| Path | What it is |
|---|---|
| `nantucket-ecosystem-integrated-strategy.md` | The strategy, Version 1.0 |
| `nantucket-ecosystem-strategy-v1.0-decision-record.md` | Version 1.0 approval record and the open adviser-validation queue |
| `amendments/` | Dated amendments to the strategy. Start at `amendments/README.md` (status index) and `amendments/TEMPLATE.md` |
| `brands/` | Canonical naming, ratified strings, decision-register addenda, per-brand assets, and the `nantucket-brands` skill source |
| `resources/` | Pointers to shared resources that live elsewhere (brand guide PDFs, related docs) |
| `GOVERNANCE.md` | Authority order, how changes are made, what the markers mean |
| `PROVENANCE.md` | Where every file came from, and what has not moved yet |
| `GAPS.md` | Open gaps and decisions as of 2026-10-02 |

## Read this first

1. The strategy governs. Where any brand guide, skill, or context block conflicts with it, the strategy wins; propose an amendment instead of deviating.
2. A decision is operative only once its record is on `main`.
3. Ratified strings are verbatim. See `brands/README.md`.
4. This repo is a snapshot of `docs/strategy/` in `stephen329/odin` and is **not yet the authority**. Read `PROVENANCE.md` before relying on it.
