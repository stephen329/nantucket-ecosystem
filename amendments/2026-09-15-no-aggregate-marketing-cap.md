# Amendment — no aggregate marketing cap across the four brands

- **Date raised:** 2026-09-15
- **Direction decided:** 2026-09-15 by the owner, answering the marker asking
  for the aggregate marketing cap per person per channel across all four brands
  including Hello Nantucket. His answer: **"no aggregate limit — record it as a
  decision."**
- **Status:** **Approved and ratified — Stephen Maury, 2026-09-15.** The
  approval block at the end of this document carries his name and that date, and
  this line reports it. From that date this amendment is
  the instrument on the aggregate dimension, and §154's shared-cap requirement
  is amended to the extent set out below — and to no greater extent: the
  per-brand and message-class dimensions are untouched.
- **Instrument amended:** `nantucket-ecosystem-integrated-strategy.md` §154
- **Owner:** Stephen Maury
- **Drafted by:** the branch owner, on the owner's decision. It was **proposed
  rather than applied** when drafted, because the change protocol puts frequency
  rules behind a dated amendment — and it was **approved and ratified on
  2026-09-15**, so that is drafting history and not its current state. The status
  line above governs: this is the operative instrument on the aggregate
  dimension.

## What §154 says now, quoted and unmodified in place

> Each communication has one sending brand and one customer job. Marketing
> contacts are subject to shared frequency caps and suppression; transactional
> and service communications are classified separately but still logged. An
> unsubscribe or preference change must propagate to every system affected by
> that specific permission.

## Why this amendment is needed rather than a decision being enough

The phase-7 build specification reads "shared frequency caps" as *shared across
the brands* — an aggregate ceiling on how much marketing one person receives from
Congdon & Coleman Real Estate, NantucketRentals.com, Nantucket Houses and Hello
Nantucket combined. On that reading the per-brand allowances alone do not satisfy
§154, and the fail-closed rule refuses any channel whose applicable cap is unset.
That is why push marketing has been refused: unlimited per brand, with no
aggregate set, resolves to no authorization.

The owner has decided there is no aggregate limit. A shared cap set to unlimited
is not a shared cap, so the decision and §154 as written cannot both stand. A
decision recorded only in the build specification would leave the strategy
forbidding what the build permits, and every later reader would be correct to
refuse those sends.

## What changes

§154's first clause is amended to read:

> Each communication has one sending brand and one customer job. Marketing
> contacts are subject to **per-brand frequency caps** and to suppression; where
> an aggregate ceiling across brands is set it governs in addition to the
> per-brand allowance, and as of 2026-09-15 no aggregate ceiling is set.
> Transactional and service communications are classified separately but still
> logged. An unsubscribe or preference change must propagate to every system
> affected by that specific permission.

**Suppression is untouched, and the replacement text says "suppression" without a
scope word on purpose — corrected after review (P2).** A draft of this amendment
said "portfolio-wide suppression", which is wrong in a way that would have
broadened every opt-out: `shared-standards.md` states that *"suppression is not
consent, and stays brand-scoped"*, and withdrawal is **per message class,
multi-select**, so stopping Hello Nantucket editorial must leave
NantucketRentals.com marketing untouched. Only the *collection* of consent is
portfolio-wide. Writing "portfolio-wide suppression" into the strategy could be
implemented as a global block across every brand and class, which is a coarsening
two ratified amendments forbid — and this amendment changes **frequency only**, so
it has no business touching suppression's scope in either direction. The existing
propagation sentence is kept verbatim because it already says the right thing:
propagation follows *that specific permission*.

## What this does not change

- **Suppression is untouched, at every scope it already has.** Nothing here
  weakens an opt-out. **Brand-scoped** suppression stays brand-scoped — stopping
  Hello Nantucket does not stop NantucketRentals.com; **message-class**
  withdrawal stays per class and multi-select; and **global** do-not-contact
  remains its own separate state, reached by its own control. The union rule for
  merged contacts stands. *Corrected after review (P2): this bullet said
  "suppression remains shared across the portfolio" — fourteen lines below the
  paragraph explaining why that exact phrasing is wrong, in the same commit that
  wrote it. An implementer reading only the bullet could turn a single
  message-class opt-out into a global block. Fourth consecutive round in which the
  finding was a copy I did not sweep, and the first in which the missed copy was
  in the same file as the fix.*
- **The per-brand allowances stand** as the operative limit **at the channel
  dimension only**: SMS 3/week and 4/month, email 2/week and 8/month, push, in-app
  and postal unlimited.
- **The message-class dimension is untouched and stays fail-closed** — added after
  review (P2). `docs/strategy/brands/skill/references/shared-standards.md:16-18`
  carries live strategy markers in the frequency-cap column for **owner
  statements and property status**, **owner advisory and market reports**, and
  **editorial** — described here in words, since spelling the token would add a
  fourth live flag to a scan that must count three (corrected after review, P2;
  the fourth time on this branch that explaining a marker recreated one). Those values were never transcribed and remain a human's work.
  Calling the channel allowances "the operative limit" without this line would let
  phase 7 read those class-level questions as settled and send under a neighbouring
  cap or an invented one. Nothing in this amendment supplies them, so a class whose
  cap cell is still a marker is refused at the class dimension regardless of what
  its channel allows.
- **The windows are rolling** — seven days and thirty days, measured back from
  the send (owner, 2026-09-15).
- **The aggregate remains a *dimension* even with no ceiling.** Volume per person
  across all four brands is still counted and reported, so the decision can be
  revisited on evidence rather than on impression. Setting a number later
  requires no schema change, only this amendment superseded.
- **The 2026-09-05 per-message-class withdrawal design** is unaffected.

## Affected metrics

Per-person marketing volume across the portfolio becomes unbounded by policy,
so the metric to watch is the distribution rather than a compliance rate:
- messages per person per rolling 30 days, across all four brands, at p50, p95
  and max;
- unsubscribe and complaint rate against that distribution;
- the share of recipients receiving from more than one brand in a window.

If the top of that distribution turns out to be driven by one person receiving
from all four brands at once, that is the evidence for setting a ceiling, and it
is the reason the dimension stays instrumented.

## The risk this accepts, stated plainly

One person can receive the full per-brand allowance from every brand
simultaneously. On email that is 8 per brand per 30 days across three
commercial brands plus Hello's editorial cadence — a worst case well above what
any single brand's allowance suggests, reached without any brand exceeding its
own limit. Hello compounds it, because Beehiiv sends Hello's mail and Odin can
only observe those sends after delivery, so Hello's contribution is detective
rather than preventive. The owner has judged this acceptable; recording the shape
of it is what makes revisiting it possible.

> Approved by: **Stephen Maury**  Date: **2026-09-15**

*Recorded by the branch owner on his written approval of 2026-09-15: "Approved.
Ratify `2026-09-15-no-aggregate-marketing-cap.md` immediately to unblock §154 and
restore channel marketing operations."*

**What ratification does, and the one thing it does not.** The aggregate
dimension stops being fail-closed, so marketing is no longer refused on every
channel for want of a shared ceiling. It does **not** restore marketing on every
message class: the class dimension stays fail-closed while the frequency-cap
cells for **editorial** and the two owner classes are untranscribed in
`docs/strategy/brands/skill/references/shared-standards.md`, which is an
upstream obligation this amendment does not touch. Recorded here because
"restore channel marketing operations" reads wider than what ratifying this can
deliver, and the gap is a fail-closed rule rather than a bug — it will look like
an unexplained refusal to whoever ships first.

**On Hello the class dimension detects rather than refuses — corrected
2026-09-15 after review (P1), in this note and not in the amendment above.**
Hello's own sends are editorial email, so the untranscribed editorial cap
applies to them; an earlier version of this note said they "remain refused",
which overstates the control. Beehiiv sends Hello's mail and Odin sees
`email_sent` only after delivery (`src/lib/hello/receiver.ts:667-706`), so no
Odin-side dimension refuses a Hello send — the exceedance is found in
reconciliation, after the mail is out. An operator reading "refused" could let a
campaign proceed believing the unfilled editorial cap blocks it. **Preventing
the send needs the Beehiiv-side pre-send control**, which this ratification does
not deliver and which the phase-7 plan carries as its own requirement.
