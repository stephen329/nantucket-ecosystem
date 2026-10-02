# Amendment — Odin is the authoritative CRM; Odin may originate contact identity

- **Date raised:** 2026-09-04
- **Direction decided:** 2026-09-04 by the owner, in the working session that
  followed the Hello Beehiiv pilot data conditions (#269): "Increasingly, we
  want to move away from VRM and into Odin. Odin should be the authoritative
  CRM."
- **Status:** **Approved 2026-09-04 and in effect.** Approval was given by the
  owner in session and is recorded in the approval block below, in this dated
  change, per the 2026-08-13 amendment — not by the act of merging, which files
  a proposal without ratifying it (the basis on which
  `2026-08-10-nh-in-app-booking-and-paid-installs.md` has sat merged and
  unapproved since August).
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** `docs/sales-matching/ADR-001-phase-1-identity.md` (the "Layer
  hosting" locked default); Strategy §"Systems of record" (the CRM entry, by
  naming its implementing system for the first time); the work-item table in
  `2026-09-04-hello-pilot-data-conditions.md`. **No gate value changes** — no
  threshold, evidence floor, cohort window, or stage date moves, and no
  customer data migrates under this amendment.

## The finding this rests on

The strategy does **not** name a product as the CRM. Its architecture diagram
labels the node `CRM["Shared relationship and consent layer"]` and draws
`CRM <--> OD`; the systems-of-record list describes the CRM by function —
"canonical relationship, commercial intent, agent ownership, opportunity
status, attribution, communication permissions, and suppression" — and never
says which system performs it.

The system was fixed instead by an engineering ADR. ADR-001's locked defaults
say: "Layer hosting | Odin Postgres (`PARCELS_DATABASE_URL`); C&C/VRM + NH
remain systems of record."

So this amendment does not contradict approved strategy. It resolves a
question the strategy left open and an ADR answered provisionally.

## What is already true in Odin

The CRM function the strategy describes is, in large part, already implemented
in Odin's database rather than in VRM:

| Strategy's CRM function | Odin implementation |
|---|---|
| Communication permissions | `communication_consents` — `email × brand × purpose × channel × consent_version × granted_at/revoked_at`, the §5 consent tuple |
| Suppression | `communication_suppressions` — scopes include `'hello-nantucket'` |
| Attribution / audit | `communication_outcomes` |
| Canonical relationship, deduplication | `contact_identity`, `identity_link`, `household`, `dup_review_queue`, `identity_merge_log`, `src/lib/identity/` |

**Recorded honestly:** the three `communication_*` tables have schema and no
code. No file in `src/` reads or writes them; `src/lib/comms/` contains only
`isolated-send.ts`, not the "one enforcement point" its own migration header
names. This amendment does not pretend that gap away — see item 2.

## What this amendment changes

1. **Odin is the target system of record for the CRM function.** ADR-001's
   "Layer hosting" row is superseded to: *Odin Postgres is the system of
   record for canonical contact identity, communication permissions, and
   suppression. C&C/VRM and NH remain systems of record for the records they
   originate today, until a per-record-class migration is recorded by its own
   dated amendment.*

2. **Odin may originate contact identity.** Today it cannot.
   `identity_link.source_system` is a CHECK-constrained enum of four values —
   `cnc_contact`, `cnc_lease_signer`, `nh_renter`, `assessor_owner` — each a
   pointer to a record born in another system, under
   `UNIQUE (source_system, source_record_id)` which requires that foreign id.
   A person who originates in Odin has no legal value to use.

   This matters beyond tidiness: identity dedupe resolves **only** through
   `identity_link` (`src/lib/identity/postgres-store.ts:183`,
   `FROM identity_link l WHERE l.normalized_email = $1`). A `contact_identity`
   row with no link is invisible to email dedupe. Writing Hello subscribers as
   bare identities would therefore defeat the new-to-CRM determination that
   `2026-09-04-hello-pilot-data-conditions.md` item 3 makes blocking.

   Odin-originated record classes are permitted. Hello editorial subscribers
   are the first, consistent with §5's existing permission: "The CRM may
   receive Hello subscriber records for identity resolution, attribution,
   deduplication, and suppression. It may not automatically activate NR, NH,
   or C&C marketing." That restriction is unchanged and binds Odin as it bound
   the CRM.

3. **The consent and suppression enforcement point is a prerequisite, not a
   follow-up.** No Odin-originated subscriber record may be written before the
   `communication_*` tables have a read path that a send surface actually
   consults. Consent rows nothing checks are worse than no rows: they evidence
   a control that does not exist.

   **How this is enforced, added on review 2026-09-04.** The first
   implementation shipped the read path and the writer together, with nothing
   consulting the read path — which is the condition above, violated by the
   change that introduced it. Origination is therefore gated in code:
   `HELLO_SEND_SURFACE_WIRED` in `src/lib/hello/subscriber.ts` is `false`, and
   `recordHelloSubscriber` refuses while it is. The change that adds the send
   adapter flips it, which is the point at which a reviewer is asked to confirm
   the read path is genuinely consulted. A test asserts both the flag's value
   and the refusal, so flipping it silently fails the suite.

## What this amendment does not change

- **No customer data migrates.** VRM remains the system of record for the
  contacts and lease signers it holds. `runIdentitySync` keeps reading from it.
  Nothing is dual-written, cut over, or retired here.
- **No reservation, lease, availability, payment or accounting scope moves.**
  Those stay with the NR/booking backend and Accounting per the strategy's
  systems-of-record list. "Away from VRM" is a direction; each record class
  needs its own amendment, sequencing, and reconciliation plan.
- **The §5 purpose limitation stands**, as does the Office Manager's open
  Privacy validation, "CRM purpose-limitation rule for Hello subscriber
  records", gated "Before Hello Month 1". Naming Odin as the CRM does not
  satisfy that review; it identifies which system it applies to.
- **The interactive agent-mailbox exemption** of
  `2026-09-02-odin-interactive-send-governance-removal.md` is untouched.

## Consequential correction to the Hello pilot amendment

`2026-09-04-hello-pilot-data-conditions.md` assigns its work items to "CRM"
and records "Odin | Nothing yet. Hello measurement has no Odin surface today,
and this amendment does not create one." Both halves of that row are wrong:

1. The Hello content calendar shipped to Odin at 17:35 UTC on 2026-09-03
   (`stephen329/odin#242`), roughly eight hours before that amendment was
   drafted. Hello measurement had an Odin surface at the time of writing.
2. Under this amendment, its CRM work items — webhook receiver, scheduled
   reconciliation, dedupe-on-arrival with a new-or-existing flag, and consent
   tuple storage — are Odin work.

That row is corrected in this change. No work item is added, removed, or
rescoped; only its assignee is named correctly.

## Known debt this direction inherits

- **Corrected on implementation, 2026-09-04.** An earlier draft of this
  amendment said `src/lib/identity/postgres-store.ts:662,746` showed the store
  "assumes VRM-shaped sources are the norm". Read in full, those two literals
  are legitimately VRM-scoped helpers — retiring `cnc_lease_signer` links for a
  given CNC contact, and mapping CNC contact ids to identities for a CNC admin
  view — and they name their source system correctly. Every generic path takes
  `sourceSystem` as a parameter. There is no drift to repay here, and no work
  was done pretending otherwise.
- `src/types/profile.ts:91` carries `pipedrive_user_id`, read nowhere and set
  only to `null` in a test fixture. Vestigial; retire it under ordinary
  cleanup, not here.

## Approval

**Approved.**

- **Approved by:** Stephen Maury (stephen@maury.net), document owner and
  executive sponsor, in the working session of 2026-09-04: "approve it and
  start on 2 and 3".
- **Date:** 2026-09-04
- **Recorded by:** the branch owner, in this dated change, per the 2026-08-13
  amendment. Approval was given in session, not by the act of merging; this
  block is the record.
