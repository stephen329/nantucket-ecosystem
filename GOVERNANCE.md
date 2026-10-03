# Governance

Derived from the Version 1.0 decision record, strategy §8 (gate parameters and freeze rule), and `brands/README.md`. Nothing here ratifies anything new; where this file and those sources differ, they govern.

## Authority order

1. The strategy (`nantucket-ecosystem-integrated-strategy.md`) as amended by approved amendments.
2. Approved amendments in `amendments/`, newest governing where they overlap.
3. Brand records in `brands/` (canonical naming, ratified strings, register addenda).
4. Brand guides, the `nantucket-brands` skill, and per-repo context blocks (CLAUDE.md / AGENTS.md brand sections). These restate the records above and never override them.

## Development review authority

[`DEVELOPMENT_REVIEW.md`](./DEVELOPMENT_REVIEW.md) is the portfolio minimum for
implementation review. Per-repository agent instructions may add stricter checks,
reviewers, or release gates; they cannot weaken or replace the portfolio minimum.
Grok is not part of the review process.

This review-policy authority is separate from the strategy authority order above:
it governs how changes are reviewed, not product strategy, brand law, or record-
class ownership.

## What requires an amendment

Per the decision record's change protocol: changes to hard gates, cohort definitions, consent rules, stage dates, or authoritative systems require a dated amendment recording the reason, owner, affected metrics, and approval. Setting a gate parameter for the first time counts as a change. Each parameter is fixed before the window it governs opens and is never set or revised once the results it governs are visible to the person setting it. Version 1.0 stays recoverable and is never silently overwritten.

Designating this repository as the authority, and moving the documents out of Odin, changes an authoritative system. It needs its own amendment (see `GAPS.md`, item 1).

## How a change is made

1. Branch off `main`. Never commit directly to `main`.
2. Open a pull request using the template. A deviation from the strategy needs an amendment file in `amendments/`, using `amendments/TEMPLATE.md`, in the same PR.
3. Amendment status lives in the `- **Status:**` bullet and must open with `Approved` or `Proposed`. Odin's roadmap tooling reads it that way today.
4. The owner approves in the PR and merges. Agents open PRs and never merge.
5. Whoever changes a record edits every copy that states it, in the same change: per-repo context blocks are not regenerated, and the `nantucket-brands` skill is re-uploaded manually.

## Markers

`[DECIDE]`, `[AUDIT]`, `[STRATEGY §n]`, `[LAUNCH GATE]`, and `[LEGAL REVIEW]` mean a human owes an answer. They are flags, never filled with invented content.

## Sensitivity

This repository should be private. Do not add valuation-prep material, the Compass conversation, or staff compensation and performance material here; keep those in a separate private location.
