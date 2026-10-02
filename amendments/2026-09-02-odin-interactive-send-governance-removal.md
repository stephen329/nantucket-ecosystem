# Amendment — Odin interactive agent-mailbox sends exempted from mechanical communication governance

- **Date raised:** 2026-09-02
- **Direction decided:** 2026-09-01 by the owner, in the working session that
  produced PR #216 ("drop the governance entirely"), and reaffirmed in the
  owner's review on that PR, which asked for this amendment to land in the
  same change.
- **Status:** **Approved and ratified 2026-09-02 by Stephen Maury.** PR #216,
  which carried this amendment alongside the change it authorizes, merged at
  02:37Z that day; by the terms recorded here that merge is the owner's
  approval, so the removal is ratified and this document is in force.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** §4 "Global communication rule" as applied to one surface —
  Odin's interactive, agent-initiated Gmail sends (the `/contacts` compose
  modal and the homeowner email modal); §5 consent-state expectations for
  the same surface; `docs/contacts-communication-governance.md` (now a
  historical record).

## What the strategy currently says

§4, Global communication rule: "Each communication has one sending brand and
one customer job. Marketing contacts are subject to shared frequency caps
and suppression; transactional and service communications are classified
separately but still logged. An unsubscribe or preference change must
propagate to every system affected by that specific permission."

Odin previously enforced this mechanically on its interactive send surface:
a declared purpose fixing brand and classification, a marketing opt-in gate,
suppression checks, contact-record eligibility verification, and one audit
row per intended recipient.

## What this amendment does and does not change

**Changed — this surface only.** Odin's interactive agent-mailbox sends are
individual correspondence from a named agent's own Google Workspace mailbox,
functionally equivalent to that agent writing from Gmail directly (where no
mechanical enforcement exists either). On this surface, purpose
classification, the marketing opt-in gate, suppression checks, eligibility
verification, and per-recipient policy audit logging are removed.
Responsibility for appropriate use of this surface rests with the sending
agent, exactly as it does for the agent's own Gmail account.

**Unchanged — everywhere else.**

- NantucketRentals transactional, Nantucket Houses service, and Hello
  Nantucket editorial messaging keep their own systems, consent states, and
  the full §4/§5 rules; nothing routes those message classes through an
  agent mailbox.
- The §4 routing matrix and one-brand-per-message rule stand; this surface
  produces only named-agent Congdon & Coleman correspondence.
- Unsubscribe/preference propagation obligations stand for every system
  that automates marketing. This surface automates none: sends are
  interactive, capped at 10 recipients, and delivered as individual
  messages.
- Recipient isolation (one To address per message; Cc restricted to the
  sender's own mailbox) is retained in Odin as a privacy construction, not
  governance.

**Risk accepted by the owner.** With this exemption, opt-out and suppression
honoring on this surface is the agent's responsibility, not the machine's.
If a suppression obligation must ever be enforced mechanically on
agent-initiated email, the controls must be restored here or the sends
routed through a governed path.

## Reason

The governance layer gated only Odin's compose convenience, while agents
retain unrestricted direct Gmail access to the same mailboxes; it therefore
added friction on the governed path without constraining the ungoverned
one. The owner judged the enforcement cost on day-to-day correspondence not
worth that asymmetry. This amendment records the decision so the strategy
and the code do not silently diverge.

## Approval

- **Approved 2026-09-02** by Stephen Maury (stephen@maury.net), document
  owner and executive sponsor, through the merge of PR #216 — which carried
  this amendment together with the change it authorizes — in the manner this
  document specified while it was still proposed. Drafted and committed by
  the branch owner on the owner's instruction.

_This status was flipped on 2026-09-09, a week after the merge that earned
it. Between the two dates the repository's own record said Odin's send path
was running an unratified deviation from §4, while the deviation had in fact
been approved — a status outliving the thing it depended on, which
`docs/strategy/brands/canonical-naming.md` names as the defect to watch for
and requires be corrected when the PR it names lands._
