# Amendment — channel becomes a revocation axis: any channel, per brand

- **Date raised:** 2026-09-15
- **Direction decided:** 2026-09-15 by the owner, answering the live
  revocation-unit marker in `docs/strategy/brands/congdon-coleman-ratified-strings.md`,
  which asked him to reconcile item 5's ratified revocation notice (unit:
  **brand**) with the 2026-09-05 withdrawal design (unit: **message class**).
  His answer took neither branch the marker offered: **"change the amendments,
  user must be able to opt-out of any channel per brand."**
- **Status:** **Approved and ratified — Stephen Maury, 2026-09-15.** The
  approval block at the end of this document carries his name and that date, and
  this line reports it. From that date **channel is a revocation axis**, which
  no prior instrument had made it.
- **Instruments amended:** `2026-09-05-cross-brand-consent-single-entity.md`
  (the withdrawal design and its storage model), and consequentially
  `docs/strategy/brands/skill/references/shared-standards.md`'s statement that
  *"withdrawal is per message class, multi-select"*.
- **Owner:** Stephen Maury
- **Drafted by:** the branch owner, on the owner's decision and at his
  instruction to change the amendments. Nothing here originates with the
  drafter: where his direction and a ratified instrument meet at a point he did
  not decide, this document records the reading that removes no existing
  guarantee and raises a marker rather than choosing.

## What the instruments said before this

The 2026-09-05 amendment settled the withdrawal unit as the **message class** —
the row of the sending-brand matrix — presented as a grid grouped by brand, with
required rows shown but not switchable. Its stated reason was granularity:
opting out of Hello Nantucket editorial must leave NantucketRentals.com
marketing and every brand's transactional mail untouched. The 2026-09-12
amendment reaffirmed that unit and added that **no coarsening is authorized**.

Item 5 of the ratified-strings record says something different in
customer-facing copy: *"You can stop these messages at any time, and choose
which ones stop — Congdon & Coleman Real Estate, NantucketRentals.com,
Nantucket Houses, or all three."* The thing a reader is offered there is the
**brand**.

Channel appeared in the consent record from the beginning — §5 stores consent
at `person × brand × channel × purpose`, and the 2026-09-05 amendment's own
title is *"consent is scoped to purpose and channel, not to brand"* — but only
as a dimension of what was **granted**. No instrument made it a dimension of
what a person may **withdraw**. That gap is what this amendment closes.

## What changes

**A person may switch off any channel for any brand.** The preference centre
gains a per-brand channel control alongside the per-class grid, for each of the
five channels the portfolio sends on: **email, SMS, push notification, in-app
message, and postal mail**.

The withdrawal unit is therefore no longer a single axis. A withdrawal is a
selection over **(brand, channel, message class)**, and a person may act on any
of the three:

| The person says | Effect |
|---|---|
| "Stop NantucketRentals.com marketing email" | One brand, one channel, every **marketing** class on it — service classes are not touched |
| "Stop Congdon & Coleman Real Estate's owner advisory and market reports" | One brand, one class, every channel |
| "Stop SMS from Congdon & Coleman Real Estate" | One brand, one channel, every **suppressible** class on it — marketing and the service classes that are not operationally required |
| "Stop all marketing" | The single-step path the 2026-09-05 amendment already mandates, unchanged |

**The first and third rows differ on purpose, and the difference was missing
until review caught it (P2).** *"Stop marketing email"* and *"stop SMS"* are not
the same request: the first names a **purpose** and the second does not, so the
first must leave service classes alone. The row said *"every suppressible class
on it"* for both, and `shared-standards.md` leaves **in-stay service**
suppressible while reserving only booking transactional, payment lifecycle and
lease execution as required — so a person asking to stop marketing email would
also have lost their check-in and home-guide mail, which they did not ask about
and would not expect. **The control's wording and its effect have to match**:
either the switch is labelled by purpose and stops only that purpose, or it is
labelled by channel and stops everything suppressible on it. Both exist; they
are different controls and the table now shows both. *This one is mine twice
over — the "every suppressible class" phrasing was added in the push that fixed
the previous finding on this same table.*

**Every row also names a brand, and the second one did not until an earlier
round caught it (P2).** It read *"Stop owner advisory and market reports → one class, every brand
that sends it, every channel"*, which contradicts this amendment's own rule
fourteen lines below that suppression stays brand-scoped, and contradicts the
2026-09-05 grid, where class rows are **grouped by sending brand** precisely so
that stopping Hello Nantucket editorial leaves NantucketRentals.com marketing
untouched. Built literally, one toggle on Congdon & Coleman Real Estate's market
reports would have stopped that class from brands the person never mentioned —
over-honouring a preference, which this plan says elsewhere is still not
honouring it, and which destroys the granularity the class axis exists to
provide. **The brand is part of a class withdrawal, not an alternative to it.**

**This is additive, and that is forced rather than chosen.** Channel does not
replace message class as the unit. The 2026-09-12 amendment forbids coarsening,
and dropping the class axis would coarsen: a person who today can stop editorial
while keeping market reports would lose that choice. Only the owner may
un-ratify a guarantee, and he did not ask to — he asked for a control that does
not exist yet, not for the removal of one that does. Read additively, his
direction and both prior amendments all hold simultaneously, and nothing else
about the grid moves.

**It also restores a rewrite of his that was set aside.** His privacy-policy
draft said a reader may switch things off *"by brand or channel"*. That phrase
was not adopted, on the reasoning — recorded in the phase-7 plan — that channel
was a dimension of the consent record and *"no decision names it as a revocation
axis"*. The reasoning was sound on the record as it then stood and is now
obsolete by his own act: this amendment is that decision. The draft's *"by brand
and by message type"* must gain channel before it goes to counsel.

## What this does not change

- **The message-class grid stands**, per 2026-09-05: every class a row, required
  rows shown with their reason, a toggle shown is a toggle honoured, and a new
  class needs its row before its first send.
- **The required set stands** — booking transactional, payment lifecycle, lease
  execution — and additions to it are still argued one class at a time.
- **Suppression stays brand-scoped.** Switching off email for one brand says
  nothing about the others. Global do-not-contact remains its own separate
  state, reached by its own control.
- **Consent collection is untouched.** This amendment governs withdrawal only.
  The three-brand grant, its enumeration rule, and Hello Nantucket's exclusion
  from it in both directions are exactly as the 2026-09-12 amendment left them.
- **Frequency is untouched.** The 2026-09-15 no-aggregate-cap amendment governs
  that dimension; a channel a person has switched off has no cap question.
- **The union rule for merged contacts stands**, and now operates over a wider
  tuple: a merge takes the union of withdrawals across every axis, so a channel
  switched off on either side is off after the merge.

## Where the direction meets ratified law at a point he did not decide

**A channel switch and a required class collide, and the collision is his.**
The 2026-09-05 design makes booking transactional, payment lifecycle and lease
execution non-suppressible; *"any channel"* read literally lets a person switch
off the only channel those classes have. Both cannot be true at once, and the
two readings ship different products:

- **Suppressible-only.** A per-brand channel switch stops that brand's
  suppressible classes on that channel; required mail still arrives there. The
  control must then say so on its face, because a switch labelled "email" that
  does not stop all email is the broken promise the 2026-09-05 amendment's own
  rule forbids.
- **Absolute.** The switch stops everything on that channel, required classes
  included, and the person carries the consequence of not receiving their lease
  or their payment receipt. A person who switches off every channel for a brand
  has reached global do-not-contact by another route, which needs saying rather
  than discovering.

**SMS already resolves absolutely, and not by anyone's choice here.** A carrier
STOP silences every message to that number, transactional included; it is
carrier-enforced and per number rather than per brand. So the absolute reading
is already law on one channel, which is an argument for consistency and not a
decision — carrier obligation does not extend itself to email by analogy.

This document does not choose. The marker is raised in the phase-7 plan, which
is what the open-work census scans; implementing the wider reading without his
word would remove a delivery guarantee the business relies on, and implementing
the narrower one silently delivers less than *"any channel"* says.

**He answered the same day, and his answer is recorded below the approval block
rather than written into the passage above** — the passage states what this
amendment left open, which is a fact about the instrument and stays true.

## Hello Nantucket, where this detects rather than refuses

Hello is the fourth brand and the suppression scope enum already carries it, so
a per-brand channel control covers it. What that control can do is narrower than
on the other three: **Beehiiv sends Hello's mail** and Odin sees `email_sent`
only after delivery (`src/lib/hello/receiver.ts:667-706`), so an Odin-side
channel switch on Hello is found in reconciliation rather than enforced before
the send. Hello sends on one channel, so "switch off email for Hello" is in
practice "unsubscribe from Hello", and the honest implementation is the
Beehiiv-side suppression the phase-7 plan already requires — not an Odin toggle
that reports success while Beehiiv keeps sending.

## What has to be built, and what was already required

The store cannot represent this today: `communication_suppressions` holds
`email_normalized` and a `scope` that is `global` or one of four brands, with no
class and no channel column, and `decideDelivery` consults only those scopes.
That gap is **not new work created by this amendment** — the phase-7 plan's step
0b already requires the class and channel dimensions in the schema, loader and
policy before the historical import runs, on the reasoning that an import must
preserve the dimensions it will later be queried by.

What this amendment adds to that plan is the **surface**: the withdrawal gate
must now render and honour per-brand channel controls, not only the per-class
grid, and its end-to-end verification must exercise a channel-scoped withdrawal
in both directions — refusals from every provider that sends on that (brand,
channel), and **sends still permitted** on the channels and classes the person
did not withdraw. A test that only checks the refusals passes a system that
suppressed everything.

## What is owed in copy, and by whom

Item 5's ratified revocation notice offers the brand and nothing finer. It was
already in contradiction with the class grid; it is now in contradiction with
two axes rather than one. **Only the owner may supply its replacement** —
ratified strings are verbatim-only and an unrecorded variant is drift whoever
typed it — so the marker in the ratified-strings record stays live and is
re-pointed at the string rather than at the design question this amendment
settles.

The same sentence is also in play under the acknowledgement's ratified
authorization sentence of the same date, whose closing clause — *"You can stop
promotional messages at any time"* — sits immediately before it and says nearly
the same thing, unscoped. One replacement string settles both.

> Approved by: **Stephen Maury**  Date: **2026-09-15**

*Recorded by the branch owner on his written decision of 2026-09-15: "change the
amendments, user must be able to opt-out of any channel per brand."*

**The one question this amendment left to him, answered 2026-09-15.** *"Channel
switch stops only suppressible classes, required mail still goes."* Recorded
here, below the approval block, as his act rather than as an edit to what the
instrument decides — the same way an approval is recorded. Its effect:

- A per-brand channel switch stops that brand's **suppressible** classes on that
  channel. Booking transactional, payment lifecycle and lease execution reach
  the person on a channel they have switched off, and the required set stays the
  set 2026-09-05 fixed.
- **Global do-not-contact keeps its monopoly.** Switching off every channel for a
  brand no longer amounts to it, so the only way to stop everything is the
  control built to do that.
- **The control may not be labelled by its channel alone**, because a switch
  reading "Email" that does not stop all email is the broken promise *a toggle
  shown is a toggle honoured* forbids. The required classes appear beside it as
  non-interactive rows, which is the shape the class grid already uses.
- **SMS stays asymmetric on purpose.** Carrier STOP still halts everything to a
  number, so a person can reach the absolute state there — through the carrier,
  not through this control, and at the cost of their booking and payment
  notices. The privacy draft already tells them so.

What this amendment did **not** settle was the customer-facing string, which is
ratified copy. **He closed it later the same day** — corrected after review
(P2), because this paragraph went on saying the string was owed after he had
supplied it, which is how an implementer blocks a rollout or re-asks an
answered question. The replacement notice is ratified at item 5 of
`docs/strategy/brands/congdon-coleman-ratified-strings.md`, and it does the
harder thing his channel decision created: it says both that a channel can be
stopped and that required booking, payment and lease mail still arrives on it.
