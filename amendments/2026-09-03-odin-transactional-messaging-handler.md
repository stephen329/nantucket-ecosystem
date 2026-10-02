# Amendment — lease lifecycle messaging consolidates into one Odin handler, brand identity carried per message

- **Date raised:** 2026-09-03
- **Direction decided:** 2026-09-03 by the owner, in the working session
  that produced `docs/lease-messaging-consolidation.md`: move lease
  messaging out of nrbe into a single Odin handler that sends with the
  appropriate branding, and confirm that payment, security-deposit, and
  similar reminder classes are office-sent rather than agent-sent.
- **Status:** **Approved and ratified — Stephen Maury, 2026-09-21.** The
  approval block at the end of this document carries his name and that date.
  Ratification authorizes the handler. It does not move a send: the rentals
  system keeps every class until that class is cut over.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** §3 brand separation as applied to which *system* produces a
  brand's messages; §4 routing matrix mechanics (strengthened, not
  relaxed); and the "keep their own systems" sentence in
  `2026-09-02-odin-interactive-send-governance-removal.md`.

## What the strategy currently says

§4, Global communication rule: "Each communication has one sending brand
and one customer job. Marketing contacts are subject to shared frequency
caps and suppression; transactional and service communications are
classified separately but still logged. An unsubscribe or preference change
must propagate to every system affected by that specific permission."

The 2026-09-02 amendment, recording the removal of governance from Odin's
interactive send surface, states as unchanged: "NantucketRentals
transactional, Nantucket Houses service, and Hello Nantucket editorial
messaging keep their own systems, consent states, and the full §4/§5 rules;
nothing routes those message classes through an agent mailbox."

## What this amendment does and does not change

**Changed — the producing system, not the sending brand.** NantucketRentals
transactional and Nantucket Houses service messages related to a lease may
be produced by a single handler in Odin rather than by each brand's own
system. Every message keeps its own sending brand, from-address, verified
domain, consent class, and voice; brand identity is carried per message
instead of per repository.

**Unchanged, and mechanically enforced for the first time.**

- The §4 routing matrix and the one-brand-per-message rule stand. In the
  consolidated handler they become structural: a caller passes a message
  class, and the class — not the caller — fixes the brand, template,
  transport, and consent requirement. A payment reminder cannot be sent as
  Congdon & Coleman.
- Transactional and service messages are classified and **logged**, one
  record per send. This restores for system-sent mail the audit trail that
  the 2026-09-02 amendment removed only for interactive agent-mailbox
  correspondence.
- Unsubscribe and preference propagation obligations stand, and are easier
  to honor from one handler than from four.
- Nothing routes these classes through an agent mailbox. Payment, security
  deposit, and similar reminders are office-sent — they do not come from an
  agent's address, and no unattended send impersonates an agent. Google
  domain-wide delegation is neither required nor requested.
- The 2026-09-02 exemption is untouched: Odin's interactive, agent-initiated
  Gmail sends remain individual correspondence from a named agent's own
  Workspace mailbox, ungoverned mechanically, and remain the only path for
  named-advisor Congdon & Coleman messages.
- Hello Nantucket editorial messaging is out of scope entirely.
- E-sign and executed-agreement mail stays with the signing system.

**Risk accepted.** Concentrating three brands' transactional mail in one
handler concentrates the blast radius: a defect or a domain reputation
problem can affect more than one brand at once. Mitigations are separate
verified sending domains per brand, per-class kill switches during cutover,
and the class registry making cross-brand mis-sends unconstructible rather
than merely discouraged.

## Reason

Two failures motivated this. Lease emails are addressed to whatever contact
addresses existed when the lease was created, so a corrected email address
never takes effect and delivery silently fails. And no lease email nrbe
sends is visible anywhere in Odin, so an agent cannot answer whether a
tenant was reminded.

Both are consequences of message production sitting outside the system that
holds the operational context. Fixing them in place would fix them once, in
one codebase, with the routing matrix still enforced by memory in each of
the others.

## Approval

The owner records approval here, with a date, and the Status line above is
flipped to match in the same commit. This follows the standing rule recorded
in [the Hello pilot amendment](2026-09-04-hello-pilot-data-conditions.md#approval):
merging does not by itself ratify an amendment in this repository.

**Earlier approval wording and the conflicting record.** This approval block
previously said "Approval pending" and provided that "merging the PR that
carries this amendment together with the plan it authorizes records approval."
[#250](https://github.com/stephen329/odin/pull/250) did carry both, and its
merge was marked "authorized by Stephen, 2026-09-03". Those facts are retained
here rather than treating the proposal status as proof that approval was
absent. The earlier merge clause is superseded here by the standing rule
above; this amendment's ratification is recorded by the explicit approval
below, dated 2026-09-21. This does not reinterpret the separate approval
record for the 2026-09-02 interactive-send amendment, which expressly records
its owner's approval through #216.

> Approved by: __Stephen Maury__  Date: __2026-09-21__

- **How this approval was given.** Stephen directed the pull request that
  carries this ratification on 2026-09-21, after the stale lease-address
  behavior was confirmed and this amendment was still unratified. The block
  was filled at his direction rather than typed by him.
- **What ratification does and does not release.** It authorizes the single
  Odin handler in `docs/lease-messaging-consolidation.md`. It does not move a
  class. Each class stays with the rentals system until that system's send
  for the class is off and the Odin send for it is on.
