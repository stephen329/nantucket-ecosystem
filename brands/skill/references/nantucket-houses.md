# Nantucket Houses — Product Brand Guidelines

*Subordinate to the Nantucket Ecosystem Strategy, Section 3. Conflicts resolve to the plan.*

Nantucket Houses is the product brand: the iOS app and its surfaces, serving guests during their stay, owners managing their property, and — since the amendment of 2026-08-10, approved 2026-09-05 — prospective renters making a first booking. Its one job is the experience — calm, useful, service-first. It is where the portfolio's trust is either earned nightly or lost in a single tone-deaf push notification.

## Voice

Calm, competent, brief. The app speaks like an excellent house manager: anticipates, informs, never sells, never performs. Two modes, one voice:

- **Guest mode:** hospitable and practical. The guest is on vacation; every message either helps their stay or shouldn't be sent.
- **Marketing mode — narrowed 2026-09-16, by message class rather than by audience.** The *"never sells"* rule above was written when the app spoke only to guests in a stay and owners managing an asset. `2026-08-10-nh-in-app-booking-and-paid-installs.md` (approved 2026-09-05) made Nantucket Houses a first-time acquisition surface, and the owner's answers of 2026-09-16 gave it three marketing classes. **The app may market under those classes, each to the audience the taxonomy records for it** — `nh.marketing.rental-showcase` to a prospective renter who reaches the app first, `nh.marketing.sale-showcase` to an owner or prospect, `nh.marketing.app-feature-promotion` to an owner or guest.

  *Scoped after review (P2), which caught the first version of this bullet permitting marketing only to "a prospect who is neither guest nor owner." That excluded two of the three classes his answers had just created, both of which name an owner or a guest — so the narrowing written to admit his decision would have had an agent reject two-thirds of it.*

  **What does not change.** The voice: calm, competent, brief, no upsell vocabulary. And marketing never rides inside a service flow — the guest-mode test still governs in-stay messaging, so a check-in notice, a home guide or an issue follow-up carries no offer, whatever class is permitted alongside it. A separate message under a marketing class is a different thing from a service message that has started selling.

  **None of this is sendable today**, and the narrowing changes no send: the classes are proposed and unratified, none has a frequency-cap cell (the message-class dimension is fail-closed), and `nhAdvertisingCleared()` still blocks both showcase members on four unrecorded prerequisites. Recorded in `../../../amendments/2026-09-16-per-brand-marketing-classes.md`.
- **Owner mode:** professional and factual. Owners are managing an asset; give them signal (bookings, payments, property status) without brokerage vocabulary or upsell.

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
- The AI never adopts marketing voice, never recommends listings, never gives valuation or market commentary.

## Visual language

`[AUDIT: extract current app palette, type, iconography into tokens under assets/nantucket-houses/]` — NH's design language must be separable at a glance from NR's conversion-oriented marketplace design. Where the app currently reuses NR visual patterns, register as a conflict, don't canonize it.

## Cross-brand touchpoints

- Listing attribution string (when a property's brokerage identity must appear): canonical string in `shared-standards.md`. That is the only place brokerage identity appears in-app.
- Legal footers on lease/payment surfaces carry the **trade name**, never the legal entity: `legal.cc.poweredby` in `shared-standards.md`, verbatim. The entity form these surfaces once carried was deleted on 2026-09-04, and counsel confirmed on 2026-09-11 that the trade name suffices on a lease or payment surface. Naming O2554 LLC in customer copy is a test failure, not a judgement call.

## The prohibition list

Nantucket Houses **never**:

1. Issues booking, lease, or payment records of its own. NH may originate and accept a first-time vacation booking (`docs/strategy/amendments/2026-08-10-nh-in-app-booking-and-paid-installs.md`, approved 2026-09-05), but NantucketRentals remains the authoritative booking, lease, payment, and inventory system, and the NH-to-NR handoff is stated only in the ratified affiliated-service handoff string. `[LEGAL REVIEW]` No such string is ratified as of 2026-09-05 — the six approved disclosures in `docs/legal/entity-and-listing-disclosures.md` do not cover it — so until one exists no NH-originated booking flow launches (amendment item 8), no NH surface ships handoff copy, and no one drafts a paraphrase in its place. *Before 2026-09-05 this item read "Hosts booking search surfaces"; that prohibition is withdrawn.*
2. Uses brokerage vocabulary in product surfaces ("listing," "exclusive," "just listed," "buyer/seller representation")
3. Puts marketing voice inside service flows (in-stay notifications, home guides, payment/lease messages)
4. Sends market intelligence or valuation content (C&C's lane, from a named advisor)
5. Lets AI chat make advisory, legal, or financial statements instead of escalating

A request to violate these is refused and flagged, citing this file.
