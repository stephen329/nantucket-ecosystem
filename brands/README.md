# strategy/brands — canonical brand records

This directory is the committed home for the portfolio's brand law: canonical
naming, ratified customer-facing strings, and per-brand assets. It sits under
the authority of the Nantucket Ecosystem Strategy
(`docs/strategy/nantucket-ecosystem-integrated-strategy.md`, v1.0, on `main`
per CA-1) — conflicts resolve to the strategy document.

## Contents

| File | What it is |
|---|---|
| `canonical-naming.md` | The canonical-naming table — one form per referent, lint-armable |
| `congdon-coleman-ratified-strings.md` | Congdon & Coleman entity/legal strings ratified 2026-08-12, with usage rules |
| `cc-decision-register-addendum-2026-08-13.md` | Decision register addendum A-1–A-5 (listing detail page session) |
| `assets/congdon-coleman/opinion-of-value-template.md` | Opinion-of-value template — ratified in full 2026-08-12 (E-1, R-1, R-2, E-3) |
| `assets/congdon-coleman/photography-spec.md` | Photography spec — Stephen's items ratified; derived rules 3–6 conditional on Kristy's confirm-or-strike |
| `assets/congdon-coleman/tokens.json` | C&C design tokens v2.0, Third Edition (ratified 2026-08-14) — single source of truth; canonical ink `#082A34`, retired `#092A35`/`#6D8994`/`#EEF2F4` |

## Rules that travel with these files

1. **Ratified strings are verbatim, and only the owner may override.** No
   contributor paraphrases, shortens, or "fixes" one; layout problems get
   design solutions, never string edits, and ratified strings are excluded
   from any find-and-replace pass, character-for-character. The owner may
   direct that a named surface carry a shortened or different form, and that
   direction governs — it is a decision, not a paraphrase. Record it in the
   relevant record with the date and the surface **before** it ships, so a
   reader can tell an authorised override from drift. An unrecorded variant
   is drift whoever typed it, and the next audit is right to revert it.
2. **Markers are flags, not TODOs.** `[DECIDE]`, `[AUDIT]`, `[STRATEGY §n]`,
   `[LAUNCH GATE]`, `[LEGAL REVIEW]` mean a human owes an answer; they are
   never filled with invented content.
3. **Update context blocks by hand, in the same change.** Per-repo context
   blocks (CLAUDE.md/AGENTS.md brand sections in Odin, cnc-web-fe, nrbe,
   nantuckethouses-platform) are **not** regenerated and the
   `nantucket-brands` skill is **not** re-synced by merging — no generator
   exists, and the skill's account copy is a manual re-upload. This item
   previously promised both, which is why a block went stale against a record
   in the same repository (odin#455): a maintainer trusting the promise had no
   reason to edit anything. Whoever changes a record here edits every copy that
   states it, in the same change, and republishes the skill separately.
4. Decision state and publication state are tracked independently; a decision
   is operative for contributors only once its record is on `main`.

## Related records

- `docs/legal/entity-and-listing-disclosures.md` — entity/listing disclosure
  record, **counsel-approved 2026-09-04** (all six strings). The
  register-ratified forms in `congdon-coleman-ratified-strings.md` noted one
  wording divergence against it for counsel to resolve; whether that approval
  resolved the divergence is not recorded, so check both before quoting either.
- Decision register (working copy):
  `cnc-web-fe/docs/handover/governance/cc-decision-queue.md`.
