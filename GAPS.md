# Gaps and open decisions

As of 2026-10-02, from the snapshot of `stephen329/odin` @ `c76ccb2`, a Google Drive search, and earlier chat history. Each item says where the evidence came from. Items marked "not verified" come from a chat summary, not from a file in this repository.

## Decisions needed

1. **Make this repository the authority, or keep it a mirror.** 64 files in Odin reference `docs/strategy/`, including `src/lib/roadmap/amendment-status.ts`, which parses `docs/strategy/amendments/` and whose test fails on missing, unrecognized, or ambiguous statuses. Moving the authority changes an authoritative system and needs a dated amendment. Suggested sequence: designate this repo by amendment, repoint Odin's roadmap tooling and context blocks, then remove the Odin copy. Until then, edits made in one place must be made in both.
2. **Three amendments are proposed and unapproved:** the systems-of-record map (2026-09-14), the Nantucket Houses property-value record class (2026-09-16), and the per-brand marketing message classes (2026-09-16, taxonomy). See `amendments/README.md`.
3. **Qualified-adviser validation is open for all seven items** in the decision record's queue (compliance status language, co-broker authorization and crawler terms, Hello purpose-limitation rule, CSAT classification, related-party disclosure, IP chain of title, accounting definitions). Not checked: whether closure notes exist outside `docs/strategy/`.
4. **Hello Nantucket owned-surface scope change** (not verified; from the 2026-09-28 chat): PR #8 on `stephen329/hellonantucket` revises launch-sequence Sections 6 and 7 and conflicts with the repo's `CLAUDE.md` pilot-scope constraint. It awaits ratification. Sender choice (Kit vs Resend/SES) is also open. If ratified, it needs an amendment here.
5. **Disclosure strings.** `brands/README.md` records one wording divergence between the register-ratified C&C strings and the counsel-approved `docs/legal/entity-and-listing-disclosures.md`, and says it is not recorded whether counsel's approval resolved it. Separately (not verified; from earlier chats): the canonical `legal.cc.poweredby` footer string was still a pending decision.

## Missing documents

6. **Per-brand style guides are not in any repo.** Found in Google Drive: the NantucketRentals 2026 brand guide, Revision 2.0 (PDF, 2026-09-17), and the C&C Brand & Identity Guidelines, Third Edition (PDF, 2026-09-09). Not found by my searches: a Hello Nantucket brand guide, and a Nantucket Houses style guide (the NH marketing plan refers to "Nantucket Modern (style guide)"). They may exist under other names.
7. **Design tokens exist only for Congdon & Coleman** (`brands/assets/congdon-coleman/tokens.json`). Palettes for NantucketRentals and Nantucket Houses appear in a PDF and a Google Doc respectively; Hello has none that I found.
8. **No per-brand folders** for NantucketRentals, Nantucket Houses, or Hello. Only C&C has an `assets/` folder. Hello has a decision-register addendum.
9. **Related documents outside `docs/strategy/`** that may belong here or be linked from `resources/`: Odin `docs/hello/`, `docs/marketing/`, `docs/home-guide/`, `docs/legal/`, and the Nantucket Houses 90-day marketing plan and Meta creative pack (Google Docs).

## Housekeeping

10. **Two copies of the `nantucket-brands` skill disagree.** The copy loaded in the Claude account differs from `brands/skill/` in `SKILL.md` and all six reference files. `brands/README.md` says the account copy is re-uploaded manually and no generator exists. Which is upstream has not been decided.
11. **Open markers** (`[DECIDE]`, `[AUDIT]`, `[LAUNCH GATE]`, `[LEGAL REVIEW]`) remain in 10 of the copied files, most heavily in `brands/nantucket-brands-skill-reconciliation.md` (12) and `brands/skill/README.md` (5).
12. **Monthly review.** The decision record sets review on the 15th of each month; the next is 2026-10-15. No review record for 2026-09-15 was found in this snapshot.
13. **Strategy §12 deliverable 14** ("place Version 1.0 and its decision record in the designated strategy repository, with a named document owner, next review date, and amendments recorded") is satisfied only once item 1 is decided.
14. **History is not carried over.** Per-file git history stays in Odin (see `PROVENANCE.md`).
