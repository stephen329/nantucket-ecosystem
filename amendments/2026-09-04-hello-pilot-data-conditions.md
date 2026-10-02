# Amendment — Data conditions on the Hello Beehiiv pilot

- **Date raised:** 2026-09-04
- **Status:** **Approved 2026-09-04 by Stephen Maury** (see approval block).
  Items 1–4 are conditions of Hello's public launch and are in effect now;
  the pilot does not go public until all four are in place. Separately, the
  assignee column in "Work items this amendment creates" was corrected on
  2026-09-04 by `2026-09-04-odin-authoritative-crm.md` (approved the same day),
  which names Odin as the system that owns those items. No item was added,
  removed or rescoped by that correction.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** Strategy §5 (consent storage), §8 Stage 0 Hello launch
  conditions and the provisional Hello audience-fit gates, §8 gate-parameter
  register (the "Before Hello Month 1" row), §9 data-ingestion source map and
  Hello cohort framework. Settles the third open decision in
  `docs/blog-multi-brand-administration.md`. **No gate value changes anywhere
  in this amendment** — no threshold, evidence floor, cohort window, or stage
  date moves.

## The finding this rests on

The scoping document proposed three data conditions on the pilot. Checked
against approved text, **two of the three are already required** and one is
new:

| Proposed condition | Status against approved text |
|---|---|
| Subscriber sync into the CRM | **Already a blocking Hello launch condition.** §8 Stage 0: "Signup, confirmation, unsubscribe, suppression, deletion, and CRM attribution tested end to end." |
| Policy version and timestamp at signup | **Already the approved consent shape.** §5: consent "should be stored at `person × brand × channel × purpose × policy version × timestamp`." |
| A first-party domain in front of the pilot | **New as a condition.** Implied by §9's source map, which lists `Hello website/forms` as authoritative for "Visits, content, return visits, guide completion, referral, UTM, consent, and CTA events" — but nothing states it as a pilot condition. |

So this amendment is smaller than it first looked. It is not three new rules.
It names the surface those existing requirements now have to be satisfied
*through*, fixes the method, and sets the dates — which is what rule 1 of the
freeze rule requires ("Definition is a change. Fixing a blank for the first
time requires the same dated amendment as revising an existing number").

## What the strategy currently says

| Where | Approved text | Problem with Beehiiv as the surface |
|---|---|---|
| §8, Hello 90–120-day pilot | "Instagram, Beehiiv site/archive, and biweekly newsletter only." | The pilot's publishing surface is a third party. The strategy chooses it and says nothing about what has to be captured while it is in use. |
| §8, Stage 0 Hello launch conditions | "Signup, confirmation, unsubscribe, suppression, deletion, and CRM attribution tested end to end." | Nothing says what "end to end" means when signup happens on someone else's form. A quarterly CSV export satisfies the words and defeats the purpose. |
| §8, provisional Hello audience-fit gates | "Unique eligible visitor-to-verified-subscriber conversion of 2–3% as the committed sitewide range on a trailing-90-day basis" — and "Bots, employees, existing subscribers, duplicate sessions, and internal traffic are excluded from the visitor denominator." | The denominator is a visitor-level computation with five named exclusions applied. Inherited platform analytics cannot evidence it, and "existing subscribers excluded" additionally requires knowing who is already known to the CRM. |
| §9, data ingestion | `Hello website/forms` is an authoritative source for "Visits, content, return visits, guide completion, referral, UTM, consent, and CTA events", near-real time. | On a vendor subdomain those events are the vendor's. |
| §9, data ingestion | The Beehiiv row claims "Confirmed subscriptions, clicks, referrals, bounces, complaints, unsubscribes" at "Webhook/near-real time". | **The source map overstates the platform.** Beehiiv emits no webhook for bounces or spam complaints — see the capability table below. The row describes a target state, not what is available; item 2 names the path that is. |
| §9, attribution and cohorts | "First-known touch and last eligible touch should both be retained"; cohorts anchor to "the earliest deterministically identified first-party relationship event". | First-known touch is only recoverable at the moment of subscription. A later export carries the record, not the moment. |
| §5, consent | "person × brand × channel × purpose × policy version × timestamp" | Policy version is the field third-party signup forms do not store by default. It is also the field that makes an unsubscribe propagate against the right permission. |

Only one class of loss here is irreversible, and it is narrower than "we
should own our platform" suggests. Subscriber records export. A visitor
denominator for a quarter nobody instrumented cannot be reconstructed, and
neither can a first-known touch that was never written down.

## What Beehiiv provides

Checked 2026-09-04 against beehiiv's published documentation. This session
could not open `beehiiv.com` or `developers.beehiiv.com` directly — the network
egress proxy blocks both — so the findings below come from documentation
summaries returned by search rather than from the pages themselves. **The
account's own settings are the authority; confirm before budgeting.**

| Need | Beehiiv capability | Confidence |
|---|---|---|
| First-party domain in front of the pilot | Custom domain for the publication website is supported | High that it exists; **sources disagree on the plan tier** — some place custom domains on the free Launch plan, others on Scale |
| Own analytics on those pages | Website Builder → Settings → Pixels accepts a GA4 measurement ID, a Google Tag Manager container, and a Google Search Console verification code | High |
| UTM and referral capture at signup | `utm_source`, `utm_medium`, `utm_campaign` and referring site are reserved subscriber fields, and can be passed on subscribe | High |
| Sync at subscription time | Webhooks. The published catalog is Post Sent, Subscription Created, Subscription Confirmed, Subscription Deleted, Subscription Upgraded, Subscription Downgraded, Subscription Tier Created, Subscription Tier Deleted | High; **plan-gated to Scale and above**, around $43–49/month |
| Bounce and spam-complaint state | **No webhook event exists for either.** A hard bounce puts the address on the publication's Suppression list; a spam complaint adds the address and moves the subscription to Inactive. Both are readable as subscription status (`validating`, `invalid`, `pending`, `active`, `inactive`, `needs_attention`, `paused`) and on the suppression list; per-send bounce and complaint rates come from post analytics | High on the absence, which is what matters here |
| Unsubscribe as an event | **Disputed, and treated as unavailable.** The help centre describes Subscription Deleted as firing when a subscriber unsubscribes; the developer documentation describes deletion as permanently removing the subscriber and its historical data, while a reader unsubscribe leaves the record as Inactive. Item 2 reconciles status rather than relying on the event | Low on the event; high that status reconciliation catches it either way |
| Policy version carried with the subscription | Custom fields on the subscription, settable through the create-subscription API and on forms | High |
| Programmatic access generally | API v2 (`POST /v2/publications/:publicationId/subscriptions`, get-by-email). Basic API reported as available on the free plan, excluding the Send API | Medium |

Two things follow. First, none of the three conditions requires building a
reading surface — the capability exists on the platform. Second, the
"Subscription Confirmed" event lines up exactly with §8's definition of a
verified subscriber ("has confirmed the subscription and has not immediately
bounced or unsubscribed"), so the sync fires on the right event rather than on
a proxy for it.

## What this amendment does and does not change

**Unchanged:** the choice of Beehiiv as the pilot surface; every gate value and
evidence floor; the 90–120-day window; the three pillars; the channel
restriction; §5's permission boundary, including that the CRM "may not
automatically activate NR, NH, or C&C marketing"; and §8's rule that "A Hello
delay does not block the core NR/NH/C&C pilot" — which is what bounds the cost
of making these blocking.

**Defined by this amendment:** what has to be captured during the pilot window,
by what mechanism, and by when.

## Text to adopt

Items 1–4 are launch conditions: Hello does not publish publicly until each
is in place. Items 5–7 govern how they are met and how far they reach.

1. **The pilot publishes on a first-party domain.** Hello's Beehiiv publication
   is served on a domain the company owns, with the property verified in Google
   Search Console and first-party analytics attached, before the first public
   post. Site-level measurement — visits, return visits, referral, UTM, CTA and
   guide-completion events — is read from that property, which is what makes it
   the `Hello website/forms` source §9 already requires rather than a vendor
   report.

2. **Subscription arrival reaches the CRM at subscription time; departure is
   reconciled.** Confirmed subscriptions are delivered by webhook as they
   occur — Subscription Confirmed, the one event whose meaning is unambiguous
   and which matches §8's definition of a verified subscriber. Each record
   carries the acquisition context Beehiiv already collects — `utm_source`,
   `utm_medium`, `utm_campaign`, referring site — and the timestamp of the
   confirming event. Acquisition context is the half that is only capturable
   at arrival, which is why this half is a push.

   **Unsubscribe, bounce, complaint and suppression state is reconciled, not
   pushed.** Beehiiv emits no webhook for bounces or spam complaints at all.
   For unsubscribes its own material reads two ways: the help centre describes
   Subscription Deleted as firing "when a subscriber unsubscribes", while the
   developer documentation describes deletion as permanently removing the
   subscriber and its historical data — and a reader unsubscribe leaves the
   record in place as Inactive. This amendment does not resolve that; it does
   not need to. All four states reach the CRM by reconciling subscription
   status and the publication's suppression list on the cadence set in item 5,
   with per-send bounce, complaint and unsubscribe rates read from post
   analytics — which is where §8's per-send gates ("Unsubscribes <0.75% per
   send and spam complaints <0.1%") are measured anyway. Where Subscription
   Deleted does fire it is a useful accelerator and may be consumed as one; it
   is never the mechanism of record, because a suppression path that depends on
   an event whose trigger is disputed is not a suppression path.

   Status reconciliation is also what keeps §8's definition of a verified
   subscriber honest: a subscriber who "immediately bounced" surfaces as
   suppressed or inactive, not as an event.

   Between them, the two paths cover every state the Stage 0 condition names —
   signup, confirmation, unsubscribe, suppression, deletion. That condition
   already exists; this adds no new obligation, it fixes how it is met.

3. **New-to-CRM is determined at subscription, not at quarter end.** Each
   confirmed subscription is deduplicated against the CRM on arrival and marked
   new or existing. Two approved measures depend on the answer being recorded
   at the time: §8's denominator excludes existing subscribers, and §9's
   first-known touch and origination credit anchor to the earliest
   deterministically identified event. Neither is reconstructible from a later
   export.

4. **Consent is captured in the approved shape at signup.** The signup path
   records `person × brand × channel × purpose × policy version × timestamp`,
   with policy version carried as a subscription custom field and set from the
   privacy and editorial policy text actually in force at that moment.
   Editorial and commercial consent remain stored separately, per Stage 0.

5. **Manual certification is an acceptable interim path.**
   §9 already allows sources to "enter through governed batch files or manual
   certification before their automated pipelines ship". At the pilot's evidence
   floor — approximately 24 posts, six newsletters and 250 verified subscribers
   — every item above is tractable by hand. What is not acceptable is the event
   going unrecorded: a weekly reconciliation, certified by the owner §10
   already names, satisfies these conditions; an uninstrumented quarter does
   not.

6. **Uninstrumented periods hold rather than pass.** Consistent with §8's
   freeze rule, any audience-fit gate whose evidence depends on a period in
   which items 1–4 were not in place reports **not instrumented** — never zero,
   never an estimate — and cannot return **pass**; the Hello component defaults
   to hold/continue measuring. This is the enforcement mechanism, and it needs
   no new threshold.

7. **These conditions are pilot-scoped.** They attach to the Beehiiv pilot as
   the publishing surface, and they do not decide how long the pilot lasts.

   They also do not decide Hello's publishing destination. Two conclusions here
   are separate and must not be read as one:

   - **§4's scope is closed.** Hello was carved out of
     `docs/consolidation/README.md` §4 on 2026-09-04: its authoring plane covers
     four brands and Hello is not one of them, so there is no `/cms` lane for
     these conditions to be provisional against. That carve-out is **not**
     pilot-scoped and does not lapse when the pilot ends.
   - **Hello's post-pilot destination is undecided**, here and everywhere. Not
     choosing a `/cms` lane is not choosing Beehiiv indefinitely. §4 itself says
     the case is revisited there should Hello later want a reading surface
     rendering from Odin's content, and nothing in this amendment forecloses any
     other surface either. Whoever settles it settles it elsewhere.

## The decision recorded

**Items 1–4 are conditions of the pilot's public launch**, joining the Stage 0
Hello launch conditions already listed in §8. Decided 2026-09-04 by Stephen
Maury, over two alternatives that were put with it: adopting all four as
advisory, and blocking on items 1 and 4 alone while requiring 2 and 3 before
Hello Month 1.

Three things carried the decision.

§8 **already** makes CRM attribution end-to-end a Stage 0 launch condition, so
item 2 is blocking today whatever this amendment says. Both alternatives would
therefore have relaxed approved text rather than merely declining to add new
conditions, and would have split a single signup path across two standards.

Item 6 makes advisory adoption self-defeating. An uninstrumented window cannot
return **pass** anyway, so "advisory" buys a launch date at the price of a
quarter that cannot count toward the gates it was run to test.

The cost is bounded. §8's own rule is that a Hello delay does not block the
core NR/NH/C&C pilot, and none of the four conditions requires building
anything: a custom domain, two pixels, a webhook receiver, a weekly
reconciliation and a custom field.

**On the middle option, for the record.** The case for splitting the four
rested on relaxing item 2, which approved text already requires, and that is
why it was not taken.

The reasoning offered alongside it was that items 2 and 3 are largely
recoverable. **Corrected 2026-09-04, twice, and narrowed each time: it is true
of item 2's arrival half only.** Beehiiv retains acquisition context —
`utm_source`, `utm_medium`, `utm_campaign`, referring site, and the
subscription timestamp — on the subscriber record, so a later pull preserves
those fields for a subscriber who is still there.

**Item 2's departure half is not recoverable either**, and this amendment's own
findings say why. Deletion permanently removes the subscriber and its
historical data, so a later pull cannot see a record that is gone, nor any
state transition it passed through in between — which is precisely why item 2
reconciles departure on a cadence instead of trusting a pull. And delayed
suppression is not delayed metadata: it is a reader who asked to stop hearing
from Hello and keeps being eligible until the next reconciliation. That is
operational harm, and it does not become recoverable by being written down
afterwards.

**Item 3 is not recoverable, and the amendment does not claim otherwise.**
Retained acquisition fields say what Beehiiv knows; they say nothing about
whether the person was already in the CRM at the subscription timestamp, which
is the question item 3 answers. Reconstructing it later would need CRM-side
history covering the pilot window — per-record creation timestamps, or an audit
trail — and no such evidence is established here. Nor can it be assumed: the
strategy names no product as the CRM, labelling the node
`CRM["Shared relationship and consent layer"]` and describing it by function
alone, so there is no system whose retention behaviour could be appealed to.
Item 3 stands as written: not reconstructible from a later export.

What survives of the original claim is one narrow thing: acquisition fields on
a subscriber who is still present can be read later. Everything the middle
option would have relied on — departure state, and new-or-existing at arrival —
cannot.

This corrects the reasoning, not the decision, and each correction has moved
the same way. The option taken never depended on the recoverability claim, so
narrowing it twice leaves the decision untouched while making the middle option
progressively weaker. Anyone revisiting it must establish two things this
amendment does not: CRM-side history covering the pilot window, and a departure
path that survives a subscriber being deleted. Neither can be inherited from
this paragraph.

## Freeze-rule compliance

Rule 1 requires that fixing a blank for the first time take the same dated
amendment as revising a number. Items 1–4 fix method, not gate values, for
parameters whose register row is "Hello audience-fit, cost, and engagement
gates", fix-by **before Hello Month 1, the first full public-launch month**.
Hello has not launched, so that window has not opened.

Rule 3 forbids setting a parameter once the results it governs are visible.
No Hello results exist: the publication is pre-launch, and there is no Search
Console or analytics history for its domain — which is also why item 1 has to
be done before the first public post rather than after. Nothing was visible to
anyone when this was drafted, so rule 3 is satisfied trivially.

## Work items this amendment creates

| Where | Item |
|---|---|
| Beehiiv account | Custom domain on the publication; GA4 and Search Console verification in Website Builder → Pixels; confirm which plan tier the custom domain and webhooks actually require |
| CRM | Webhook receiver for Subscription Confirmed; a scheduled reconciliation of subscription status and the suppression list covering unsubscribe, bounce, complaint and suppression state; dedupe-on-arrival with a new-or-existing flag; storage for the §5 consent tuple including policy version |
| Beehiiv account | Confirm with support whether Subscription Deleted fires on a reader unsubscribe or only on permanent deletion. The answer does not change item 2 — it decides only whether the event is worth consuming as an accelerator |
| Signup path | Policy-version custom field, set from the policy text in force; UTM and referring-site passthrough |
| Certification | Weekly certification of the interim path (item 5). §10 already places this: the Marketing Director is told to "Serve as named Hello editor" and operate the "approved consent, frequency-cap, suppression, disclosure, and survey workflows"; the Office Manager "audits suppression and consent evidence". No new assignment is needed, only a recorded procedure |
| Odin | **All of the CRM row above.** Corrected 2026-09-04 by `2026-09-04-odin-authoritative-crm.md`, which names Odin the authoritative CRM. The original text — "Nothing yet. Hello measurement has no Odin surface today" — was also wrong when drafted: the Hello content calendar shipped to Odin at 17:35 UTC on 2026-09-03 (`stephen329/odin#242`). No work item changed; only its assignee |

## Still open — not decided here

- The remaining "Before Hello Month 1" parameters in the §8 register: Hello
  capacity budget in burdened hours, the fully loaded cost ceiling per Day-90
  engaged subscriber, the publishing and subscriber floors, and the versioned
  approved non-open qualifying-event list. This amendment fixes none of them.
  They share this fix-by date and need their own dated amendment.
- Hello's disclosure strings and publisher credit, which §12 item 2 still
  carries as an open 90-day decision. Item 4 above records the policy version
  in force; it does not approve any policy text.
- ~~How §4 reconciles with "for the pilot".~~ **Closed 2026-09-04:** Hello is
  carved out of `docs/consolidation/README.md` §4, which covers four brands.
  Not a deferral — the two documents were never about the same object, since §4
  governs posts a brand site renders from Odin's content and Hello's pilot
  product is a newsletter and its own archive.
- **Still open, and separated from the above 2026-09-04:** where Hello
  publishes after the pilot. Closing §4's scope removed one candidate surface;
  it chose none. Beehiiv is where the pilot runs, which is not the same as
  Beehiiv being the answer, and this amendment records no view on it.
- Whether §9's Beehiiv source row should be corrected. It promises bounces and
  complaints at "Webhook/near-real time" and the platform emits neither. This
  amendment routes around the gap for the pilot rather than editing the source
  map, which is approved text and a wider change than this.

## Approval

- **Approved by:** Stephen Maury (stephen@maury.net), document owner and
  executive sponsor
- **Date:** 2026-09-04
- **Recorded:** approval given in the working session that drafted this
  amendment, after review of the full text and of the three options above;
  committed by the branch owner on the owner's instruction. This follows the
  2026-08-13 amendment. Merging does not by itself ratify an amendment in this
  repository — `amendments/2026-08-10-nh-in-app-booking-and-paid-installs.md`
  has sat merged and unapproved since August — which is why this block is
  filled by a dated change rather than by the merge that carried the draft.
