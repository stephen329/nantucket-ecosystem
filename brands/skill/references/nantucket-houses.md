# Nantucket Houses — Product Brand Guidelines

*Subordinate to the Nantucket Ecosystem Strategy, Section 3. Conflicts resolve to the plan.*

Nantucket Houses is the market research and real-estate data product across its applications and `nantuckethouses.com`. Active listings, property facts, market datasets, research tools, and factual data reports are core Nantucket Houses experiences. It also serves guests during their stay, owners managing their property, and prospective vacation renters discovering and booking a home. Vacation rentals may live on Nantucket Houses as fully as they do on NantucketRentals.com at the customer-facing surface, provided Nantucket Houses clearly names NantucketRentals.com as the provider. NantucketRentals.com remains authoritative for vacation-rental inventory and transaction records. Nantucket Houses is calm, useful, factual, and service-first. It is where trust is either earned through a useful interaction or lost through a single tone-deaf one.

## Voice

Calm, competent, brief. The app speaks like an excellent house manager: anticipates, informs, never sells, never performs. Two modes, one voice:

- **Guest mode:** hospitable and practical. The guest is on vacation; every message either helps their stay or shouldn't be sent.
- **Marketing mode — narrowed 2026-09-16, by message class rather than by audience.** The *"never sells"* rule above was written when the app spoke only to guests in a stay and owners managing an asset. `2026-08-10-nh-in-app-booking-and-paid-installs.md` (approved 2026-09-05) made Nantucket Houses a first-time acquisition surface, and the owner's answers of 2026-09-16 gave it three marketing classes. **The app may market under those classes, each to the audience the taxonomy records for it** — `nh.marketing.rental-showcase` to a prospective renter who reaches the app first, `nh.marketing.sale-showcase` to an owner or prospect, `nh.marketing.app-feature-promotion` to an owner or guest.

  *Scoped after review (P2), which caught the first version of this bullet permitting marketing only to "a prospect who is neither guest nor owner." That excluded two of the three classes his answers had just created, both of which name an owner or a guest — so the narrowing written to admit his decision would have had an agent reject two-thirds of it.*

  **What does not change.** The voice: calm, competent, brief, no upsell vocabulary. And marketing never rides inside a service flow — the guest-mode test still governs in-stay messaging, so a check-in notice, a home guide or an issue follow-up carries no offer, whatever class is permitted alongside it. A separate message under a marketing class is a different thing from a service message that has started selling.

  **None of this is sendable today**, and the narrowing changes no send: the classes are proposed and unratified, none has a frequency-cap cell (the message-class dimension is fail-closed), and `nhAdvertisingCleared()` still blocks both showcase members on four unrecorded prerequisites. Recorded in `../../../amendments/2026-09-16-per-brand-marketing-classes.md`.
- **Research mode:** factual and transparent. Show the source, applicable period, methodology, and material limitations. Help people understand listings, properties, and market conditions without turning data into representation, valuation, or personalized advice.
- **Owner mode:** professional and factual. Owners are managing an asset; give them signal (bookings, payments, property status, and sourced market data) without upsell or unsigned brokerage advice.

The natural-writing standard in `shared-standards.md` applies. Here, specificity
means useful stay, home, booking, payment, property-status, listing, and market
facts. It permits factual research language but not unsourced claims,
representation, valuation, negotiation, or individualized advice. Structured interface content
remains appropriate when it improves scanning or helps the user complete a task.

Supporting copy must add a material fact, constraint, or consequence that the
interface does not already communicate. Do not narrate an obvious control,
repeat its label in sentence form, or tell people to use an option only if it is
useful. If removing a sentence does not change a decision, prevent an error, or
clarify what happens next, remove it. This is the test for tautological and
low-information interface copy.

**Worked examples:**

- ❌ "🎉 Your dream vacation starts NOW! Check out everything Nantucket Houses has to offer!"
- ✅ "You're checked in at 5 Capaum Pond Road. Door code and house details are in your home guide."
- ❌ Owner push: "Hot market alert! Now's a great time to list your home for sale with our team!"
- ✅ Owner push: "July payout posted: $14,250 for 12 nights. Statement in the app."

## Notifications (including enriched push)

- Every push maps to one customer job and one consent class (see `shared-standards.md`). Service and transactional pushes only inside service flows; no marketing voice in a service channel, ever.
- Enriched push format (thumbnail + contextual ranking fact, e.g. "4th least expensive in Surfside") is **owner/prospect-context only** — ranking facts are market-flavored and must never appear in guest in-stay notifications. `[DECIDE: confirm enriched-push consent class in matrix]`
- Character budget: title ≤ 40 chars, body ≤ 120 chars where possible; the message must survive truncation with meaning intact.

## Home guides

Authored in Odin, stored in nrbe, surfaced via active lease. Formatting standards:

- Structure: arrival/access → house systems → house rules → local practical info → departure. `[AUDIT: reconcile with existing guide templates in nrbe]`
- Voice is the homeowner's-instructions register, warm but unambiguous. Safety-relevant instructions (alarm, water shutoff, fire) are stated imperatively and never softened for tone.
- No marketing content inside a home guide. No cross-sell of other properties.

## Empty states and errors

- Empty states are useful, not cute: say what will appear here and, when relevant, what action produces it. ("No stays yet. Your confirmed bookings will appear here.")
- Errors take responsibility and give a path: what happened, what to do, who to contact if stuck. Never blame the user; never a bare "Something went wrong" where a specific cause is known.

## AI conversation voice

The in-app AI assistant speaks in NH voice: helpful, bounded, honest about being automated. Rules:

- It answers stay/property questions from home-guide and lease data; it does not improvise answers about money, legal terms, or availability.
- **Escalation handoff phrasing** — when a request exceeds its lane (payment disputes, lease questions, emergencies, anything advisory): "That's one for the team — I've flagged it and someone will follow up directly. For anything urgent, call [number]." `[DECIDE: ratify exact phrasing + urgent-line number]`
- The AI may retrieve and explain sourced listing and market facts, including comparisons and methodology. It never adopts marketing voice, presents an automated estimate as a valuation, recommends a transaction, claims representation, or gives individualized brokerage, legal, or financial advice.

## Visual language

`[AUDIT: extract current app palette, type, iconography into tokens under assets/nantucket-houses/]` — NH's design language must be separable at a glance from NR's conversion-oriented marketplace design. Where the app currently reuses NR visual patterns, register as a conflict, don't canonize it.

Property-specific rental discovery and home-detail surfaces may use photographs
whose rights records permit use by Nantucket Houses. Preserve the source
property's image mapping, accessible alternative text, and any exceptional
credit or expiry carried by the source record. Shared surface permission does
not transfer or relabel photography rights and does not import
NantucketRentals.com's conversion styling, booking language, or marketplace
urgency into Nantucket Houses.

## Cross-brand touchpoints

- Listing attribution string (when a property's brokerage identity must appear): canonical string in `shared-standards.md`. That is the only place brokerage identity appears in-app.
- Vacation-rental provider disclosure (owner decision, 2026-10-29): every Nantucket Houses vacation-rental inventory, property-detail, availability, inquiry, and booking-entry surface clearly identifies NantucketRentals.com as the provider. Place that meaning with the inventory or primary rental action, not only in terms, a global footer, or an About page. Exact wording is not yet ratified.
- Rental-discovery outbound-link disclosure (owner decision, 2026-10-29): when Nantucket Houses rental results link to property-detail pages on `https://nantucketrentals.com/`, identify NantucketRentals.com as provider and make the outbound destination clear before the customer follows the link. Exact wording is not yet ratified.
- Legal footers on lease/payment surfaces carry the **trade name**, never the legal entity: `legal.cc.poweredby` in `shared-standards.md`, verbatim. The entity form these surfaces once carried was deleted on 2026-09-04, and counsel confirmed on 2026-09-11 that the trade name suffices on a lease or payment surface. Naming O2554 LLC in customer copy is a test failure, not a judgement call.

## Vacation-rental surfaces

Nantucket Houses may host vacation-rental search, results, property facts,
photography, rates, availability, comparison, inquiry, booking entry, saves,
shortlists, and trip planning. The customer may remain on Nantucket Houses
through these experiences. An outbound property link is an option, not a brand
requirement.

The surface and the record authority are separate. Nantucket Houses reads and
presents the authoritative NantucketRentals.com inventory and may submit into
its approved interfaces. It does not create a second writable inventory or
issue a separate booking, lease, or payment record. Transactional communication
continues to come from NantucketRentals.com.

Use factual rental vocabulary needed to complete the job: dates, rates,
availability, bedrooms, capacity, amenities, and booking actions. Keep the
Nantucket Houses voice calm and useful. Do not import urgency, scarcity
pressure, or conversion styling from NantucketRentals.com, and do not place
vacation-rental promotion inside a stay, home-guide, payment, or owner-service
flow.

## Market research, listings, and data reports

Nantucket Houses may host active real-estate listings, listing search, property
and parcel facts, current and historical market data, maps, filters,
comparisons, charts, trends, and source-dated factual data reports. These are
core product surfaces under
`amendments/2026-10-29-nh-market-research-and-data-product.md`.

Every material statistic or report identifies its source, applicable period,
methodology, and material limitations. Listing surfaces preserve required data
source and brokerage attribution. The exact `attr.nh.listing` string remains
`[DECIDE]`; no team may invent a canonical phrase or omit attribution while it
is unresolved.

Nantucket Houses may state what the sourced data shows. Congdon & Coleman owns
the advisory layer: representation, valuation, fiduciary judgment, negotiation,
recommendations, and advice about what the facts mean for a person's property
or decision. A named advisor is required wherever §4 requires one.

Ordinary factual terms such as `active listing`, `sale`, `asking price`, `days
on market`, and listing status are permitted. Displaying a listing does not
claim that Congdon & Coleman represents the seller, buyer, or property.

## The prohibition list

Nantucket Houses **never**:

1. Issues booking, lease, or payment records of its own. Nantucket Houses may originate and accept a first-time vacation booking (`amendments/2026-08-10-nh-in-app-booking-and-paid-installs.md`, approved 2026-09-05) and may host the customer-facing vacation-rental experience (`amendments/2026-10-29-nh-vacation-rentals-shared-surface.md`, approved 2026-10-29), but NantucketRentals.com remains the authoritative booking, lease, payment, and inventory system. Provider identification is required on discovery, detail, availability, inquiry, and booking-entry surfaces, but it does not clear the existing launch hold: **no NH-originated booking or transaction flow launches until the handoff string and placement are counsel-approved and validly recorded as `legal.nh.handoff @ <placement>`, and `nhBookingSurfaceCleared()` passes.** No one drafts a paraphrase in place of the required handoff string. *Before 2026-09-05 this item read "Hosts booking search surfaces"; that prohibition is withdrawn.*
2. Claims a brokerage relationship, exclusive representation, appraisal, or individualized recommendation that the product does not have. Factual listing and market vocabulary is permitted; representation and advice are not.
3. Puts marketing voice inside service flows (in-stay notifications, home guides, payment/lease messages)
4. Presents unsourced market claims, disguises automated output as a valuation or appraisal, or gives individualized brokerage advice. Factual market research and data reports are Nantucket Houses' lane; advisory interpretation remains Congdon & Coleman's.
5. Lets AI chat make advisory, legal, or financial statements instead of escalating
6. Presents vacation-rental inventory without naming NantucketRentals.com as the provider
7. Extends the shared-surface permission to long-term rentals without a separate approved decision

A request to violate these is refused and flagged, citing this file.
