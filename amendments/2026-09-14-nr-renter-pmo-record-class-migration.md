# Amendment — the `NrRenter` and `NrPmo` record classes migrate to Odin

- **Date raised:** 2026-09-14
- **Direction decided:** 2026-09-12 by the owner, in the working session that
  scoped the vendor-retirement and identity-unification plan
  ([`docs/vendor-retirement-and-identity-unification.md`](../../vendor-retirement-and-identity-unification.md)
  §4): *"The renter is **one person across all surfaces**. NantucketRentals.com
  is a website and brand owned by Congdon & Coleman Real Estate, not a separate
  business; leases are administered in Odin and contacts are visible to agents
  there. There is **no value in an `NrRenter` distinct from a Nantucket Houses
  or Congdon & Coleman customer**."* Drafting this amendment was instructed by
  the owner on 2026-09-14.
- **Status:** **Approved and ratified — Stephen Maury, 2026-09-14.** The
  approval block at the end of this document carries his name and that date, and
  this line says so, which are together the conditions this amendment set for its
  own ratification. The work of §1a and §1b is authorized; §3 may begin at step
  0a. Nothing moves by that fact alone — each class's system of record moves at
  that class's verified cutover, not at ratification.

  The conditions themselves, kept because they are the rule the next amendment
  is read against: a document is ratified when, and only when, the block carries
  a name and a date and the Status line says so. **A merge with Status still
  "Proposed" ratifies nothing**, whoever performs it — the rule
  `2026-09-12-merged-contact-marketing-authorization.md` states under *How
  approval is recorded*, on the 2026-08-13 basis, and the reason
  `2026-08-10-nh-in-app-booking-and-paid-installs.md` has sat merged and
  unapproved since August. **This document states its own ratification
  conditions and does not alter the repository's review protocol** — corrected
  2026-09-14 after review (P1). An earlier draft of this line went further and
  said a clean Codex round "does not authorize the merge of this amendment
  either", which an amendment has no standing to say: `AGENTS.md` governs when a
  branch may merge, and nothing here amends it. The two questions are separate
  and stay separate. Merging files a proposal; only the completed block below
  ratifies it. The risk the strategy's register names — *"Filing the strategy is
  mistaken for approving it"* — is controlled by that separation, not by
  withholding a merge.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** `2026-09-04-odin-authoritative-crm.md` §"What this amendment
  changes" item 1 — this document is the *"per-record-class migration … recorded
  by its own dated amendment"* that clause requires, for the two record classes
  named in the title and no others. Also the prerequisite named in
  `docs/vendor-retirement-and-identity-unification.md` §5, its phase 7 gate step
  0a, and sequence item 8. **No gate value changes** — no threshold, evidence
  floor, cohort window or stage date moves, no consent scope widens, and no
  permission this portfolio holds is enlarged by anything below.

## What this amendment is for

The 2026-09-04 amendment made Odin the system of record for canonical contact
identity, and in the same breath froze everything else in place: *"C&C/VRM and
NH remain systems of record for the records they originate today, until a
per-record-class migration is recorded by its own dated amendment."* It then
said what such an amendment owes: *"each record class needs its own amendment,
sequencing, and reconciliation plan."*

Two record classes need to move, and until this document no such record existed
for either. Review of
[odin#407](https://github.com/stephen329/odin/pull/407) found the plan
describing the absorption in detail and carrying no instrument that permits it.
The plan was not wrong about the destination; it was missing this document. So
the sections below are the three things the clause asks for, in its order.

## The two record classes

| Class | Where it lives today | What it is |
|---|---|---|
| `NrRenter` | `nrbe` (Django) | The NantucketRentals.com renter. Carries `emailVerify` and `idVerify`; no SMS opt-in flag exists on it (plan §7.4). |
| `NrPmo` | `nrbe` (Django) | The homeowner-portal principal. `GenerateOtpAPIView` (`app/nrAccessControl/views.py`) serves that portal through an `NrPmo` lookup, which is why this class and the Sakari retirement are one project rather than two (plan §3). |

Both are authentication principals as well as person records, which is what
makes this a migration rather than a copy: after it, sign-in resolves against
the destination record, and a wrong merge is account access to someone else's
bookings rather than a data-quality defect.

## 1. The migrations this records

**Approval authorizes the migration. It does not perform it, and it does not
make `nrbe` non-authoritative — corrected 2026-09-14 after review (P1).** An
earlier draft of this section said the two classes "cease to be records `nrbe`
originates and holds authoritatively" on ratification, while §3 schedules the
linkage, import and authentication move *after* approval. Composing those two
produced an interval with no authoritative source at all: the live system still
serving both principals while the destination was neither complete nor handling
sign-in, and no defined place for an update or a conflict resolution to land.

So the rule is: **`nrbe` remains the system of record for each class until that
class's cutover completes and is verified.** The system of record moves per
class, at its cutover, not at approval.

**This document records two per-record-class migrations, one per class** (§1a and
§1b), each with its own statement, its own cutover definition, and its own
verification. They share §3's sequencing and §4's reconciliation plan because
they share a destination, a phase-7 gate and an OTP path — but neither class's
cutover depends on the other's.

**One file is the correct form — Stephen, 2026-09-14.** Review raised that
`2026-09-04-odin-authoritative-crm.md` says two things that do not obviously
agree: §1 requires *"a per-record-class migration … recorded by its own dated
amendment"*, while its *does not change* list says *"each record class needs its
own amendment, sequencing, and reconciliation plan."* The first attaches the
amendment to the migration, the second to the record class, and on the stricter
reading this document would owe two files rather than one. The clause is the
owner's, so the reading was his: **a separate per-class record within one dated
amendment satisfies it; a separate file per class is not required.**

The severability that made the question cheap still holds as a fact — §1a and
§1b share no premise, so either could be lifted out later without rewriting the
other — but it is no longer an open choice, and this document is not to be split
on the strength of the ambiguity alone.

### The destination, common to both

Two parts, and the plan's §5a is the reason it is two rather than one:

- **The rental projection.** Absorption resolves the legacy rows into
  `rental_contacts`, the NH platform's person-level rental record, because that
  is where stays, leases and the guest portal already hang. Per the plan §5 it is
  already person-level — one row per human, a nullable `user_id`, and
  `rental_identity_conflicts` for the case where an email and a phone resolve to
  two different contacts. (Cited from the plan, which reads NH migration
  `029_rental_leads_foundation.sql`; that repository is not this one.) The plan
  places both classes there; that a homeowner principal lands in a record named
  for rentals is a naming artifact of the table, not a claim about scope — if it
  turns out to be a scope problem rather than a name, it surfaces at step 0a.
- **The canonical graph, and a row in it is not enough — corrected 2026-09-14
  after review (P2).** An earlier draft required each absorbed contact to "carry
  an `identity_link` row". That is insufficient: `findByEmail` and `findByPhone`
  (`src/lib/identity/postgres-store.ts:180-204`) both filter
  `l.superseded_at IS NULL` **and** `i.merged_into_id IS NULL`, so a
  soft-retired link, or a link pointing at an identity that has since been merged
  away, leaves the contact invisible to the very dedupe the link exists to join.

  What is required is an **active link to the resolved canonical winner**:
  `superseded_at IS NULL` on the link, `merged_into_id IS NULL` on the identity
  it points to. Verification is a read back along the same path dedupe uses:
  `findByEmail` / `findByPhone` on the contact's keys return its adjudicated
  winner among the active links. Row existence is not evidence and is not
  accepted as it.

  **What verification must not require — corrected 2026-09-14 after review
  (P1).** An earlier draft asked that each key resolve to *exactly one* identity.
  That contradicts §4 two sections down: when two people legitimately share an
  email or a phone, and an operator has correctly adjudicated them as distinct,
  both canonical identities hold active links on that key and the read returns
  both. Requiring uniqueness per key would make the cutover unpassable in
  precisely the case the queue exists to get right — or, worse, pressure an
  implementer into merging two people to make a gate go green. The requirement is
  therefore about the **contact and its winner**, not about the key: shared keys
  are disambiguated by the cardinality and authentication design §4 requires, and
  a key returning more than one winner is a correct state, not a failure.

`identity_link.source_system` is a CHECK-constrained enum, today
`cnc_contact`, `cnc_lease_signer`, `nh_renter`, `assessor_owner`,
`hello_subscriber` (`supabase/migrations/20260904120000_hello_subscriber_identity.sql`).
Whether these classes reuse `nh_renter` or take values of their own is part of
the design decision in §2, not settled here — but the choice is **constrained**,
and this is the constraint.

**Reuse of an existing `source_system` value is permitted only where a
`source_record_id` collision is impossible by construction — added 2026-09-14
after the fifth round (P1).** `identity_link` carries
`UNIQUE (source_system, source_record_id)`
(`20260723180000_contact_identity.sql:57`), and the linker resolves that tuple
**before it looks at any identity evidence**: `linker.ts:63-75` returns
`{kind: 'noop'}` with the existing link's identity on a hit — no name check, no
email or phone corroboration, no enqueue. So if an `NrRenter` or `NrPmo` native
id happens to equal an existing `nh_renter` `source_record_id`, the import
attaches that principal to **whoever that link already points at**, silently, and
the conflict queue never sees it. A namespace collision is not a dedupe match,
and it arrives through the id rather than through matching, which is why every
guard in §4 misses it.

Therefore: reuse `nh_renter` only if the link is keyed by the destination
`rental_contacts` id, where a collision cannot occur; otherwise the classes take
distinct `source_system` values, or their legacy ids are explicitly namespaced so
that a collision cannot occur. Whichever route §2 takes, **the import may not
rely on legacy ids being unique across systems that never coordinated them.**

**If a new value is chosen, one enum is not enough — added 2026-09-14 after
review (P1).** `dup_review_queue.pending_source_system` carries its **own**
CHECK constraint (`20260723180000_contact_identity.sql:104-112`) and
`enqueueDup` writes the incoming source value into it
(`src/lib/identity/postgres-store.ts:308`). A value admitted to `identity_link`
and not to the queue produces a linker that can match and cannot escalate: the
review transaction fails at the moment a conflict needs a human. This is not
hypothetical — it happened to `hello_subscriber`, and
`20260904130000_hello_beehiiv_receiver.sql:246-262` is the corrective block,
whose own comment records that the earlier migration added the value "but not to
dup_review_queue.pending_source_system". **Any new value is added to both
constraints in the same schema change**, and the queue path is exercised before
the import runs, not after.

### What a cutover must guarantee — and what this document does not specify

**Added 2026-09-14 after the third review round (P1 ×3).** Three consecutive
rounds found defects in this section's *mechanism* clauses, and each was a
correct consequence of the previous round's fix: splitting the classes created
the shared-principal case, keeping `nrbe` authoritative created the live-write
case, and quarantining unadjudicated principals created an ordering case against
the acknowledgement gate. That pattern is the signature of an authorization
instrument being asked to carry a distributed-cutover design.

The governing clause asks this document for an amendment, sequencing and a
reconciliation plan. It does not ask it to specify a fencing protocol, and the
plan already assigns that work elsewhere: sequence item 8 has its "own design
document, own review". **So this document fixes the properties a cutover must
have and leaves the mechanism to that design document.** The properties are not
negotiable there; the mechanism is not decided here.

Three properties bind every cutover under this amendment, per class:

- **P-1. No lost write, and the fence does not end at the switch.** No `nrbe`
  commit may land **unreplicated** after the reconciliation point and before
  authority moves. The property is about a write being lost, not about a write
  occurring.

  *Corrected 2026-09-14 after the seventh round (P2): this read "no `nrbe`
  commit may land", without qualification, which made verified dual-write —
  named two sentences later as a way to satisfy P-1 — violate P-1. Dual-write
  commits to `nrbe` in that window by definition; what makes it safe is that
  every such commit reaches the destination durably, not that it does not
  happen. A property that rejects one of its own approved mechanisms cannot be
  checked, and an implementer reading it would have had to pick which half to
  ignore.*

  A final delta pass **alone does not provide this** — a change committed after
  the pass and before the switch is still missing while the gate reads
  satisfied — so the pass runs behind a write fence or an atomic high-water
  handoff. A write freeze for the cutover window (no commit at all) or verified
  dual-write until authority moves (every commit replicated, and not counted as
  committed until it is) satisfies that half directly.

  **And after authority moves — extended 2026-09-14 after the sixth round
  (P1).** Every remedy above was written to end at the switch, and switching
  authentication does not close an admin screen, an internal API or a background
  task. An `nrbe` write committed after cutover would then sit in the
  now-non-authoritative source and never reach the destination — the same lost
  write, on the far side of the boundary the fix drew. So for each class, once
  authority has moved, writes to that class in `nrbe` are **rejected, redirected,
  or durably forwarded**. P-1 is not satisfied by a fence that expires at the
  moment the source stops being authoritative and stays writable.
- **P-2. No *access* ahead of the acknowledgement — widened 2026-09-14 after the
  sixth round (P1).** This property said "no sign-in", and sign-in is not the only
  way in. A renter or homeowner holding a valid session or refresh token when
  authentication switches would be carried into the merged account without ever
  traversing the newly deployed surface, so the version and timestamp are never
  persisted — while the plan makes reading that record back a launch condition.
  Blocking the door does nothing about the people already inside it. So either
  legacy sessions and refresh tokens are invalidated at the switch, or every
  authenticated request enforces the acknowledgement state until the record is
  persisted for that contact.

  The original requirement stands underneath it: no principal of the class
  authenticates against the destination until the first sign-in acknowledgement
  surface is deployed, rendering owner-approved copy, and persisting its version
  and timestamp per contact. A gate that follows the activation it gates is not a
  gate, which is why §3 orders it before the authentication move rather than
  after.
- **P-3. Atomicity for a person in both classes.** Where one person holds both an
  `NrRenter` and an `NrPmo` row, independent cutovers would leave the destination
  authoritative for one class while `nrbe` stays authoritative *and writable* for
  the other — so a later PMO-side change to a shared email, phone or credential
  can contradict already-cut-over renter state even though each class passed its
  own checks. Either those two cutovers are atomic with respect to that person, or
  field-level ownership and reconciliation are defined and in force until both
  classes have moved. Per-class independence, granted in §1a and §1b, does not
  extend to a person who is in both.

  **The overlap is established from the source side, not from how the rows
  resolved — corrected 2026-09-14 after the fourth round (P2).** An earlier draft
  qualified this as "both … resolving to the same destination contact", which made
  the predicate circular: it covered the case where adjudication had already
  unified the person and went silent on the case where it had not. Two rows
  carrying different legacy identifiers, mistakenly adjudicated to two different
  contacts, would then let each class pass its own *exactly one adjudicated
  destination* check and cut over independently — preserving the split identity
  this migration exists to remove, with nothing in the gate to notice. **A
  dual-role principal whose rows resolved to two destination contacts is not two
  people by default; it is reconciled before either class cuts over.** The
  per-class check is therefore not evidence about a person who holds rows in
  both.

### 1a. `NrRenter`

The NantucketRentals.com renter migrates from `nrbe` to the destination above.

**Cutover for this class completes when all five hold, and is not complete on
any four:** every `NrRenter` principal resolves to exactly one adjudicated
destination contact; each of those contacts holds an active link to the canonical
winner as defined above; **the destination carries the principal's final `nrbe`
state**; authentication for the class resolves against the destination rather
than `nrbe`; and all of it is verified by reading back, per principal, not by the
migration reporting success. Until then `nrbe` is authoritative for this class
and its writes continue there. P-1, P-2 and P-3 above bind this cutover, and
P-3 is the one that reaches outside the class: a principal who is also an
`NrPmo` does not cut over on this class's verification alone.

**Why the third condition exists — added 2026-09-14 after review (P1).** The
clause that keeps `nrbe` authoritative until cutover is also a clause that keeps
it *writable* until cutover, and the earlier four conditions all concerned
linkage and authentication. Nothing carried a change made in `nrbe` after a
destination record was created — a corrected phone, a re-verified email, a
credential change — so a principal could cut over to a record that was accurate
when it was built and stale when it went live. Closing it means satisfying P-1
above: a write freeze for the cutover window, verified dual-write until authority
moves, or a final delta pass **behind a write fence or atomic high-water
handoff**. Which one is an implementation choice; **that P-1 holds, and was
verified, is not.**

*Corrected 2026-09-14 after the third round (P1): this paragraph previously
offered "a verified final delta pass" as sufficient on its own. It is not, while
`nrbe` stays writable — a commit landing after the pass and before the switch is
lost, and the gate still reads satisfied. That is why P-1 is stated as the
property and the delta pass is stated as needing a fence.*

### 1b. `NrPmo`

The homeowner-portal principal migrates from `nrbe` to the destination above, on
the same five-part cutover and the same three properties, verified separately —
with the same P-3 qualification in the other direction: a principal who is also
an `NrRenter` does not cut over on this class's verification alone. It is listed apart from `NrRenter`
because its principal population, its portal and its authentication path are
distinct, and because a cutover verified for renters is not evidence about
homeowners. `GenerateOtpAPIView` serves both, which is why they share a
sequence — not why they share a cutover.

## 2. What this amendment deliberately leaves open

**It does not decide how `rental_contacts` relates to `contact_identity`.** That
question is marked in the plan §5a and belongs to the owner; no contributor
fills a marker, and this amendment does not fill it by implication. Its two
candidate shapes — a projection carrying its own
`identity_link.source_system`, or an outright migration — are both **permitted**
by this amendment, and the choice is made where the plan puts it: inside phase
7's gate, at step 0a, together with its schema migration and its linkage run.

What this amendment does fix, whichever shape is chosen, is the condition above:
no absorbed contact may exist outside the canonical graph, and outside means
*not reachable by dedupe* rather than *has no row*. A shape that leaves
`rental_contacts` rows with no link, with a superseded link, or with a link to an
identity that has been merged away does not satisfy this amendment — each of the
three is invisible to `findByEmail` and `findByPhone` alike, and reproduces the
split the work exists to remove.

## 3. Sequencing

Ratification does not start the move. The order is the plan's, and this
amendment adopts it rather than inventing a second one:

1. **This amendment is approved** — the block below carries a name and a date.
   Until then phase 7's gate has an unmet prerequisite and nothing moves.
2. **Inside phase 7's gate, step 0a:** the `rental_contacts` ↔
   `contact_identity` decision is settled, its schema migration applied, and the
   linkage run executed. Settled is necessary and not sufficient — the
   `identity_link` rows have to exist before any import can key to them.
3. **The rest of phase 7's gate** proceeds on that linkage: the suppression
   backfill, the four-dimension consent tuple, the historical import,
   alias-complete verification, ongoing scoped revocation, the shared frequency
   cap, the communications legal review, and the Hello replay.
4. **Sequence item 8's resolution work:** nrbe's users resolve into the
   destination record. What remains there is what genuinely follows linkage — the
   conflict queue is expected to be the real work.
5. **Adjudication, and quarantine for what is unresolved — added 2026-09-14
   after review (P1).** An earlier draft named the acknowledgement surface as the
   only gate standing between the conflict queue and authentication, which left
   the queue advisory: a principal could land in it and still be signed in
   against a best-guess destination. A wrong merge here is access to another
   person's bookings, so the queue cannot be advisory. **A principal with an
   unresolved conflict is quarantined from sign-in, not resolved by preference.**
6. **The acknowledgement surface, before any authentication moves — reordered
   2026-09-14 after the third round (P1).** The first sign-in acknowledgement
   surface exists, renders owner-approved copy, and persists its version and
   timestamp per contact. **All four of its required strings are now ratified,
   and the gate is unchanged** — updated 2026-09-15 for the third time, when
   this read *three of four* and then *one of four*. The owner ratified the
   account-ownership statement and the revocation notice on 2026-09-14; the
   communication-authorization sentence was ratified, withdrawn and re-ratified
   on 2026-09-15, on his third wording; and the revocation notice's replacement
   was supplied and ratified the same day. **It was the superseded notice that
   was narrower than the ratified withdrawal design on two axes** — the
   replacement names brand, channel and message type, so it satisfies all three.
   *Corrected after review (P2): this parenthetical was attached to the
   replacement, which reported the owner's current approved copy as
   nonconforming in the same breath as saying the copy gate passes.* A count of what is ratified elsewhere is a report
   rather than a decision, which is why it is corrected here rather than left for
   him.

   **The copy half of this gate therefore passes and the gate does not.** What
   the acknowledgement still lacks is not a string: the **privacy link has no
   destination**, because the policy's communications section is a draft with
   counsel under a live legal-review marker. Said this way round because the
   previous wording directed an operator to wait for a sentence the owner had
   already supplied — soliciting completed work is the worse half of a stale
   status, and this line is an executable cutover prerequisite. This amendment
   still does not release the gate and does not touch it. **It sits here, ahead of step 7, because it previously sat after
   it** — and a gate that follows the activation it gates enforces nothing. An
   adjudicated principal could have signed in against the destination before the
   surface existed, which is P-2.
7. **Authentication moves to the destination**, per class, at that class's
   cutover, once P-1, P-2 and P-3 hold for that class and are verified per
   principal. A migration that reports success is not that evidence.

## 4. Reconciliation plan

Two systems collected emails and phone numbers independently for years. Every
disagreement between them is a person, so reconciliation is the substance of the
work and not a clean-up phase after it.

- **Match, then corroborate.** Resolution by normalized email and then phone is
  already written in the NH platform (`rental-leads/materialize.ts`, cited from
  the plan §5), and a single-key match is not
  sufficient evidence of one person: a household sharing an address, or a mobile
  number a carrier has reassigned, defeats it.
- **Odin's linker is the guard, and it has a hole to close first.**
  `src/lib/identity/linker.ts` enqueues for review rather than merging when a
  shared key arrives with an incompatible name (`method: 'name_conflict'`, lines
  120 and 173). But `hasNameConflict`
  (`src/lib/identity/names.ts:82-88`) returns `false` when either name is absent
  — *"unknown ≠ conflict"* — and a legacy import is exactly the incomplete
  source data that produces absent names. **Unresolved-name matches need
  corroboration or their own enqueue before the import runs**, or the import
  auto-links the cases most likely to be wrong and none of them reach a human.
- **An unadjudicated conflict blocks sign-in for that principal.** The queue is
  a gate, not a report: while a principal's destination is unresolved, it does
  not authenticate against the destination, and it is not resolved by picking the
  likelier contact. See §3 step 5.
- **A confirmed share needs somewhere to go.** When review decides two people
  genuinely share an email or a phone, the plan records that `rental_contacts`
  cannot represent it: unique indexes on both normalized fields mean only one
  row holds the key, leaving an operator to choose between merging two people,
  discarding a real destination, and stalling. An alias or cardinality design,
  and an explicit answer for what authentication and stay-mapping do when a key
  identifies two people, are part of the work this amendment authorizes.
- **Suppressions merge as a union, never an intersection**, per
  `2026-09-12-merged-contact-marketing-authorization.md`. Nothing propagates an
  unsubscribe from `nrbe`, the Nantucket Houses app, SendGrid or Klaviyo into
  Odin's `communication_suppressions` today, so the union has to be assembled
  before a merged contact is reachable by any send.
- **Provenance survives the merge.** The plan's §7.8 population is three groups
  with different consent evidence, and a merged record that cannot say which
  group a permission came from cannot honour the carve-out that authorized it.

## What this amendment does not change

- **No marketing permission widens.** Marketing to merged contacts is governed
  by `2026-09-12-merged-contact-marketing-authorization.md` and its SMS
  carve-out; this amendment moves a system of record and grants no send.
- **No other record class moves.** Reservations, leases, availability, payments
  and accounting stay where the strategy's systems-of-record list puts them.
  "Away from VRM" remains a direction, and every other class still needs its own
  amendment. VRM remains the system of record for the contacts and lease signers
  it holds.
- **The §5 purpose limitation stands**, as does the Office Manager's open
  Privacy validation gated *Before Hello Month 1*.
- **The acknowledgement requirement is untouched** and stays mandatory.
- **Nothing was authorized to run before approval.** This document conferred no
  permission while its Status line read Proposed. That line now reads Approved,
  so §3 is open at step 0a — and step 0a is a decision, not a migration.
- **Approval does not move a system of record on its own.** Each class's system
  of record moves at that class's verified cutover, per §1a and §1b. Between
  approval and cutover, `nrbe` is authoritative and nothing about that is
  ambiguous.

## Approval

The owner records approval here, with a date, and the Status line above is
flipped to match in the same commit. Both move together; neither is set by the
act of merging.

> Approved by: __Stephen Maury__  Date: __2026-09-14__

- **How this approval was given.** Stephen approved this amendment by direct
  instruction on 2026-09-14 — "sign it and merge" — and the block was filled by
  Claude Code at his direction rather than typed by him. It is recorded that way
  because an approval block is a record of who decided, and the accurate answer
  is that he did and I wrote it down.
- **What he was asked before deciding.** The one question this document put to
  him was the reading of his own `2026-09-04-odin-authoritative-crm.md` clause —
  whether it requires a separate amendment *file* per record class or a separate
  per-class *record*. He answered the second, and §1 records it. A further
  question was put to him and is **not** a condition of this approval: whether
  an authorization document should carry cutover properties at all, or whether
  P-1, P-2 and P-3 belong in sequence item 8's own design document. That is a
  question about the next revision of this instrument, not about whether this
  one authorizes the work.
- **What ratification does and does not release.** It authorizes the two
  migrations of §1a and §1b and opens §3 at step 0a. It does not release the
  phase-7 acknowledgement gate. **All four of its required strings are now
  ratified** (updated 2026-09-15; this read *three* and then *one*, and the
  correction is the same report-of-external-fact one made at step 6). The gate
  stands on the **privacy link having no destination**, not on missing copy —
  stated that way because the earlier wording had operators soliciting work the
  owner had completed. It did
  not answer how `rental_contacts` relates to `contact_identity` — the owner
  answered that separately on 2026-09-15: identity stops living in
  `rental_contacts` and the table stays the rental record, which leaves this
  amendment unamended and step 0a unblocked. And it does not permit a cutover
  that has not satisfied P-1, P-2 and P-3 and been verified per principal.
