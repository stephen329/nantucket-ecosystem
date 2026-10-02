# Amendment — a marketing permission held by any one of the three brands is consent for all three

- **Date raised:** 2026-09-14, by the owner, during the contacts-governance
  session. His direction: **a permission held by any one of the three brands is
  consent for all three going forward.** It was recorded as *not operative* at
  the time, because widening an already-held permission is what
  `2026-09-05-cross-brand-consent-single-entity.md` forbids and no governance
  document has standing to do it.
- **Direction confirmed:** 2026-09-15, answering the marker that asked him to
  pursue a dated amendment or record the direction as withdrawn. His answer:
  **"keep it, records as a decision signed by me today."** This is that
  instrument.
- **Status:** **Approved and ratified — Stephen Maury, 2026-09-15**, and
  **not yet in effect.** The approval block at the end carries his name and that
  date. The condition is stated in *When this takes effect* below and is not a
  drafting reservation: the instrument this amendment changes gates any such
  widening on the qualified privacy review, and approving this amendment does
  not discharge a gate set by another.
- **Instrument amended:** `2026-09-05-cross-brand-consent-single-entity.md` —
  its limiting rule *"Existing consent is not retroactively widened"*, and its
  brand-representation guard, which reserves permissions collected under
  brand-limiting copy. **The second was missed when this was drafted and added
  after review (P1)**; the draft said "and only that rule", which was wrong in
  the direction that matters — it left a ratified clause standing that forbids
  the population this amendment exists to reach. Both are set out under *The
  second guard* below.
- **Owner:** Stephen Maury
- **Drafted by:** the branch owner, on the owner's decision and at his
  instruction to record it as a signed decision.

## What the instrument says now, quoted and unmodified in place

> **Existing consent is not retroactively widened.** Permissions already held
> were given under the brand-scoped reading. They are not reinterpreted by this
> amendment; the wider scope applies to grants collected under the new language.

Alongside it, the collection rule that survives untouched: **a grant's scope is
limited to the brands the collection surface actually named.**

## Which of the two readings this is, and why it matters

*"Going forward"* can mean either of two things, and only one of them is a
change:

- **Permissions collected from now on cover three brands.** That is already the
  law — the 2026-09-12 amendment's three-brand grant does exactly this — so on
  this reading the direction is a no-op and there would be nothing to sign.
- **From now on, permissions already held are treated as three-brand.** This is
  the reading that changes something, and it is what the limiting rule above
  forbids.

This amendment is the second reading. It is recorded explicitly because the
first reading would make the whole instrument decorative, and because an
implementer who takes the first reading ships nothing while believing the
decision was applied.

## What changes

The limiting rule is amended to read:

> **Existing consent is widened to the three commercial brands, prospectively.**
> A marketing permission **held at this amendment's ratification —
> `eligibility_cutoff_at` = `2026-09-15T14:11:29Z`, ratified by the owner as
> his signing moment, recorded once and never moved** — for any one of Congdon & Coleman Real Estate, NantucketRentals.com
> or Nantucket Houses is consent for all three, at
> the same channel, the same purpose and the same message class it was granted
> for. A grant collected **at or after that cutoff** is **not** widened: it takes the
> scope its collection surface named, as it does today. Where counsel prescribes
> explicit re-consent, a grant is widened only if its holder **affirmatively
> responded**. It is not consent for Hello Nantucket, which is excluded in both
> directions. The scope a collection surface named is still recorded, and is
> what the grant's provenance shows; the widening is applied when a send is
> evaluated, not by rewriting what was collected.

**Four limits are part of the change, not caveats on it.**

- **Only grants held at the eligibility cutoff, which is not when this takes
  effect — added after review (P1), and the omission would have inverted the
  rule it sits beside.** *(The heading said "when this takes effect" for one
  round after the two instants were separated below; corrected after review,
  P1.)* The operative clause
  named no grant-time boundary, so "already held" had no instant attached to it
  and, implemented literally, **every future grant would have been widened too**
  — including one deliberately collected on a one-brand form, which the
  collection rule below says keeps its narrower scope. That is the opposite of
  what this amendment is for: it exists to reach backwards over a population
  that can no longer be asked, not to override what a surface says going
  forward.

  **Two instants, not one — corrected again after review (P1), and the previous
  correction is what created the defect.** That round set eligibility at
  `granted_at < amendment_effective_at` and the round after it moved
  `amendment_effective_at` to *after* the privacy review and its mitigation had
  completed. Those two fixes are individually right and jointly wrong: review
  and mitigation take weeks or months, and every narrow grant collected in that
  interval would satisfy the cutoff and be widened — the exact thing the
  collection rule below forbids, arriving through the gap between two
  corrections. So the amendment now names them separately:

  | Instant | Value | What it fixes |
  |---|---|---|
  | **`eligibility_cutoff_at`** | **`2026-09-15T14:11:29Z`** — the ratification instant, its branch settled and its value ratified by the owner on 2026-09-15; it does not move | Which grants are *candidates*. Everything collected at or after it is out, whatever happens later |
  | **`amendment_effective_at`** | Recorded when all four prior activation gates complete — **corrected after review (P1)**, this row said three after the list grew | When the widening begins to govern a send |

  **The cutoff must be a timestamp rather than a date, and the timestamp is
  still owner-gated — added after review (P1) and corrected after review (P2),
  because this heading kept saying the value was "written above" after the value
  was withdrawn.** A calendar date cannot place a grant collected *on*
  2026-09-15: midnight, end of day and commit time are all defensible readings
  of it and each widens a different set of same-day customers. That is why the
  instant has to be recorded, and why a drafter may not be the one to record it.
  **`eligibility_cutoff_at` is populated and owner-ratified**, on his answers of
  2026-09-15 — the branch, then the value. The record of both is below.

  **The value is the owner's, and a drafter briefly supplied one — withdrawn
  after review (P1).** The previous revision set it to `2026-09-15T00:00:00Z`,
  midnight UTC, on the reasoning that it is the conservative reading and widens
  the fewest people. That reasoning is sound and it was still the wrong act:
  what he ratified is a permission **held at ratification**, and midnight
  excludes every grant collected between then and the moment he actually
  signed. Narrowing a cohort he approved is not a drafting completion, and the
  text made its own inconsistency visible — it claimed the cohort *"closed at
  the instant he signed"* while setting the boundary hours earlier.

  **Half of this is answered and half is still his, and the two halves are
  kept apart deliberately.** On 2026-09-15 he said *"signing time for the
  cutoff"*, which settles **which boundary** — the ratification instant, not
  midnight. That is the wider of the two: it keeps every grant collected that
  day before he signed, which is the cohort his own ratified wording, a
  permission *held at ratification*, describes. Midnight is out for good.

  **The value is his too, and it took two withdrawals to reach him.** A drafter
  first supplied midnight UTC, withdrawn after review (P1) for narrowing a
  cohort he approved. A drafter then supplied `2026-09-15T14:11:29Z` — the
  timestamp of commit `a9073af6`, which created this instrument carrying
  *"Approved and ratified — Stephen Maury, 2026-09-15"* — on the reasoning that
  commit time is one of the three readings named above and the one his branch
  selects, and disclosed in the same breath that the commit is later than his
  direction and that later means wider. **Disclosing it did not make it his**,
  and it was withdrawn after review (P1): `a9073af6` is a Claude-authored
  commit, the signed record carries a **date and no clock time**, and a cohort
  this consequential may not be defined by a number an agent picked with the
  caveat serving as a label.

  ~~`[DECIDE: the exact eligibility_cutoff_at value, in UTC to the second — the branch is settled (ratification instant, not midnight) and only the timestamp is open; either supply the moment of signing, or ratify 2026-09-15T14:11:29Z, the commit that recorded the ratification, as that moment. The later the instant, the wider the cohort]`~~
  **Answered 2026-09-15: "ratify 14:11:29Z."** He took the second branch the
  marker offered and **adopted that timestamp as his signing moment**, which is
  the act that makes it operative. The number is the same one a drafter
  withdrew; **what changed is whose it is**, and that is the whole difference
  between a value an agent picked and a value the owner ratified. It carries
  the reach he was shown when he adopted it: it is later than the moment he
  sent the direction, so every grant collected in that gap is **inside** the
  cohort.

  **`eligibility_cutoff_at` = `2026-09-15T14:11:29Z`.** Recorded once, and it
  does not move.

  Whichever he records, the cohort is then **immutable and closed on
  2026-09-15**, which is the same shape as the 2026-09-12 migration cohort's
  marker: membership cannot grow while the business waits on counsel. **The verification must
  include a narrow grant collected after the cutoff staying narrow** — a test
  that only checks the widened rows passes an implementation that widens
  everything — **and a grant timestamped exactly at the cutoff staying narrow,
  added after review (P2)**. The predicate is `granted_at <
  eligibility_cutoff_at`, so equality is excluded, and equality is reachable:
  a truncated timestamp or a boundary value recorded deliberately produces it.
  The operative clause said "after that cutoff" for one round while the table
  and the predicate said "at or after"; a boundary stated three times needs to
  say the same thing three times.

- **Where re-consent is prescribed, an affirmative response is part of
  eligibility — added after review (P1).** Activation gate 4 promised that an
  explicit re-consent campaign widens *"only the people who answered it"*, and
  the operative clause selected every grant before the cutoff with no response
  predicate at all. *(That promise is activation gate 4; it was gate 2 until the
  cutoff was inserted ahead of it and gate 3 until the class-routing decision
  was, and the reference is corrected after review each time — P3, then P1.)* Read together, a person who was asked and did not answer was
  widened anyway — which makes the mitigation decorative and is worse than not
  running the campaign, because it creates a record suggesting consent was
  sought and obtained. If counsel prescribes re-consent, eligibility is
  `granted_at < eligibility_cutoff_at` **and** an affirmative response recorded
  against that campaign, held as its own immutable cohort, **and the
  verification must include a non-respondent staying narrow**. Silence is not an
  answer.
- **The three commercial brands only.** Hello Nantucket is outside the grant in
  both directions per the 2026-09-12 amendment, and nothing here touches that.
- **Same channel, same purpose, same message class.** A permission granted for
  NantucketRentals.com marketing email of one class becomes that class of
  marketing email from three brands.

  **What that collides with, and what it costs — recorded after review (P1),
  and it is a consequence of this amendment rather than a defect in it.**
  `shared-standards.md` states the routing invariant as *"One message class →
  exactly one sending brand → one consent purpose."* If a class has exactly one
  sending brand, then widening a grant **at class identity** hands the other two
  brands a class they never send. The two rules cannot both bite: preserve the
  matrix and the widening is **vacuous** for that class; follow the widening
  literally and it authorizes brand-and-class pairs the matrix forbids.

  **A drafter picked the first horn and it was withdrawn after review (P1).**
  The reasoning was that preserving the matrix is the safe failure — nobody
  receives a class they did not opt into. It is safe and it is not a
  contributor's to choose, because of what it costs: the invariant gives
  **every** class exactly one sending brand, so "it reaches only the classes
  more than one brand sends" reaches **nothing**. Picking that horn makes this
  amendment a no-op — precisely the decorative reading the section above says
  this instrument exists to refuse, and precisely the failure it names, an
  implementer who "ships nothing while believing the decision was applied".
  Choosing between a no-op and a routing change is the owner's act, and the
  choice is now his to record:

  ~~`[DECIDE: how the class-identity widening is made to bite — define per-brand message classes for the classes that matter, amend the sending-brand mapping in docs/strategy/brands/skill/references/shared-standards.md so a class may have more than one sender, or accept that the widening reaches nothing until one of those happens and say so; the routing matrix is upstream strategy and not this instrument's to touch, so no contributor may pick]`~~
  **Answered 2026-09-16: "per-brand message classes."** He took the first of the
  three, and it is the one that leaves the routing invariant standing: he is not
  amending *"one message class → exactly one sending brand"*, he is changing what
  a class **is**.

  **What his answer entails, stated because it is the mechanism and not a second
  decision.** Within the classes this amendment governs — **the marketing
  classes of the three commercial brands, and no others** — a message class
  becomes a **(brand, class)** pair, so each has exactly one sending brand and
  the invariant holds there by construction rather than by restraint. That is
  why this branch costs no routing change.

  **Scoped to those classes, and not claimed of the matrix as a whole —
  corrected after review (P2).** A first draft of this paragraph said *every*
  message class becomes a (brand, class) pair and the invariant therefore holds
  tautologically. It does not:
  `docs/strategy/brands/skill/references/shared-standards.md:16` gives *"Owner statements
  & property status"* two sending brands in one row — Nantucket Houses for the
  app, Congdon & Coleman for the formal statement — so that row is one class
  with two senders **today**, before anything here. Preferences and routing
  derived from it would still see the old shape, and a global claim made this
  amendment appear to fix a matrix inconsistency it does not touch. Splitting
  that row is a matrix change, upstream and `[STRATEGY §4]`'s to make; this
  instrument neither does it nor requires it.

  **Families, and which member governs a send.** Because the widening carries a
  grant from one brand to another, per-brand classes come in **families**: the
  NantucketRentals.com member and the Congdon & Coleman member of one family are
  siblings, and *"the same message class"* in the operative clause above means
  **the same family**, resolved to the **recipient brand's member**. Without a
  family there is no correspondence to widen along, and per-brand classes would
  make the widening *more* vacuous rather than less — so the family is entailed
  by his choice rather than added to it.

  **And it has to be written down, not inferred — added after review (P1).**
  The matrix has no family field and no naming invariant that says which
  Congdon & Coleman row is which NantucketRentals.com row's sibling. An
  evaluator with per-brand rows and no recorded mapping either preserves the
  exact member, which is the no-op this answer exists to end, or **guesses at a
  sibling and authorizes a class the person never opted into**. Family
  membership is therefore part of the matrix and storage contract, and gate 2
  below asks for the mapping rather than only the rows.

  **And the storage half of that has to be real before activation, not only the
  documentation half — added after review (P1).** The routing matrix is a
  Markdown table; `decideDelivery` cannot read it. Gate 2 as first written closed
  when the *documented* mapping existed, while the phase-7 store prerequisite
  carries `message_class` through the consent row, the request and the outcome
  and **says nothing about a family** — so every gate could close, steps 0–7 of
  the phase-7 hard gate could pass, and the send path would still have no way to
  translate an origin-brand member into the recipient brand's member. The failure
  that returns is the one two paragraphs up: preserve the exact member and the
  widening is a no-op, or guess a sibling and authorize a class nobody opted into.
  **So the mapping must exist in the schema and read path the send path actually
  uses, and a sibling-resolution verification must pass, before activation.**
  Recorded as entailment rather than as a new condition on the owner: his
  mechanism resolves a grant *at evaluation*, and a resolution the runtime cannot
  perform is not a narrower version of his decision — it is the decision not
  executing while the record says it is live.

  **The member that is sent is the member that is checked — added after review
  (P1).** Resolution changes the brand coordinate and preserves the family
  coordinate. Everything downstream evaluates the **member actually being
  sent**: a person who stopped the Congdon & Coleman member of a family is not
  reachable by it because NantucketRentals.com holds a grant for the sibling,
  and their suppression of the recipient member wins. Checking the origin member
  instead would read a preference the person expressed about a different brand's
  mail, which is the failure brand-scoped suppression exists to prevent.

  **And a family widens only if it is complete — answered by the owner on
  2026-09-16: *"complete families widen."*** A family carrying a member for each
  of Congdon & Coleman Real Estate, NantucketRentals.com and Nantucket Houses
  widens; a family missing any one of the three is **inert** and widens nothing,
  not even between the brands it does cover. So the ratified sentence stays
  literally true wherever the widening operates — never *"consent for some of the
  three"* — at the price that a two-brand family is no win rather than a partial
  one. Raised as his after review (P1) found the gate could otherwise pass with
  every class and mapping in place and a family still short a brand; the full
  statement and what the choice costs are at gate 2 below.

  **What his answer does not supply, and nobody here may: which classes.** The
  routing matrix in `shared-standards.md` is a **working skeleton** and the full
  matrix is held open by `[STRATEGY §4: transcribe full matrix]`. Its one
  marketing row is *editorial / newsletter / social → Hello Nantucket*, and
  Hello is outside this grant in both directions. **So the record today
  enumerates no marketing class for any of the three commercial brands** — there
  is nothing yet to split into families, and the widening still reaches nothing.
  That is not a second owner decision and no new marker is raised for it: it is
  work owed against the `[STRATEGY §4]` marker that already exists upstream, and
  a contributor who wrote the classes in would be filling it.

  So **activation gate 2 below changes content rather than closing**: both
  decisions it was waiting on are made, and what it now waits on is the
  per-brand marketing classes existing in the matrix **with their family
  membership recorded** — upstream work, with no owner decision left inside it.
  Stated rather than quietly dropped,
  because the gate exists to stop this amendment going live described as applied
  while shipping nothing, and that risk is exactly what survives both answers —
  further under the completeness rule, since classes that exist in partial
  families widen nothing either. It does not become SMS, push or postal; it
  does not become a purpose the person never granted; and it does not become a
  different **family** under the same purpose. Widening the brand axis is not
  licence to widen the others.

  **"A different class" became "a different family" once classes went per-brand
  — restated after review (P1).** This clause was written when a class was a
  single value, so preserving the class and preserving the family were the same
  sentence. Under his 2026-09-16 answer they are not: resolution moves the brand
  coordinate, which *is* a different per-brand class member. Read literally
  against the new definition, the clause forbade the very resolution that makes
  the widening bite — an evaluator preserving the exact member is a no-op, and
  one selecting the sibling would be breaking a stated rule. **Family identity
  is what this clause protects, and it is preserved**; the member changes,
  because the recipient brand's member is the only thing that brand can send.

  **Message class was missing from this list when the
  amendment was drafted and was added after review (P1).** The omission was not
  cosmetic: `message_class` joined the stored consent tuple in the 2026-09-05
  storage model precisely so the system can answer whether a person opted into
  *this* class, and a widening that preserved only channel and purpose would
  have let one brand's editorial permission authorize another brand's owner
  advisory — a second axis silently widened inside a change that says it touches
  one.
- **No rewrite of stored grants.** The record of what each surface named stays
  as collected. Widening at evaluation keeps the provenance a reviewer needs,
  keeps the change reversible if counsel's answer requires it, and means no
  migration can silently lose the original scope.
- **Withdrawals win, and are applied after.** Suppression is brand-scoped and
  stays so: a person who stopped Congdon & Coleman Real Estate is not reachable
  by it because NantucketRentals.com holds a grant. Global do-not-contact blocks
  all three. A widened grant is still a grant, and every withdrawal axis —
  brand, channel and message class, per the same-date channel amendment —
  applies to it unchanged.

## The second guard, and why it is the review's first question

**Added after review (P1), and it is the most consequential thing in this
document.** The 2026-09-05 amendment carries a clause this one did not read
against the owner's decision:

> If any NantucketRentals.com, Nantucket Houses, or Hello Nantucket signup or
> booking flow states or implies that the permission is limited to that brand,
> this amendment does not override that representation for people who gave
> consent under it. A surface audit of existing consent language is the natural
> follow-up and is not attempted here.

**This amendment does what that clause declined to do, for exactly the
population it protects.** A person told at collection that they were dealing
with one brand is the person whose permission is being widened.

Two readings are available and only one survives contact with the record:

- **Apply the guard selectively** — widen every historical permission except
  those collected under brand-limiting copy. **This is not implementable.** The
  historical consent-language audit is closed as *unperformable* (§7.3 of the
  phase-7 plan): no surface recorded the copy it displayed, so there is no way
  to identify which grants carried such a representation. A guard nobody can
  apply is not a guard.
- **Widen regardless** — which is what this amendment does, and which means
  accepting that some people were told something narrower than what will now
  happen.

**The owner decided to widen; he was not told about this clause when he did.**
Recorded here rather than resolved, because the resolution is not a drafting
choice. Strictly, the clause limits what the *2026-09-05* amendment reaches and
a later, specific instrument governs — but reading a protective clause out of a
ratified instrument by construction is exactly the move the marker protocol
exists to prevent, and the substance it protects is a legal question rather than
a textual one.

**So it goes to the qualified privacy review as that review's first question**,
which costs nothing, because this amendment is already gated on that review and
cannot take effect before it. The reviewer is being asked whether common
ownership permits overriding a brand-limiting representation given to a person
who cannot now be identified. If the answer is no, this amendment does not take
effect in its current form and the owner decides what replaces it.

**One piece of customer-facing copy said the opposite, and the owner removed
it.** The privacy draft stated: *"Permissions granted prior to our system
integration remain scoped strictly to their original terms."* True while this
amendment is gated, false the moment it is not. It was held for one round on the
reasoning that deleting it would describe a state not yet in effect; **he
directed its removal on 2026-09-15**, which is the better call for a document
going to counsel — silence on the point beats a promise the pending amendment
contradicts. The draft now says nothing about historical scope, and the counsel
packet carries the question instead.

**He also widened the question the packet asks.** Beyond whether the widening is
lawful at all, counsel is asked whether the absence of surface-level consent
logs for the legacy population requires an **explicit re-consent campaign**
before cross-brand seeding runs, or whether **notification at next login** is
sufficient protection. That is the question whose answer decides what gets
built, and it is not answerable from this repository.

## When this takes effect

**Five things must complete, in order, and the review clearing is only one of
them — corrected after review (P1), three times. The first is done; four
remain.** An earlier draft said the amendment takes
effect "on the qualified privacy review clearing it, and not before", which made
the review's answer and the widening's activation the same event. They cannot
be: the review is being asked to *choose a mitigation* — explicit re-consent, or
notification at next login — and choosing one is not performing it. On the
earlier wording the widening went live the moment counsel answered, so
cross-brand marketing could reach people before a single one of them had
re-consented or been notified. The mitigation would have been prescribed and
skipped in the same instant.

1. **The owner records the eligibility cutoff instant.** ~~Open~~ **Done
   2026-09-15**, in two answers: *"signing time for the cutoff"* settled the
   branch, and *"ratify 14:11:29Z"* adopted the value —
   **`2026-09-15T14:11:29Z`**, recorded above. Added after review (P1) because
   the enumerated gates did not include it, so every gate could be satisfied
   with `eligibility_cutoff_at` unset — leaving same-day grants unclassifiable,
   or classified by whatever boundary an implementer invented. It was listed
   first because the cohort cannot be identified without it, not merely sent
   to, and it is the first to close.
2. **The per-brand marketing classes exist in the routing matrix, their family
   membership is recorded there, and the mapping is carried in the runtime the
   send path reads with its sibling resolution verified** — the gate the owner's answers
   **changed twice rather than closed**, and which now holds **no owner decision
   at all**: both halves that were his are answered, and what remains is
   upstream work owed against `[STRATEGY §4]`.

   **"Exist" is not enough, and saying only that would have let this gate be
   satisfied by rows nothing can resolve against — added after review (P1).**
   The matrix carries no family or correspondence field and no naming invariant
   that identifies which Congdon & Coleman row is the sibling of which
   NantucketRentals.com one. Transcribe §4 with per-brand marketing rows and
   this gate would read as met, while an evaluator still had nothing to resolve
   *"the same family"* against: it would either preserve the exact member and
   stay a no-op, or **guess a sibling and authorize a class the person never
   opted into** — the outcome the family clause exists to prevent. So the gate
   requires the mapping, not just the rows, and **family membership belongs to
   the matrix and storage contract** rather than to an evaluator's inference.
   Which classes share a family is still `[STRATEGY §4]`'s to say; that it must
   be written down is what his own mechanism requires to function.

   **A complete mapping is still not enough if a family is incomplete — added
   after review (P1), and answered by the owner the same day.** §4 could add marketing rows for all three brands and
   record every row's family, and a *particular* family could still have two
   members rather than three. A grant in that family then has no member to
   resolve to at the missing brand, so the amendment would activate while
   delivering less than *"consent for all three"* says. Two rules close that,
   they reach different distances, and the difference is the whole value of the
   widening:

   ~~`[DECIDE: whether a family widens only when it has one member for each of the three commercial brands — complete families widen, partial families are inert — or whether a partial family widens to the brands that do have a member, which makes "consent for all three" mean "for the brands that send this job at all". The first keeps the ratified sentence literally true wherever widening happens and may reach nothing; the second reaches further and qualifies the sentence. Not a contributor's: it decides how much the instrument does]`~~

   **Answered by the owner on 2026-09-16: *"complete families widen."*** He took
   the first rule, the conservative one.

   **The rule.** A family widens **only** when it carries one member for each of
   the three commercial brands — Congdon & Coleman Real Estate,
   NantucketRentals.com and Nantucket Houses. A family missing any one of the
   three is **inert**: it does not widen at all, not even to the brands it does
   have. A grant in an inert family keeps exactly the scope its collecting
   surface named, and `decideDelivery` evaluates it as it does today.

   **What his answer buys.** The ratified sentence — a permission held by one of
   the three *"becomes a permission for all three"* — stays **literally true
   wherever the widening operates**. There is no reading of an activated
   amendment under which a person is treated as having consented to some of the
   three. Nobody receives mail from a brand that sentence did not promise
   consent for, and the disclosure a re-consent or notification has to make is
   the sentence he signed rather than a qualified version of it.

   **What it costs, stated rather than implied.** A two-brand family is not a
   partial win; it is **no win**. A family covering NantucketRentals.com and
   Congdon & Coleman Real Estate but not Nantucket Houses widens nothing between
   the two brands it does cover, even though both hold the class and the grant
   would have been honoured at either. The widening may therefore reach nothing
   at all, and reaching nothing is a permitted outcome of his rule rather than a
   sign it was misapplied.

   **What this does to the gate.** Completeness is now an **evaluation rule**,
   not a further gate condition: gate 2 does not require every family to be
   complete, because a partial family may exist and simply never widens. So the
   gate closes on the classes existing, their family membership recorded, and
   that mapping carried in the runtime with its resolution verified — all of it
   upstream or build work, none of it his any more.

   **Which means gate 2 can be satisfied while the widening still reaches
   nothing**, if every family §4 records turns out to be partial. That is not a
   hole left by his answer, and no marker is raised for it: **gate 5 is his own
   act** — the activation instant is recorded by him — so an instrument that
   would widen nothing is one he can decline to activate, with the family table
   in front of him. Recorded because *"gate 2 is met"* must not be read as *"the
   widening does something"*; those two came apart the moment he chose the
   conservative rule.

   Neither rule would have forced a brand to be given a class it does not send —
   under the one he took, a job only two brands do simply has an inert family,
   and Congdon & Coleman Real Estate is not owed a seasonal promotion it would
   never send. Its original form asked
   him to resolve the class-routing collision; he answered on 2026-09-16 with
   *"per-brand message classes"*, so a class is now a **(brand, class)** pair
   and classes come in families the widening maps along. What that leaves is
   not a decision: the matrix in `shared-standards.md` is a working skeleton
   whose only marketing row routes to Hello Nantucket, which this grant excludes
   in both directions, so **no marketing class exists for any of the three
   commercial brands to widen along**. Transcribing them is work owed against
   `[STRATEGY §4: transcribe full matrix]` upstream, and no contributor may fill
   that marker. Added after review (P1) and kept for the same reason it was
   added: a drafter had chosen the horn under which the widening reaches no
   class at all, so every other gate could complete and the amendment could be
   recorded as live while widening nothing. **That risk survives both of his
   answers until the classes exist**, which is why this stays a gate — and under
   the completeness rule he chose it survives one step further, since classes
   that exist in partial families widen nothing. Listed second
   because it decides whether there is anything to activate.
3. **The qualified privacy review clears it**, answering both halves of the
   question the counsel packet carries — whether the widening is lawful against
   the 2026-09-05 brand-representation guard, and which mitigation the missing
   consent logs require.
4. **The prescribed mitigation is performed**, not merely planned. If counsel
   requires an explicit re-consent campaign, the widening reaches only the
   people who answered it. If notification at next login suffices, the
   notification must be built and live before any widened send.
5. **An activation instant is recorded** — `amendment_effective_at`, written
   down once, marking when the widening begins to govern sends. It is **not**
   the eligibility cutoff: that is `eligibility_cutoff_at`, fixed at
   `2026-09-15T14:11:29Z` and never moved, so the cohort cannot grow while the business
   waits on counsel. *Both halves of this are corrections to corrections — the
   boundary was first added without the instant it references, and then the
   instant was moved past the mitigation without noticing it was also serving as
   the cutoff.*

Only when all five are done does the widening govern a send. **One is done as
of 2026-09-15** — the cutoff instant, branch and value both — and the widening
still governs nothing.

**Why the review gate is not this document's invention.** The 2026-09-05
amendment records that its own approval did **not** discharge that review, which
is gated *Blocking before Hello Month 1*, and the governance record names the
review as what an amendment of this kind would have to clear. The review is
live, tracked as its own item, and the draft policy language went to the owner
on 2026-09-15 to pass to counsel.

That gate is not this document's invention and not a drafter's caution: it sits
in the ratified instrument this amendment changes. **Only the owner can lift
it**, and lifting it would be a separate decision on the record — he directed
this amendment, he did not say the review no longer gates it, and a contributor
reading a gate out of a ratified instrument is the failure the whole marker
protocol exists to prevent.

Concretely: until the review clears, seeded grants keep taking the scope the
collecting surface named, and `decideDelivery` evaluates them unchanged. The
work this amendment authorizes may be **built and tested behind the existing
consent-policy path**; it may not be switched on.

## The risk this accepts, stated plainly

A person who gave one brand permission to email them will begin receiving email
from two more. They did not choose that, and the sentence they read when they
gave it named one brand. The reasons this is defensible are on the record — the
brands are not separate entities, O2554 LLC holds the permission, and the
2026-09-05 amendment already established that a permission given to one brand
was given to the entity — but the *experience* is three times the mail, and the
person's own memory of what they agreed to will not match it.

Two things compound it and are worth seeing together:

- **There is no aggregate frequency ceiling** (the same-date no-aggregate-cap
  amendment). Each brand may send its full per-brand allowance, so the widening
  converts one brand's allowance into three simultaneously.
- **The complaint arrives as a spam report**, which applies a global block
  across all three brands and every address and phone number held. The
  widening's failure mode is therefore not a quiet unsubscribe from one brand;
  it is the loss of the whole relationship.

This is the evidence the privacy review should be given, and it is the reason
the aggregate dimension stays instrumented even with no ceiling set.

## What this does not change

- **Collection copy.** Surfaces still enumerate the brands a grant covers, and a
  narrower form still collects a narrower scope. This amendment widens what an
  existing grant *reaches*; it does not let a surface say less than it does now.
- **Hello Nantucket's separation**, in both directions.
- **The migration-cohort exception** of the 2026-09-12 amendment, which remains
  its own narrow no-fresh-grant permission keyed on the immutable cohort marker
  rather than on the identity graph. It is unaffected and still not a general
  rule.
- **The withdrawal design**, at every axis it has.

> Approved by: **Stephen Maury**  Date: **2026-09-15**

*Recorded by the branch owner on his written decision of 2026-09-15: "keep it,
records as a decision signed by me today."*

**What his signature does and does not reach — recorded because the two are
easy to run together.** It settles that the direction is **kept** rather than
withdrawn, and it supplies the dated instrument the change protocol requires, so
this is no longer a direction with no standing. It does not clear the privacy
review, because that gate belongs to the instrument being amended rather than to
this one. If he intends the widening to take effect without waiting for counsel,
that is a further decision and needs saying in those terms.
