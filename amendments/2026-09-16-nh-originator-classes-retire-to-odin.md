# Amendment — Odin originates and keeps rental inquiries and the people in them; the Nantucket Houses originator classes retire

> **September 20 ratified follow-up:** Stephen Maury approved the
> [person identity and historical alias amendment](2026-09-20-odin-person-identity-and-nh-aliases.md).
> It supersedes §1a/step 2's producer interpretation with Odin-owned person IDs
> and historical NH aliases. The canonical implementation prerequisite is
> satisfied. All other safeguards remain; Step 4 is not released and live
> authority has not moved.

- **Date raised:** 2026-09-16
- **Direction decided:** 2026-09-16 by the owner, in the working session that
  began with the Rental Opportunities dashboard widget and ended on the record
  classes behind it. His words, in order: that Nantucket Houses is a service of
  Congdon & Coleman Real Estate exactly as NantucketRentals.com is, and he could
  see no value in distinguishing identities between them; that lifecycle
  authority sitting with Nantucket Houses today *"doesn't mean it must be this
  way"*; **"stop the producer. Odin is the originator and record keeper"**; and,
  when the two shapes that satisfy that were put to him — intake stays and
  delegates identity, or intake relocates and lifecycle comes with it —
  **"shape 2."** Drafting this amendment was instructed by the owner in the same
  session.
- **Status:** **Approved and ratified — Stephen Maury, 2026-09-16.** The
  approval block at the end of this document carries his name and that date, and
  this line says so, which are together the conditions this amendment set for its
  own ratification, per the rule
  [`2026-09-14-nr-renter-pmo-record-class-migration.md`](./2026-09-14-nr-renter-pmo-record-class-migration.md)
  restates on the 2026-08-13 basis. Steps 0–3 of §3 are authorized — or steps 0,
  1 and 3, on the branch where step 1's choice folds the backfill into the
  cutover. **Step 4 is not released and nothing moves by ratification alone:**
  each class's system of record moves at the verified cutover, which is a
  separate release by the owner against the completed design.

  The conditions themselves are kept, because they are the rule the next
  amendment is read against: **a merge with Status still "Proposed" ratifies
  nothing**, whoever performs it. This document was merged in that state by
  [#448](https://github.com/stephen329/odin/pull/448) and ratified afterwards,
  which is the rule working rather than an exception to it. Nothing here alters
  `AGENTS.md` or the repository's review protocol; when a branch may merge and
  when an amendment is ratified remain separate questions.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** [`2026-09-04-odin-authoritative-crm.md`](./2026-09-04-odin-authoritative-crm.md)
  §"What this amendment changes" item 1 — this document is the *"per-record-class
  migration … recorded by its own dated amendment"* that clause requires, for the
  **two** classes named in §1a and §1b and no others. It is the twin of the
  2026-09-14 amendment, which discharged the same clause for `NrRenter` and
  `NrPmo`, and it follows that document's precedent of carrying two classes in
  one instrument. *It followed that precedent for sequencing too until §3
  collapsed to a single transition; this line still said "each with its own
  sequencing and reconciliation" a round after §1b's copy of the claim was
  corrected (Codex P2, 2026-09-16). §3 moves both classes together, and §3's
  own text says reading an inquiry-only sequence out of this document would
  build the split P-3 forbids.*
- **Supersedes:** the Rental Inquiries RFC §6 prohibition, *"No lifecycle,
  authorization, publication, or status logic may be reimplemented in Odin"*, for
  these two classes. See §5 — that RFC is maintained in a second repository, and
  this amendment records the portfolio decision, not the cross-repo edit.
- **No gate value changes.** No threshold, evidence floor, cohort window or
  stage date moves. No consent scope widens. No permission this portfolio holds
  is enlarged by anything below. No marker is filled.

## What this amendment is for

The 2026-09-04 amendment made Odin Postgres the system of record for canonical
contact identity, communication permissions and suppression — and froze
everything else: *"C&C/VRM and NH remain systems of record for the records they
originate today, until a per-record-class migration is recorded by its own dated
amendment."*

For the person class, the principle was already law and only the instrument was
missing — visible in Odin's own code, where `identity_link.source_system` has
carried `nh_renter` since migration `20260904120000`, the CHECK constraint
permits it, and **nothing in the repository writes it**. A slot was cut for the
Nantucket Houses renter in the canonical graph and never filled.

For the inquiry class, the owner's 2026-09-16 decision is new law. It is
recorded here rather than assumed.

## 1. What is different from the NrRenter/NrPmo migration

**Corrected on review (Codex P2, 2026-09-16).** This section first said the
2026-09-14 amendment moved a *closed* population and drew its whole distinction
from that. It is not closed: Sakari *"sends the SMS one-time code that gates
sign-in **and sign-up** for renters and the homeowner/PMO portal"*, so
NantucketRentals.com registration is live, and that amendment keeps `nrbe`
writable until each class's verified cutover. A one-time adjudication would have
omitted principals created after its snapshot there too.

So the distinction is not open versus closed. **Both amendments face live
producers**, and that the earlier one keeps its source writable until cutover is
why it carries P-1 at all. What is particular here is the *kind* of producer:

- The NantucketRentals.com classes grow when a person **registers** — a
  deliberate act, one principal at a time, adjudicable as it arrives.
- These classes grow when a **message arrives**. An inquiry mints a person with
  no registration step and no principal to adjudicate, at whatever rate inbound
  demand sets.

A fence that assumes a registration event to hang itself on does not exist here.
That is what P-4 is for.

Both classes have live producers, and these are theirs:

| Fact | Evidence |
|---|---|
| The platform mints person records continuously | `rental-leads/materialize.ts` resolves an inquiry to a person by normalized email then phone, and creates a `rental_contacts` row when nothing matches |
| Every lead must have one | `rental_leads.contact_id` references `rental_contacts` `ON DELETE RESTRICT` |
| It is a real person store, not a staging table | unique partial indexes on `normalized_email` and `normalized_phone`; `rental_identity_conflicts` retains both ids when an email and a phone disagree |
| Whether it is also an account store is **not** settled here | an earlier draft called it "not an account store" on the evidence that the guest-code path has never sent through Twilio. That evidence does not carry the claim: guest sign-in **is** email-only and working — *corrected 2026-09-17; an earlier revision wrote "was email-only … before 2026-09-12", which implied a change that never happened (see V-1)* — and a guest authenticates off the **lease record** rather than a registered account. V-1 asks the real question — who can obtain a sign-in code — and this table does not pre-answer it |
| The inquiry class is the platform's own system of record | ingestion, normalization, lifecycle, publication revisions, renter selection and audit history, per the authority split in [`rental-inquiries-pointer.md`](../../nh-agent-handoff/rental-inquiries-pointer.md) |

That table is why this document differs from its twin. Migrating rows and
stopping there would move a snapshot: the next inquiry mints a new record the
following day, and neither class is retired, only backdated.

**So the subject of this amendment is two producers, not two populations.**

### Two facts this document does not assert, and owes

Read from the platform itself, not from here. Prerequisites to cutover, not
conditions of ratification — the shape of the work is the same either way; only
its size changes.

- **V-1. Everyone who can authenticate — not the registered-user count.
  Corrected twice on review (Codex P2 then P1, 2026-09-16), and the second
  correction changed the question rather than the answer.**

  Earlier drafts argued a zero or near-zero population was *likely*, because the
  passcode path has never sent through Twilio. **That was wrong and it was
  load-bearing.** The Twilio state establishes only that the **SMS branch** has
  never sent, and the A2P campaign is sized to carry NH guest sign-in codes
  alongside the migrated nrbe passcodes.

  ***Corrected against the platform, 2026-09-17.*** This paragraph previously
  read that guest sign-in *"was email-only … until the 2026-09-12 change offered
  the lease record's email and mobile both."* **No such change exists.**
  Verified at `nantuckethouses-platform` `fefe2324`: `buildChannels`
  (`auth/guest-auth.ts:151`) still takes its phone argument as `_phone`, unused,
  still carries the comment *"SMS is intentionally disabled for now"*, and still
  returns an email-only channel list — returning `[]` when the email is absent.
  `guest-auth.ts` was last modified **2026-09-05**; only four commits exist in
  the whole 2026-09-10 → 2026-09-17 window and none touch authentication.
  `GuestAuthChannelType` admits `"sms"`, but **no code anywhere constructs an
  SMS channel.** The finding is recorded in
  [`rental-classes-cutover-step0-inventory.md`](../../nh-agent-handoff/rental-classes-cutover-step0-inventory.md)
  §4.1 and this correction was directed by the owner.

  **Guest sign-in is therefore email-only now, not formerly** — and the
  consequence runs the *opposite* way to the wrong premise. The premise implied
  V-1 had grown to every lease principal reachable by email **or** mobile. In
  fact a lease principal with a phone and no email on file **cannot obtain a
  sign-in code at all**: `buildChannels` yields no channel and
  `createGuestChallenge` throws.

  So the **predicate** V-1 ranges over is strictly narrower than this document
  assumed. **The population need not be** — *qualified 2026-09-17 on review;
  this read "V-1's population is correspondingly narrower", which asserts of the
  set what holds only of the predicate.* If every phone-bearing lease principal
  also has a deliverable email, the two predicates select the same set. **A
  lower count is therefore not an expected reconciliation result**, and an
  implementer who treats one as confirmation would repeat, in the other
  direction, the uncounted-quantity error this correction exists to fix. None of
  which softens what V-1 asks for: the set is still unread, and the direction of
  an error is not a substitute for counting it.

  *This correction changes no gate value and releases nothing.* It removes a
  false premise; the conclusion the premise was cited to support survives on the
  independent evidence in the next paragraph.

  **Then counting registered users turned out to be the wrong measure entirely.**
  A guest authenticates off the **lease record's** contact details: the code goes
  to the email resolved from that record, shown back only as a redacted hint.
  *Corrected 2026-09-17 with the premise above: this read "they pick between
  redacted hints and the code goes to the one chosen", which describes the
  multi-channel behaviour the same correction establishes does not exist. The
  channel list `toPublicChannels` returns holds exactly one entry, so the choice
  is nominal.* A platform with no
  registered-user rows at all can therefore still have a large population able
  to obtain a sign-in code — so "no registered users" would never have emptied
  P-2's surface, and treating it as though it did is how a cutover exposes an
  account ahead of the acknowledgement.

  V-1 is therefore the **complete population of sign-in-capable lease
  principals, and their live sessions**. This document asserts nothing about its
  size; it is read from the platform, and until it is, neither the
  reconciliation shape nor P-2's surface is known.

  **The live-session half is *authorized to be* discharged by a superset rather
  than enumerated — amended 2026-09-17; see step 0. It is not discharged yet.**
  *Corrected on review (Codex P1, 2026-09-17): this read "is discharged by a
  superset", a present tense that reads as completed — and since step 0 gates
  every later step, an implementer could have treated B3 as satisfied before
  enumerating anything, letting P-2 close over sessions nobody had verified.*

  What V-1 *is* has not changed: the sessions are in scope and P-2 must cover
  their holders. What changed is the **method** available for discharging them,
  because the platform records session issuance nowhere, so no list of those
  holders can be produced. **The discharge completes only when the artifacts
  step 0 requires exist** — the enumerated superset, the recorded containment
  evidence, and the demonstrated revocation path — and at the time of this
  amendment **none of them do**. A reader arriving at this paragraph expecting a
  session list should read step 0's clause and the inventory's §3.4 item 3 before
  concluding one is owed; a reader tempted to treat B3 as closed should read them
  before concluding that too.

  **And it is revalidated at the cutover, not inherited from step 0 — added on
  review (Codex P1, 2026-09-16).** Steps 1 to 3 run after the inventory, and in
  that window a new lease can become sign-in-capable or a guest can establish a
  live session. P-2 is verified per principal against a set that is already
  stale, so a late principal or session slips past the acknowledgement while
  every enumerated check passes. Either the authentication population is frozen
  from discovery until cutover, or V-1 is re-run immediately before authority
  moves. *V-2 was given this treatment a round earlier and V-1 was not, which is
  the same asymmetry twice.*

  **A population discharged by superset is re-run the same way, and
  re-enumerating the superset is not enough — added on review (Codex P1,
  2026-09-17).** The previous revision said only that the superset is
  re-enumerated. But **the containment and the revocation path are themselves
  platform facts**, and this sequence permits platform deployments between step 0
  and cutover. A new issuance path that mints a token without creating the row
  the superset is drawn from, or a verification path that stops consulting the
  revocation column, **breaks the proof while leaving the enumeration working
  perfectly** — the query still returns rows, and every holder it no longer
  contains walks past P-2. So the cutover gate **re-establishes containment and
  demonstrates revocation again**, on the code as deployed at that moment. The
  alternative, if that is too slow, is to **freeze the relevant authentication
  code and configuration** from step 0 until authority moves, and to say so
  explicitly rather than assume it.

  **And it re-checks the trigger itself — added on review (Codex P2,
  2026-09-17).** Step 0's clause says the discharge does not survive the platform
  beginning to record the membership: once that happens the exact list is owed
  again. But re-enumerating the superset, re-establishing containment and
  re-demonstrating revocation **all still pass** after a session store is added —
  so a procedure that checks only those three leaves the operator holding a
  discharge that has stopped qualifying, and holding it with a clean bill of
  health. The cutover gate therefore also asks the question step 0 asked: **is
  the membership still recorded nowhere?** A freeze substitutes for this only if
  it covers the code that could introduce such a store, which is wider than a
  freeze aimed at containment alone — say which is meant.
- **V-2. Every writer of every store in both classes** — `rental_contacts`,
  **`rental_identity_conflicts`**, **`rental_contact_external_links`**,
  `rental_leads`, and every dependent store in
  the inquiry class: publication revisions, unsent option drafts, renter
  selection, activities, communications and **the per-lead access grants in
  `rental_lead_access`**. *Widened on review (Codex P1, 2026-09-16): P-1
  was extended to fence those stores but V-2 still inventoried writers of the
  two tables only, so a worker appending history to a dependent store could stay
  undiscovered and write straight through a writer-based fence.* A second writer
  is a second producer, and P-4 binds every one of them. **This is not a schema
  question — corrected on review (Codex P1, 2026-09-16).** A schema yields
  triggers, constraints and roles; it cannot enumerate the intake routes, admin
  handlers, internal APIs, workers and operational paths that call these tables.
  V-2 is satisfied only by repository-wide writer discovery across the platform's
  code **and** verification of which runtime roles hold write privilege. A
  writer missed here is a producer still minting rows after cutover, into a
  store that is no longer authoritative — P-4 violated by something nobody
  listed.

Odin's records describe the Nantucket Houses platform; they are not that
platform. Where the two disagree, the platform wins and this section is
corrected rather than defended.

## 2. The decision

**Odin originates and keeps every rental inquiry and every person in one. The
Nantucket Houses platform ceases to originate either. Inquiry capture relocates
to Odin, and inquiry lifecycle relocates with it.**

`rental_contacts` is demoted to what the owner's 2026-09-15 reading already made
it — the **rental projection** of a canonical identity, holding a reference to
`contact_identity` rather than constituting a person. *"Identity stops living in
`rental_contacts` and the table stays the rental record."* This amendment does
not delete either table; it removes their standing as originators.

### The properties every cutover must have

The three the 2026-09-14 amendment fixed — **P-1** (no lost write, and the fence
does not end at the switch), **P-2** (no access ahead of the acknowledgement),
**P-3** (atomicity for a person in both classes) — bind every cutover here too.
They are read there, not restated, so a later correction reaches this document
automatically.

**But citation alone would bind them vacuously — corrected on review (Codex P1,
2026-09-16).** Those properties carry predicates naming *their* subjects: P-1
fences commits to `nrbe`, and P-3 coordinates a person holding both an
`NrRenter` and an `NrPmo` row. Neither predicate reaches a write to
`rental_contacts` or `rental_leads`, so a migration here could lose a source
write or split a person from their inquiries while satisfying both on their
face. The properties are adopted **with their subjects parameterized to this
amendment's classes**, and it is that reading, not the literal text, that binds:

- **P-1 here** fences commits to **every store in both classes** —
  `rental_contacts`, `rental_identity_conflicts`,
  `rental_contact_external_links`, `rental_leads`, and the
  inquiry class's dependent stores: publication revisions, unsent option drafts,
  renter selection, activities, communications and access grants — plus every
  other writer V-2 identifies, on the same terms: no commit lands unreplicated
  after the reconciliation point and before authority moves, and the fence does
  not expire at the switch. *Extended on review (Codex P1, 2026-09-16): naming only the two
  tables left the dependent stores unfenced, so a late revision or message could
  land after P-7's inventory and be lost while the destination still matched
  that inventory exactly.*
- **P-3 here** is atomicity across the **person and inquiry classes**: a person
  and the inquiries referencing them do not end up split across two
  authorities, one of which is still writable. `rental_leads.contact_id`'s
  `ON DELETE RESTRICT` makes that pairing structural rather than incidental.
- **P-2 here** is unchanged in subject: it is about a customer reaching an
  account ahead of the acknowledgement. Its surface is the sign-in-capable
  population V-1 asks for — lease principals and live sessions — **not** a count
  of registered accounts, which would understate it and, on this platform, could
  understate it to zero.

The mechanism stays with the design document in §3; what is parameterized here
is what the mechanism must achieve.

Two more, because this amendment's subject is producers and in-flight work:

> **P-4. No platform-minted record after cutover — widened on review (Codex P1,
> 2026-09-16).** No intake endpoint, admin screen, internal API or background
> task in the Nantucket Houses platform may mint or mutate **any record in either
> class**: a person, **a conflict record or its resolution state**, an inquiry,
> or any dependent lifecycle record — publication revisions, unsent option
> drafts, renter selection, activities, communications and per-lead access
> grants. Every producer V-2 inventories is shut down, not merely fenced.
> Capture arrives at Odin, and the platform holds at most a reference to what
> Odin minted.
>
> *The first draft named only persons and inquiries. A worker still appending
> activities or communications after cutover, durably forwarding each one, would
> have satisfied P-1 — nothing lost — and P-4 as written, since it minted
> neither a person nor an inquiry. The platform would have remained the
> originator of lifecycle history that §2 moves to Odin and §1b puts inside the
> retired class. Forwarding a write is not retiring the producer that makes it.*
>
> **The inventory is revalidated at the cutover, not inherited from step 0 —
> added on review (Codex P1, 2026-09-16).** V-2 is a point-in-time discovery and
> steps 1 to 3 happen after it; a platform deployment or a runtime-role grant in
> between can add a writer the recorded list never held. Shutting down "every
> producer V-2 inventories" would then pass while that new producer kept writing
> the retired store. So either deployments and privilege changes to the platform
> are frozen from discovery until cutover, or **both the repository and
> runtime-role discovery are re-run as an immediate cutover gate** and the list
> reconciled before authority moves.

> **P-5. Continuity for an inquiry in flight.** An opportunity open at cutover
> is the *same* opportunity afterwards — its audit history, publication
> revisions and communications move with it, and an agent working it sees a
> continuation rather than a copy with a new id. A migration that produces a
> second record for a live inquiry has not satisfied this, however complete its
> field mapping.

> **P-6. Operator authorization survives the seam — added on review (Codex P1,
> 2026-09-16), and its timing corrected in the round after (Codex P1,
> 2026-09-16).** Today every agent read passes a short-lived operator token
> whose deactivation and revocation semantics the platform enforces (RFC §3.4,
> §15). **The step 4 cutover removes that boundary**, and §5 supersedes the RFC's
> authorization restriction, so nothing else in this document would require Odin
> to enforce anything in its place. *Both references read "step 5" until the
> sequence collapsed to end at step 4 and these were left behind — corrected on
> review (Codex P2, 2026-09-16). P-6's requirement is timed relative to that
> removal, so a stale pointer attaches the authorization gate to an event that no
> longer exists.* Odin's own store enforces authorization **at least as
> restrictive** as the operator token it replaces — an operator the platform
> would reject, whether deactivated or revoked, reaches no inquiry and no
> mutation.
>
> **And the token was only half of it — widened on review (Codex P1,
> 2026-09-16).** The platform decides *whether this operator is valid* from the
> token and *which inquiries this valid operator may touch* from the per-lead
> grants in `rental_lead_access`, through `canOperatorViewLead`. §1b added those
> grants to the class and this property still spoke only of the token, which
> named the gap without closing it: carrying every grant row across satisfies
> P-7 and leaves Odin free to show every valid operator every inquiry. Parity is
> over both halves, **positively and negatively** — a granted operator reaches
> the inquiry, an operator with no grant on it is refused, on reads and on
> mutations alike.
>
> **And per role, not per grant — corrected on review (Codex P1, 2026-09-16).**
> The wording above reduced the store to granted-or-not and then let every
> granted operator through to mutations. `rental_lead_access` is not binary: it
> carries `owner`, collaborator and viewer, and reassignment is further gated by
> `canAssignOrShare`, which today admits `admin`/`owner` only
> (`docs/nh-agent-handoff/rental-opportunities-assignment.md:39-42`). Read
> literally, the fix for one privilege gap opened another — a viewer performing
> owner-only mutations once the seam is gone.
>
> **And across two role dimensions, not one — corrected again on review (Codex
> P1, 2026-09-16).** "Per grant role" was still one dimension short, and the
> collision is on a word: `assignLeadOwner` grants the **lead-level** `owner`
> role, while `canAssignOrShare` admits the **operator's account role**
> `admin`/`owner` — and the same source is explicit that these are different
> tests, since it says extending reassignment to *"current owner of the lead"*
> would have to be added there and is not what the check does today
> (`docs/nh-agent-handoff/rental-opportunities-assignment.md:39`). A matrix
> keyed on the grant alone therefore lets an ordinary agent holding a lead-level
> `owner` grant reassign, a combination NH rejects. **Parity is over the
> operator's account role and the per-lead grant role together, for each
> operation**: each pair reaches exactly the reads and mutations the platform
> allows that pair and no more, verified in both directions.
>
> *Three rounds widened this property — token, then grant role, then the
> operator role beside it. Recorded rather than smoothed over: each widening was
> a real gap, and the shape of them says the authorization surface has two
> independent dimensions that a single-axis reading keeps collapsing.*
>
> **The replacement control is live before the seam is removed, not after
> authority moves.** The first draft said "after cutover", when the sequence
> still removed the seam at one step and moved authority at a later one —
> leaving an interval in which Odin served its own store with the platform's
> check gone and nothing stated in its place. §3 has since collapsed those into
> a single transition, which narrows that interval but does not remove the
> requirement: **P-6 is satisfied and verified before the cutover begins**, not
> as part of its completion.
>
> A relocation that satisfies P-1 through P-5 and drops this has widened who can
> read renters' messages, which is not a consequence this amendment authorizes.

> **P-7. Every record in both classes is migrated and read back — added on
> review (Codex P1, 2026-09-16), then twice widened in the round after (Codex P1
> ×2, 2026-09-16).** P-5 tests only opportunities open at cutover, so a
> migration that carried every open one and dropped every closed lead,
> publication revision, activity and communication would pass the sole test §4
> named. Before authority moves, the **complete** population of both classes is
> inventoried at source, migrated, and read back against that inventory.
>
> **Both classes, not just the inquiry one.** The first draft inventoried
> `rental_leads` and its dependents only. `rental_leads.contact_id` proves every
> lead has a contact — never that every contact has a lead — and V-2 anticipates
> other contact writers, so a standalone `rental_contacts` row could be dropped
> while the lead reconciliation and the write fence both passed. Every source
> `rental_contacts` key resolves to a verified destination record before person
> authority moves.
>
> **Content and relationships, not counts and keys.** The first draft compared
> "by count and by key", which proves rows exist and nothing about what is in
> them: a migration can preserve every primary key while blanking a
> communication body, losing revision state, or attaching an activity to the
> wrong lead. Read-back is field-level or checksum comparison, **and** verifies
> each dependent record still hangs off the same parent.
>
> Closed history is the larger part of this class and the part no agent is
> watching, so it is the part that fails quietly.

> **P-8. The renter's own path still works afterwards — added on review (Codex
> P1 ×2, 2026-09-16), and it fixes a shape shared by all seven above.** P-1
> through P-7 are every one of them *negative and agent-side*: they forbid a
> lost write, an early sign-in, a split person, a surviving producer, a broken
> continuation, a widened operator surface, a dropped record. Not one requires
> anything to keep **working** for the customer. A cutover that left the whole
> renter-facing surface inert would satisfy all seven.
>
> Two limbs, each verified by exercising it rather than by the absence of an
> error:
>
> - **Publication and response.** An inquiry with a published option revision,
>   or one awaiting the renter's selection, keeps its renter-facing route
>   resolving across the cutover, and a selection made after it reaches Odin.
>   Renter-facing publication sits inside the Phase F contract — *"selection,
>   notes, availability, pricing, and renter-facing publication"* — so a
>   migration can move every record and verify every field while the renter can
>   no longer view or answer the opportunity.
> - **Authentication, across the whole population.** Guests in the V-1 population
>   can still obtain a sign-in code after cutover, and the principal each
>   produces reaches the same leases and stays as before. P-2 forbids access
>   *ahead* of the acknowledgement and says nothing about access after it, so
>   switching guest authentication off entirely would have passed every gate this
>   document set. **Coverage is every principal, or failing that every
>   channel-and-mapping cohort — not one guest.** *Corrected on review (Codex P1,
>   2026-09-16): the first wording said "a guest", an existential test one
>   email-capable principal with a correct mapping passes while phone-only guests
>   cannot obtain a code at all and others reach the wrong stays.*
>
> - **Authorization, stated negatively as well as positively.** Odin **rejects**
>   a guest who is not the renter on that inquiry, on both the publication and
>   the response routes. *Added on review (Codex P1, 2026-09-16). The limb above
>   proves only that the intended renter can reach their opportunity; nothing
>   required that anybody else cannot. Authorization for these routes lives in
>   the platform today — the pointer doc puts lifecycle, authorization,
>   publication and status logic there — and §5 removes that seam, while P-6's
>   subject is the operator, not the renter. Renter-facing authorization had no
>   property at all.* Ownership parity and negative cross-renter tests are verified before
>   cutover, not inferred from the positive path passing.
>
> - **The agent's lifecycle mutations.** After the move an agent can create and
>   edit options, publish a new revision, change disposition and append
>   activities — the Phase F workflows Odin is replacing. *Added on review (Codex
>   P1, 2026-09-16): P-4 shuts down every platform lifecycle producer and the
>   first draft of this property verified only the renter's side, so the cutover
>   could complete with new inquiries permanently read-only and every gate
>   green.* **And the access grants with them — widened on review (Codex P1,
>   2026-09-16).** P-4 shuts down the platform's producer for
>   `rental_lead_access` too, so the initial owner grant on a new inquiry,
>   assignment, reassignment and sharing are all Odin's to make afterwards. A
>   smoke test on an opportunity that already has its grants passes while every
>   new inquiry lands unreachable. Exercise grant creation and the assign,
>   reassign and share mutations, not only the records that survived the move.
>
>   **And assignment carries the contact with it — added on review (Codex P1,
>   2026-09-16).** Exercising the grant mutation alone is not the workflow:
>   *"the assignee also becomes the owner of the renter's CNC contact"*
>   (`docs/nh-agent-handoff/rental-opportunities-phase-f-core.md:17`), and the
>   agent is told so before confirming — *"Contact ownership and this
>   opportunity move together"*. It is not a courtesy. NH assigns every open
>   lead to whoever owns the renter's CNC contact, so an Odin that moved the
>   opportunity and not the contact would have the next owner sync flip the lead
>   back (`rental-leads/cnc-owner-sync.ts`, cited from
>   `docs/nh-agent-handoff/rental-opportunities-assignment.md:8-16`). A
>   replacement can pass the limb above while leaving the two systems naming
>   different agents. The CNC contact transfer is exercised with assignment, or
>   this document supersedes that contract explicitly — it does not, so it is
>   exercised.
>
>   **And verified by its outcome, not by having run — corrected on review
>   (Codex P1, 2026-09-16).** "Exercised" was the wrong word for this path.
>   `POST .../assign` moves the NH lead first and the CNC `PATCH` follows, so a
>   lookup that could not run is *reported* to the assigner as a failed transfer
>   with the lead already moved
>   (`docs/nh-agent-handoff/rental-opportunities-assignment.md:22-23`). A gate
>   that invokes the transfer is satisfied by precisely the outcome this
>   paragraph exists to forbid — the two systems naming different agents, which
>   the next owner sync then reverses. The gate is that **the matched CNC
>   contact ends with the assignee as its owner**; a reported `transfer failed`
>   fails it.
>
> - **New capture, on the inbound side — widened on review (Codex P1,
>   2026-09-16), and it is this property's subject, not a ninth.** Step 4 stops
>   the platform's intake and asserts that inquiries now arrive at Odin; its
>   verification list then reduces that to checking the old producer is off. P-1
>   covers writes in flight around the fence and the limbs above exercise
>   opportunities that already exist, so a relocated intake that is broken or
>   routed for only some ingress cohorts passes every named gate while new
>   demand is discarded silently. A message arriving after the switch creates
>   its person, its inquiry and its initial lifecycle state in Odin — exercised
>   **for each ingress cohort**, since the cohorts are what a partial routing
>   splits.

P-4 through P-8 are properties, not mechanisms. The fencing and relocation
mechanisms belong to the design document named in §3, where the properties are
not negotiable and the mechanism is not decided here.

### The set is closed at P-8 — decided by the owner, 2026-09-16

**"The design document carries the mechanism, stop adding properties."**

Six review rounds produced twenty-nine findings, every one verified and every one
real, and the shape of the last two was unmistakable: each property added created
surface for the next round to test, and the answer each time was another, finer
property. That is the pattern the 2026-09-14 amendment named in its own third
round — *"the signature of an authorization instrument being asked to carry a
distributed-cutover design"* — and it resolved it exactly as this line does:
*"this document fixes the properties a cutover must have and leaves the mechanism
to that design document. The properties are not negotiable there; the mechanism
is not decided here."*

So **P-1 through P-8 are the complete set**, and this amendment does not grow
further to absorb review. A later finding that asks for a finer gate, a
verification method, a freeze protocol, a coverage matrix or an ordering within
the transition is **mechanism**: it is owed by the step-3 design document, which
has its own review and its own author, and it is recorded below rather than
answered here. A finding that shows this document *asserts something untrue*,
contradicts itself, or scopes a class wrongly remains a defect in this document
and is fixed here — that distinction is the line, not the finding's severity
label.

### What the design document owes

Recorded as follow-up work rather than absorbed, per the decision above. None of
these is a defect in this instrument; each is a question the mechanism must
answer, and each came out of a review round:

- The atomic mechanism for a transition this wide — write freeze, verified
  dual-write, or an equivalent — including the ingress drain P-1 requires.
- How the read-back of P-7 is performed: checksum or field comparison, and how
  parent relationships are proven rather than sampled.
- The coverage matrix P-8 implies: which principals, channels and lease mappings
  are exercised, the negative cross-renter cases, the ingress cohorts a new
  message can arrive through, and the operator/lead pairs that prove grant
  parity in both directions.
- The revalidation procedure for V-1 and V-2 immediately before cutover, and
  what freezing the platform's deployments and privilege grants entails.
- The ordering *within* step 4's single transition, given that the projection
  demotion, the authority move and the producer shutdown must all land inside
  it.

## 1a. The person class

`rental_contacts`, **`rental_identity_conflicts`**,
**`rental_contact_external_links`**, and the `nh_renter` slot in
`identity_link` that has never had a producer. Odin mints and keeps the person;
the platform keeps a reference.

*Superseded in part, 2026-09-20.* The stores named here are still the person
class, and Odin still mints and keeps the person — on `contact_identity.id`,
never under an `nh_renter` origin. That slot is what changed: the
[September 20 amendment](2026-09-20-odin-person-identity-and-nh-aliases.md),
ratified that day, makes it an alias namespace holding historical NH contact IDs
rather than the source a person is born under. It still has a producer and still
needs one. `docs/sales-matching/rental-opportunities-name-dedup-scope.md` defines
acquiring the producer as writing the mirrored `identity_link` pointer; the
backfill writes those alias rows, and NH stays the live authority until the joint
cutover. What retires is minting the person under it, and a new Odin-originated
person needs no NH alias at all. *(Corrected on review, Codex P1, 2026-09-20: the
first version of this note said the slot is given "no producer", which reads as
license to drop the alias writer and lose the historical keys this amendment
exists to preserve.)* §3 step 2 is annotated to match.

*The conflict store was added on review (Codex P1, 2026-09-16). §1's own evidence
table cites it — it retains both candidate contact ids when an email and a phone
resolve to different people — and the class definition left it out, while step 2
only enqueued conflicts Odin's linker discovers afresh. P-7 could then verify
every `rental_contacts` row while the platform's existing conflict decisions and
their evidence were discarded, which is how a later reconciliation merges the
wrong two people or reaches another guest's stays. Its rows and their resolution
state are inside the inventory, the migration, the relationship read-back and the
cutover gate.*

*The external-link store was added at the owner's direction, 2026-09-16, on the
step-0 inventory's finding ([odin#457](https://github.com/stephen329/odin/pull/457)
§4.2). `rental_contact_external_links` (platform migration `030`) maps
`contact_id` to `(external_system, external_contact_id)` with a verification
method and a confidence, over a closed set that already includes `odin`,
`cnc_cloud`, `nantucket_rentals`, `guest_portal` and `intercom`. It is the
platform's own cross-system identity correspondence — the thing `identity_link`
is being built to become — it has a live writer (`cnc-owner-sync.ts:75`), and it
cascades on contact delete. Left out of the class it fell outside V-2's writer
discovery, P-1's fence, P-4's shutdown and P-7's read-back at once, which is the
same shape as the two omissions corrected above and the drafts corrected in §1b.
The consequence is its own, though: a migration could carry every
`rental_contacts` row and verify every field while discarding correspondences
the platform had already established, leaving Odin's linker to re-derive from
scratch what was already decided. Whether such a row can *substitute* for
adjudication is a separate question, answered in §3 step 2 and mostly in the
negative: the store's only live writer stamps `email_match` / `high`
unconditionally, so most rows restate a single-key email match rather than
corroborate one. Its rows, their verification method and their confidence are
inside the inventory, the migration, the relationship read-back and the cutover
gate — as data to carry and cross-check, not as evidence that bypasses review.*

## 1b. The inquiry class

`rental_leads` and the records hanging off it — publication revisions, **unsent
option drafts**, renter selection, activity and communications history, and
**the per-lead access grants in `rental_lead_access`**. Odin becomes the system
of record for all of it, and the surface that captures new inquiries.

*The access grants were added on review (Codex P1, 2026-09-16). Who may see a
lead is not a field on the lead: `canOperatorViewLead` gates every agent read,
assignment "grants the `owner` access role" alongside `assigned_operator_id`,
and collaborator and viewer sharing writes the same store
(`docs/nh-agent-handoff/rental-opportunities-assignment.md:39-42,50`). Left out
of the class, the grants fall outside V-2's writer discovery, P-1's fence, P-4's
shutdown and P-7's read-back at once — so a migration could carry every lead,
verify every field, and leave the operators who own those inquiries unable to
open them. P-6 does not catch it: its subject is the operator token the platform
validates, not the per-lead grant that decides which inquiries a valid operator
may see.*

*The drafts were added on review (Codex P1, 2026-09-16). Phase F persists them
through the options API — selected listings, draft availability, quoted price and
guest note, "without changing published snapshots" — so an open opportunity can
hold an agent's unsent work that no published revision reflects. V-2, P-1, P-4,
P-5 and P-7 all inherit this class boundary, so omitting the draft store let a
migration pass every inventory and read-back while silently dropping it.*

This is the class the 2026-09-04 clause had in mind when it froze *"the records
they originate today"*, and it is the larger of the two by a wide margin. *An
earlier draft closed here by saying §3 sequenced this class separately from 1a's
— true when it was written and false since the collapse to one transition
(corrected on review, Codex P2, 2026-09-16). §3 moves both classes together, and
a designer reading an inquiry-only sequence out of this paragraph would build
exactly the split P-3 forbids.*

## 3. Sequencing

Each step gates the next.

0. **Verify V-1 and V-2** against the platform itself — its schema **and** a
   repository-wide search of its code for writers, **and** the runtime roles
   holding write privilege. Record **a stable, deduplicated per-principal
   membership list** for each V-1 population, **keyed in the source systems**,
   and the full writer list. Counts are a checksum over that list, never the
   deliverable.

   **Where a population's membership is recorded nowhere, it may be discharged
   by a conservative superset instead — amended 2026-09-17 by the owner**, on the
   trace recorded at **§3.4 item 3** of
   [`rental-classes-cutover-step0-inventory.md`](../../nh-agent-handoff/rental-classes-cutover-step0-inventory.md),
   and on the finding and decision recorded at **§4.4** of that same document.

   > **Ordering note, added on review (Codex P2, 2026-09-17).** §4.4 lands in
   > [odin#472](https://github.com/stephen329/odin/pull/472) and **does not exist
   > until it merges**; §3.4 item 3 is already present. **This amendment must not
   > merge before #472**, or the authoritative cutover procedure would cite
   > containment evidence a reader cannot open. The substantive citation above is
   > §3.4 item 3 for exactly that reason — it carries the platform trace, and it
   > is there today.
   The step as originally ratified demanded a per-principal membership list for
   **every** V-1 population. That turned out to be unsatisfiable for one of them:
   B3, the holders of live guest sessions, whose credential is a stateless JWT
   whose issuance the platform writes to no authoritative store — so the list is
   not merely hard to produce, it is producible **by nobody**, and neither is the
   "proof the set is empty" the inventory first offered as an alternative. A gate
   that cannot be passed is not a gate; it is a stop. This clause is the narrow
   way past it, and it is narrow deliberately:

   - **The trigger is absence of a record, not difficulty, and not
     unreachability.** It applies only where the membership **is written
     nowhere** — no system holds it, whether or not anyone can currently reach
     that system — and that claim is itself evidence a reader can check.
     *Tightened on review (Codex P1, 2026-09-17): this read "written in no system
     **reachable at this step**", which contradicted its own next sentence — a
     system the operator has no credentials for is unreachable, so an
     authoritative list that plainly exists would have qualified for the
     discharge merely because access had not been arranged.* Cost, access
     friction, missing credentials, an awkward query, a system nobody wants to
     touch, and a live read that has not been scheduled do **not** qualify.
     **Where the record exists, the list is owed — go and get it.**
   - **The superset is enumerated per principal, to the same standard.** It does
     not inherit a weaker deliverable because it stands in for one. P-2 is
     verified against **every member of the superset**, which is what makes the
     substitution safe.
   - **Containment is established and recorded, never assumed.** The record must
     say why the population is contained in the superset, from platform
     evidence.
   - **A revocation path for the superset's members is recorded, demonstrated
     *and* durable.** Identifying a mechanism is not enough: a path nobody has
     exercised is not a path, and the acknowledgement's whole value rests on
     being able to act on it. **Nor is a path that an ordinary later operation
     can undo** — *durability added on review (Codex P2, 2026-09-17), after the
     first application's own path turned out to be reversible: clearing the flag
     restored every unexpired credential it had revoked, so a routine account
     restoration would have re-enabled sessions P-2 never acknowledged.* Where
     the mechanism is reversible, it is paired with something that is not, or the
     reversal is closed off and recorded as closed; and where the credential's
     maximum lifetime is unknown, **no one can compute when reversing it becomes
     safe**, so the question cannot be deferred to judgement at the time.
   - **No claim may be made about how much larger the superset is** without
     counting it. A superset established by containment is *possibly* larger,
     never provably so — it may be equal — and stating otherwise misrepresents
     the cost of this discharge to whoever weighs it later.
   - **The discharge is recorded as a discharge**, naming the population, the
     superset, the containment evidence and what remains unknown, so a later
     reader sees that this population was substituted for rather than
     enumerated.
   - **It does not transfer and it does not persist.** It is granted for a named
     population on named evidence. Another population needs its own showing, and
     if the platform later begins recording the membership, the list is owed
     again.

   *First and so far only application: B3, **authorized to use this discharge
   method** — the **`users` population where `deleted_at IS NULL`** as the
   superset, `users.deleted_at` as the revocation path, **made durable by a
   permanent tombstone** — the owner settled that on 2026-09-17 after the
   reversibility was found: for these principals the flag is never cleared, and a
   returning guest gets a new row rather than a restoration. Per §3.4 item 3 and
   §4.4 of the inventory, which also records what that choice costs — restoring
   such an account stops being an available support action, and the guarantee is
   an operational one, since nothing in the schema prevents the column being
   cleared. **The superset was named as the unfiltered B1 population
   until a review on 2026-09-17** showed B1's containment rests on an issuance
   ordering that holds in the commit inspected but cannot be shown to hold for
   every commit that could have minted a still-valid token; authentication
   requires a `users` row and never a stay link, so the `users` predicate is the
   one that follows from the middleware alone. **B3 is not
   discharged.** Corrected on review (Codex P1, 2026-09-17): this read "B3,
   discharged by…", and a reader who stopped at the first clause would have taken
   the authoritative application record as a completed one — the same misreading
   §1 was corrected for one round earlier, left standing here. The discharge
   completes when the enumeration and the demonstration exist, and **neither
   does**.*

   **Destination mappings are not part of step 0 —
   corrected on review (Codex P1, 2026-09-16).** The previous revision of this
   step asked for the membership list "with its destination mapping", which this
   sequence cannot produce here: the destination is `contact_identity` /
   `identity_link`, which step 2 creates, and deriving a mapping before step 1
   repairs `decideLink` would require exactly the single-key email or phone match
   step 1 declares unsafe. Step 0 would then be completable only by using the
   unfixed linker, guessing, or not at all. The mapping is populated and
   adjudicated **after** the step 1 repair and the step 2 backfill, and is
   verified before it is relied on for P-2 at step 4. *Corrected on review (Codex P1, 2026-09-16): this step said
   "Record the counts", while P-2 below is verified **per principal** — so an
   implementer following the authoritative sequence could advance on totals, in
   which one omitted principal is hidden by one duplicate and the arithmetic
   still reconciles. The step-0 record produced under the old wording
   ([odin#457](https://github.com/stephen329/odin/pull/457)) had already been
   corrected the same way; each step gates the next, so the gate has to ask for
   what the gate needs.* **Record also whether the `NrRenter` and `NrPmo`
   cutovers have completed** — step 4 waits on both, for the reason given below
   this list. *Added on review (Codex P1, 2026-09-16).*
   *Corrected on review (Codex P1, 2026-09-16): V-2's definition was widened in
   the previous round but this executable step still said "against the
   platform's schema", which is the defect the widening existed to remove.*
1. **Close the linker hole first — and it is wider than the absent-name branch.**
   `hasNameConflict` (`src/lib/identity/names.ts:82-88`) returns `false` when
   either name is absent — *"unknown ≠ conflict"* — so an import carrying
   incomplete names auto-links exactly the cases most likely to be wrong. The
   2026-09-14 amendment recorded that finding; it is unfixed.

   **But `decideLink` also auto-links on a sole email or phone hit whenever the
   two names are merely compatible** (`src/lib/identity/linker.ts`:
   `kind: 'auto_link'`, `method: 'exact_email'`, `confidence: 'high'`, and the
   same branch for phone). That is a single-key match on two complete-name
   records — precisely what §4 calls insufficient evidence of one person, since
   a household shares an address and a carrier reassigns a mobile number. A
   document cannot state that rule in its reconciliation plan and then run a
   backfill that violates it two steps earlier.

   So this step requires independent corroboration, or an enqueue for review,
   for **every** single-key match — not only those with an absent name — before
   any of it runs. *Widened on review (Codex P1, 2026-09-16).* When V-1 is
   non-zero the failure is not a merged duplicate but the wrong person reaching
   another's stays.

   **And the invariant is not the backfill's alone — widened again on review
   (Codex P1, 2026-09-16).** After capture relocates, Odin's own intake resolves
   every incoming inquiry to a person down the same `decideLink` path. A new
   message carrying a shared household email or a reassigned mobile would take
   the same single-key auto-link and attach the inquiry, and whatever account
   access follows it, to the wrong identity. Scoping the fix to the one-time
   import would have left the permanent producer doing exactly what the import
   was forbidden to do. The corroboration-or-review rule binds **the live Odin
   originator too**, from the moment it begins capturing.

   **And the sequence opens a hole in its own invariant — added on review
   (Codex P1, 2026-09-16).** Everything above binds Odin: its backfill, and its
   intake once capture relocates. Capture does not relocate until step 4, so
   through steps 1 to 3 the platform is still the originator and still linking
   by the rule this step forbids — `rental-leads/materialize.ts` resolves an
   inquiry to a person by normalized email then phone and creates a
   `rental_contacts` row when nothing matches (§1). In that window the producer
   the backfill exists to protect against goes on making exactly the single-key
   merges the backfill may not make, and P-7 then migrates the result
   faithfully, because a wrong merge does not present as a conflict to anything
   downstream. Re-running the adjudication as a cutover gate catches rows added
   in the interval; it does not unpick a merge already made.

   Two ways to close it: bring the platform's intake linking under the same
   corroboration-or-review rule for the duration — a cross-repo obligation,
   recorded in §5 — or do not run the backfill until the transition it
   protects, folding step 2 into step 4. Relocating capture early is not a
   third way; that is the split this section already refused.

   **The choice is part of this step, and step 2 does not run until whichever
   was chosen is in force — corrected on review (Codex P1, 2026-09-16).** The
   first wording gave the choice to the design document at step 3, which the
   numbered sequence reaches *after* the backfill: the protection would have
   been chosen one step too late to protect anything, and the requirement
   contradicted its own position in the list. Whether the second option is taken
   is also not a design detail — it moves the backfill out of the steps
   ratification authorizes and into the one the owner releases separately.

   **What the second option does to the list — added on review (Codex P2,
   2026-09-16).** Saying the backfill moves left the numbered sequence
   unexecutable on that branch: "each step gates the next" would stall at an
   incomplete step 2, or the backfill would run at step 2 anyway under an
   authorization that no longer covered it. So, explicitly: taking the second
   option **removes step 2 from the numbered sequence** rather than deferring
   it. The path becomes 0, 1, 3, 4 — step 3's design document gates step 4 as
   before — and the backfill becomes part of step 4's single transition,
   sequenced inside it by the design document along with the demotion, the
   authority move and the producer shutdown. **Ratification then authorizes
   steps 0, 1 and 3 only**, and the backfill waits on the owner's release of
   step 4 with everything else in it. The choice is made at step 1, so which
   sequence is in force is known before anything downstream of it runs.
2. **Give `nh_renter` a producer.** Backfill existing `rental_contacts` into
   `contact_identity` / `identity_link` through the linker, conflicts enqueued
   rather than merged.

   ***Superseded, 2026-09-20 — as to what the backfill produces.*** *The
   [September 20 amendment](2026-09-20-odin-person-identity-and-nh-aliases.md),
   ratified that day, replaces this step's interpretation: backfill the same
   rows into Odin-owned person records on `contact_identity.id`, and preserve
   the historical NH contact IDs as `nh_renter` aliases rather than the origin
   the person is minted under. The backfill itself, the linker route, enqueueing
   conflicts rather than merging them, and the writer that mirrors NH ids into
   `identity_link` are all unchanged — this step is not retired in the sense of
   leaving `nh_renter` unwritten (corrected on review, Codex P1, 2026-09-20).
   Annotated here rather than only in this file's header note, because an
   implementer who arrives at this step by search reads the retired instruction
   and nothing else.*

   **Read `rental_contact_external_links` before the linker runs, but treat
   almost none of it as corroboration** — *added with the store's addition to
   §1a at the owner's direction, 2026-09-16; corrected the same day on review
   (Codex P1) after the first version of this paragraph got the evidence question
   backwards.* The rows record a `contact_id` →
   `(external_system, external_contact_id)` correspondence, and a backfill that
   ignores them re-derives from scratch decisions the platform already reached,
   including the `odin` ones. **But an existing link is not automatically
   independent evidence, and the first version of this step said it was.** The
   store's only live writer is `cnc-owner-sync.ts`, which finds the contact by
   `normalized_email` alone and then writes the link with `verification_method`
   and `confidence` **hardcoded to `'email_match'` and `'high'`**. Such a row is
   a *record of* the same single-email match step 1 refuses to auto-link on, so
   admitting it as corroboration lets that original decision validate itself: a
   shared household email seeds the wrong canonical identity, with no
   adjudication and another guest's stays behind it. The hardcoded `'high'` also
   means **`confidence` carries no information from that writer** and must not be
   read as a signal.

   So the rule is by method, not by the existence of a row. Only a method
   independent of the key being matched — a genuine `operator_confirmed`, or a
   `provider_id` whose provider is not the source of the email — can stand as the
   corroboration step 1 requires. `email_match` and `phone_match` rows are the
   *same* evidence class as the linker's own single-key hit: they are useful
   context and a useful cross-check, never a reason to skip review. A link that
   contradicts the linker's own conclusion is a conflict to enqueue, never a tie
   the linker breaks silently — in either direction.
3. **Design document for relocation** — the fencing protocol, the intake
   cutover, and the inquiry data move, satisfying P-1 through P-8. Own document,
   own review, as sequence item 8's does.
4. **Cut over — both classes together, with capture relocating at the same
   moment.** The data moves, the platform's intake stops minting per P-4, new
   inquiries arrive at Odin, and authority for both classes moves, as one
   transition. **P-1 through P-8 satisfied and verified**: the per-principal
   verification for P-1 to P-3, P-4's producer shutdown, P-5's continuity for
   inquiries in flight, P-6's authorization parity live before the seam goes,
   P-7's read-back of both classes, and P-8's exercised proof that the renter's
   publication route, their selection and their sign-in still work, that a guest
   who is not that renter is rejected, that an agent can still work an
   opportunity and still grant, reassign and share access to one, **and that a
   message arriving after the switch lands as a new inquiry in Odin, for each
   ingress cohort**. *The last two were added on review (Codex P1 ×2,
   2026-09-16): this list had reduced P-4 to "the old producer is off", which is
   satisfied by an intake that accepts nothing at all.* **`rental_contacts` is demoted to the projection described in §2
   inside this transition**, not after it, and that demotion is verified before
   the cutover is called complete. A migration that reports success is not that
   evidence.

   **This step was three, and P-3 collapsed them — corrected on review (Codex P1
   ×2, 2026-09-16).** The previous draft relocated capture first, moved the
   inquiry data second, and moved authority third, with Odin authoritative for a
   "new cohort" in between. Two defects followed, and the second is the one that
   settles it. The first draft left records created between the steps with no
   authoritative store at all. The fix for that — Odin authoritative for the new
   cohort — then put an **existing** person, still authoritative and writable in
   the platform, alongside their brand-new inquiry authoritative in Odin: a
   person and their inquiries split across two authorities with one still
   writable, which is precisely what P-3 forbids. No split-population protocol
   can satisfy a property whose subject is the absence of the split.

   So the sequence stops trying. One transition, both classes, capture included;
   the split population is not entered rather than managed. The design document
   at step 3 owes the mechanism for making a transition that wide atomic — a
   write freeze for its window, or verified dual-write until it completes, per
   P-1 — which is a harder mechanism than a staged relocation and an honest one.

**Step 4 waits on both NrRenter/NrPmo cutovers — added on review (Codex P1,
2026-09-16).** The 2026-09-14 amendment makes `rental_contacts`, plus an active
link to the canonical winner, the **destination** for its two classes, and keeps
`nrbe` authoritative — and therefore writable — for each class until that
class's own verified cutover. Both facts collide with this document and neither
was reconciled. If step 4 demotes `rental_contacts` to a projection and shuts
its producers down while an `NrRenter` or `NrPmo` principal is still
authoritative in `nrbe`, that person is authoritative in one store and projected
in another that is still being written — the split across two authorities P-3
forbids, arrived at from the other side. The absorption still owed for them then
has to land in a destination that no longer exists in the form it was given: a
projection referencing a canonical identity Odin mints, not a person record. And
P-7 compounds it, inventorying only the contacts present when it runs.

So **both earlier class cutovers complete before step 4 begins**, and step 0
records their state as a precondition rather than assuming it. The alternative —
amending the 2026-09-14 destination and sequencing so the two migrations land
together — is open to the owner, but it is an amendment to *that* document, and
nothing here performs it.

**The sequence ends at step 4.** The projection demotion was a fifth step and is
now inside the fourth, twice corrected. One round found it authorized by nothing
— ratification covered steps 0–3 and the owner's release was described as
covering "step 4" — and the answer then was to put it in the same release. That
was not enough (Codex P1, 2026-09-16): **the same release is not the same
transaction.** Run sequentially, step 4 moves person authority and declares P-4
satisfied while `rental_contacts` still holds its old person-store role, which
either leaves an interval where two stores claim the person or makes step 4
impossible to complete, since P-4 already requires the platform to hold at most a
reference.

Approval authorizes steps 0–3 — or steps 0, 1 and 3, if step 1's choice moved
the backfill into the cutover — and **nothing beyond them. Step 4 requires its
own release — corrected on review (Codex P2, 2026-09-16).** An earlier draft said
approval "opens step 4" while the approval block said ratification releases no
cutover; step 4 *is* the cutover, so the two lines answered an implementer's
question oppositely. The reading that stands: ratification authorizes the
verification, the linker fix, the design document, **and the backfill only on
the branch where step 1's choice leaves it at step 2** — on the other branch it
is inside step 4 and waits with it. *Corrected on review (Codex P2,
2026-09-16): this sentence still listed the backfill unconditionally two
paragraphs after the same scope was made conditional above it, so the paragraph
answered the deferred-backfill question both ways.* The cutover
— data, capture and authority together — **and the projection demotion that
completes it** wait on the owner releasing **step 4** against the completed
design.

## 4. Reconciliation plan

The 2026-09-14 amendment's §4 opens *"Two systems collected emails and phone
numbers independently for years"* — that sentence is about `nrbe` and CNC/VRM,
the two sources behind `NrRenter` and `NrPmo`. **It does not describe either
class here**, and reasoning about this migration as though it did overstates the
risk. Recorded because that error was made in the session that produced this
document, and corrected by the owner.

**Person class.** This paragraph carried an "expected case" through three
revisions and no longer has one — corrected on review (Codex P1, 2026-09-16).
It said that if V-1 returned no registered users then P-2's surface was empty
and the work was bounded by contact rows. **A guest authenticates off the lease
record**, not a registered account, so an empty user table never emptied that
surface; the sentence would have let a cutover proceed against a population
nobody had counted.

So there is no expected case, and none is assumed. The 2026-09-14 reconciliation
shape applies to whatever V-1 returns — match, then corroborate; a single-key
match is not sufficient evidence of one person; an unadjudicated conflict blocks
sign-in for that principal — and P-2 is gated on the sign-in-capable population
and its live sessions, which is what V-1 now asks for.

Two things hold regardless of V-1. Step 1 comes first; the linker hole is not
conditional on it. And **P-7's read-back of the person class** stands — every
source `rental_contacts` key resolves to a verified destination record whether
or not anyone ever signed in against it.

**Inquiry class.** The reconciliation is not identity but continuity and
completeness, and the two tests are not a partition — corrected on review (Codex
P1, 2026-09-16). **P-7 covers every inquiry**, open and closed alike: each read
back by content and against the parent it hangs off, not merely counted.
**P-5 is an additional check on the open subset**, not the only one applied to
it — continuity, so that an agent working an opportunity sees the same one
afterwards.

An earlier draft assigned open inquiries to P-5 and "everything else" to P-7,
which let an open lead keep its id while losing or corrupting its selection,
status or assignment and still pass, because P-5 alone never asked what was in
the record. Closed history remains the larger half by volume, and the part no
agent is watching. The roughly two hundred open opportunities the Rental
Opportunities surface showed on 2026-09-15 are **not** evidence for the class:
that number is the observable part, and citing it as the reconciliation's scope
was the error P-7 exists to prevent. The closed population is inventoried at
source before anything moves, and read back after.

## 5. What this changes outside this repository

The canonical RFC and the rental-leads contract are maintained in
`nantuckethouses-platform`, and [`rental-inquiries-pointer.md`](../../nh-agent-handoff/rental-inquiries-pointer.md)
is explicit that changes are proposed against the RFC, not the pointer. **This
amendment is the portfolio decision; it is not the cross-repo edit, and it does
not perform it.** What it obliges:

- RFC §6's prohibition on lifecycle, authorization, publication and status logic
  in Odin is superseded for these classes, and the RFC records that.
- The agent API (`/api/agent/v1/*`) and `@nh/api-client` stop being the seam for
  the Rental Opportunities surface once the step 4 cutover completes. Odin reads
  its own store.
- The pointer document's authority split is rewritten to match, after the RFC
  is.
- **If the design document takes the first of step 1's two ways out**, the
  platform's inquiry intake links a person only on corroborated evidence, or
  enqueues for review, for as long as it keeps capturing — an interim change to
  `rental-leads/materialize.ts` that buys the interval between the backfill and
  the cutover. *Added on review (Codex P1, 2026-09-16).* It is an obligation on
  that repository like the three above, and the choice between it and folding
  the backfill into step 4 is the design document's to state.

**What this dissolves, worth recording because it is the reason the session
started.** The dashboard widget lost its date, contact, notes and property
columns when it was pointed at the platform, because `AgentInquiryListItem`
carries eight fields and none of those are among them. Four separate cross-repo
asks were queued against that one payload — `renterId` for inbox grouping,
`createdAt` for the widget, inquiry `source` and value from the 2026-09-05
amendment, and the contact fields. Every one of them exists because a consuming
surface must ask another repository for a field it renders. The step 4 cutover
removes the category, not the four instances.

## What this amendment does not change

- **CNC/VRM transaction authority.** Leases, signatures and payments are
  unchanged and are not in scope.
- **Brand-scoped consent.** Unifying identity does not unify permission. The
  shape §5 of the vendor-retirement plan asks for is
  `person × brand × channel × purpose × policy version × timestamp` — brand is a
  dimension of permission, not of personhood. The grant recorded by
  [`2026-09-12-merged-contact-marketing-authorization.md`](./2026-09-12-merged-contact-marketing-authorization.md)
  covers Congdon & Coleman Real Estate, NantucketRentals.com and Nantucket
  Houses as one account while leaving each brand's permissions separable. One
  person, many brand-scoped grants.

  **No customer copy is cited here — corrected on review (Codex P2,
  2026-09-16).** An earlier draft quoted a preference-centre sentence and called
  it "the combined-account copy ratified 2026-09-05". It is neither: the owner
  supplied it on **2026-09-15**, and
  `congdon-coleman-ratified-strings.md` deliberately does **not** transcribe it —
  *"recorded rather than filed"* — because filing it would put account-management
  copy where an affiliation disclosure belongs. Ratified strings are
  verbatim-only, an unrecorded variant is drift whoever typed it, and an
  amendment presenting unfiled copy as ratified is exactly how an implementer
  ends up shipping it. What was ratified on 2026-09-05 is the four-brand scope
  string, which this document does not need to quote to make its point.
- **Hello Nantucket's position.** Outside the 2026-09-12 merged-contact grant in
  both directions, confirmed by the owner on that date. Untouched here.
- **The naming law.** Congdon and Coleman Insurance, Inc. remains separate and
  unaffiliated. The portfolio takes no collective name; this document names the
  entities and states the relation, per the 2026-08-14 supersession.
- **What remains of the Nantucket Houses platform.** This document retires two
  originator classes. What the platform continues to serve after that is outside
  its scope and is not decided by it.

## Approval

The owner records approval here, with a date, and the Status line above is
flipped to match in the same commit. Both move together; neither is set by the
act of merging.

> Approved by: __Stephen Maury__  Date: __2026-09-16__

- **How this approval was given.** Stephen authorized the merge of
  [#448](https://github.com/stephen329/odin/pull/448) with the words *"merge it
  with my approval."* That phrasing carries two readings — authorization to
  merge the branch, or approval of the amendment itself — so the merge was
  performed **without** touching this block, Status was left at Proposed, and
  the question was put back to him. He answered: *"yes, I meant ratify it."*
  The block was then filled by Claude Code at his direction rather than typed by
  him, following the convention the 2026-09-14 amendment records, because an
  approval block is a record of who decided and the accurate answer is that he
  did and I wrote it down.
- **What ratification releases.** Steps 0–3 of §3, including the design
  document, and nothing further — **or steps 0, 1 and 3, on the branch where
  step 1's choice folds the backfill into the cutover** (added on review, Codex
  P2, 2026-09-16: the scope stated here has to survive that branch, or the
  backfill runs under an authorization the sequence has moved out from under
  it). It does **not** release step 4 — the cutover
  that moves the data, relocates capture, moves authority for both classes and
  demotes the projection, in one transition. That is a separate release by the owner against the completed
  design, and P-1 through P-8 are satisfied and verified at it.
- **What is still open at the time of drafting.** V-1 and V-2 (§1). Both are
  conditions of cutover, not of ratification.
