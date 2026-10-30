# Amendment — vacation rentals are a shared Nantucket Houses and NantucketRentals.com surface

- **Date raised:** 2026-10-29
- **Status:** **Approved and ratified — Stephen Maury, 2026-10-29.** Stephen directed in the Codex task that vacation rentals belong in Nantucket Houses as much as NantucketRentals.com and may live at `nantuckethouses.com` when NantucketRentals.com is clearly identified as the provider. The decision becomes operative when this amendment is merged to `main`.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** Strategy §3 brand table and content ownership; strategy §4 Nantucket Houses and NantucketRentals.com handoffs; the approved `2026-08-10-nh-in-app-booking-and-paid-installs.md` amendment; the Nantucket Houses and NantucketRentals.com brand references; shared disclosure strings; red-team tests

## Reason

The approved 2026-08-10 amendment already permits Nantucket Houses to originate
and accept a first-time vacation booking while NantucketRentals.com remains the
authoritative inventory and transaction system. The strategy and brand skill
still describe rental inventory and booking content as though it can belong only
to the NantucketRentals.com customer-facing surface. That wording makes a valid
Nantucket Houses search, detail, availability, or booking experience look like
brand leakage even when it uses the authoritative NantucketRentals.com data and
states the provider clearly.

The owner has now resolved the surface question: vacation rentals belong on
both customer-facing brands. The distinction to preserve is not which domain
may display a vacation rental. It is which system provides and governs the
inventory and transactional records, and whether the Nantucket Houses customer
can see that relationship.

## Change

### 1. Vacation-rental surface ownership is shared

For vacation rentals, this amendment overrides the strategy §3 rental row with
the following surface-versus-authority split:

| Topic | Owning brand |
|---|---|
| Customer-facing vacation-rental discovery, property details, availability, inquiry, booking entry, and trip planning | NantucketRentals.com and Nantucket Houses; Nantucket Houses names NantucketRentals.com as provider |
| Authoritative vacation-rental inventory, rates, availability, bookings, leases, payments, and transactional records | NantucketRentals.com |

The strategy's existing rental row remains controlling outside this
vacation-rental scope. In particular, this amendment does not extend shared
surface ownership to long-term rentals.

Nantucket Houses and NantucketRentals.com may both present customer-facing
vacation-rental experiences. On `nantuckethouses.com` and in Nantucket Houses
applications, this includes:

- vacation-rental search and results;
- property facts, photography, amenities, rates, and availability;
- property-detail and comparison experiences;
- inquiry and booking-entry experiences; and
- saved, shortlisted, and trip-planning experiences tied to those rentals.

Nantucket Houses may keep the customer on a Nantucket Houses surface through
those experiences. It does not have to reduce the experience to an outbound
link to NantucketRentals.com.

### 2. NantucketRentals.com is named as the provider

Every Nantucket Houses surface that presents vacation-rental inventory must
clearly identify NantucketRentals.com as the provider in the interface. This
decision ratifies the required meaning, not a verbatim customer-facing string.
Exact wording remains to be approved and recorded before it is enforced as a
canonical string.

Place it where a customer encounters the vacation-rental inventory or action;
do not hide it only in terms, a global footer, or an About page. A results page
or inventory module carries it at the module or page level. A property-detail
page carries it with the property facts or primary rental action. A booking-entry
experience carries it before the customer submits booking information.

When a Nantucket Houses result instead sends the customer to a property-detail
page on `nantucketrentals.com`, the disclosure must also make that destination
clear before the customer follows the link. This decision does not ratify an
exact outbound-link sentence.

These are functional source disclosures, not co-branding and not permission to
blend the brands' logos, campaign creative, voices, or design systems.

### 3. Record authority does not move

NantucketRentals.com remains the provider and authoritative system for
vacation-rental inventory, rates, availability, bookings, leases, payments, and
the transaction records it issues. Nantucket Houses may read, present, and
submit into those records through an approved integration; it does not become a
second writable authority and does not issue its own lease, payment, or booking
record.

NantucketRentals.com remains the sending brand for booking confirmations, lease
execution, payment lifecycle messages, and other transactional records. The
provider-attribution requirement ratified here establishes source identity on discovery,
detail, availability, inquiry, and booking-entry surfaces. It does not by itself
clear or move the launch gate for an NH-originated booking or transaction flow.
No such flow launches until the separately reviewed handoff string and placement
are validly recorded as `legal.nh.handoff @ <placement>` and the existing
`nhBookingSurfaceCleared()` conditions pass. Additional legal wording required
when a lease, payment, or other transaction record is handed off or issued also
remains subject to that existing `[LEGAL REVIEW]` gate.

### 4. Brand voice follows the surface

The same authoritative vacation-rental facts may appear on both brands without
making their presentation interchangeable:

- NantucketRentals.com remains clear, direct, and transaction-led.
- Nantucket Houses remains calm, useful, and service-first.

Nantucket Houses may use factual rental terms needed for discovery and booking,
including rates, availability, bedrooms, capacity, amenities, and booking
actions. This permission does not import marketplace urgency, scarcity pressure,
or promotional language into guest stay, home-guide, payment, or owner-service
flows.

### 5. What this decision does not change

- It does not change the existing brand rule for long-term rentals or authorize
  them on Nantucket Houses.
- It does not move any system-of-record or record-class authority.
- It does not authorize Nantucket Houses to issue leases, payments, or booking
  records.
- It does not permit vacation-rental marketing inside an in-stay or owner-service
  flow.
- It does not alter the roles of Congdon & Coleman or Hello Nantucket.
- It does not clear any proposed marketing message class, advertising gate,
  consent requirement, or frequency cap.

## Affected metrics, gates, and parameters

No hard-gate value, cohort threshold, stage date, consent rule, or frequency cap
changes. The following attribution and product metrics should preserve the two
surface roles rather than pool them:

- originating surface for a vacation-rental search, inquiry, and booking;
- Nantucket Houses-to-NantucketRentals.com handoff or API-submission success;
- provider-attribution presence on eligible Nantucket Houses surfaces; and
- booking conversion reported separately by originating surface.

The booking-origin and CAC separation rules in the 2026-08-10 amendment remain
unchanged.

## Copies that change with it

- `amendments/README.md`
- `amendments/2026-08-10-nh-in-app-booking-and-paid-installs.md` (later-decision note only)
- `brands/skill/SKILL.md`
- `brands/skill/references/nantucket-houses.md`
- `brands/skill/references/nantucketrentals.md`
- `brands/skill/references/shared-standards.md`
- `brands/skill/references/red-team-battery.md`

This decision does not grant, transfer, or relabel photography rights. A
Nantucket Houses surface may use only photography whose rights record permits
that use.

The account copy of the `nantucket-brands` skill remains a manual publication
step after merge. Product repositories that restate the old exclusive-surface
rule must be updated separately before they rely on it.

## Approval

Approved by Stephen Maury on 2026-10-29 through his explicit direction in the
Codex task that produced this amendment. Merge publication remains separate from
decision approval; the amendment is operative only after it lands on `main`.
