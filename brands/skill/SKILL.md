---
name: nantucket-brands
description: >-
  Brand voice, prohibitions, and message-routing law for Stephen's four-brand Nantucket
  portfolio — Congdon & Coleman, NantucketRentals.com, Nantucket Houses (product and website), and Hello
  Nantucket (editorial). Use whenever writing, editing, or reviewing ANY customer-facing
  text or design for these properties: emails, SMS, push notifications, listing copy, app
  UI strings, home guides, social posts, newsletters, landing pages, lease/payment
  messages, owner communications, market reports. Also use when touching message templates
  in nrbe, CNC, or Odin, deciding which brand sends a message, writing
  disclosure/affiliation language, or reviewing for brand-boundary violations. If Congdon,
  C&C, NantucketRentals, Nantucket Houses, Hello Nantucket, or @hellonantucket appears in
  the task, or the output will be seen by a renter, owner, guest, or reader, consult this
  skill first — even for a one-line push notification.
---

# Nantucket Brand Portfolio — Voice, Boundaries, and Routing

Subordinate to the **Nantucket Ecosystem Strategy (Integrated Revision, August 2026), Sections 3–5**. If anything here conflicts with the strategy doc, the strategy doc wins; propose an amendment rather than silently deviating.

## Why this skill exists

Four brands share one owner but must never blur. Each has exactly one job, and the most expensive failure mode is leakage: marketing voice inside a service flow, listings inside the editorial brand, concealed affiliation anywhere. This skill exists so that any session touching customer-facing text inherits the boundaries mechanically instead of by memory.

## The portfolio at a glance

| Brand | One job | Speaks to | Voice in one line | Never |
|---|---|---|---|---|
| **Congdon & Coleman** | Trust — advisory, valuation, legal identity | Owners, sellers, buyers | A named advisor you know, writing to you personally | Sending representation, valuation, fiduciary judgment, negotiation or consequential advice **without a named person** (§4) — operational and service communication may come from the brand. ~~Anonymous corporate voice; consumer marketing blasts~~ — struck 2026-09-16: the marketing ban by the owner's *"All brands can market,"* the blanket anonymous-voice ban as never the reference's rule. |
| **NantucketRentals.com** | Marketplace and provider — vacation-rental inventory, booking, lease, and payment authority | Renters transacting on either approved surface | Clear, frictionless, transactional | Editorial or advisory voice; opinion content |
| **Nantucket Houses** | Market research and real-estate data product, including active for-sale listings and data reports; also the stay, ownership, and attributed vacation-rental experience | Market researchers, buyers, sellers, homeowners, guests, and prospective vacation renters | Calm, useful, factual, service-first | Unsourced or misleading data; presenting automated output as valuation or advice; concealing that NantucketRentals.com provides vacation rentals; issuing booking, lease, or payment records; launching an NH booking flow before `legal.nh.handoff @ <placement>` is recorded and `nhBookingSurfaceCleared()` passes; marketing inside service flows |
| **Hello Nantucket** | Attention — editorial, "knowing Nantucket beyond the postcard" | Island-curious readers | Warm local insider, durably positive | Listings; booking surfaces; becoming the *primary publisher* of real-estate and rental-market intelligence; claims of independence |

## Decision procedure — run this before writing a word

1. **Which brand is speaking?** Every message has exactly one sending brand. If the task doesn't say, determine it from the customer job (see routing below). If two brands could plausibly speak, that's a routing question — resolve it, don't blend.
2. **Load that brand's reference file** from `references/` — it has the voice spec, worked examples, and full prohibition list. For every customer-facing writing or review task, also load `references/shared-standards.md`; it carries the portfolio-wide natural-writing standard as well as the rules for cross-brand credits, disclosures, naming another brand, and email/SMS mechanics.
3. **Check the prohibitions before drafting, not after.** The never-column above is a summary; the reference files are authoritative.
4. **Check disclosure obligations and each disclosure row's status.** Any Hello surface recommending anything connected to the portfolio, and any surface where common ownership could be missed, must disclose it — **common ownership is never concealed, and that much is settled** (§3: Hello "must not be described as unaffiliated or institutionally independent"). The exact `disc.hello.*` wording and placements are **not** settled: §12 item 2 is open, no Hello string is ratified, and those Hello rows in `shared-standards.md` are drafting aids that **must not be enforced** by lint, template check, or schema validation until §12 closes. Other disclosure-library rows carry their own status: enforce ratified required meaning and any ratified verbatim string exactly as the row directs, while never inventing or enforcing wording that remains `[DECIDE]`.

## Content ownership — which brand owns a topic

From the strategy §3. This answers "whose content is this?" and is **not** the
sending-brand matrix below, which answers "who sends this message?". Confusing
the two excludes brands from topics they own.

<!-- law: nantucket-ecosystem-integrated-strategy.md -->
| Topic | Owning brand |
|---|---|
| Island culture, local voices, history, stewardship, seasonality, and visiting thoughtfully | Hello Nantucket |
| Rental inventory, availability, trip planning tied to booking, leases, and payments | NantucketRentals.com |
| Homeowner and guest product education, stay operations, documents, and service workflows | Nantucket Houses |
| Real-estate market reports, valuation, ownership counsel, buying, and selling | Congdon & Coleman |
| Operational, compliance, data-quality, and agent-action reporting | Odin |

The 2026-10-29 amendment overrides that row for vacation rentals only with the
following surface-versus-authority split. The original row remains controlling
outside vacation rentals, including long-term rentals:

<!-- law: amendments/2026-10-29-nh-vacation-rentals-shared-surface.md -->
| Topic | Owning brand |
|---|---|
| Customer-facing vacation-rental discovery, property details, availability, inquiry, booking entry, and trip planning | NantucketRentals.com and Nantucket Houses; Nantucket Houses names NantucketRentals.com as provider |
| Authoritative vacation-rental inventory, rates, availability, bookings, leases, payments, and transactional records | NantucketRentals.com |

The 2026-10-29 market-research amendment also replaces the former single-owner
assignment for real-estate market reports with this fact-versus-judgment split:

<!-- law: amendments/2026-10-29-nh-market-research-and-data-product.md -->
| Topic | Owning brand |
|---|---|
| Active for-sale listings, property facts, market datasets, research tools, and factual data reports | Nantucket Houses |
| Representation, valuation, fiduciary judgment, negotiation, recommendations, and advice about what market facts mean for a person's property or decision | Congdon & Coleman, from a named advisor where §4 requires one |

This research authority does not include long-term-rental inventory or listings.
Buying, selling, valuation, and showing requests from a Nantucket Houses surface
route to a named Congdon & Coleman advisor under the approved consent and
escalation rules.

<!-- law: nantucket-ecosystem-integrated-strategy.md -->
§3's one explicit prohibition: "Hello should not publish listings, act as a
booking surface, or become the primary publisher of real-estate and
rental-market intelligence. It may link to clearly identified affiliated
services and may interpret broader island-life data within its editorial
remit."

## Message routing (sending-brand matrix)

One message class → one brand → one consent purpose. Summary (full matrix with consent classes and frequency caps in `references/shared-standards.md`):

- **Transactional** (booking confirmations, lease execution, payment receipts/reminders): **NantucketRentals**.
- **Service / in-stay** (check-in details, home guide, issue follow-up, stay notifications): **Nantucket Houses**.
- **Owner service** (statements, property status, documents, scheduling notices): **Nantucket Houses** in app, **Congdon & Coleman** for the formal instrument — the split `docs/strategy/brands/skill/references/shared-standards.md:16` carries, and §4 keeps homeowner operations, documents and in-app communication NH-branded. *Restored after review (P2): the previous revision of this line routed all four to Congdon & Coleman, which contradicts ratified strategy and would have given an in-app document or property-status notice the wrong sender. Only the advisory examples were supposed to leave.* ~~Owner service **& advisory** … market reports, opinions of value, consequential decisions~~ — **market reports and opinions of value moved to Marketing, 2026-09-16**, on the owner's answer that they are *"the safe choice to avoid CAN-SPAM violations"*; `docs/strategy/brands/skill/references/shared-standards.md:17` carries the row. Leaving them here too would have let this summary route the same message down a service path that skips marketing consent, suppression and the marketing caps. **§4's named-sender requirement follows them across** — representation, valuation, fiduciary judgment, negotiation and consequential advice still come from a named person, and a Marketing consent class does not license an unsigned opinion of value.
- **Editorial to readers** (newsletter, social, content): **Hello Nantucket** only, with publisher disclosure — the *editorial* role is exclusively Hello's, and §3's bar on it becoming the primary publisher of real-estate and rental-market intelligence still runs the other way. ~~Editorial / marketing to readers … **Hello Nantucket** only~~ — **narrowed 2026-09-16**: the owner's *"All brands can market"* gives Congdon & Coleman, NantucketRentals.com and Nantucket Houses marketing classes of their own, so "marketing to readers is Hello only" would have had an agent reject the classes he had just approved. Exclusivity was always about the editorial voice, never about who may market.
- **Marketing** (featured listings, offers, distributed data reports, owner advisory and interpretive market reports, app features): **each brand sends its own**, under its own message class, one sending brand per class. Nantucket Houses may publish factual research in-product, but a subscription, alert, or distributed report still needs an approved message class. Congdon & Coleman's owner-advisory class is marketing **and** carries §4's named advisor — the two requirements stack rather than replace one another. The classes themselves are proposed in `amendments/2026-09-16-per-brand-marketing-classes.md` and are not yet ratified; what *is* settled is that the three commercial brands may hold them.
- A message that seems to need two brands is misclassified. Split it or re-route it.

## Cross-brand references — the only permitted touchpoints

Functional credits only; no shared campaign creative, no co-branded consumer marketing. The canonical strings live in `references/shared-standards.md`:

- Hello Nantucket publisher line (bio, About, footers, signup)
- Listing attribution inside Nantucket Houses
- NantucketRentals.com provider attribution on every Nantucket Houses vacation-rental inventory, property-detail, availability, inquiry, or booking-entry surface
- The counsel-approved `legal.nr.referral-affiliation` string, verbatim and adjacent to every outbound referral to NantucketRentals.com, in addition to the Nantucket Houses provider/destination meaning
- "Powered by" / legal-entity footers where C&C is the licensed entity
- Lease and legal documents carry C&C legal identity regardless of the surface that produced them

Common ownership is **never concealed**. The customer must always be able to tell who is communicating and why. When in doubt, disclose.

## Reference files

- `references/congdon-coleman.md` — trust brand: heritage identity, named-advisor voice, market-report and valuation templates, credit rules
- `references/nantucketrentals.md` — marketplace brand: conversion design system, transactional email/SMS voice and templates, listing standards
- `references/nantucket-houses.md` — product brand: app design language, notification and AI-chat voice, owner vs guest modes, escalation phrasing, full prohibition list
- `references/hello-nantucket.md` — editorial brand: full charter — disclosures with exact placements, voice with worked examples, launch pillars, UGC/contributor rights, sensitive-location and corrections policy, sponsorship labeling, never-list
- `references/shared-standards.md` — cross-brand law: full sending-brand matrix, disclosure language library, canonical naming, accessibility and email-rendering baselines, photography licensing, asset conventions
- `references/red-team-battery.md` — boundary-violation test prompts per brand. Run these against any new or changed guideline, template, or automated flow; a compliant system refuses or re-routes every prompt in the battery.

## Repository touchpoints

Templates and strings live in code, not just documents. When editing message content in **nrbe** (Django backend — transactional email/SMS, payment ledger messages), **CNC** (sync/middleware), **Odin** (agent frontend — action prompts can leak into customer view), or the **Nantucket Houses iOS** app (push notification formats), the same rules apply to string literals as to templates. A push notification is a brand surface.

## Fill-in markers

Items marked `[AUDIT]` are populated from the Week 1 surface audit; items marked `[STRATEGY §n]` must be transcribed verbatim from the strategy document; items marked `[DECIDE]` need a human decision recorded via the standard PR path. Do not invent content for these markers — flag them instead.
