# NantucketRentals.com — Marketplace Brand Guidelines

*Subordinate to the Nantucket Ecosystem Strategy, Section 3. Conflicts resolve to the plan.*

NantucketRentals.com is the marketplace: search, listing, booking, lease, and payment. Its one job is conversion with clarity — a renter moves from looking to booked with no friction and no confusion about what they're agreeing to. Its governing KPI is transactional; its voice is transactional; anything editorial or advisory on this brand is leakage.

## Voice

Clear, direct, frictionless. Every sentence either moves the transaction forward or answers a question the renter actually has at that step. No island lifestyle prose (that's Hello's job), no advisory framing (C&C's job), no house-manager warmth (NH's job).

**Worked examples:**

- ❌ "Imagine waking up to the sound of waves at this stunning Sconset retreat..."
- ✅ "4BR / 3BA in Sconset · Sleeps 8 · Sat–Sat in season · $12,500/wk in August."
- ❌ Payment email: "We hope you're getting excited for your Nantucket getaway! Just a friendly reminder..."
- ✅ Payment email: "Your second payment of $6,250 for 12 Main St is due June 1. Pay here: [link]."

## Conversion design system

Ratified system (source: NR Branding Guide; tokens in `assets/nantucketrentals/tokens.json`): Carolina Blue #15A5E5 for CTAs/nav/accents (solid + gradient hover); Oxford Blue as lockup anchor (hex pending audit F-10); lockup = house icon + "NANTUCKET RENTALS .COM" in Carolina/Oxford only. Poppins Bold headings; Exo Regular/Bold body. Imagery: desaturated high-contrast heroes, multiply-blend with brand blue, gradient hover overlays. "Stress-free as the vacation itself" + 508-451-0191 in help/support contexts only. Per shared-standards F-8: Kiona is C&C-only, Exo is NR-only, Poppins closed to Hello/NH.

- Search/listing/booking surfaces prioritize scannability: facts before adjectives, price and dates always visible, one primary action per screen.
- Trust elements (licensed-entity footer, secure-payment indicators) use canonical strings from `shared-standards.md`, positioned consistently.
- Distinct at a glance from NH's product design and Hello's editorial design; where current surfaces blur, register the conflict.

## Listing content standards

- Listing copy is factual inventory description: capacity, layout, amenities, location facts, booking terms. Adjectives earn their place by being verifiable ("waterfront" yes; "breathtaking" no).
- Photography: `[AUDIT/DECIDE: shot list and standards — exteriors, every bedroom, baths, kitchen, outdoor space; seasonal accuracy; no misleading angles]`. Photo order: hero exterior → living → kitchen → bedrooms → baths → outdoor.
- Accuracy is a legal posture, not just a style choice: listing claims feed lease expectations. Anything a tenant could reasonably rely on must be true, current, and reflected in the listing record in nrbe. `[AUDIT: reconcile with listing-accuracy review process]`

## Transactional email and SMS

- Templates live in nrbe (and some as string literals in code paths — `[AUDIT: full census, including Django views/Celery tasks and CNC]`).
- Every template declares: sending brand (NR), message class (transactional or payment lifecycle), trigger event, and the one thing the recipient needs to know or do.
- Subject lines state the fact: "Booking confirmed: 12 Main St, Jul 12–19." No teaser subjects on transactional mail, ever.
- SMS: sender identity first ("NantucketRentals:"), one action per message, links only after context.
- Payment-state messages (from the nrbe ledger/state machine) map 1:1 to ledger states — copy changes require checking the state machine, not just the template. `[AUDIT: enumerate states → templates]`

## Boundary rules

NantucketRentals **never**:

1. Adopts editorial voice or publishes content marketing (island guides, "best beaches" — Hello's lane)
2. Adopts advisory voice (market commentary, valuation framing — C&C's lane, named-advisor only)
3. Sends marketing-class messages under transactional consent
4. Blends promotional content into booking, lease, or payment messages
5. Runs shared campaign creative or co-branding with the other consumer brands

A request to violate these is refused and flagged, citing this file.
