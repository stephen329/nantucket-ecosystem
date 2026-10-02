# Amendment — consent is scoped to purpose and channel, not to brand

- **Date raised:** 2026-09-05
- **Direction decided:** 2026-09-05 by the owner, in the working session that
  produced [#333](https://github.com/stephen329/odin/pull/333). Raised as a
  correction while scoping `W3` in `nantuckethouses-platform`: a homeowner
  launch email had been analysed as blocked from one brand to another on
  consent grounds. The owner's correction: "NR is a brand of C&C, not a
  separate entity. Interacting with Nantucket Rentals is consent to be
  contacted by Congdon & Coleman." Asked whether this covered all brands or
  only NantucketRentals.com ↔ Congdon & Coleman, the owner answered: **all
  brands.**
- **Status:** ✅ **Approved 2026-09-05** by the owner, who directed the merge of
  [#333](https://github.com/stephen329/odin/pull/333) carrying it. This
  supersedes §5's brand-scoped reading as set out below; Version 1.0 remains
  recoverable and unmodified, per the change protocol.
- **Not discharged by this approval:** the qualified privacy review the decision
  record requires, which is gated *Blocking before Hello Month 1*. See
  *Interaction with an outstanding blocking item* below. Approving this amendment
  narrows that review — the brand-transfer question drops out — but the
  one-entity/one-controller premise it rests on is a legal conclusion this
  document explicitly does not reach, and remains the reviewer's to test.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** §5 "Trust, Consent, and Editorial Governance" — the opening
  proposition and the `person × brand × channel × purpose` storage model as a
  *transfer* rule. Consequentially, `shared-standards.md`'s sending-brand
  routing rule on consent transfer.

## What the strategy currently says

§5 opens:

> Common ownership does not create unrestricted permission to use customer
> information across brands.

and requires consent stored at:

> `person × brand × channel × purpose × policy version × timestamp`

with required states including "Global and brand-level suppression".

The `nantucket-brands` skill renders this as a routing rule: "Consent gathered
under one brand/purpose does not transfer to another. An NR booking email
address is not a Hello newsletter subscriber."

## What this amendment changes

**Brand ceases to be a barrier to contact.** The brands are not separate legal
entities. Per `docs/legal/entity-and-listing-disclosures.md`, approved
2026-09-04: **O2554 LLC** is the legal entity and holds the firm's Massachusetts
broker licence (#422678), trading as **Congdon & Coleman Real Estate**;
NantucketRentals.com is a service wholly owned by Congdon & Coleman Real Estate.
§3 says leases carry that legal identity regardless of which surface produced
them. A person who transacts with any brand has a relationship with one entity,
and a permission given to that entity for a purpose does not need re-collecting
because a different brand of the same entity is writing.

Two things follow from stating it precisely, and the earlier draft of this
amendment got both loose:

- **O2554 LLC is an internal fact.** It belongs in this record and in the legal
  strings that already carry it; it does not appear in consent copy or anywhere
  else customer-facing, where the trade name is the name.
- **"One entity" is not the same as "one controller."** That the brands sit
  under one LLC is a fact; that this makes them a single controller for
  data-protection purposes is a legal conclusion, and this amendment does not
  reach it. It is **explicitly subject to the qualified privacy review** recorded
  below — which is where the premise this amendment calls load-bearing is
  actually tested.

The skill's own text was already inconsistent on this point: it treated an
NantucketRentals.com-gathered permission as foreign to Congdon & Coleman while
simultaneously stating that Congdon & Coleman is the counterparty on the lease
NantucketRentals.com produced. Both could not be right.

**Consent remains scoped to purpose and channel.** This is the substance of the
protection and it is unchanged. The canonical example survives intact and for a
better-stated reason:

> A NantucketRentals.com booking address is not a Hello Nantucket newsletter
> subscriber — because a booking is transactional and a newsletter is
> marketing, which requires explicit opt-in. Not because the brands differ.

Transactional, service, and marketing permissions remain distinct. Marketing
still requires explicit opt-in. §5's purpose-limitation sentence — "The CRM may
receive Hello subscriber records for identity resolution, attribution,
deduplication, and suppression. It may not automatically activate NR, NH, or
C&C marketing" — is **unaffected**, and now rests on purpose rather than on
brand, which is the ground it should have rested on.

## What this amendment does not change

**Brand-level suppression stays, and stays enforceable.** This is the
distinction that must not be collapsed, because relaxing consent-as-barrier and
relaxing suppression look similar and are not.

- *Consent* answers "may we contact this person for this purpose."
- *Suppression* records "this person told us to stop."

A person who says "stop emailing me from Hello Nantucket" has exercised an
opt-out. That it is one entity behind the brands is irrelevant to them and does
not make the instruction narrower. §5's "Global and brand-level suppression"
required state is retained in full, and §4's rule that "an unsubscribe or
preference change must propagate to every system affected by that specific
permission" applies unchanged.

**Brand remains a stored dimension.** `person × brand × channel × purpose ×
policy version × timestamp` is retained as written. Brand stops being a barrier
to transfer; it does not stop being recorded. Provenance — which brand and
surface obtained a permission, under which policy version — is what makes
suppression, audit, and any later re-scoping possible. Dropping the dimension
would make this amendment irreversible in practice, which is not what is being
decided.

**Editorial separation is unaffected.** Hello Nantucket's disclosure
obligations, its "never claims independence" prohibition, and the editorial
charter are about representation to readers, not about consent transfer.
Nothing here permits editorial consent to become commercial marketing; the risk
register row naming that failure remains live and is now guarded by the purpose
scope alone, which is where it always belonged.

## Collection and withdrawal

Decided by the owner 2026-09-05, in the same session.

**Collection is portfolio-wide.** Consent is requested once, for the entity, per
purpose — not per brand. A marketing opt-in obtained on any surface is a
marketing opt-in for the entity, and so for every brand it trades under. This
follows from the amendment
above: if brand is not a barrier to contact, collecting the same permission four
times records nothing the entity did not already hold.

Two conditions attach, and they are the price of a single grant:

- **The scope must be stated where it is given.** A portfolio-wide grant
  obtained under brand-specific framing is a portfolio-wide grant the person did
  not knowingly give, so the collection surface says who the permission runs to.
  It does so by **naming the entities and stating the ownership relation** —
  `canonical-naming.md` retired every collective abstraction on 2026-08-14, and
  "family of companies" is named there as prohibited, not merely discouraged.
  **The disclosure must enumerate every brand the grant covers.** *(History, and
  the reason a new string was needed: when this amendment was first drafted no
  approved string did. The only worked form on record — "NantucketRentals.com is
  owned by Congdon & Coleman Real Estate, who publish Hello Nantucket",
  `canonical-naming.md` — was written for Hello's affiliated-recommendation
  disclosure and names three brands, omitting Nantucket Houses. Borrowing it here
  would have granted a scope the copy never stated. That gap is closed below.)*

  **Resolved 2026-09-05.** The owner supplied the missing relation: *Nantucket
  Houses is a service of Congdon & Coleman Real Estate* — the same form
  `entity-and-listing-disclosures.md` already carries for NantucketRentals.com.
  All four brands can therefore be named with their relations stated:

  > NantucketRentals.com and Nantucket Houses are services of Congdon & Coleman
  > Real Estate, who also publish Hello Nantucket.

  That form names every brand a portfolio-wide grant covers, so the scope is
  expressible. **Ratified 2026-09-05 in
  `congdon-coleman-ratified-strings.md`** (item 3 under strings ratified after
  that record was cut), so it lives in the strings record rather than only in an
  amendment — it is used on two surfaces, and two copies of an unratified string
  is how they drift.

  Two things that ratification does not settle, and both are recorded there in
  full:

  - The string is a common-ownership statement and therefore intersects the
    D1/D3 wording review, where the D1 footer sat with counsel. It settles what
    Congdon & Coleman wants to say, not that the wording discharges a disclosure
    obligation. *(Status, 2026-09-15: counsel approved that wording, the
    marker is struck, and the owner has since transcribed D1 and D3 into the
    ratified-string record, so the text now exists. Which surfaces render D1 is
    a separate open question carrying its own marker there. Nothing this
    amendment ratifies changes either way. Recorded as status; the amendment
    itself is unamended.)*
  - **It has more than one consumer, and no code is changed here.** Unlike the
    entity strings, this is a portfolio statement: `cnc-web-fe` holds the entity
    strings, consent-collection surfaces will need it wherever they land, and the
    `W3` launch email in `nantuckethouses-platform` will need it once slices 0–2
    are built. Item 3 carries the table and the consequence — a string with no
    single consuming source cannot be verified by the launch audit's
    diff-the-one-copy method.

  The limiting rule still applies to anything collected before it ships:
  **a grant's scope is limited to the brands the collection surface actually
  named**, so a surface using the three-brand Hello form collected a three-brand
  permission.

  Two reasons the naming rule matters more here than in most copy: a collective abstraction is exactly what can be read to include **Congdon
  and Coleman Insurance, Inc.**, a separate and unaffiliated company; and a
  person consenting to be contacted by a group they cannot enumerate has not been
  told the scope, which is the entire point of stating it.
- **Existing consent is not retroactively widened.** Permissions already held
  were given under the brand-scoped reading. They are not reinterpreted by this
  amendment; the wider scope applies to grants collected under the new language.
  See the consent-language surface audit noted below.

**Withdrawal is per message class, multi-select, with a mandatory global path.**
The owner's direction, refined 2026-09-05: the model is Nextdoor's — a large
number of named channels, each independently switchable, so that opting out of
Hello Nantucket editorial leaves NantucketRentals.com marketing and every
brand's transactional mail untouched.

This is finer than brand, and finer than the three purposes. The unit is the
**message class** — the row in the sending-brand matrix — of which the current
set is booking transactional, payment lifecycle, in-stay service, owner
statements and property status, owner advisory and market reports, and
editorial. The preference centre presents these as a grid, grouped by sending
brand.

**The invariant, because the first draft of this section contradicted itself.**
Every class appears as a row. Rows are of exactly two kinds and a class is one
or the other, never ambiguous:

| Row kind | Rendered as | Applies to |
|---|---|---|
| **Suppressible** | An interactive toggle, independently switchable | Every class a person may decline: all marketing, and service classes that are not operationally required |
| **Required** | A non-interactive row stating the class and why it cannot be switched off | Classes that perform the contract — booking confirmation, lease execution, payment receipt — and service mail whose absence breaks the thing the person asked for |

"Each row toggleable on its own" applies to the suppressible kind and to nothing
else.

**The required set, decided 2026-09-05:** booking transactional, payment
lifecycle, and lease execution. Every other class is suppressible until a case is
made for it individually — service classes are argued one at a time rather than
admitted as a block, because the required list only ever grows and each addition
removes a choice the person previously had. Additions still go to the privacy
review noted below, since "required to perform the contract" is the line whose
over-drawing reclassifies marketing as transactional.

Three rules make that honest rather than decorative:

- **A toggle shown is a toggle honoured.** Presenting a preference the sending
  path does not consult is worse than not offering it: it converts a stated
  choice into a broken promise, and an ignored opt-out is a violation in every
  regime that governs this, not a UX shortfall. A class appears in the centre
  only once suppression for it is enforced at send time.
- **Required rows are shown, not hidden.** A person who cannot find "booking
  confirmations" anywhere in the list will reasonably assume it is buried rather
  than that it is required, and go looking for the setting that does not exist.
  Showing it with its reason is what makes the absence of a toggle legible.
- **A new message class needs its row before its first send** — a *toggle* if the
  class is suppressible, which is the default, and a required row only where the
  case for it has been made. Adding a send type without a row silently coarsens
  everyone's existing choices: the new mail arrives under a neighbouring class
  the person never agreed to receive it under. This keeps granularity from
  decaying and is the rule most likely to be skipped under delivery pressure.

**The storage model gains a dimension.** §5 records consent at `person × brand ×
channel × purpose × policy version × timestamp`. Per-class preferences do not
fit in `purpose`, which carries only three values; `message_class` is added
alongside it. `purpose` is retained — it still governs what may be sent at all
and what an unqualified opt-out reaches — with `message_class` refining within
it.

A single-step path remains mandatory alongside the grid. An earlier draft of
this section justified it as a mechanical consequence of RFC 8058 and said it
should be treated as settled on that basis. **That was wrong**, and the two
things it ran together are worth keeping apart, because only one of them is not
a decision:

- **The transport constraint is mechanical.** One-click `List-Unsubscribe`
  (RFC 8058 §3.1) is a single POST issued by the mail client with no interface,
  so the recipient cannot choose a scope at the moment they press it. Whatever
  the URI encodes is what happens.
- **What the URI encodes is policy, not consequence.** RFC 8058 requires the URI
  to identify the recipient and the list it removes them from; it does not
  require removal from every list, and Google's bulk-sender guidance states
  plainly that one-click may remove a recipient only from the list associated
  with the message. A sender may therefore map the URI to the originating
  message class alone.
- **A single-step route out of all marketing must exist somewhere regardless.**
  An opt-out that requires answering a question before it takes effect makes
  withdrawal harder than the grant was. This is a legal requirement rather than
  a transport one, and — having overstated once here already — it is recorded as
  a question for the qualified review below, not as settled by this document.

**Decided 2026-09-05, and it resolves differently per mechanism** — which the
question as originally posed obscured by treating "unsubscribe" as one thing.
The owner's answer was that unsubscribing should route to a page where the person
selects one or more channels. That is right for two of the three mechanisms and
impossible for the third:

| Mechanism | Behaviour |
|---|---|
| Body "manage preferences" link | Routes to the per-class preference centre |
| `List-Unsubscribe` URL (non-one-click) | Same page |
| `List-Unsubscribe-Post` one-click | **Suppresses the originating message class server-side, with no interaction** |

The one-click row is not a preference. RFC 8058's POST is issued by the mail
client, which reports "unsubscribed" to the person and never renders a response,
so a URI that merely serves a page suppresses nothing while the sender's own mail
client tells them it worked. That failure is worse than either option previously
weighed here: it is silent, it is on the sender's side, and the person has no
reason to check.

Mapping it to the originating class rather than to all marketing follows the
owner's direction as closely as the transport allows — it is the granular answer,
and it is the reading Google's bulk-sender guidance explicitly sanctions. The
person who wants everything stopped reaches "stop all marketing" from the page
the other two mechanisms open.

So: the per-class grid as the presented default, a single-step "stop all
marketing" always available beside it, and the one-click header suppressing the
class that sent the message. A person who wants to leave one channel can; a person
who just wants it to stop does not have to read a grid first. The two are not in
tension — granularity is what the interested person gets, and the blunt
instrument is what the departing person is owed.

**This costs less than it appears.** The case the direction protects against —
an unsubscribe from editorial ending a lease notice — does not arise, because
suppression is purpose-scoped as well as brand-scoped. A marketing opt-out has
never reached transactional or service communication, and §4's rule that a
preference change propagates to "every system affected by **that specific
permission**" already says so.

## Interaction with an outstanding blocking item

The decision record lists, among matters awaiting qualified review that has not
occurred:

| Area | Item | Gating |
|---|---|---|
| Privacy | The purpose-limitation rule that CRM may receive Hello subscriber records for identity resolution and suppression but must not activate NR, NH, or C&C marketing | Blocking before Hello Month 1 |

This amendment operates in that area and is recorded here rather than left for
the reviewer to discover. Three things follow, and they are stated plainly
because the decision record also notes that one person currently holds all four
approval areas:

1. **This amendment does not discharge that review.** It narrows what the
   reviewer must consider — the question becomes purely one of purpose
   limitation, with the brand-transfer question removed — but it does not answer
   it, and the item stays Blocking before Hello Month 1.
2. **The single-entity premise is a legal fact, not a policy choice**, and is
   the load-bearing element here. If a qualified adviser finds the brands are
   not one controller for data-protection purposes, or that a brand-scoped
   permission was represented to customers in terms that survive common
   ownership, this amendment fails on its premise and §5's original reading
   should be restored.
3. **What customers were told at collection is the practical constraint.** If any
   NantucketRentals.com, Nantucket Houses, or Hello Nantucket signup or booking
   flow states or implies that the permission is limited to that brand, this
   amendment does not override that representation for people who gave consent
   under it. A surface audit of existing consent language is the natural
   follow-up and is not attempted here.
4. **The collection and withdrawal design above is in the same review's scope.**
   Portfolio-wide collection language, and which message classes are properly
   non-toggleable, are privacy questions for the same reviewer — the second
   especially, since "required to perform the contract" is the line being drawn
   and drawing it too wide is how a marketing message ends up classified as
   transactional. The mechanical constraint on one-click is not a judgement call
   and should be treated as settled; neither of those two is.

## Affected metrics

None directly. §9's "consent exceptions" operational metric changes meaning: an
exception is no longer raised for a cross-brand send, only for a
cross-**purpose** send or a send to a suppressed recipient. Any dashboard or
alarm counting the former will drop toward zero; that is the amendment working,
not an instrumentation fault, and is recorded here so the change is not read as
a regression.

## Consequential edits

`docs/strategy/brands/skill/references/shared-standards.md` — the routing rule
on consent transfer, restated to purpose and channel, with the canonical
example kept and its reason corrected. Carried in this PR, per the precedent set
by `2026-09-02-odin-interactive-send-governance-removal.md`: merging records
approval, and the skill is not changed ahead of ratification.

## Version 1.0 recoverability

§5's original text is quoted in full above and is unmodified in the primary
strategy, per the change protocol's requirement that Version 1.0 remain
recoverable rather than being silently overwritten.
