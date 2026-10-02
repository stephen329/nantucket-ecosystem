# Amendment — marketing to merged contacts is authorized before acknowledgement

- **Date raised:** 2026-09-12
- **Direction decided:** 2026-09-12 by the owner, in the working session
  scoping the vendor-retirement and identity-unification plan
  (`docs/vendor-retirement-and-identity-unification.md`). Asked whether
  counsel's answer 3 — "merged contacts may be contacted by any brand until
  consent is revoked" — should be scoped to contacts who have seen the sign-in
  acknowledgement, or applied as written, the owner answered: **"marketing from
  the three brands is authorized for merged contacts, before sign-in or
  reauthorization."**
- **Status:** **Approved 2026-09-13** by Stephen Maury, the document owner. The
  approval block at the end of this document carries the name and the date, and
  this line reports it; the two move together, and neither is set by the merge
  (see *How approval is recorded*). The change is ratified. That ratifies the
  *authorization* and nothing downstream of it: the SMS carve-out below still
  excludes marketing SMS, and the plan's §7 suppression and consent gate still
  stands between this and any send.
- **Approval must be the owner's own act — tightened 2026-09-13 after review
  (P1).** The precedent of
  `2026-09-02-odin-interactive-send-governance-removal.md` is that merging the
  PR records approval, and this document was drafted on that precedent. The
  precedent does not survive contact with this repository's review protocol:
  `AGENTS.md` makes a Codex round clean of P0/P1s *itself* the authorization for
  the branch owner to merge. Compose the two and a consent-policy change
  affecting real people's marketing becomes effective because a review bot found
  no bugs, with the owner never recording approval of the final text. That is
  precisely the failure the strategy's own risk register names — *"Filing the
  strategy is mistaken for approving it"*, controlled by an *"explicit approval
  block with named approver and date; proposed status until completed"*
  (`nantucket-ecosystem-integrated-strategy.md`, risk table).

  So for this amendment: **the clean-round merge authorization does not apply.**
  The owner records approval with a date in the block below, and the merge
  carries that completed record. An ask waiting on the owner's decision already
  blocks a merge under `AGENTS.md`, so this states a standing one rather than
  inventing a new rule. (An earlier draft also offered "the owner merges the PR
  themselves" as an equivalent route; it is not equivalent, because it leaves
  the committed text saying the opposite of what the merge decided.)
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** the *Collection and withdrawal* section of
  `2026-09-05-cross-brand-consent-single-entity.md` — specifically its
  **"Existing consent is not retroactively widened"** condition — and, through
  it, §5's marketing opt-in requirement as applied to contacts merged during
  identity unification.

## Why this needs an amendment at all

Counsel was asked on 2026-09-12 whether merging two separately created records
for one person requires notice, and how consent carries. The answers (recorded
in full at `docs/vendor-retirement-and-identity-unification.md` §7.1) were: no
notice on merge; consent re-collected through an acknowledgement at first
sign-in; revocation per brand; **merged contacts contactable by any brand until
revocation**; no change to brokerage retention.

Four of those five sit inside existing ratified law and need nothing. The fifth
does not, and the collision is with a clause approved eight days ago rather than
with Version 1.0.

## What the strategy currently says

`2026-09-05-cross-brand-consent-single-entity.md`, approved 2026-09-05, already
decided that **brand is not a barrier to contact** — the brands are one entity,
and a permission given to that entity does not need re-collecting because a
different brand of the same entity is writing. That is settled and this
amendment does not disturb it.

The same amendment attached two conditions to portfolio-wide collection. The
second is the one at issue:

> **Existing consent is not retroactively widened.** Permissions already held
> were given under the brand-scoped reading. They are not reinterpreted by this
> amendment; the wider scope applies to grants collected under the new language.

with the limiting rule stated alongside it:

> a grant's scope is limited to the brands the collection surface actually
> named

and, unchanged from §5:

> Marketing still requires explicit opt-in.

A contact merged from `NrRenter` into `rental_contacts` is precisely a
permission already held, given under the brand-scoped reading, on a surface that
named one brand. Under the clause above, merging does not widen it. The owner's
direction is that it does.

## What this amendment changes

**For contacts merged during identity unification, marketing from Congdon &
Coleman Real Estate, NantucketRentals.com and Nantucket Houses is authorized
without a fresh grant, and without waiting for the person to sign in and see the
acknowledgement.** Suppression on revocation remains the control; the
acknowledgement remains required at first sign-in but stops being the gate that
marketing waits behind.

This is a narrow carve-out of the anti-retroactivity condition, limited to the
merge. It is not a general repeal: consent collected on any surface after this
still takes its scope from what that surface named.

**The cohort has to be a stored fact, not a shape — added 2026-09-13 after
review (P1).** "Contacts merged during identity unification" is a population
that exists at one moment and then stops existing, while the *identity shape* it
produces — one person with an NR link and an NH link — is a shape new contacts
will keep arriving in. A send-time policy that reads only the current graph
therefore cannot tell a 2026 migrated contact from a 2027 person who signed up
on both surfaces, and would extend no-grant marketing to the second, which is
outside what the owner authorized. So the migration must **tag its cohort
immutably** — with a manifest of exactly which records it covered and when — and
the send-time check must test that marker, never the link topology.

**Membership attaches to the migrated destination, not to the person** —
corrected 2026-09-13 after review (P1). A write-once marker on the *canonical
contact* has no answer for the case that follows: a marked 2026 contact is later
merged with an unmarked contact or destination created after the migration, and
the surviving identity either carries the marker onto the new record — extending
the exception to someone outside it — or drops it and strips authorization the
owner did give. Neither is acceptable, and the plan makes governance
identity-keyed, so this merge is ordinary rather than exotic. Defining
membership at the level of the migration record and its destinations removes the
question: a merge unions destinations, each destination keeps whatever it was,
the 2026 addresses stay in the cohort and the 2027 one never joins. **Verify a
marked-plus-unmarked merge explicitly**, asserting both halves survive it.

**The verification, and the third assertion an earlier draft omitted** —
corrected 2026-09-13 after review (P1). That draft said "a cohort contact with
no fresh grant is **permitted**" without qualification, which licenses SMS and
contradicts the channel scope below: an implementation could satisfy the test as
written by letting cohort membership bypass consent on every channel, sending
marketing SMS to lead-only and consent-unknown registrations. Three assertions,
all required:

1. A cohort contact with no fresh grant is **permitted** for the authorized
   channels — email, push, in-app, postal, and anything added later.
2. An otherwise identical **non-cohort** contact is **refused**. A test that
   only asserts the first passes a policy that authorizes everyone.
3. A cohort contact **without an SMS-specific grant is refused for marketing
   SMS**. This amendment never granted that channel and cohort membership does
   not supply it.

The marker is write-once: nothing outside the migration may set it, and no later
merge may extend it to a destination that was not in the manifest.

### Correction — membership is bound to the identity it was written against (Stephen, 2026-09-15)

**Reason.** Write-once membership on the destination alone survives the
destination changing hands. A work address passes to a successor, a recycled
mobile number is issued to someone new, a shared `info@` changes who reads it —
and the marker still reads *2026 cohort* while the person behind it is one this
amendment authorized nothing for. Because the exception it confers is
specifically a licence to market **without a grant**, no consent check
downstream catches the substitution. Raised in review of
`docs/vendor-retirement-and-identity-unification.md` and put to the owner, who
decided the binding here rather than letting the plan impose it.

**What changes.** Cohort membership is **(destination, identity at migration)**.
The marker carries the identity it was written against, and the send-time test
requires that the destination still resolve to that identity. A destination
relinked to a different identity, or unlinked, no longer satisfies the
exception. It loses only the *no-grant* permission — any grant of its own is
untouched, because a grant is not what the marker confers.

**What does not change.** The marker remains write-once in the sense that
mattered: nothing outside the migration may **set** it, and no later merge may
extend it to a destination outside the manifest. What this correction adds is
that membership can **lapse** — which is not a contributor or a merge setting
the marker, it is the stored identity no longer matching. A marked-plus-unmarked
merge still leaves each destination carrying whatever it was.

**Reading note, 2026-09-15 — "still resolve to that identity" means lineage,
and this is the owner's to confirm.** `mergeIdentities` repoints every
`identity_link` of the absorbed identity to the survivor
(`src/lib/identity/postgres-store.ts:448-454`). Read as exact equality, the
send-time test therefore drops membership for every marked destination whenever
the migration identity happens to be the absorbed side of an ordinary
deduplication — no change of hands, just two records for one person being
reconciled — which contradicts the sentence above it: *a marked-plus-unmarked
merge still leaves each destination carrying whatever it was.* Following
`merged_into_id` forward satisfies both sentences and still fails a destination
relinked to an unrelated identity, which is the case this correction exists to
catch. Recorded as the reading rather than written into the correction, because
the correction is the owner's and this note is not an amendment to it.
**Confirmed by the owner on 2026-09-15 and now operative** — membership is
evaluated by traversing `merged_into_id` rather than by exact record equality,
and the decision marker that held it open is struck with his answer. Recorded
here rather than left only in the plan, after review (P1): while this line said
"not operative until he confirms", an implementer reading the authoritative
instrument was permitted an exact-ID test that drops the cohort authorization
after a merge in which nothing changed hands, while the plan required lineage.
Two instructions for one comparison, and this is the one with authority.

**The verification has to put the marked identity on the *absorbed* side —
added 2026-09-15 after review (P1).** The check above asks for a
marked-plus-unmarked merge without saying which side survives, so an exact-ID
implementation that happens to keep the marked identity as the survivor passes
it and still drops the cohort authorization the first time an ordinary
deduplication absorbs that identity. That is the exact case the lineage reading
exists for, and it was the only one not specified. The case: mark a destination,
then merge its identity into an unmarked one **as the loser**, and assert the
marked destination is still authorized — resolved through `merged_into_id`
rather than by equality. Recorded here with the reading rather than written into
the owner's verification line, on the same footing as the note above.

**Affected metrics.** Cohort-attributable marketing volume and the
merged-contact send counts fall by whatever share of migrated destinations has
been reassigned; nothing else in §5 or §4 moves. The manifest stays the
population of record.

**Verification.** Three assertions above become four: mark, relink the
destination to a different identity, and assert marketing is refused.

> Approved by: **Stephen Maury**  Date: **2026-09-15**

## What this amendment does not change

- **Suppression, in full.** A person who has told any brand to stop has
  exercised an opt-out, and merging does not reopen it. §5's "Global and
  brand-level suppression" and §4's propagation rule apply unchanged, and a
  merged contact inherits the union of both source records' suppressions —
  never the intersection.
- **Purpose and message-class scoping.** The 2026-09-05 withdrawal design —
  per message class, multi-select, grouped by sending brand, with booking
  transactional, payment lifecycle and lease execution as the required rows —
  stands as written. It is *finer* than the per-brand revocation counsel
  specified, so counsel's requirement is already satisfied by the ratified
  design; no coarsening is authorized here.
- **Hello Nantucket is excluded.** The owner confirmed 2026-09-12: "Subscribing
  to Hello Nantucket does not grant consent for communication from Nantucket
  Rentals, Nantucket Houses or Congdon & Coleman Real Estate, however we can
  begin tracking user behavior." That restates §5's purpose-limitation rule —
  the CRM may receive Hello subscriber records for identity resolution,
  attribution, deduplication and suppression but may not automatically activate
  NR, NH or C&C marketing — which the 2026-09-05 amendment already recorded as
  unaffected. **No change is needed for it, and none is made.** The behaviour
  tracking the owner authorizes is the identity-resolution and attribution use
  that clause already permits.
- **The three brands named are the three brands covered.** Hello Nantucket is
  outside the acknowledgement in **both** directions, confirmed by the owner
  2026-09-12. A Hello subscription does not authorize the other three, and the
  acknowledgement does not authorize Hello editorial sends. Hello keeps its own
  editorial consent lane, as §5 has always had it.

## The acknowledgement string — ratified 2026-09-12

The 2026-09-05 amendment requires a collection surface to enumerate every brand
the grant covers. This grant covers three, and the only form that existed named
all four — ratified for a *portfolio-wide* grant, and therefore the wrong
instrument here: naming Hello Nantucket in an acknowledgement that does not
cover Hello is how a grant acquires a scope nobody decided to give.

The owner ratified the three-brand companion on 2026-09-12, recorded as item 4
in `congdon-coleman-ratified-strings.md`. The acknowledgement carries, verbatim:

> NantucketRentals.com and Nantucket Houses are services of Congdon & Coleman
> Real Estate.

The two forms are not interchangeable and the strings record carries the rule in
full: item 3 for a portfolio-wide grant, item 4 for this one. Using item 4 where
the grant is portfolio-wide collects a narrower permission than intended; using
item 3 here grants a scope to Hello that was explicitly withheld.

**Item 4 is one component of the acknowledgement, not the acknowledgement —
corrected 2026-09-13 after review (P1).** An earlier draft of this section
closed with "nothing about the acknowledgement copy is now blocked on a legal
question," which read as though the copy were finished. It is not. Item 4 states
the ownership relation and nothing else; counsel's answer 1 also requires the
acknowledgement to say that the account belongs to Congdon & Coleman Real
Estate and that use of any platform authorizes communication from its brands,
and answer 2 requires it to say consent can be revoked at any time. **All four
required statements now have ratified strings** — updated 2026-09-15 for the
third time, when this read *three of four* and then *one of four*. The ownership
relation and the revocation notice were ratified 2026-09-14; the
communication-authorization sentence was ratified, withdrawn and re-ratified on
2026-09-15, and the wording that stands is the third, recorded below with the
marker it closed.

What was unblocked first is the **brand scope**, which was the legal question:
three brands, not four, and item 4 states it. The remaining copy was a
ratification task rather than a legal one — and **no contributor could draft
it**. Ratified strings are verbatim-only and an unrecorded variant is drift
whoever typed it, so an implementer who invented the missing sentences would
have shipped unratified customer-facing legal copy. All four came from the owner.

~~`[DECIDE: ratify the acknowledgement's communication-authorization sentence, or route it to counsel — the other two were ratified 2026-09-14 and this one was withdrawn 2026-09-15 with a proposal standing]`~~
**Answered 2026-09-15: the owner supplied a third wording and it is ratified as
supplied.** Verbatim, and this is the string the acknowledgement renders:

> By continuing, you agree to receive essential service messages regarding your
> bookings, payments, and leases from Congdon & Coleman Real Estate,
> NantucketRentals.com, and Nantucket Houses. If you opt in above, you also
> authorize promotional updates across all three brands by email, push
> notification, in-app message, or mail. You can stop promotional messages at
> any time.

**It answers all three flags raised against his previous wording, which is why
it is recorded as ratified rather than as a fourth proposal.**

- **It enumerates the three brands the grant covers**, so the scope collected
  matches the scope §4 authorizes. The 2026-09-05 limiting rule is satisfied.

  **One phrase in it is flagged and not fixed, after review (P2).** The
  *promotional* half says *"across all three brands"* rather than naming the
  entities again. The first sentence does name them, so a reader has the
  antecedent — but `canonical-naming.md` (2026-08-14) says the portfolio takes
  **no collective name** and copy names the entities instead, and the same rule
  was applied one step up this branch to the privacy draft, where *"all of our
  brands"* became the three names in the sentence that tells a person which
  businesses a block reaches. This is the sentence that tells a person which
  businesses a *marketing grant* reaches, which is the same job. **It is a
  ratified string, so it is not edited here**: verbatim-only binds every
  contributor, and the two remedies — re-ratify it with the names, or record a
  named-surface override — are both his.

  `[DECIDE: whether the acknowledgement authorization sentence keeps "across all three brands" or re-ratifies with the three entities named, given canonical-naming.md forbids a collective label in copy that states scope and the entities are named in the sentence before; the alternative is a recorded named-surface override for this acknowledgement]`
- **The revocation promise is scoped to promotional messages.** *"You can stop
  promotional messages at any time"* — the required booking, payment and lease
  classes are named in the first sentence as essential and are not offered as
  stoppable. The clause the withdrawn sentence lost is back, in the other
  direction: rather than promising required mail arrives either way, it declines
  to promise required mail can be stopped.
- **The grant is conditional on the opt-in control, not on the submission.**
  *"If you opt in above, you also authorize…"* ties the promotional half to item
  7's marketing checkbox, so an unticked box and a tap of Continue no longer read
  as consent. *"By continuing"* now carries only the **service** half, which is
  correct: those messages are required rather than consented to.

**Two things about how it renders, flagged and not fixed — they are interactions
with ratified copy, so both remedies are the owner's.** Item 5's render order
puts this sentence immediately before the ratified revocation notice, *"You can
stop these messages at any time, and choose which ones stop — Congdon & Coleman
Real Estate, NantucketRentals.com, Nantucket Houses, or all three."*

1. **Two consecutive sentences say a person can stop messages at any time**, and
   the second adds the per-brand choice. Redundant rather than wrong.
2. **The second one is unscoped where the first is careful.** *"These messages"*
   follows a sentence that names both essential service messages and promotional
   updates, so read in sequence it reopens the promise the new wording just
   closed. The defect is not in his sentence; it is that the ratified notice was
   written against a predecessor that scoped the question differently.

Either drop the new sentence's final clause and scope the ratified notice, or
keep both and accept the repetition. The revocation notice is separately in play
under his 2026-09-15 decision that withdrawal must be per channel per brand, so
this is one sentence to settle rather than two.

**The second proposal, superseded the same day — kept because its three flags
are why the ratified wording says what it says.** It was recorded as a proposal
rather than ratified because it collected a narrower scope than the grant it
authorizes. His wording was:

> By tapping Continue, you agree that Congdon & Coleman Real Estate may send you
> service and promotional updates across email, push notifications, in-app
> messages, and mail per our [Privacy Policy].

What it fixes: the four channels match ratified item 7 exactly, and SMS is
absent, which is right — text marketing needs its own opt-in and the withdrawn
sentence was withdrawn for promising otherwise. Both flags raised against the
previous proposal are answered by it.

**What it does not do is collect the grant this amendment defines.** The
acknowledgement grants for **three** — Congdon & Coleman Real Estate,
NantucketRentals.com and Nantucket Houses (item 4; §4 of this amendment) — and
this sentence names only Congdon & Coleman Real Estate. Item 4's usage rule is
explicit that the 2026-09-05 limiting rule *"requires a collection surface to
enumerate every brand the grant covers"*, and its own table names the failure:
stating a narrower scope means **a narrower permission is collected**. So as
drafted, a person tapping Continue authorizes one entity, and a later send from
NantucketRentals.com or Nantucket Houses would rest on a permission this surface
did not take.

The fix is his and is small — name the three, as item 4's ratified relation
string already does — but no contributor writes it: this is the sentence the
whole item exists to keep out of a contributor's hands. Recorded 2026-09-15.

**Two further flags, raised 2026-09-15 after review (P1 ×2). Neither is fixed
here, for the same reason: no contributor drafts this sentence.** Both are
reasons to amend it before ratifying rather than objections to the direction.

- **It puts required service messages inside a revocation promise.** The
  acknowledgement renders this sentence immediately before item 5's ratified
  revocation notice, *"You can stop these messages at any time, and choose which
  ones stop"*. This sentence covers *"service and promotional updates"*, so
  **"these messages"** reaches booking, payment and lease communications — which
  the ratified design classifies as required and non-interactive. The withdrawn
  sentence carried a clause separating them (*"Messages that are part of a
  booking, a payment or a lease reach you either way"*); this one does not, and
  the notice after it does not know the difference. Either the authorization is
  limited to revocable marketing, or the required-message separation comes back
  explicitly.
- **"By tapping Continue" makes the form submission itself the grant.** The same
  sentence is a required component of the Nantucket Houses consent-collection
  surface, where the **marketing opt-in is a separate, optional control** —
  item 7's ratified label, which the person ticks or does not. Under this
  wording a person who leaves that box unticked and taps Continue has, on the
  face of the copy, agreed to promotional updates. The surface would then hold
  two contradictory records of one permission, and the copy is the one a
  regulator reads. Either the authorization is made conditional on the opt-in
  control, or the collection surface stops carrying this sentence and the
  acknowledgement keeps it alone.

**Narrowed 2026-09-15, not answered.** The token said *three remaining*. Two of
them — account ownership and the revocation notice — the owner ratified on
2026-09-14. The third was ratified and then **withdrawn the same day** for
stating a false promise about SMS, and its replacement is the owner's own
2026-09-15 wording, held above beside this token and carrying three flags raised
since. (An earlier proposal sits in `congdon-coleman-ratified-strings.md`, item
5, marked superseded — it is kept for its analysis and is not the text on offer.)
A scan reads the token, so a marker naming three kept asking for two answers that
exist. What a human still owes is the one sentence.

The three are the account-ownership statement, the communication authorization
and the revocation notice; they belong in
`congdon-coleman-ratified-strings.md`. The acknowledgement surface cannot ship
without them. The acknowledgement *record*
(covered brands, version, timestamp) is unaffected and can be built now.

## Interaction with the outstanding blocking item

The decision record carries, still open and **Blocking before Hello Month 1**, a
qualified privacy review of the purpose-limitation rule. The 2026-09-05
amendment recorded that it does not discharge that review and that its
single-entity premise "is a legal conclusion this document explicitly does not
reach."

This amendment sits in the same area and is squarely within that review's scope.
Two things follow:

1. **It does not discharge the review either**, and it adds to it: whether a
   permission given on a brand-scoped surface can be widened by a merge the
   person was not notified of is the same question the anti-retroactivity clause
   was written to avoid answering.
2. **The 2026-09-05 amendment's own caveat applies with more force here.** That
   amendment noted that if any signup or booking flow "states or implies that
   the permission is limited to that brand, this amendment does not override
   that representation for people who gave consent under it," and called a
   surface audit of existing consent language "the natural follow-up," not
   attempted there. For a merge that widens scope without notice, that audit is
   the evidence base.

   **Largely done — corrected 2026-09-13 after review (P2).** An earlier draft
   of this passage said the audit "is still not done," which was already untrue
   when it was written: the same working session completed it. Every
   consent-bearing surface was read and quoted in full —
   `docs/vendor-retirement-and-identity-unification.md` §7.4 for the
   NantucketRentals.com renter surfaces and §7.6 for the lead-capture forms
   that carry no agreement copy at all, §7.7 for the Nantucket Houses app. The
   answer is on the record and it is adverse: both nrbe signup surfaces scope
   the permission to *confirming the number*, the buyer-interest form promises
   one alert about one house, and the NH app has no consent object at all. That
   is the evidence base this clause asked for, and it says the widening is one
   most of these customers would not recognize. The owner has weighed that; the
   risk is accepted above rather than argued away.

   **The historical half was open and is now closed as unperformable (Stephen,
   2026-09-15).** §7.4 and §7.7 read the language *in force today*. Whether an
   earlier version of a surface said something different — broader or narrower — when
   a particular permission was collected could only be answered from the revision
   history of those files. The owner's answer: **no recorded versions exist.** The
   language was never versioned or archived, so the audit cannot be performed, and
   the marker is struck rather than left as work someone will attempt and abandon.

**What that establishes, which is not nothing.** Every historical permission has
**unrecoverable scope** — we know somebody agreed and cannot say to what. Three
consequences bind on this amendment's own population and are specified in
`vendor-retirement-and-identity-unification.md` §7.3: a historical grant authorizes
only where **both** its scope and its version are established, and is otherwise born
closed; its `consent_version` records *unknown* positively rather than borrowing a
current version; and no historical grant supports a claim about channel or
message-class scope that its surface did not name. The 2026-09-05 rule that existing
consent is not retroactively widened therefore stops being a policy preference and
becomes the only defensible reading of the evidence: widening requires knowing what
was narrow.

The forward-looking obligation this creates — begin versioning and archiving
the consent language at capture, so this answer is not the same in a year — is
tracked as a live audit item in
`docs/vendor-retirement-and-identity-unification.md` (§7.4), **described here
rather than spelled as a token, so a repo-wide scan counts one obligation
once.** It was spelled in both records between 2026-09-15 commits `4cec7aa2`
and `4a86e3f1`; the first repair left the bracket syntax in this sentence and
so still counted twice, which is the joke the convention is there to prevent.

**The forward-looking half is not the half that closed.** The historical audit is
unrecoverable; archiving the copy shown at capture from here on is cheap, blocked on
nothing, and the only reason the closed answer will not recur. Nothing in the
repository does it today.

## Reason

Recorded as the owner gave it: NantucketRentals.com is a brand and website owned
by Congdon & Coleman Real Estate, not a separate business; the renter who books
there is already a customer of the entity, every lease is administered in Odin,
and every contact is visible to agents there. On that view a merged contact was
never a stranger to the entity, and requiring them to sign in to an app before
the entity may market to them treats a brand boundary as a consent boundary —
which is the reading the 2026-09-05 amendment retired.

The counter-consideration, recorded because this document should not read as
one-sided: the anti-retroactivity clause was not about brand boundaries. It was
about what a person was told when they gave the permission. Those are different
grounds, and the clause survives the 2026-09-05 reasoning intact. The owner has
weighed that and directed otherwise; the risk accepted is that a permission is
exercised at a scope wider than the collecting surface stated, for people who
never see the acknowledgement.

## Channel scope — decided 2026-09-12

The owner's answer: **all and any channel, except SMS.**

So for merged contacts, and for the three brands named, marketing is authorized
by email, push notification, in-app message, postal mail, and any channel added
later. **SMS is carved out**: marketing SMS to a merged contact requires its own
grant, not this amendment's. Transactional and service SMS are unaffected — the
passcode path, booking confirmations, payment messages and in-stay service
continue unchanged, because they were never marketing.

**Correction, 2026-09-13 after review (P1).** An earlier draft of this paragraph
said the carve-out "is expressible in the storage model as it stands", because
§5 records consent at `person × brand × channel × purpose × policy version ×
timestamp` and channel is therefore a stored dimension. That is true of the
*model* and false of the *implementation*, and the difference is the whole
point here. `communication_consents.email_normalized` is `NOT NULL` and
`decideDeliveryFor` loads governance rows by email address alone
(`src/lib/comms/consent-store.ts`), so **a grant for a person who has no email
address cannot be stored or found.** An SMS-specific marketing grant has
somewhere to live only for contacts who also happen to have an email, and the
same gap applies to push, in-app, postal and any channel added later — every
non-email channel this amendment authorizes.

Two requirements follow, and neither is satisfied today:

1. **Consent storage and lookup must be keyed by identity or by destination**,
   not by email address. This is the same defect as the suppression one recorded
   in `vendor-retirement-and-identity-unification.md` phase 7, and it should be
   solved once for both tables rather than twice differently.
2. **The SMS exclusion is enforced at send time, not merely documented** — the
   2026-09-05 rule that "a toggle shown is a toggle honoured" has a converse,
   and an authorization the send path does not scope by channel is an
   authorization that will be exceeded by the first bulk job that reads it.

The carve-out itself stands. What is retracted is the claim that the storage
model already accommodates it.

### Two existing SMS paths this constrains

Found in `nrbe` while scoping the Sakari retirement, and both are live:

- **`send_listings_sms_to_user_task`** (`app/nrAdminDataSetup/tasks.py`) texts a
  person up to three property listings plus a recent-search URL, via the Sakari
  listing template. Property recommendations are marketing on any reading, so
  under this decision that path may not be pointed at merged contacts without an
  SMS-specific grant. It must be classified before it moves to Twilio, not
  after.
- **`send_vote_pledge_sms_to_user_task`** (same module) texts a vote pledge and
  a pledge URL. It is neither transactional nor service, and it does not
  correspond to any row in the sending-brand matrix — the current class list is
  booking transactional, payment lifecycle, in-stay service, owner statements and
  property status, owner advisory and market reports, and editorial. The
  2026-09-05 rule is that "a new message class needs its row before its first
  send." This one has been sending without a row. Recorded as a factual gap, not
  resolved here.

~~`[DECIDE: classification and disposition of the two SMS paths above]` — whether each is retired with Sakari, or continued.~~

**Answered by the owner, 2026-09-15.** The Sakari path is **dropped and stopped
now**. `send_listings_sms_to_user_task` is **kept and paused** — it does not send
again until the phase-7 gate has delivered both an SMS-specific grant and a
message-class row, so phase 5 migrates a paused path rather than a live one. The
classification gap recorded above is unchanged by this: a continued path still
needs its row before its next send, which is exactly what the pause is waiting
for. Struck here because a marker scan reads the token and would otherwise keep
soliciting an answered decision, and phase 5 would keep looking blocked.

**The two requirements are cumulative, not alternatives — corrected 2026-09-13
after review (P1).** An earlier draft offered "migrated to Twilio under an SMS
marketing grant, or given a message-class row" as two ways to continue. They are
independent rules and a continued path must satisfy both: the channel carve-out
above requires an **SMS-specific grant from the recipient**, and the 2026-09-05
rule requires the **send type to have its own message-class row** before its
first send. Taking the second branch alone would let phase 5 migrate a
classified path to recipients holding no SMS grant; taking the first alone would
let the vote-pledge path continue unclassified. So the disposition is: retire,
or satisfy both.

**Which applies to each path was answered on 2026-09-15** and is no longer an
open question. The vote-pledge path is **retired** — dropped and stopped. The
listings path is **kept and paused**, which is the "satisfy both" branch with
its obligations unmet: it does not send again until it holds an SMS-specific
grant *and* a message-class row. So **phase 5** of
`docs/vendor-retirement-and-identity-unification.md` migrates a paused path,
and what it still cannot do is resume that path before both prerequisites land
— the classification gap travels with the path whether or not the provider
changes, which is why pausing rather than migrating-and-hoping is the answer.

**Corrected 2026-09-13 after review (P2):** an earlier draft attached this to
phase 4. Phase 4 migrates the transactional passcode sender, which this
amendment expressly leaves unaffected; phase 5 is where the templated traffic
these two paths belong to actually moves. Gating phase 4 on a marketing
classification would have blocked the login migration — the thing that has to be
proven before anything else moves — on a question that does not bear on it.

## Affected metrics

§9's "consent exceptions" metric will not count **non-SMS** sends to
**destinations in the migration manifest that still resolve to the identity the
marker was written against**, lacking an acknowledgement, once this is ratified —
those, and only those, are what this amendment authorizes.

**The identity condition belongs in the metric too — added 2026-09-15 with the
correction above (P2).** Manifest membership alone was the whole definition here, and
a reassigned destination stays in the manifest forever while no longer satisfying
the exception. So an erroneous send to its **new holder** — a send this amendment does
not authorize and the send path must refuse — would have been dropped from the
consent-exceptions metric as though it were authorized, hiding the one failure the
correction above exists to prevent. Same substitution as the send-path case,
arriving through the reporting.
Narrowed 2026-09-13 after review (P2): an earlier draft said "merged contacts",
which is the identity *shape* this document spends its cohort section rejecting
as the eligibility test. Instrumentation built on the broader wording would drop
a later non-cohort merge out of the metric even though nothing authorizes it —
the same substitution, arriving through the reporting rather than the send
path. Recorded so the drop is read as the amendment working
rather than as instrumentation loss.

**Marketing SMS stays in the metric** — corrected 2026-09-13 after review (P2).
An earlier draft said the metric would exclude sends to any merged contact
lacking acknowledgement, which would have hidden exactly the sends that remain
unauthorized: SMS is carved out below, so a marketing text to a merged contact
without an SMS-specific grant must still be refused **and still be reported as
missing consent**. Suppressing it from the metric would remove the only signal
that the carve-out was being honoured, in the direction of silence.

## Approval

- **Approved:** Stephen Maury (stephen@maury.net), document owner and executive
  sponsor, on 2026-09-13. Drafted and committed by the branch owner on the
  owner's instruction. The owner signalled approval on the pull request rather
  than editing the file, and directed the branch owner to complete the block and
  merge — the second route set out below, taken before the merge so the merge
  carries the completed record.
- **How approval is recorded — corrected 2026-09-13 after review (P2).** The
  earlier wording offered two routes, one of which left no trace: if the owner
  merged the PR without editing the file, the committed amendment would still
  read *Status: Proposed*, *approval pending*, and a blank line — so the
  repository's own strategy record would go on forbidding exactly the sends the
  merge was taken to authorize, and every later reader would be correct to
  refuse them.

  **The committed text is the record.** This amendment is ratified when, and
  only when, the block below carries a name and a date and the Status line above
  says so. **A merge with Status still "Proposed" ratifies nothing**, whoever
  performs it — there is no second route, and no send path may rely on a merge
  alone.

  If the owner would rather signal approval on the pull request than edit the
  file, that is fine and it is not the record: the branch owner fills the block
  and flips the Status line in a commit **on the branch, before the merge**, so
  the merge carries the completed record. A clean Codex round does **not**
  authorize the merge of this amendment.

  > Approved by: **Stephen Maury**  Date: **2026-09-13**

- Version 1.0 §5 and the 2026-09-05 amendment are quoted above and remain
  unmodified in place, per the change protocol.
