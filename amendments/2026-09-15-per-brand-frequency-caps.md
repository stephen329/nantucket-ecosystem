# Amendment — the per-brand marketing frequency allowances and their windows

- **Date raised:** 2026-09-15, by the branch owner, on the finding that the
  per-brand allowances are operative policy living only in a build
  specification. The values had been the owner's since before 2026-09-14; what
  they lacked was the dated instrument the change protocol requires.
- **Direction decided:** 2026-09-15 by the owner, answering the marker that
  asked for exactly this. His answer: **"Yes, ratify the numbers as they
  stand."**
- **Status:** **Approved and ratified — Stephen Maury, 2026-09-15.** The
  approval block at the end of this document carries his name and that date, and
  this line reports it. From that date these are the operative per-brand
  marketing frequency limits, and the per-brand dimension stops resting on a
  plan.
- **Instrument completed:** `nantucket-ecosystem-integrated-strategy.md` §154,
  as amended the same day by `2026-09-15-no-aggregate-marketing-cap.md`. That
  amendment made §154 read *"marketing contacts are subject to **per-brand
  frequency caps** and to suppression"* and said in terms that it left the
  per-brand dimension untouched. **This instrument is what that clause points
  at.** §154's text is not changed again here.
- **Owner:** Stephen Maury
- **Drafted by:** the branch owner, on the owner's decision and at his
  instruction to draft it.
- **Filename note:** he named this `AMENDMENT-2026-09-15-per-brand-frequency-caps.md`.
  It is filed under the directory's existing convention — `YYYY-MM-DD-slug.md`,
  which all twelve of its neighbours use — so that date ordering and the status
  parser behave as they do for every other amendment. Substance unchanged.

## Why an instrument was needed when the numbers were never in doubt

The values are the owner's and have never been in question. The problem was
where they lived: `docs/vendor-retirement-and-identity-unification.md`, a
**plan**. The same document's own argument for why the aggregate ceiling needed
an amendment is that the change protocol puts frequency rules behind a dated
instrument recording reason, owner, affected metrics and approval, and that *"a
plan cannot displace a ratified strategy requirement."* That argument does not
stop at the aggregate.

Which left an implementer two readings and no way to choose: enforce numbers
that no instrument ratifies, or hold the **per-brand** dimension fail-closed on
exactly the ground the aggregate was held on until that morning — and the
fail-closed rule refuses any channel whose applicable cap is unset. This
instrument removes the choice. The value was never the gate; the instrument was.

## The allowances

Per person, per brand, per channel. Marketing only.

| Channel | Rolling 7 days | Rolling 30 days |
|---|---|---|
| SMS | 3 | 4 |
| Email | 2 | 8 |
| Push notification | no limit | no limit |
| In-app message | no limit | no limit |
| Postal mail | no limit | no limit |

**The windows are rolling** — seven days and thirty days, measured backwards
from the moment of the send. Not calendar weeks or months. This was the owner's
decision of 2026-09-15 and it settles two things at once: no timezone question
arises, because there is no boundary to be in a timezone; and the burst a
calendar window permits — the Sunday-and-Monday pair that satisfies two separate
weeks while a person receives both inside thirty-six hours — cannot happen.

**The boundary at the far end is undecided, and it is his — raised after review
(P2), having first been settled here by a drafter.** "Measured backwards from
the moment of the send" does not say what happens to an earlier send landing
*exactly* seven or thirty days back, and `>= now - interval` and
`> now - interval` decide it oppositely at a boundary a scheduled send reaches
routinely. A first draft of this paragraph picked `>=` and called it
"overrulable in a line" — which was the admission that it was provisional, and
provisional is not what an operative allowance may be. **At equality the two
comparisons permit a different number of sends**, so choosing between them
changes the allowance he ratified rather than describing it.

`[DECIDE: whether a send landing exactly seven or thirty days back counts against the rolling allowance — sent_at >= now - interval counts it and permits fewer sends, sent_at > now - interval excludes it and permits one more at the boundary; the numbers are ratified and this decides what they mean at equality]`

**Neither branch is built or activated until he answers — corrected after
review (P2).** An earlier draft here said to build the fail-closed branch and
mark it interim. That is the choice taken operationally with a label on it: an
implementer who builds `>=` rejects a boundary send the owner may have meant to
permit, and the label changes nothing about what ships. No code enforces any cap
today, so nothing is delayed by waiting: the counters, the reservation and the
verification are built with **the comparison as a single point the answer lands
on**, and the verification asserts the equality case either way, so the test
moves with his answer rather than having to be discovered afterwards.

**Both windows bind.** A send is permitted only if it is within the 7-day
allowance *and* within the 30-day allowance. The 30-day figure is not a
derivative of the weekly one: SMS at 3 per week and 4 per month is deliberately
not 12, and reading either number alone gets the wrong answer in opposite
directions.

**"No limit" is a decision, not an absence.** Push, in-app and postal carry no
per-brand ceiling because the owner set none on 2026-09-15. This matters because
of the rule in the next section: an unset cap and a cap set to no limit are
opposite states, and only one of them permits a send.

## The fail-closed rule, which this instrument does not weaken

**A channel not named in the table above has no allowance, and marketing on it
is refused.** That rule comes from `2026-09-15-no-aggregate-marketing-cap.md`
and is unchanged here. It is why the table lists every channel the portfolio
currently sends on and why a channel authorized later is refused rather than
assigned a neighbouring cap or an invented one — a new channel needs its own
decision and its own line here before its first marketing send.

The same rule still binds at a dimension this instrument does not reach. **The
message-class dimension stays fail-closed** while the frequency-cap cells for
**editorial**, **owner statements and property status**, and **owner advisory
and market reports** are untranscribed in
`docs/strategy/brands/skill/references/shared-standards.md`. Those cells carry
live strategy markers and are a human's work; nothing here supplies them. A
class whose cap cell is still a marker is refused **regardless of what its
channel allows**, and an operator who reads this instrument as opening marketing
generally will meet a refusal that looks like a bug and is the rule working.

## What the cap is counted against

**The person, not the address.** Under the identity-keyed governance design the
allowance belongs to a canonical identity, so two addresses that resolve to one
person share one allowance and a merge does not hand anyone a fresh budget. An
address-keyed count would let the same person receive the full allowance once
per destination they own, which is the failure the identity keying exists to
prevent.

**Per brand, and the brands do not pool.** Each of Congdon & Coleman Real
Estate, NantucketRentals.com, Nantucket Houses and Hello Nantucket counts its
own sends against its own allowance. There is no aggregate ceiling across them,
by the owner's decision of the same date.

**Marketing only.** Transactional and service communications are classified
separately and are not counted against these allowances, per §154. A class
wrongly classified as transactional escapes this instrument entirely, which is
why "required to perform the contract" is a line drawn by the privacy review
rather than at implementation time.

## Enforcement, and where it is preventive

On the three brands Odin sends, these allowances are **preventive**: the send
path consults them and refuses.

**On Hello Nantucket they are detective.** Beehiiv sends Hello's mail and Odin
sees `email_sent` only after delivery (`src/lib/hello/receiver.ts:667-706`), so
no Odin-side check refuses a Hello send — an exceedance is found in
reconciliation, after the mail is out. Hello's own sends are editorial email, so
they meet both the email allowance above and the untranscribed editorial class
cell, and neither can stop them before the fact. Preventing a Hello exceedance
needs the Beehiiv-side pre-send control, which the phase-7 plan carries and this
instrument does not deliver. Recorded because "the cap is ratified" reads like
"the cap is enforced", and on one of the four brands it is not.

**Nothing in the current code enforces any of this yet.** `decideDelivery`
implements suppression and consent and no cap at all
(`src/lib/comms/consent-policy.ts`). Ratifying the values makes the policy
citable; building the counter, the reservation and the verification is phase-7
work, and until it exists these allowances are a rule with no enforcement rather
than a rule being enforced.

## The risk this accepts, stated plainly

A person reachable by three commercial brands can receive three times the
per-brand allowance — on email, 6 per rolling week and 24 per rolling 30 days —
without any brand exceeding its own limit, and Hello's editorial cadence sits on
top of that, detectably rather than preventably. The owner has accepted this
shape twice on the same date: once in setting no aggregate ceiling, and once in
signing the cross-brand seeding amendment, which widens who is reachable by all
three. Neither decision is reopened here. Recording the arithmetic is what makes
revisiting it possible on evidence.

## Affected metrics

- Sends per person per brand per channel against each window, and the refusal
  rate at each — the measure of whether the caps bind in practice or are never
  reached.
- The share of refusals attributable to the 30-day window rather than the 7-day
  one, which is the signal that the monthly figure is doing the work the weekly
  one is assumed to do.
- Unsubscribe and complaint rate against send volume, per brand and per channel.
- Hello's reconciled exceedances — the count of sends that would have been
  refused had the check run before delivery, which is the standing measure of
  what the detective gap costs.

## What this does not change

- **The aggregate dimension.** No ceiling across the four brands, per
  `2026-09-15-no-aggregate-marketing-cap.md`. Aggregate volume is still counted
  and reported so that decision can be revisited.
- **Suppression, at every scope it has.** Nothing here weakens an opt-out, and a
  cap is not a substitute for one.
- **The withdrawal design**, at every axis it has — brand, channel and message
  class.
- **Consent.** A cap governs how often a permitted send may happen. It never
  makes a send permitted.

> Approved by: **Stephen Maury**  Date: **2026-09-15**

*Recorded by the branch owner on his written decision of 2026-09-15: "Yes,
ratify the numbers as they stand. Proceed with drafting … to move the rolling
7-day and 30-day limits from the build spec into operative policy."*

**What ratification does, and the two things it does not.** The per-brand
dimension stops being fail-closed for want of an instrument, so marketing on
SMS and email is no longer refused on that ground and the three unlimited
channels are unlimited by decision rather than by assumption. It does **not**
open the message-class dimension, which stays fail-closed on three untranscribed
cells upstream. And it does **not** enforce anything: no cap logic exists in the
send path today, so this instrument is the policy phase 7 must build to, not a
description of what the code does.
