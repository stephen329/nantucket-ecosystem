# Amendment — Nantucket Houses as a booking and acquisition surface

- **Date raised:** 2026-08-10
- **Product decision:** Made 2026-08-10 by the owner. Nantucket Houses is a
  first-time acquisition and booking surface, not a post-booking companion and
  not a rebooking-only channel. The rebooking-only option is ruled out.
- **Status:** **Approved 2026-09-05 by Stephen Maury** (see approval block).
  Approval followed the conflict review recorded below, which found no
  conflict with approved text as amended through 2026-09-04 and applied the
  corrections listed there. Advertising remains gated on the four
  prerequisites below; approving the amendment records none of them.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** Strategy §3 (brand table), §4 (Nantucket Houses handoffs),
  §9 (Hello funnel and attribution), Stage 1 guest gates (denominator
  clarified, **no gate value changes**). Brand skill `nantucket-brands`
  (`docs/strategy/brands/skill/SKILL.md` and its `nantucket-houses` reference),
  changed in the same change that records approval.

  *Section numbers corrected 2026-09-05.* The draft cited "§4 (brand table),
  §5 (Nantucket Houses)". In Version 1.0 the brand table is §3 and the
  Nantucket Houses handoffs are §4; §5 is trust and consent, which this
  amendment does not touch. The table below is corrected to match.

## What the strategy currently says

| Where | Approved text | Conflict |
|---|---|---|
| §4, Nantucket Houses | "Rental or rebooking intent hands back to NR." | NH originates and accepts the booking. |
| §3, brand table | NH audience is "Eligible C&C/NR homeowners and booked guests" | NH acquires prospects who have not booked. |
| §9, Hello funnel | `NR booking → signed lease → NH activation` | NH activation can precede any booking. |

## Text to adopt

1. **NH may originate and accept first-time vacation bookings.**
2. **NantucketRentals remains the authoritative booking, lease, payment, and
   inventory system**, even where NH owns the customer-facing booking surface.
3. **An NH-originated booking is never pooled into NR-originated CAC.**
4. **NH property-value or sales engagement does not itself authorize rental
   marketing.** A user-initiated booking action supplies intent for that
   action; future outreach still requires the relevant permission.
5. **Transactional messaging must explain the NH-to-NR relationship.** NH owns
   the initiating experience; NantucketRentals issues the lease, payment, and
   booking records under an explicit affiliated-service handoff.
6. **§3 brand-table row for Nantucket Houses** *(added 2026-09-05 — the draft
   named the conflict with this row but adopted no replacement text)*. The
   priority audience becomes "Eligible C&C/NR homeowners, booked guests, and
   prospective renters who reach Nantucket Houses before holding a booking."
   The primary job, promise, and main action are unchanged. The governing
   KPI — eligible-user activation plus core-task completion — stays defined on
   the owner and lease-invited populations; NH-acquired prospects are governed
   by the acquisition economics in the population table below and never enter
   that KPI's denominator.
7. **§4's "Rental or rebooking intent hands back to NR" is read as a
   systems-of-record rule, not a surface rule** *(added 2026-09-05)*. Intent
   expressed in NH is fulfilled by NR's booking, lease, payment, and inventory
   records under item 2; the customer may stay on the NH surface to express it.
   Owner-side handoffs in §4 (buying, selling, valuation, and showing requests
   route to a named C&C advisor) are unchanged.
8. **No NH-originated booking or transaction flow launches until the
   handoff string exists and its placement is fixed** *(added on review
   2026-09-05)*. Item 5 requires every transactional message to explain the
   NH-to-NantucketRentals.com relationship, and a booking flow that goes live
   before the string is approved cannot satisfy it — so item 1's
   authorization is conditional on it. This holds for organic, referred, and
   cross-job bookings alike, not only advertised ones. The four-prerequisite
   advertising gate below is retained on top of this condition, not in place
   of it: advertising needs all four prerequisites recorded, the
   message-routing rule counting only when it is validly recorded; the
   booking surface needs that one rule. The rule is validly recorded only
   with a reference of the form `legal.nh.handoff @ <placement>`, where
   `legal.nh.handoff` is the id designated for the handoff string and must be
   added to the disclosure registry under exactly that id with counsel's
   approval as its status. A date alone, a placeholder, any other id —
   including one approved later for another brand or surface — or a missing
   placement records nothing, for advertising and the booking surface alike.

## Three populations

NH is now reached by three different routes, with different denominators and
different economics. Pooling any two produces a number that describes neither.

| Population | Definition | Measured on |
|---|---|---|
| **Lease-invited guests** | Booked elsewhere, signed a lease, then invited to NH | Remains the denominator for the existing Stage 1 guest-activation gate (≥35%, with ≥50% using a second core stay function) |
| **NH-acquired prospects** | Found NH through advertising, organic search, real-estate content, or property-value tools before booking | Install or visit → meaningful activation → booking, and fully loaded CAC |
| **Existing relationships crossing jobs** | Homeowners, sellers, buyers, or prior users who later initiate a vacation booking | Original relationship and booking-triggering surface, tracked separately |

"Ad-acquired installs" was the wrong frame and is not used: discovery also
happens through organic search, content, and property-value tools, and a
cohort keyed to the ad channel would misfile those people. Cross-job bookings
are not acquisitions at all — the relationship already existed, so counting
them as NH-acquired would credit advertising with demand it did not create,
and counting them as lease-invited would corrupt the Stage 1 denominator.

## Four prerequisites, required before advertising begins

| Prerequisite | What it fixes |
|---|---|
| **Cohort schema** | Every NH user resolves to exactly one of the three populations, decidable from the record rather than by judgement |
| **Booking-origin field** | Every booking carries the surface that originated it, so NH- and NR-originated bookings can never be pooled after the fact |
| **CAC allocation rule** | Which costs load onto an NH-acquired booking, and the rule keeping NH-originated bookings out of NR-originated CAC |
| **Message-routing rule** | The affiliated-service handoff language and its placement, fixed rather than paraphrasable |

These are fixed *before* advertising, not after. Once results are visible,
choosing a cohort boundary means choosing which result it produces — which the
gate-parameter register precludes, and which is why a gate whose parameter was
not fixed in time defaults to hold.

Two placements, settled on review 2026-09-05 so the prerequisites can be
recorded without a second decision:

- **The booking-origin field lives on the authoritative booking record in the
  NR booking backend**, which `2026-09-04-odin-authoritative-crm.md` keeps as
  the system of record for reservations ("No reservation, lease, availability,
  payment or accounting scope moves"). Nantucket Houses and Odin may mirror it;
  neither is its home. As of this review no such field exists in the
  Nantucket Houses platform code, and the NR backend is outside this
  repository, so the prerequisite stays unrecorded.
- **The message-routing rule needs a string that does not yet exist.**
  *Corrected on review, 2026-09-05.* This review first said the rule adopts
  the counsel-approved strings in `docs/legal/entity-and-listing-disclosures.md`
  verbatim. Checked against that library: none of the six approved ids —
  `legal.cc.poweredby`, `legal.nr.ownership`, `legal.nr.listing.cc`,
  `legal.nr.listing.thirdparty`, `legal.cc.insurance.nonaffiliation` and its
  `.short` form — explains the NH-to-NantucketRentals.com relationship.
  `legal.nr.ownership` says only that NantucketRentals.com is a service owned
  by Congdon & Coleman Real Estate. The handoff string is therefore a **new
  id in that library — designated `legal.nh.handoff`, an identifier chosen
  so the gate can name it before the text exists** — drafted from the same
  established facts under the
  same governing rule ("disclaim representation and content accuracy; never
  disclaim the relationship or the transactional role"), counsel-approved,
  and cited here by id once it exists. `[LEGAL REVIEW]` — until that id
  exists no Nantucket Houses surface ships handoff copy, and no one drafts a
  paraphrase in its place.
  `2026-09-03-odin-transactional-messaging-handler.md` was ratified on
  2026-09-21. When that handler is implemented, `legal.nh.handoff` must be a
  required disclosure/template element on every transactional message class
  for NH-originated bookings, as items 5 and 8 require. The handoff is not a
  separate message class; each event class still fixes its own sending brand
  and template. The prerequisite stays outstanding until the string and its
  placement are both fixed; ratification alone neither creates the registry
  nor cuts over a class.

## What the software does in the meantime

The Marketing Director workspace raises a standing "not cleared for
advertising" warning listing every unrecorded prerequisite. It is evaluated
**independently of spend** — waiting for money to appear would put the warning
after the point where these definitions can still be fixed honestly. The
warning narrows as prerequisites are recorded and clears only when all four
are.

To record one, set `recordedOn` and `reference` on the entry in
`src/lib/workspaces/marketing/nh-cohorts.ts` in a reviewed change.

`guest-activation` on the coordinator workspace is `parameter-not-fixed`, with
the three-cohort schema named as its fix-by point, and now states that its
population is lease-invited guests only.

The second warning the workspace carried while this amendment was unapproved —
"the strategy still states that rental intent hands back to NR" — is retired
with approval; the prerequisites warning stands.

**The booking surface is held too, not only advertising** *(added on review
2026-09-05, item 8)*. `nhBookingSurfaceCleared()` in the same module returns
true only once the message-routing-rule prerequisite is **validly recorded**
(`isNhPrerequisiteRecorded`): dated, and with a reference of the form
`legal.nh.handoff @ <placement>` where `legal.nh.handoff` — the designated
id, exported as `NH_HANDOFF_DISCLOSURE_ID` — exists in
`src/lib/legal/disclosures.ts` with `approved` status and the placement is
non-empty. No other id clears it. A date alone does not; neither does a
placeholder, the designated id before it is added to the registry or while
counsel has not approved it, an existing id such as `legal.nr.ownership`, a
different id approved later for another surface, or the designated id with no
placement — each is a negative test beside the function, and a further test
asserts the designated id is not in the registry today, so adding it fails
loudly and the suite is revisited deliberately. `nhAdvertisingCleared()` and
the prerequisites warning count the routing rule the same way: four dated
entries with an invalid routing reference clear neither advertising nor the
booking surface, and the warning keeps listing the rule as outstanding.
That is the Odin-side statement of item 8, and the same tests assert that a
valid reference clears the booking surface without clearing advertising.
The booking flow itself lives in the Nantucket Houses platform, and its launch
flags for NH-originated booking must stay off while this is false. Wiring
those flags to this hold, or mirroring it there, is a work item in that
repository; nothing here claims the hold is enforced there yet.

## Conflict review, 2026-09-05

Checked against Version 1.0 and every amendment dated after this one.

| Against | Finding |
|---|---|
| Decision record, "Decisions fixed in Version 1.0" | No fixed decision names NH's audience or surface. Cohort definitions are fixed, which is why this is an amendment; it adds populations and leaves the Stage 1 guest gate's denominator and values as written. |
| §8 gate-parameter register | Untouched. The guest evidence floors and their April 30, 2027 fix-by date do not move. |
| §5 consent | Item 4 restates §5's rule that CRM signals do not activate marketing; no conflict. |
| §4 Hello: "Hello never routes a reader directly into Nantucket Houses" | **Unchanged and still open** (below). Consistent with H-1 in `../brands/hello-decision-register-addendum-2026-08-14.md`, under which Hello's disclosed outbound link on trip intent goes to NantucketRentals.com, not to NH. |
| `2026-08-13-trigger-reliability-measurement-boundary.md` | No overlap. |
| `2026-09-02-odin-interactive-send-governance-removal.md` | No overlap; the handoff message is system-sent, never agent-mailbox correspondence. |
| `2026-09-03-odin-transactional-messaging-handler.md` | Complementary, not conflicting: when implemented, the handler must include `legal.nh.handoff` as a required disclosure/template element on every transactional class for NH-originated bookings, not as a separate class. #250 carried both the amendment and its plan, marked "authorized by Stephen, 2026-09-03", while the amendment still read "Approval pending" and said merging both would record approval. Its approval block now preserves that history and applies the standing rule recorded in `2026-09-04-hello-pilot-data-conditions.md`: merging does not by itself ratify an amendment. Stephen's explicit ratification is dated 2026-09-21. Nothing here depends on that date. |
| `2026-09-04-hello-pilot-data-conditions.md` | No overlap beyond the observation, made there, that this amendment had sat merged and unapproved. |
| `2026-09-04-odin-authoritative-crm.md` | Consistent: reservation scope stays with the NR backend, which is where item 2 and the booking-origin placement put it. |
| `../brands/nantucket-brands-skill-reconciliation.md` §D | Applied. Prohibition 1 in `skill/references/nantucket-houses.md` and the Never column in `skill/SKILL.md` change with this approval, as that record said they must. The account copy of the skill is a manual re-upload (`skill/README.md`) and is behind until someone performs it. |

Defects in the draft corrected here: two wrong section numbers; no replacement
text for the §3 row it declared in conflict; no home for the booking-origin
field; handoff language left undrafted — it still is, but it is now a named
`[LEGAL REVIEW]` item with a home in the disclosure library rather than an
assumed one.

## Still open

- Whether "Hello never routes a reader directly into Nantucket Houses" should
  survive. The rule was written when NH had no acquisition surface; it should
  be re-derived rather than inherited. **It stands until it is.**
- The NH-to-NantucketRentals.com handoff string itself, and its legal and
  privacy review, which falls under the outstanding qualified-adviser
  validations in the decision record. It is not among the six strings
  counsel approved on 2026-09-04, so both the wording and its placement on
  the booking surface await drafting and review.
- Republishing the `nantucket-brands` account plugin from
  `docs/strategy/brands/skill/` after this merges.

## Approval

**Approved.**

- **Approved by:** Stephen Maury (stephen@maury.net), document owner and
  executive sponsor, in the working session of 2026-09-05: "review any
  outstanding booking amendments for conflicts and then merge." The branch
  owner read "merge" as the instruction to ratify — the file had been on
  `main` since #250 — conditional on the review finding no conflict, which it
  did not. If that reading is wrong, this block is the thing to revert.
- **Date:** 2026-09-05
- **Recorded by:** the branch owner, in this dated change, per the 2026-08-13
  amendment. Approval was given in session, not by the act of merging; this
  block is the record. The corrections applied on review are listed above so
  the approved text and the August draft can be told apart.
