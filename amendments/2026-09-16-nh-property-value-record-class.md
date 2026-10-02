# Amendment — the Nantucket Houses property-value and sales-engagement record classes migrate to Odin

- **Date raised:** 2026-09-16, by the branch owner, on the owner's decision of
  the same date.
- **Direction decided:** 2026-09-16 by the owner, answering a question about
  whether Nantucket Houses performs property-value and sales engagement at all:
  *"Even the property value or sales engagement class from Nantucket Houses
  should be stored in Odin. Even if the intake is through the Nantucket Houses
  service, these records are Odin properties."*
- **Status:** **Proposed.** His direction is recorded; **this instrument is not
  ratified.** The approval block at the end carries no signature, no record class
  moves, and `nhAgentFetch` remains the read and write path for every class named
  here. A merge with Status still "Proposed" ratifies nothing, per
  `2026-09-12-merged-contact-marketing-authorization.md`.
- **Owner:** Stephen Maury
- **Mechanism it uses:** `2026-09-04-odin-authoritative-crm.md` made Odin the
  system of record for canonical contact identity, communication permissions and
  suppression, and left the rest explicitly open: *"C&C/VRM and NH remain systems
  of record for the records they originate today, **until a per-record-class
  migration is recorded by its own dated amendment**."* This is such an
  amendment, for the Nantucket Houses classes his decision names.
  `2026-09-14-nr-renter-pmo-record-class-migration.md` is the precedent for the
  shape.

## What is true today, checked rather than assumed

**Odin is a client of Nantucket Houses for these records, not their store.**

- `src/lib/nh/server.ts` is the server-only boundary for the NH client: it reads
  `NH_SESSION_EXCHANGE_KEY`, exchanges an operator token, and calls NH over
  `nhAgentFetch`. The seller-portal surfaces resolve through it.
- **`nhAgentFetch` is Odin's route to NH, and it is not Odin's only route out.
  Three drafts of this bullet were wrong in three different ways; the third
  correction (P2) is the one that checked the environment.** What is true: the
  legacy `/leads` and `/my-leads` pages call `src/app/actions/leads.ts`, which
  fetches `${NEXT_PUBLIC_API_BASE_URL}/rental-opportunity` directly, and those
  pages are live — `src/lib/nh/server.ts` says of the redirect flag *"Default off
  — legacy pages render as today."*
- **That route goes to VRM, not to NH, and it carries `Lead` records.**
  `NEXT_PUBLIC_API_BASE_URL` is the **C&C VRM API** — `.env.example` points it at
  `cloud.congdonandcoleman.com`, and `docs/home-guide/environment-variables.md`
  defines `VRM_SERVICE_TOKEN` as the JWT for *"the C&C VRM API
  (`NEXT_PUBLIC_API_BASE_URL`)"*. NH is reached through the separate
  `NH_AGENT_API_BASE_URL`. And `src/app/(odin)/leads/page.tsx` imports `Lead` from
  `@/types/leads`, not a rental-inquiry type.
- ***The error history is kept because the conclusion survived all three
  versions and the reasoning did not.*** A first draft said `nhAgentFetch` was the
  whole boundary — wrong. A correction said the other route carried
  sales-engagement data — wrong, and it would have pulled an unrelated endpoint
  into scope. A second correction said it carried rental inquiries over a second
  NH path — **wrong upstream and wrong record shape**. The legacy
  rental-opportunity path is **VRM's**, it is **out of scope**, and anyone
  inventorying NH paths or record shapes from the earlier text would have got both
  wrong.
- `src/lib/nh/seller-showings.ts` states the contract in terms: *"The NH contract
  is nantuckethouses-platform `docs/seller-portal.md` (advisor routes),"* and its
  validation exists because *"NH's `MAX_NOTE_LENGTH` on the advisor routes:
  showing notes, feedback, activity bodies and **opinion-of-value notes** are
  silently truncated to this length server-side, so Odin must refuse longer input
  up front."* Odin validates to NH's limits because NH is the one persisting.
- `identity_link.source_system` is a CHECK-constrained enum of five values —
  `cnc_contact`, `cnc_lease_signer`, `nh_renter`, `assessor_owner`,
  `hello_subscriber` (`supabase/migrations/20260904120000_hello_subscriber_identity.sql`).
  **No value names a property-value or sales-engagement record**, and `nh_renter`
  is a renter link rather than a seller or owner-prospect one.

So the classes his decision names are, today, NH's records that Odin reads and
writes through NH's API. That is exactly the state the CRM amendment described
and left to a per-record-class amendment to change.

## What his decision settles

1. **Odin becomes the system of record for the Nantucket Houses property-value
   and sales-engagement record classes** — not the cache, not the reporting copy,
   the record. **The target, not the present state — corrected after review
   (P2).** His decision settles the destination; each class's system of record
   moves at **that class's verified cutover**, not at ratification and not at the
   date of his decision, which is the rule
   `2026-09-14-nr-renter-pmo-record-class-migration.md` states for its own
   classes. Until then NH remains authoritative, as the Status block and the work
   list below both say.
2. **The intake surface is not the system of record.** His words are the rule:
   *"Even if the intake is through the Nantucket Houses service, these records are
   Odin properties."* A person may reach Nantucket Houses, ask what a house is
   worth, and be engaged there; where that conversation is captured does not
   decide who owns the record of it.
3. **It is consistent with the approved Nantucket Houses amendment rather than a
   departure from it.** `2026-08-10-nh-in-app-booking-and-paid-installs.md`
   already separates the two for bookings — NH owns the customer-facing surface
   while NantucketRentals remains *"the authoritative booking, lease, payment, and
   inventory system"* — and reads §4's hand-back as *"a systems-of-record rule,
   not a surface rule."* His decision applies the same separation to the
   property-value and sales-engagement classes, with Odin as the holder.

## What it does **not** settle, stated so nothing is read into it

- **It is not a consent decision, and it does not authorize a send.** The same
  approved amendment holds that *"NH property-value or sales engagement does not
  itself authorize rental marketing. A user-initiated booking action supplies
  intent for that action; future outreach still requires the relevant
  permission."* Moving where a record lives changes nothing about what may be
  sent to the person it describes.
- **It does not decide any message class.** He gave this decision in answer to a
  question about whether Nantucket Houses holds a marketing showcase member.
  **This answers where records live, not which classes a brand sends** — storage
  ownership is not class membership.

  *That marketing question lives in an instrument proposed in
  [odin#449](https://github.com/stephen329/odin/pull/449) and **not yet in
  `main`**, so it cannot be cited here as a record — noted after review (P2),
  which found the file absent from this tree. He has since answered **both** sides
  of it: the rental side with "3 - yes" and the sale side with "Yes". Neither is
  open. Corrected here without waiting for a round to catch it, because this
  sentence went on saying "the sale side is open there" after he closed it — the
  same stale-answer defect a review caught in that other instrument.*

  **The separation runs both ways, and that is the point of recording his answers
  here rather than relying on them.** His sale-side "Yes" is a class decision and
  supplies nothing about where a record lives, exactly as the decision this
  document records supplies nothing about which class a brand sends. Nothing here
  depends on either.


- **It does not design the migration.** No schema, cutover order, backfill,
  reconciliation or enum value is proposed here, because none was decided and a
  contributor inventing them would be recording a design as though it were his
  direction. The precedent amendment carries that detail because it was drafted
  at his instruction with it; this one records the direction and names the work.

## The work this direction implies

Named so the size of it is visible before ratification, not to pre-empt its
design:

1. **A definition of the two record classes** precise enough to migrate —
   what a "property-value" record is (an opinion of value and its notes, a
   valuation request, a seller stage) and what a "sales-engagement" record is
   (showings, activities, the owner-advisor thread).

   **Not by following the advisor route set, and an earlier draft said to —
   corrected after review (P2).** Those routes are not an enumeration of
   NH-authoritative records. `docs/nh-agent-handoff/listings-manager.md` says
   **Odin already owns** *"visibility, agents, contacts, off-market details and
   photos"*, and some advisor calls carry Odin's own projection or handoff rather
   than NH's record. Reading the class boundary off the routes would try to
   migrate records **already authoritative in Odin** and treat a synchronised
   projection as a source. **Inventory by current authority**, and exclude
   control and projection endpoints.

   **And the same document records a deliberate decision the other way, which his
   decision supersedes.** It says the NH seller journey *"keeps what is already
   owner-interactive — showings, messages, opinion of value, activity"*, and
   gives a reason: *"This is a deliberate split: moving showings would mean a
   two-way sync of owner responses for no product gain."* **That is exactly the
   sales-engagement class his decision moves.** He is the owner and may reverse
   it; what should not happen is the reversal landing silently. The sequencing
   and reconciliation plans this instrument is gated on are where that reason gets
   answered — the two-way sync it warns about is the split-write window those
   plans exist to design, so the earlier objection is not stale, it is the
   specification.
2. **Schema in Odin**, and the `identity_link.source_system` enum extended or a
   reason recorded for why these classes do not link that way. **If the enum is
   extended, `dup_review_queue.pending_source_system` takes every new value too —
   added after review (P2).** It carries its own CHECK, and `enqueueDup` writes the
   incoming source into it, so extending one constraint and not the other makes an
   **ambiguous seller or owner identity fail the linking transaction at the exact
   moment it needs to reach human review**. The precedent this instrument follows
   already requires both.

   **Read the constraint from its current definition, not from the table's
   creating migration — corrected after review (P2), which caught this bullet
   citing a superseded one.** The CHECK was created with four values in
   `supabase/migrations/20260723180000_contact_identity.sql` and **replaced** in
   `supabase/migrations/20260904130000_hello_beehiiv_receiver.sql`, which drops it
   and re-adds it over **five** — the four plus `hello_subscriber`, matching
   `identity_link.source_system`. Rebuilding it from the citation this document
   gave would have **silently dropped `hello_subscriber`**, so the work item meant
   to prevent one broken linking transaction would have caused a different one. The
   requirement is therefore to **preserve every existing value and add to them**,
   reading the live definition first.

   *The document was also inconsistent with itself: the section above correctly
   calls `identity_link.source_system` an enum of **five** values on the 2026-09-04
   migration, while this bullet called the queue's the "same four."*

   **And this exact failure has already happened once, which is why it is worth
   more than a schema footnote.** The replacing migration's own header records it:
   the 2026-09-04 change *"admitted `hello_subscriber` to `identity_link.source_system`
   but not to `dup_review_queue.pending_source_system`, so a Hello signup the linker
   wanted reviewed failed the CHECK, and with it the origination transaction."* The
   hazard this bullet warns about is not hypothetical — it is a repeat, and the
   citation error would have set it up a second time.
3. **A cutover per class**, with the system of record moving at that class's
   verified cutover rather than at ratification — the rule
   `2026-09-14-nr-renter-pmo-record-class-migration.md` states for its own
   classes.
4. **A reconciliation plan** against NH for the period both hold data.
5. **Every read and write path *for these classes*, not just one, and not more
   than these.** `nhAgentFetch` is the seller surfaces' route and is the one this
   migration replaces; **`src/app/actions/leads.ts` is explicitly out of scope**,
   because `/rental-opportunity` is the legacy **VRM** path carrying `Lead`
   records rather than NH property-value or sales-engagement ones. An inventory of the routes is the
   first step in both directions: what a search found today is not a guarantee
   that it is all of them, and a route that exists is not a route this amendment
   covers.

## Affected metrics

- Count of property-value and sales-engagement records by system of record,
  during and after each cutover — the measure of whether a class has actually
  moved or is merely double-written.
- Reconciliation discrepancies against NH per class, which is the standing
  measure of what the migration period costs.
- Advisor-visible write failures on the seller surfaces, before and after, since
  a migration that degrades the advisor's own tool is the failure mode that
  matters most here.

## What this does not change

- **Consent, suppression and the per-brand caps**, at every axis they have.
- **The Nantucket Houses surface.** Intake stays where it is; his decision is
  about the record, not the experience.
- **`2026-09-04-odin-authoritative-crm.md`'s identity, permissions and
  suppression scope**, which is already Odin's and is not re-litigated here.

## Approval — and why this document is not yet signable

**It is not ready for his signature, and that is stated here rather than left to
the approval block's silence — added after review (P2).**

`2026-09-04-odin-authoritative-crm.md` does not merely say a record class needs
its own amendment. It says each one needs *"its own amendment, **sequencing, and
reconciliation plan**."* This document has the amendment and deliberately omits
the other two, because he decided a direction and not a design. **So signing it
as it stands would record the per-record-class requirement as satisfied while
the split-write window and the conflict-resolution rule are undefined** — which
is the failure the requirement exists to prevent, arriving through the document
meant to meet it.

**The ratification prerequisite, therefore:** the sequencing plan (§3-shaped)
and the reconciliation plan (§4-shaped) of
`2026-09-14-nr-renter-pmo-record-class-migration.md` must be written into this
document and approved with it. Until they are, this block stays unsigned even if
he is ready, and his direction of 2026-09-16 stands recorded without a migration
having been authorized by it.

Ratifying the completed document will mean Odin becomes the system of record for
the Nantucket Houses property-value and sales-engagement record classes, with
each class moving at its own verified cutover and not at ratification.

Signature: ______________________  Date: ____________

*Unsigned. Until this block carries the owner's name and a date, NH remains the
system of record for these classes and `nhAgentFetch` remains their read and
write path.*
