# Amendment — The systems-of-record map: "NR/booking backend" is two systems

- **Date raised:** 2026-09-14
- **Direction decided:** **Not decided.** This amendment is *filed as a
  proposal* and is not in effect. It records a documentary gap found while
  answering an architecture question about database unification, and proposes
  text to close it. Nothing below binds until the owner approves it in the
  approval block through an externally verifiable approval source.
- **Status:** **Proposed — awaiting owner approval.** Per the 2026-08-13
  amendment, merging files a proposal without ratifying it; approval is given
  by the owner and recorded in the approval block, not by the act of merging.
  `2026-08-10-nh-in-app-booking-and-paid-installs.md` sat merged and unapproved
  from August on exactly this basis, until the owner approved it on 2026-09-05.
  An earlier revision of this line cited it as *still* unapproved, which stopped
  being true before this document was written — corrected on review. The rule it
  illustrates is unchanged; only its example has since closed.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** Strategy §2 "Systems of record" (splits one entry into two, and
  names the implementing system for each); **Strategy §9 "Data ingestion"**
  (item 1b replaces its `NR/booking backend` source row with two and adds dated
  payment history to its Odin row — named here on review, because a scope or
  conflict review driven by this header would otherwise skip a strategy section
  this amendment actually changes); the scope carve-out sentence in
  `2026-09-04-odin-authoritative-crm.md`; the out-of-scope list in
  `docs/consolidation/README.md`; agent orientation in `CLAUDE.md` /
  `AGENTS.md`. **It also collides with an approved record it does not
  supersede** — `2026-08-10-nh-in-app-booking-and-paid-installs.md:35-43`
  (approved 2026-09-05) — see the third open decision. **No gate value
  changes** — no threshold, evidence floor,
  cohort window, or stage date moves. **No customer data migrates.**

## The finding this rests on

Strategy §2 lists five systems of record. The first is one entry:

> **NR/booking backend:** rental inventory, availability, bookings, leases,
> stays, and payments.

That single box describes **two separately deployed systems** owned by
different repositories, on different infrastructure, with different
release paths. The strategy has never said so, and every downstream document
that leans on the phrase "the NR/booking backend" inherits the ambiguity.

This is the same shape of gap that `2026-09-04-odin-authoritative-crm.md`
closed for the CRM entry: the strategy described a function without naming the
system performing it. Here it names a function that two systems perform
between them.

## What is actually deployed

**Four backends, not three and not one:**

| System | Repo | Serves | Store |
|---|---|---|---|
| **Odin** | `stephen329/odin` | Staff and agents; `odin.congdonandcoleman.com` | Supabase Postgres (`PARCELS_DATABASE_URL`), plus a Payload CMS database |
| **nrbe** | `stephen329/nrbe` | NantucketRentals.com booking; `api.nantucketrentals.com` | AWS RDS Postgres, ECS Fargate |
| **VRM** (called "CNC" in Odin's code) | `gitlab.com/nv/vrm` — **not a GitHub repo, and not confirmed as what `api`/`devapi` actually deploy**; see below | Congdon & Coleman lease, contact and document operations, and sales-listing/media reads for the public C&C site; `api.congdonandcoleman.com`, with `devapi.` its development host | Not inspected; see *Limits of this evidence* |
| **Nantucket Houses** | `nantuckethouses-platform` | Owner and guest product; `api.nantuckethouses.com` | Not inspected |

Evidence for the split, which is the load-bearing claim:

- `nrbe/deploy/variables.tf` sets `dns_zone_name = "nantucketrentals.com"`.
  nrbe is the NantucketRentals backend, not the Congdon & Coleman one.
- `nrbe/app/app/settings.py:383-386` configures nrbe as a **client** of the
  Congdon & Coleman API:
  `CNC_IMPORT_LEASE_URL`, `CNC_PAYMENT_PAYOUT_URL`,
  `CNC_LISTING_DATA_SYNC_URL`, all built from `CNC_API_URL`.
- `docs/leases-status-multiselect.md:31` states it directly: *"`lease/models.py`
  live in the VRM Django service (`gitlab.com/nv/vrm`) behind
  `api.congdonandcoleman.com`."*
- **nrbe has no lease model at all.** `grep '^class .*Lease' app/*/models.py`
  returns nothing across the 108 top-level classes in its model modules.

The VRM's public-site role is the part most likely to be overlooked, so it is
cited separately. `docs/link-audit/07-open-questions.md:91-96` records that the
public `cnc-web-fe` "points sales-listing reads at
`https://devapi.congdonandcoleman.com`" and that the service "appears to own
the existing active-listing/media path, including the C&C sales-image
CloudFront distribution" (`d1b75btxwpe6g0`, line 101). **So a customer-facing
site reads listings and media from that service, and whichever backend it is,
this is not purely staff-facing scope** — which constrains where it can move.

The scope lands on the VRM, and the repository already establishes why.

**`devapi.congdonandcoleman.com` is the VRM, and the repository says so** —
corrected on review after several revisions of this document treated it as an
open question and built conditional language on top of that.
`docs/nh-agent-handoff/rental-inquiries-pointer.md:17-18` names the "**CNC/VRM
backend** (`cloud`/`devapi.congdonandcoleman.com`)";
`docs/consolidation/inventory.md:234-236` calls `devapi` the development
fallback for "the legacy VRM API"; and `src/lib/auth-session.ts:74-82`
implements exactly that, as the dev fallback for the CNC API base. The logical
service is identified, the backend count is four, and the listings scope is the
VRM's.

What `docs/link-audit/07-open-questions.md:114-118` still asks stays open, and
that list is wider than an earlier revision of this paragraph allowed — narrowed
too far on review, corrected here. It asks **where `devapi`'s Django repository
is**, as well as the named deployer and operator, the access path, and that
operator's participation in dual-run, parity, traffic switch, rollback and
retirement planning.

The repository question matters separately from the identity one, and the
distinction is narrow enough to be worth spelling out.
`docs/leases-status-multiselect.md:31` places the VRM's *source* at
`gitlab.com/nv/vrm` — that much is documented. What no document establishes is
that the running `api`/`devapi` deployment is **built from** that repository.
The evidence above shows only that `devapi` *serves* the CNC/VRM API.

So the table's repository cell is this document's weakest, and it now says so
in the cell rather than only here — an earlier revision left the table
asserting the repository flatly while this paragraph called the relationship
unestablished, which is the contradiction a reader would resolve in favour of
the table. A change made on that assumption could land in a codebase that is
not what production runs. None of this makes the service a fifth backend — the
count stays four — and none of it reopens the identity.

"CNC" (Odin's code, nrbe's settings) and "VRM" (Odin's docs and env vars —
`VRM_API_KEY`, `VRM_SERVICE_TOKEN`) are two names for the same system. The
dual naming is part of why the map is easy to get wrong, and this amendment
proposes settling on one.

## The ambiguity this created

`2026-09-04-odin-authoritative-crm.md` carves out scope with this sentence:

> No reservation, lease, availability, payment or accounting scope moves.
> Those stay with **the NR/booking backend** and Accounting.

Read against the real topology, that sentence assigns lease scope to "the
NR/booking backend" — a system that has no lease model. The scope it protects
is split: availability and bookings sit in nrbe, leases sit in the VRM, and
payment sits in **both**, which is the sharpest instance of the problem:

- nrbe holds `bookings.Payment` and `bookings.Payout`
  (`app/bookings/models.py:171,223`) and pushes them to
  `{CNC_API_URL}/nr-payment-payout`.
- The VRM holds `payment.qb_info` (`docs/payments-ledger.md:18`).
- Odin holds `payment_ledger_entries`, built to answer "when did the money
  move" because the VRM's answer was an admin-typed date.

The carve-out did not anticipate the third one, but the shipped design does
settle it, and an earlier revision of this amendment was wrong to call it open
— corrected on review. `docs/payments-ledger.md:539-540` states the split in
terms of ownership rather than the phrase "system of record": *"Each still owns
what it owned — VRM the balance, the ledger the dated history."* The ledger is
one row per real movement of money (`docs/payments-ledger.md:25-26`), and the
booking-side records stay with nrbe under the 2026-09-04 carve-out. So the
three stores are three roles, not three claimants, and this amendment records
that rather than reopening it.

That settles *how* the roles divide, and not *which record governs the
division* — the distinction matters and is drawn on review. The approved
`2026-08-10-nh-in-app-booking-and-paid-installs.md:35-43` names
NantucketRentals authoritative for payments, which this map does not, and that
collision is the third open decision below rather than something settled
here.

## Where record classes live today

Descriptive, not a proposal. Duplications are marked.

| Record class | Authoritative today | Also held in |
|---|---|---|
| Rental inventory, availability, rates | nrbe (`NrProperty`, `NrPropAvailableCalendar`, `NrPropRentalRate`) | VRM, via the listing-data sync |
| Bookings | nrbe (`bookings.Booking`) | VRM, via the lease-import sync |
| Leases | VRM (`lease/models.py`) | — |
| Payments / payouts | **Split by role** — nrbe booking-side, VRM the balance, Odin the dated history (`docs/payments-ledger.md:539-540`) | **The split itself is not contested; which record governs it is** — the approved NH booking amendment names NantucketRentals authoritative for payments. See the third open decision |
| Canonical identity, consent, suppression | **Odin**, per the 2026-09-04 amendment | VRM originates the records Odin syncs |
| Source contact records (`NrRenter`, `NrPmo`) | **nrbe, until each class's verified cutover** — `2026-09-14-nr-renter-pmo-record-class-migration.md` (ratified) | Destination is **two parts**: the rental projection `rental_contacts` (`:111-124`) and the canonical identity graph in Odin (`:125-138`). Neither is the source yet. **`rental_contacts` changes meaning but does not move** — `2026-09-16-nh-originator-classes-retire-to-odin.md` (ratified) demotes it *in place* to the rental projection holding a reference to `contact_identity`: *"This amendment does not delete either table; it removes their standing as originators."* It stays on the NH platform, where stays, leases and the guest portal hang from it. An earlier revision of this row said it retires to Odin, which would have led a cutover to relocate a record that stays — corrected on review |
| Canonical property identity, compliance, prompts | Odin | — |
| Sales listings and listing media | **Split by surface, both live** — the VRM for the public C&C site; Odin's licensed Bridge replica for the agent workspace, which `docs/link-audit/12-mls-ui-ux-plan.md:36-38` keeps as the request-path source for that tool independently of the `devapi` cutover | The two run on *two different MLS feeds that can disagree* (`docs/link-audit/15-parcels-listings-convergence-plan.md:33`) — see the fourth open decision |
| Rental inquiry and rental person classes (`rental_leads`, `rental_contacts`, `rental_identity_conflicts`, `rental_contact_external_links`, `rental_lead_access` and the records hanging off them) | **Nantucket Houses today; Odin is the ratified destination** — `2026-09-16-nh-originator-classes-retire-to-odin.md` §1a/§1b (ratified 2026-09-16). Nothing moves by ratification alone, and the two move **together**: §3 collapses both classes, capture relocation, authority movement and the projection demotion into a single step 4 transition, because `rental_leads.contact_id` joins them and a staged move would leave a person and their inquiries under different writable authorities. Per-class cutovers are the *other* migration's rule (`2026-09-14`, `NrRenter`/`NrPmo`); conflating the two is corrected on review | Odin, on cutover |
| Other owner and guest workflows | Nantucket Houses | — |

## Text to adopt

1. **Split the §2 entry.** Replace the single "NR/booking backend" bullet with
   two, each naming its system:

   - **NR booking backend (`nrbe`, `api.nantucketrentals.com`):** rental
     inventory, availability, rates, bookings, stays, booking-side payments and
     payouts, and **the `NrRenter` and `NrPmo` source records** until each
     class's verified cutover. That last clause is not optional:
     `2026-09-14-nr-renter-pmo-record-class-migration.md:459-462` says
     "between approval and cutover, `nrbe` is authoritative and nothing about
     that is ambiguous", and a replacement §2 entry omitting them would be
     adopted while they are still nrbe's.
   - **C&C lease backend (`VRM`, `api.congdonandcoleman.com`):** leases, the
     **lease payment balance**, damage claims, service providers,
     document/signature workflows, and **the contact records it originates**.

   Two precisions in that entry, both added on review. The VRM owns the
   *balance*, not lease payment records at large — Odin's ledger holds the
   dated history of the same payments (`docs/payments-ledger.md:539-540`), so
   the broader wording would have claimed Odin's role for the VRM. And the
   contact records it originates stay with it: `2026-09-04-odin-authoritative-crm.md:60-61`
   leaves "C&C/VRM and NH … systems of record for the records they originate
   today, until a per-record-class migration is recorded by its own dated
   amendment", and `runIdentitySync` still imports them. Odin's canonical
   identity authority does not displace the raw VRM contacts, and a map that
   omitted them could be read as licence to retire or redirect `/contacts`.

   The Odin/ACK entry gains the matching half: **dated payment history
   (`payment_ledger_entries`)** alongside its existing canonical property
   identity, compliance, prompts, exceptions and operational history.

   **The Nantucket Houses entry keeps the people it originates**, added on
   review for the same reason the other two entries keep theirs. NH mints
   `rental_contacts` of its own today — **and `rental_identity_conflicts` with
   them**, which §1a names as part of the same person class and whose rows carry
   the resolution evidence for an email and a phone that resolve to different
   people. A source map that omits the conflict store reads as complete and
   invites a migration to drop exactly the data whose loss merges the wrong
   people. Added on review.

   **And `rental_contact_external_links` with both**, added to §1a at the owner's
   direction on 2026-09-16 after the step-0 inventory found it unnamed
   ([odin#457](https://github.com/stephen329/odin/pull/457) §4.2). It holds the
   platform's own `contact_id` → `(external_system, external_contact_id)`
   correspondences — `odin` among them — so a source map that omits it invites
   the same migration to discard the links Odin's linker would otherwise have to
   re-derive from single-key evidence.

   `2026-09-16-nh-originator-classes-retire-to-odin.md` demotes `rental_contacts`
   to a projection at its step 4 cutover — a separate release by the owner, not
   something ratification performed, and a demotion *in place* rather than a
   move off the platform. Until then NH originates, and a source map naming
   source contacts for nrbe and the VRM while silently omitting NH's would read
   as complete and leave an implementer feeding two of the three.

1b. **Split the §9 ingestion row too — added on review.** §2 is not the only
   normative map that conflates the two systems. The source table in §"Data
   ingestion" carries the same single entry
   (`docs/strategy/nantucket-ecosystem-integrated-strategy.md:573`):
   *"NR/booking backend | Inventory, searches and saves, booking source, lease,
   stay, payment, cancellation | Hourly/nightly"*. Splitting §2 alone would
   leave a contributor planning the §9 feeds still treating nrbe as the lease
   source. Replace that row with two, on the same division as §1:

   | Source | Authoritative data | Refresh |
   |---|---|---|
   | NR booking backend (`nrbe`) | Inventory, searches and saves, booking source, stay, booking-side payment, cancellation, and the `NrRenter` / `NrPmo` source records until each verified cutover | Hourly/nightly |
   | C&C lease backend (VRM) | Lease, lease payment balance, damage claims, VRM-originated contacts | Hourly/nightly |
   | Nantucket Houses | Its existing row, **plus the people it originates itself** — `rental_contacts` minted by NH rather than projected from elsewhere, **and `rental_identity_conflicts` and `rental_contact_external_links`** — until the step 4 cutover demotes the projection | Near-real time/nightly |

   The existing **Odin** row in the same table gains dated payment history, so
   that all three payment roles survive in the ingestion map rather than two.

   Both rows carry their source contact records deliberately — added on review
   after the §2 entries gained theirs and these did not. The two adopted maps
   have to name the same systems holding the same records, or an ingestion
   implementer reading a complete-looking row will not feed the two classes the
   ratified migration depends on.

   The refresh cadences are carried over unchanged; this amendment proposes no
   change to either.

2. **Settle the name.** One system, one name in new writing: **VRM**. `CNC`
   survives in existing code identifiers (`CNC_API_URL`, `cnc-rental-sync.ts`,
   `CncLogs`) and is not renamed by this amendment — renaming shipped
   identifiers is not worth the churn. New documents, variables and comments
   use VRM.

3. **Correct the carve-out.** The sentence in
   `2026-09-04-odin-authoritative-crm.md` is read as: *reservation,
   availability and booking scope stay with nrbe; lease scope stays with the
   VRM; accounting stays with Accounting; and payment scope is split by role —
   nrbe the booking-side records, the VRM the balance, Odin the dated history
   (`docs/payments-ledger.md:539-540`).* No scope moves under this reading — it
   states where the existing carve-out already pointed, more precisely. An
   earlier revision of this clause called payment scope unresolved and pointed
   at an open decision below; the decision was removed as already settled and
   this clause had to follow it, or the text proposed for adoption would have
   reopened the ambiguity the rest of the document closes — corrected on
   review.

4. **nrbe is a keeper, and this is the orientation agents need.** nrbe is the
   booking engine for the brand whose governing KPI is "booking contribution
   and search-to-booking conversion" (§3). It is out of scope in
   `docs/consolidation/README.md`, and its scope is explicitly retained by the
   2026-09-04 amendment. Work on nrbe is not work on a system being retired.
   The decision rule for contributors:

   | nrbe work touching… | Status |
   |---|---|
   | bookings, availability, rates, payouts, inventory | In scope. Retained scope |
   | canonical identity, consent, suppression, communication routing | Out of scope — Odin's under the 2026-09-04 amendment |
   | `NrRenter` / `NrPmo` source records, and the work of migrating them | **In scope.** `2026-09-14-nr-renter-pmo-record-class-migration.md` (ratified) holds that *"`nrbe` remains the system of record for each class until that class's cutover completes and is verified"*. nrbe stays authoritative **and writable** for both classes until then, and the **nrbe-side** work — extraction, fencing and source writes — happens there. The rest of each cutover does not: the ratified sequence puts the `rental_contacts` ↔ `contact_identity` schema migration, the linkage run, the suppression backfill and the historical import in the destination systems *before* nrbe's users resolve at sequence item 8 (`2026-09-14-nr-renter-pmo-record-class-migration.md:352-362`) |
   | the VRM sync (`core/signals.py`, `CncLogs`, the three `/nr-*` URLs) | In scope, and the highest-leverage work in the repo |
   | infrastructure, security, credentials | In scope regardless of any consolidation decision |

5. **"One backend" is not an approved goal and no document states it.** The
   approved direction is narrower: Odin is the authoritative CRM, and each
   record class moves under its own dated amendment. Any proposal to collapse
   a backend needs its own amendment, and must address that Odin is *not a
   customer-facing brand* (`design-system/README.md:4`) and that NH owns lead
   lifecycle under §6 of the Odin Rental Inquiries Integration RFC, which is
   canonical in the NH repository and reachable through
   `docs/nh-agent-handoff/rental-inquiries-pointer.md`.

   **That constraint is narrowing, and this clause should not be read as
   permanent** — recorded on review after
   `2026-09-16-nh-originator-classes-retire-to-odin.md` was ratified. The owner
   decided on 2026-09-16 that "Odin is the originator and record keeper" for the
   rental inquiry and rental person classes, on the shape where intake relocates
   and lifecycle comes with it. RFC §6 still governs today — nothing moves by
   ratification alone — but it governs a shrinking set of classes, and an
   argument against collapsing a backend should rest on Odin not being a
   customer-facing brand rather than on NH lifecycle authority that the owner
   has already directed to move.

## What this amendment does not change

- **No customer data migrates.** Nothing is dual-written, cut over, or
  retired here.
- **No record class changes authority.** The table above is a description of
  the present, not a target state. Per the 2026-09-04 amendment, each move
  still needs its own amendment, sequencing, and reconciliation plan.
- **No gate value, threshold, cohort window, or stage date moves.**
- **The §5 purpose limitation stands**, as does the Office Manager's open
  Privacy validation.
- **No infrastructure changes are authorized by this document.** The findings
  under *Known debt* are recorded, not actioned.

## Open decisions this amendment does not make

These are the owner's, and are deliberately left unanswered here.

- [DECIDE] **Where does each remaining VRM record class go, and in what
  order — leases above all?** The *direction* is not open and this marker does
  not reopen it: `2026-09-04-odin-authoritative-crm.md` establishes the move
  away from the VRM, and `2026-09-14-nr-renter-pmo-record-class-migration.md`
  (ratified) carries it forward per class. An earlier revision asked whether a
  retirement direction existed at all, which could have been answered "yes"
  while leaving the consequential choice unmade — corrected on review. What is
  unresolved is the destination and sequencing for the classes with no
  amendment yet, and lease scope is the sharp one: Odin and nrbe are both
  plausible destinations and the choice is consequential.
- [DECIDE] Should the nrbe→VRM sync be replaced rather than maintained? It is
  the largest duplication in the estate (below), and fixing it does not
  require deciding the question above.
- [DECIDE] **Which record governs lease and payment authority — this map, or
  the approved NH booking amendment?** Raised on review, and deliberately not
  resolved here. `2026-08-10-nh-in-app-booking-and-paid-installs.md:35-43`
  (approved 2026-09-05) states that "NantucketRentals remains the authoritative
  booking, lease, payment, and inventory system", and
  `docs/strategy/brands/skill/references/nantucket-houses.md:61` repeats it.
  This amendment's §2 split places leases and the lease payment balance with
  the VRM, on the evidence that nrbe has no lease model and `lease/models.py`
  lives in `gitlab.com/nv/vrm`.

  The two may be reconcilable — "NantucketRentals" there may name the brand and
  the customer-facing relationship rather than the `nrbe` deployment — but that
  reading is not stated anywhere, and on the plain words the records disagree
  about which system holds leases. **An approved amendment is not this
  document's to supersede**, and a contributor reading both would get two
  answers. The owner decides whether the 2026-08-10 wording is corrected, this
  split is narrowed, or both stand under a distinction one of them should
  state. Until then this amendment claims no authority over that record.

- [DECIDE] Does Odin's licensed Bridge replica become the firm's single MLS
  ingest, with the VRM reading from or delegating to it — or do the two remain
  parallel Bridge consumers? Raised as open question 1 of
  `docs/link-audit/07-open-questions.md:108-113`, which warns that leaving it
  open risks "two independent normalization, retention, and media-mirroring
  authorities". It is recorded here because it is a systems-of-record
  question, and because **no part of the VRM's listings scope can move
  anywhere until it is answered.** It does not block the lease, contact or
  payment classes.

## Known debt this map exposes

Recorded for the register; none of it is actioned by this amendment.

- **The nrbe→VRM sync has no delivery guarantee.** 43 `@receiver` hooks across
  20 models in `nrbe/app/core/signals.py` fire a push on save, across 17
  record types in `CncLogs.Type`, with 24 write sites. `cnc_sync_helpers.py`
  contains no retry or replay path; failures land in `CncLogs.exception` and
  remain there. Two systems are kept in agreement by sync-on-save with no
  outbox.
- **The VRM→Odin identity sync is failing in production.** `runIdentitySync`
  reads `{VRM}/contacts` (`src/lib/identity/sync.ts:113`) and applies those
  source records to Odin, so the VRM is the writer being read, not written to;
  an earlier revision reversed this and would have pointed remediation at the
  wrong system — corrected on review. Per
  `docs/payments-ledger.md`, as of 2026-09-05 neither `VRM_SERVICE_TOKEN` nor
  `VRM_API_KEY` is set in production and the daily identity-sync cron returns
  500. The CRM the 2026-09-04 amendment made authoritative is not currently
  being fed.
- **nrbe runs with `DEBUG=1` in every environment.**
  `deploy/templates/ecs/container-definitions.json.tpl` sets it for all three
  containers; `app/app/settings.py:41` reads it as
  `bool(int(os.environ.get("DEBUG", 0)))`. `settings.py:243` also resets
  `ALLOWED_HOSTS = ["*"]`, overriding the construction at lines 43-46.
- **Four credential files are tracked in nrbe's git history:**
  `app/private.key`, `app/fcm-credentials.json`,
  `app/google-gmail-credentials.json`, `app/google-sheet-credentials.json`.
  They require rotation, not merely removal. Their contents were not read.
- **nrbe's RDS instance carries `skip_final_snapshot = true`,
  `multi_az = false`, no `storage_encrypted` and no `deletion_protection`**
  (`deploy/database.tf`) — on the store holding bookings, payments and
  payouts. Secrets reach containers as plaintext Terraform variables rather
  than through Secrets Manager.

## Limits of this evidence

- **The VRM was not inspected.** It is on GitLab, outside this session's
  repository scope. Everything asserted about it is read from Odin's client
  code, Odin's documentation, and nrbe's settings — not from its source. Its
  internal model names, and whether it holds record classes not listed here,
  are unverified.

  **The owner states that ownership is not the reason for the split, and no
  qualified review has tested that yet.** On 2026-09-15 the owner said the
  company owns the VRM source outright with no copyright or licence
  encumbrance. Recorded as his assertion, not as a finding: an earlier revision
  of this passage called ownership "settled" and concluded that "nothing
  prevents" a repository move, then appended a caveat saying the legal question
  was still open — which left the categorical sentences standing and readable
  as a closed chain-of-title determination. Corrected on review; the claim
  itself is now provisional rather than qualified after the fact.

  On that assertion the GitLab location looks like a tooling accident rather
  than a contractual constraint, and no *known* obstacle stands in the way of
  moving the repository to GitHub alongside `odin`, `nrbe` and `nvproject`.
  Whether that holds is what the review below decides. Recorded here because
  the separability register owes an answer on source-code chain of title —
  item 11 of Strategy §12
  (`docs/strategy/nantucket-ecosystem-integrated-strategy.md:686`), not §7 as
  an earlier revision had it; §7 carries the separability workstream in prose
  and numbers nothing.

  **This is owner-supplied evidence, not a closed legal question — corrected on
  review.** `docs/strategy/nantucket-ecosystem-strategy-v1.0-decision-record.md:20-38`
  places "IP chain of title, contractor invention assignments, photography and
  UGC rights" in the queue for qualified legal review, gated *before the first
  separability register review*, and states that "closing each item requires a
  dated note naming the adviser and the scope reviewed. Until an item closes,
  its gating condition holds." The owner's confirmation is what the register
  needs in order to *ask* the question; it does not answer it. Nothing here
  should be read as a legal conclusion about encumbrance, and the repository
  move does not wait on that review — only the register entry does.
  This records a fact, not an approval: the amendment remains unapproved.

  Note that `nv` is a GitLab **group**, not a single repository:
  `docs/link-audit/07-open-questions.md:104` also names `gitlab.com/nv/cnc-web-fe`.
  Any migration should begin with an inventory of the group rather than
  assuming it holds one repository. `docs/consolidation/README.md` records
  that `cnc-web-fe` was rebuilt as a fresh repo on 2026-08-12 under decision
  NR-1, so which `cnc-web-fe` is live needs establishing before either is
  moved.
- **Nantucket Houses was not inspected**, for the same reason — but this
  document now makes detailed claims about it anyway, and their provenance
  should be stated rather than left to the reader. The record classes, the
  tables named in them, their shared step 4 cutover and their destinations are
  read from `2026-09-16-nh-originator-classes-retire-to-odin.md`, a ratified
  instrument in this repository, not from the NH platform. That is second-hand
  evidence of a good kind — an approved record rather than an inference — but it
  is not inspection, and nothing here has been checked against the running
  schema. An earlier revision said this row merely restated the strategy's
  existing entry and added no evidence; that stopped being true several
  revisions ago, and the limitation is corrected on review.
- **Live AWS state was not read.** The infrastructure findings come from
  Terraform in `nrbe/deploy/`, not from the deployed account, and may differ
  from what is running.

## Approval

**Not approved. Awaiting the owner.**

- **Approved by:** —
- **Date:** —
- **Recorded by:** —

Until this block is completed from an externally verifiable owner-approval source,
the text above is a proposal. Strategy §2 continues to read as it does today, and
the 2026-09-04 carve-out continues to read as written. In particular, the proposed
map cannot decide the open lease/payment governing-record conflict or authorize a
class cutover, transaction release, migration, or source shutdown.
