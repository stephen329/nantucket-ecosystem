# Amendment — Roadmap additions derived from the Rise by MoxiWorks comparison

- **Date raised:** 2026-09-05
- **Direction decided:** 2026-09-05 by the owner, in the working session that
  produced `docs/analysis/2026-09-05-rise-by-moxiworks-comparison.md`, after
  reading the add / reshape / skip list at the end of it: "let's update with
  these new features."
- **Status:** **Approved 2026-09-05 by Stephen Maury** (see approval block).
  The direction was decided first and this text drafted after it; approval
  was given on the drafted text, in session, the same day. Items 1–6 are in
  effect as roadmap commitments under the existing gates.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** the phase deliverables in
  `docs/sales-matching/ADR-001-phase-1-identity.md` (Phase 6 named, Phase 8
  constrained); the Odin seller surface; the Nantucket Houses inquiry path
  into Odin leads. **No gate value changes, no cohort or stage-date changes,
  and no authoritative system changes anywhere in this amendment.** It adds
  work under existing gates and records what was considered and declined.

## Why an amendment and not a plan edit

Nothing here moves a hard gate or an authoritative system, which is the
decision record's threshold for a dated amendment. It is recorded in the
amendment log anyway for two reasons. The owner asked for the roadmap to be
updated, and the strategy plus this log is the only thing that governs the
roadmap — there is no separate roadmap document. And two of the additions
touch rules that do bind: the 2026-09-02 mailbox exemption (which is what
makes draft-only sends possible) and §5's purpose limitation (which is what
rules automated campaigns out). Recording the additions beside those rules
keeps a later reader from inferring a permission that was never granted.

## What the strategy currently says

| Where | Approved text | Bearing on this amendment |
|---|---|---|
| §3, Odin row | Promise: "Handled—FYI, or your move—with the context attached." Main action: "Resolve prioritized action prompts and exceptions." Governing KPI: "Response SLA, resolution quality, and capacity released." | The daily action list is a direct implementation of this row, not a new job for Odin. |
| §4, Global communication rule | "Each communication has one sending brand and one customer job. Marketing contacts are subject to shared frequency caps and suppression." | Rules out campaign automation while nothing enforces caps or suppression. |
| §5 | "The CRM may receive Hello subscriber records for identity resolution, attribution, deduplication, and suppression. It may not automatically activate NR, NH, or C&C marketing." | A daily list may surface a Hello-originated identity to an advisor only within this limit; it must never draft outreach to one. |
| §8, Stage 1 shared gates | "At least 10 human-validated opportunities, with ≥30% progressing to a substantive next step." | The outcome record required in item 5 is what makes this gate measurable. |
| `2026-09-02-odin-interactive-send-governance-removal.md` | Interactive sends from a named agent's own mailbox are exempt from mechanical governance; "This surface automates none." | The basis for item 2's draft-only rule and its boundary. |
| ADR-001 locked defaults | "agent proposes/disposes"; "no embeddings/vector DB/ANN; nightly batch + incremental recompute"; Phase 8 "Templates with controlled customization". | Items 1 and 2 sit inside these, as does the decision not to build a window-prediction model (see the corrected first row under "Considered and declined"). |

## Text to adopt

1. **Sales-matching Phase 6 delivers a daily action list.** Each advisor and
   the rental coordinator receive, once per day, a short fixed-length list of
   people to contact, each item stating the signals that surfaced it. Signals
   are the ones the repositories already emit — listing seen, status changed,
   and price changed from the link bridge; listing views and saved searches
   from the Nantucket Houses analytics store; deed sales and assessor
   ownership changes; lease renewals; the past-renters-to-reconnect cohort in
   `src/app/actions/dashboard.ts` — scored by the explainable rules ADR-001
   locks. The list is a recommendation; the advisor proposes and disposes.
   Nothing about a person's presence on the list authorizes contact that
   §4 and §5 would not already permit.
2. **Phase 8's templates are draft-only.** A recommendation may carry a
   drafted message. It is sent, if at all, by the named advisor from their own
   mailbox through the interactive compose path, which is the surface the
   2026-09-02 amendment exempts. No drafted message is sent unattended, and
   no send path is added for it. This holds until a dated amendment records
   that the `communication_*` tables have a read path a send surface actually
   consults — the same condition `2026-09-04-odin-authoritative-crm.md` item 3
   sets for Hello subscriber origination.
3. **Nantucket Houses inquiries carry a source, and reach Odin as leads.**
   The NH agent API records where an inquiry came from and its value where
   known, and Odin's lead path receives them. This is the gap
   `docs/marketing-dashboard-v1.md` names ("the NH agent API exposes no source
   and no value") and the rental-leads module the Nantucket Houses
   repository records as not built. It precedes any NH advertising because
   the CAC allocation rule in the 2026-08-10 amendment cannot be recorded
   against bookings whose inquiries have no source.
4. **The Odin seller surface produces an opinion-of-value packet.** A
   generated, Congdon & Coleman–branded document from the seller surface
   (`src/app/(odin)/sellers/`), assembling the CMA print path, the custom
   valuation, the pricing scorecard the Nantucket Houses seller portal already
   computes, and the ratified opinion-of-value template in
   `docs/strategy/brands/assets/congdon-coleman/`. It renders the
   counsel-approved strings in
   `docs/legal/entity-and-listing-disclosures.md` in full — see the factual
   correction of 2026-09-10 below, which replaced "the first Odin surface to
   render" them and "approved and shipped nowhere". Ratified strings are
   verbatim; layout problems get design solutions.
5. **Every item on the daily list carries an outcome record.** Whether the
   advisor acted, what they did, and what followed. Odin's governing KPI is
   resolution quality, and the Stage 1 gate of "at least 10 human-validated
   opportunities, with ≥30% progressing to a substantive next step" cannot be
   evidenced by a recommendation feature that does not record outcomes.
6. **The list reaches the advisor as a digest, not an app.** A morning email
   or push digest with deep links into responsive Odin pages. Odin has no
   mobile client and the Nantucket Houses agent app is a scaffold; the digest
   gets the value at a fraction of the cost.

## Considered and declined

| Rise feature | Why not now |
|---|---|
| Transaction-window prediction (30/60/90 days) | *Premise corrected on review 2026-09-05; corrected row confirmed by the owner the same day (see approval block).* The text the owner approved said Rise offers this and that it is deferred here for lack of cross-brokerage training data. Rise does not offer it: MoxiWorks' current material surfaces named behavioral signals and explicitly disclaims predicting a transaction within a window. The declined item is therefore not a Rise feature at all. What stands, on its own grounds: ADR-001 locks explainable rules with no embeddings, and no window-prediction model is built. Revisit only after the rules-based list has a measured hit rate under item 5. |
| Campaign automation, Canva templates, Promote paid advertising | The one Rise feature that conflicts with the strategy as it stands: §4 and §5 require opt-in, suppression, and one brand per message, and the enforcement code was removed 2026-09-01. Hello Nantucket and NantucketRentals.com also run their own senders. |
| Agent mobile app | Replaced by item 6. |
| DocuSign, Title and Escrow, ShowingTime | Transaction tooling is not a gap the strategy names, and `nantuckethouses-platform/docs/agent-desktop-web-app-plan.md` lists e-sign and commissions as MVP non-goals. Showings already exist in the seller portal. |
| Cloze-style contact sync, team co-sharing | No second CRM to sync with; Odin has owner reassignment and a small advisor roster. |
| Buying Rise | Brokerage-level, annual, unpriced; it could not see leases, stays, parcels, or Hello subscribers, so the cross-brand loop would sit outside it. *(An agent-count floor cited in the approved text was removed on review 2026-09-05 — MoxiWorks has sold to brokerages of all sizes since 2023. The conclusion does not depend on it.)* |

## What this amendment does not change

- No gate value, evidence floor, cohort window, or stage date moves.
- No authoritative system changes. Odin remains the CRM; the NR backend keeps
  reservations, leases, and payments; NH remains the consumer surface.
- The §5 purpose limitation on Hello subscriber records stands and binds the
  daily list.
- The 2026-09-02 mailbox exemption is neither widened nor narrowed; item 2
  uses it as it is.
- No spend, no advertising, and no customer-facing copy is authorized here.
  Item 4's packet is customer-facing and goes through the `nantucket-brands`
  skill and the ratified-strings rules before it ships.

## Work items

| Where | Item | Depends on |
|---|---|---|
| Odin, sales-matching | Phases 2–5 as ADR-001 sequences them (signals, match table, scoring) | — |
| Odin, sales-matching | Phase 6: daily action list with per-item signal explanation; outcome record (item 5) | Phases 2–5 |
| Odin, sales-matching | Phase 8: drafted message on a list item, opening in the interactive compose path; no send path of its own | Phase 6 |
| Odin, comms | Daily digest by email or push with deep links (item 6) | Phase 6 |
| Nantucket Houses, api-server | Inquiry source and value on the agent inbox API; rental-leads module | — |
| Odin, leads | Receive NH inquiries with source into the lead path | NH item above |
| Odin, sellers | Opinion-of-value packet; renders the approved strings in full — not the first `renderDisclosure` call site, per the 2026-09-10 correction below | Ratified strings, brand skill review |
| Docs | Note in `docs/sales-matching/README.md` naming the Phase 6 and Phase 8 deliverables — **done with this approval** | — |

## Approval

**Approved.**

- **Approved by:** Stephen Maury (stephen@maury.net), document owner and
  executive sponsor, in the working session of 2026-09-05, after the draft
  was presented to him with its status marked Proposed: "Approve the roadmap
  amendment and fill the approval block."
- **Date:** 2026-09-05
- **Recorded by:** the branch owner, in this dated change, per the 2026-08-13
  amendment. Approval was given in session, not by the act of merging; this
  block is the record. Nothing in the text above changed between the draft
  the owner read and this approval, other than this block, the status line,
  and the README work item marked done.
- **Correction after approval, 2026-09-05:** the first row under "Considered
  and declined" rested on a false premise about Rise, found on the owner's
  review of the pull request carrying this amendment. The row is corrected in
  place with its own dated note. The correction changes what was declined,
  not what was adopted: items 1–6 are unaffected and remain approved.
- **Corrected row confirmed, 2026-09-05:** Stephen Maury, in the working
  session, chose "confirm as corrected" over removing the row. The row stands
  as corrected: no window-prediction model is built, on ADR-001's own grounds
  (explainable rules, no embeddings), not because Rise offers one. Recorded
  by the branch owner in this dated change.
- **Factual correction, 2026-09-10:**
  item 4 said the opinion-of-value packet would be "the first Odin surface to
  render" the counsel-approved strings, which are "approved and shipped
  nowhere". Both were true when written and neither is now: the listing sheet
  PDF emits `legal.nr.listing.cc`
  (`src/lib/listings-manager/sheet/ListingSheet.tsx`). Its model also calls
  `renderDisclosure('legal.cc.poweredby')`, but no component emits that
  field, so that string ships nowhere. Corrected in place per the convention
  above. **This corrects a premise, not what was adopted:** item 4 stands
  approved and the packet still renders the strings in full. Recorded by the
  branch owner.
- **Correction confirmed, 2026-09-10:** Stephen Maury confirmed the factual
  correction above. Item 4 stands as corrected; what was adopted is
  unchanged.
