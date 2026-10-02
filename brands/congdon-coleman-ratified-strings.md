# Congdon & Coleman — ratified entity strings and usage rules

Ratifications of 2026-08-12 (decision register v3, items 1, 1a, 3, 5, 6),
committed here per the standard PR path. Strings are used **verbatim** by every
contributor; any paraphrase is a violation. The owner may override a string for
a named surface — see "Owner overrides" at the foot of this file, which is the
only place such a decision counts as recorded. In code, `cnc-web-fe/src/config/legal-strings.ts`
is the single consuming source for the entity strings; the launch audit diffs
its copies against this record. **That holds for the entity strings and not for
everything in this file** — item 3 under "Strings ratified after this record was
cut" is a portfolio statement with consumers in more than one repository, so the
diff-the-one-copy method does not verify it. See that item.

## `legal.cc.poweredby` — ratified (Stephen, 2026-08-12; register item 1)

**Full form deleted 2026-09-04 (Stephen).** It read, verbatim:

> A service of Congdon & Coleman Real Estate, a d/b/a of O2554 LLC. Licensed Real Estate Broker, MA #422678.

It is recorded here as history and is no longer a permitted string on any
surface. See "Entity form removed from transactional surfaces" below for the
decision and what it leaves open.

Short form as ratified 2026-08-12 — **superseded 2026-08-13**, see below:

> A service of Congdon & Coleman Real Estate · MA #422678

Short form as **re-ratified by Stephen, 2026-08-13** (broker-identification
wording; recorded in cnc-web-fe `src/config/legal-strings.ts`, commit
57ffed1, and live on every public page). Current canonical short form,
verbatim:

> Congdon & Coleman Real Estate, MA Real Estate Broker's License #422678

Usage rules (register item 1, verbatim; unchanged by the re-ratification —
only the wording changed): the short form is permitted only on
**designated short-form surfaces** (app chrome, home guide, marketing pages);
never lease/payment surfaces, as it omits the legal entity. (Register
terminology renamed from "non-regulated" per consistency review — placement
rule unchanged; brokerage marketing surfaces are not characterized as
unregulated.)

## Entity-mention rule (register item 1a, 2026-08-12)

**Stephen, 2026-08-12 PM: "There is never any reason to mention O2554 LLC."**
Website scope APPLIED: all public pages use the short form; `legalName`
removed from structured data. Pay/sign scope: full form was **retained** on
lease/payment surfaces pending a targeted legal review
~~`[LEGAL REVIEW: entity disclosure on transactional surfaces]`~~ — **and was
removed on 2026-09-04 without waiting for it**, on Stephen's instruction.
The rule now applies to every surface with no exemption.

**The 2026-09-04 removal was not provisional (Stephen, 2026-09-10):** "Using
the DBA name, Congdon and Coleman Real Estate is sufficient we do not ever
need to name O2554 LLC." Recorded because "removed without waiting for it"
can be read as a temporary state pending the review, and it was not one.

**Answered 2026-09-11: counsel approved.** Identifying the broker by the
trade name — "Congdon & Coleman Real Estate" with licence #422678 — satisfies
the disclosure obligation on a lease or payment surface; naming O2554 LLC is
not required on any surface. Relayed by Stephen and recorded by the branch
owner — the approval itself is not held in this repository, so a reader who
needs its terms or its reasoning goes to counsel rather than to this line.

The two halves closed in that order and for different reasons, which is why
both are recorded: the owner settled what C&C wants to say, and counsel
settled that it suffices. Neither substitutes for the other, and the
combination is what removes the last reason to keep the entity form in any
record as a live option.

## Valuation entity line — ratified (register item 3, E-1)

Valuation surfaces use the trade-name form only — no legal-entity mention.
Canonical valuation entity line, verbatim:

> Congdon & Coleman Real Estate, Massachusetts Licensed Real Estate Broker #422678.

(The full O2554 LLC form was reserved for lease/payment surfaces when this
was ratified. That form was deleted on 2026-09-04; the valuation decision
itself is unaffected, since it was already trade-name only.)

## Canonical naming (register item 5, as superseded 2026-08-14)

"C&C" prohibited customer-facing; "NantucketRentals.com" with the .com. The
collective term "family of companies" was **retired on 2026-08-14** — the
portfolio takes no collective name; copy names the entities and states the
ownership relation. Congdon and Coleman Insurance, Inc. remains a separate,
unaffiliated company that no portfolio copy may imply is included. Nothing in
this file's ratified strings contains the retired phrase; this section is prose,
not a ratified string. Table and lint status: `canonical-naming.md`.

## Photography spec (register item 6) and opinion-of-value template (item 3)

Both land verbatim in `assets/congdon-coleman/`. Stephen's photography items
(prohibitions 1–2, the correction-versus-enhancement line, aerial, the
brand-photography carve-out) are ratified; **derived rules 3–6 are carried as
conditional on Kristy's confirm-or-strike** per the 2026-08-13 listing-page
session (the register's 08-12 line reads them as confirmed — reconcile at
Kristy's sign-off; the spec file's (D) marks are authoritative until then).
The opinion-of-value template is ratified in full (E-1, R-1, R-2, E-3).

## Entity form removed from transactional surfaces (Stephen, 2026-09-04)

Stephen directed that the full entity form of `legal.cc.poweredby` be
deleted, after being shown that it was ratified (register item 1), that
register item 1a had expressly exempted lease and payment surfaces pending
counsel, and that the surviving short form was ratified as "never
lease/payment surfaces, as it omits the legal entity". The direction was
given twice and is recorded here as the owner's decision, superseding the
usage rule below for the entity form only.

**What changed.** There is now one `legal.cc.poweredby` string for every C&C
surface, lease and payment included. `src/lib/legal/disclosures.ts` holds it,
with a guard (`disclosuresNamingLegalEntity`) failing the suite if the entity
is reinstated in any string. Odin renders no disclosure today, so nothing
customer-facing changed on this commit.

**What this did not decide, and what since has.** Whether identifying the
broker without naming the licensed entity satisfies the disclosure obligation
on a transactional surface. That was the whole of
~~`[LEGAL REVIEW: entity disclosure on transactional surfaces]`~~ — the
2026-09-04 decision settled what C&C wants to say, not whether it suffices.
**Counsel approved the trade-name-only form on transactional surfaces on
2026-09-11** (relayed by Stephen; see the entity-mention rule above). The
decision above and that approval are separate acts by different parties, and
the record keeps them separate.

**Not reconciled here.** `cnc-web-fe/src/config/legal-strings.ts` is named
below as the single consuming source for entity strings and is a separate
repository; the string may still be live there. This change did not reach it.

## Divergence flagged for counsel — resolved 2026-09-11

`docs/legal/entity-and-listing-disclosures.md` (2026-08-10, drafted pending
counsel) words the full form as "…Massachusetts Licensed Real Estate Broker
#422678." The 2026-08-12 ratification above reads "…Licensed Real Estate
Broker, MA #422678." Same facts, different phrasing; the drafted record also
carries a guard that `legal.cc.poweredby` phrasing match
`legal.nr.listing.cc`. This was to be resolved by counsel's outcome on the
transactional entity-disclosure review struck above, which closed on
2026-09-11 on the sufficiency question without ruling between the phrasings.
(Narrative references here name that review rather than spelling its marker
token, so a repo-wide marker search keeps returning only open ones.)

**Resolved 2026-09-11: counsel approved both forms in their places.** Asked
first which phrasing was correct, counsel approved the full 2026-08-10
wording — "Massachusetts Licensed Real Estate Broker #422678". Asked then
whether the footer's compact form could stand, **counsel approved the compact
version**. Both answers were relayed by Stephen on the same day and recorded
by the branch owner; neither approval is held in this repository.

**So the divergence is not a drift to be reconciled — it is approved.** Each
string keeps what it carries today, and no change follows from this section:

- `legal.nr.listing.cc` — "…Congdon & Coleman Real Estate, Massachusetts
  Licensed Real Estate Broker #422678, which represents the owner…", the full
  phrasing, already exactly what counsel approved.
- `legal.cc.poweredby` — "Congdon & Coleman Real Estate, MA Real Estate
  Broker's License #422678", the compact form Stephen re-ratified on
  2026-08-13 because it runs along the foot of every surface, including ones
  with no room for the long phrasing. Counsel's approval now backs that
  reasoning rather than merely permitting it.

`src/lib/legal/disclosures.ts` pins the footer's exact text and asserts the
divergence between the two on purpose. **Those tests were right and stay.**
Anyone reading this section as licence to harmonize the two strings has it
backwards: the divergence is deliberate, ratified, tested, and now approved on
both sides. Reconciling them would break an approved string.

`cnc-web-fe/src/config/legal-strings.ts` remains the public footer's consuming
source and a separate repository. Nothing builds across the two, so the pin in
this repo cannot see it; that reconciliation is still unverified and is held
at the owner's instruction (2026-09-11), not closed.

<!-- covers-through -->
## Strings ratified after this record was cut — reconciled through 2026-09-15

*The date above advances whenever an item is added below; it is a provenance
claim about the whole section, not about when the section was created.*

1. **Footer short form re-worded** (Stephen, 2026-08-13): the
   broker-identification form above supersedes the 08-12 "A service of …"
   wording on all public website surfaces. The placement rule (short form on
   public surfaces; full O2554 LLC form only on lease/payment surfaces) is
   unchanged. Addendum row A-5's quoted string reads the 08-12 wording and
   stands as history; its decision — listing footers take the short form —
   applies with the current wording.
2. **NantucketRentals referral affiliation, interim minimum** (Stephen,
   2026-08-14). Every surface routing a visitor to NantucketRentals.com
   carries, adjacent to the referral, verbatim:

   > NantucketRentals.com is affiliated with Congdon & Coleman.

   This was the head of draft D3 word for word **as the draft then stood**;
   counsel's approved D3, transcribed below on 2026-09-15, names "Congdon &
   Coleman Real Estate" and runs to two sentences, so this line is history rather
   than a live equivalence. **Counsel has approved the D1/D3 wording — recorded
   2026-09-15 on the owner's report, and the legal-review marker is struck.**
   Source of truth in code: `cnc-web-fe/src/config/legal-strings.ts`
   (`NR_AFFILIATION_DISCLOSURE`), **which still carries this shorter wording and
   is what surfaces render until it is updated in that repository.**

   **Approval is not transcription, and the approved text is not in this record
   — raised 2026-09-15.** What closed is the *question* that was with counsel.
   What had not happened, until he supplied them on 2026-09-15, was the full D3
   string and the D1 common-ownership footer being written down here verbatim,
   and no contributor could reconstruct them: this record held the **head** of
   D3 word for word and nothing else, so an implementer told "D1/D3 is
   approved" had an approval and no string to render. Both are below.

   ~~`[DECIDE: transcribe the counsel-approved full D3 string and D1 common-ownership footer into this record verbatim, so the surfaces that need them have text rather than an approval]`~~
   **Answered 2026-09-15: the owner supplied both, and both are ratified as
   supplied.** Verbatim, and these are the **canonical** strings — the text a
   surface must use where it carries one. *"The strings the surfaces render"
   is what this line said for one round, and that was wrong in the direction
   this record keeps correcting elsewhere: **ratified is not rendered**. Neither
   is rendered today. D3 waits on `cnc-web-fe`, which still ships the older
   head, and D1 has no surface at all until the owner answers its placement
   marker below. Corrected after review (P2).*

   **D1 — common-ownership footer:**

   > NantucketRentals.com and Nantucket Houses are services operated by Congdon
   > & Coleman Real Estate.

   **D3 — NantucketRentals referral affiliation disclosure:**

   > NantucketRentals.com is affiliated with Congdon & Coleman Real Estate.
   > Brokerage and property management services are provided by Congdon &
   > Coleman Real Estate.

   **D3 does not open with the interim minimum, and that is an action in another
   repository rather than a discrepancy to reconcile here.** Item 2's interim
   string is *"NantucketRentals.com is affiliated with Congdon & Coleman."* —
   recorded as *the head of draft D3 word for word*. The approved D3 above says
   **"Congdon & Coleman Real Estate"**. So:

   - **The ratified string is the one above.** The approved full text supersedes
     the interim minimum that stood in its absence, which is exactly what item 2
     said would happen once the text arrived.
   - **Item 2's "head of draft D3 word for word" claim is now history**, and is
     marked as such there rather than deleted — it was true of the draft this
     record could see.
   - **`cnc-web-fe/src/config/legal-strings.ts` (`NR_AFFILIATION_DISCLOSURE`)
     now differs from the ratified string**, and nothing in this repository can
     change it: that is a separate repository with no build across the two, so
     the pin here cannot see it. Until it is updated there, **every surface
     routing a visitor to NantucketRentals.com renders the shorter wording** —
     the interim minimum, which was ratified and is not wrong, merely superseded.
     Recorded as a live gap rather than as done, because "the string is ratified"
     and "the string is rendered" are the two halves this record keeps having to
     separate.

   **D1 is a second portfolio-relation string, and where it may be used is
   narrower than where item 3 and item 4 are used.** The owner declined a
   shorter footer variant on 2026-09-14 (item 6) precisely because a second
   string saying the same thing in different words is the drift this record
   exists to prevent. D1 survives that reasoning because it is a
   **counsel-approved legal disclosure** rather than a brand-copy variant — its
   wording answers a disclosure obligation, not a style question. But that is
   also the limit of it:

   - D1 **names three brands**. Item 3, the four-brand description, remains the
     string for About Us pages, which describe the business rather than
     discharge a disclosure.
   - D1 **does not displace item 4** on collection surfaces. Item 4 states the
     scope a grant covers; D1 states an ownership relation. A collection surface
     that swapped one for the other would state a scope it does not collect.
   - **Where D1 goes is not settled by its ratification, and it now carries a
     marker — raised after review (P2), against a paragraph written an hour
     earlier.** It is the common-ownership footer; which surfaces carry a
     common-ownership footer, and whether any of them currently carry item 3 or
     item 4 instead, is a placement question this record does not answer and no
     contributor may answer by inference.

     That was stated in prose and by nothing else, which is the failure this
     record has now recorded three times in three days: **work here is generated
     from the token**, so an obligation described only in a sentence is invisible
     to a scan and absent from the census — and the census had just been
     regenerated to say **no owner decision is open**. It was wrong for as long
     as this paragraph stood unmarked.

     `[DECIDE: which surfaces render D1, the common-ownership footer — and, for any surface that carries item 3 or item 4 today, whether D1 replaces it, renders beside it, or does not apply there]`

     Not a contributor's, for the reason the paragraph above gives: item 3 and
     item 4 are ratified strings with ratified usage rules, and choosing to
     displace either on a surface is an owner's act. Ratifying a string says
     what it is; it does not say where it goes.

   **The owner supplied a string for this on 2026-09-15 and it is NOT
   transcribed, because it is not this string — recorded rather than filed.**
   What he sent:

   > Your combined account covers Congdon & Coleman Real Estate,
   > NantucketRentals.com, and Nantucket Houses. You can manage or opt out of
   > promotional updates for individual brands or channels at any time in your
   > preference center.

   That is combined-account and preference-centre copy. **D1 is the
   common-ownership footer and D3 is the NantucketRentals referral affiliation
   disclosure** — the one whose head this record already holds verbatim
   ("NantucketRentals.com is affiliated with Congdon & Coleman"), rendered
   adjacent to a referral link from `NR_AFFILIATION_DISCLOSURE`. Filing his
   sentence here would make every surface routing a visitor to
   NantucketRentals.com render account-management copy in place of an
   affiliation disclosure, which is the failure this marker exists to prevent:
   an implementer with an approval and no string.

   One further reason not to file it even as an interim: the marker asks for
   **counsel's approved** text, and a string written here would not be that
   whoever typed it.

   **A second reason was withdrawn on 2026-09-15, and his wording was right.**
   This paragraph also rejected *"individual brands or channels"* on the ground
   that **channel was not a revocation axis** — per business and per kind of
   message, per the 2026-09-14 decision — and noted that the wording had been
   rejected twice on that ground. He decided the opposite later the same day:
   *"user must be able to opt-out of any channel per brand"*, ratified in
   `docs/strategy/amendments/2026-09-15-channel-per-brand-revocation.md`. So
   that half of the objection is gone, and the sentence's description of the
   preference centre is now accurate. It changes nothing about where the
   sentence goes: it is still combined-account copy and still not D1 or D3.
   Recorded rather than deleted, because the same objection was raised in three
   places from one reading, and a reader who finds it surviving somewhere should
   be able to see it was overturned rather than missed.

   **The marker stayed live through his first answer and closed on his second,
   the same day.** *"Use counsel's approved text"* was the correct instruction
   and it named text the repository did not hold; what was owed was counsel's D1
   and D3 wording itself, which only counsel's markup supplies. **He then pasted
   both, and they are transcribed and ratified above.**

   **What stays true is the last sentence of this paragraph, in a narrower
   form.** Ratifying a string is not rendering it: item 2's interim minimum is
   what `NR_AFFILIATION_DISCLOSURE` still carries in `cnc-web-fe`, so it remains
   what every referral surface renders until that repository is updated. The
   approval changed what is *available* to ratify; the transcription changed
   what is ratified; neither changes what ships until the code does.

3. **Portfolio ownership relation, for scope-stating surfaces** (Stephen,
   2026-09-05, in the session that produced
   [#333](https://github.com/stephen329/odin/pull/333)). Ratifies the missing
   relation — *Nantucket Houses is a service of Congdon & Coleman Real Estate* —
   and the four-brand form it completes. Verbatim:

   > NantucketRentals.com and Nantucket Houses are services of Congdon & Coleman
   > Real Estate, who also publish Hello Nantucket.

   **What it is for.** Any surface that must state the scope of something rather
   than merely disclose an affiliation: portfolio-wide consent collection
   (`amendments/2026-09-05-cross-brand-consent-single-entity.md`), and the
   homeowner launch email naming its destination (`W3`, in
   `nantuckethouses-platform`). It was one missing relation surfacing on two
   surfaces, which is why it is ratified once here rather than composed twice.

   **Usage rule.** It names all four brands and states their relations, so it is
   the form required wherever a permission's scope is portfolio-wide. A surface
   using a narrower form has stated a narrower scope, and — for consent — has
   collected a narrower permission. It is not a replacement for item 2: that is a
   *referral* disclosure, adjacent to a link, and deliberately shorter.

   **Two things this does not settle, recorded so neither is assumed.**

   - **It intersected the D1/D3 review, which counsel approved on 2026-09-15.**
     The D1 common-ownership footer was with counsel and this is a
     common-ownership statement. Ratifying it settled what Congdon & Coleman
     wants to say about the relations, in the same sense the 2026-09-04 entity
     decision did — not that this wording discharges a disclosure obligation.
     **The reconciliation it anticipated is now the owner's, not automatic —
     updated after review (P2).** This passage said that if counsel's approved
     D1 differs, *this string reconciles to it rather than standing beside it*,
     and that whether it differs could not be known until D1 was transcribed.
     D1 is transcribed, and it **does** differ: it names three brands where item
     3 names four, omitting Hello Nantucket, and it is a footer rather than a
     description. So the contingency has resolved — into a question rather than
     an instruction.

     **An automatic reconciliation would now contradict the placement marker
     under item 2**, which reserves any displacement of item 3 or item 4 for the
     owner. A contributor reading this paragraph would rewrite a ratified string
     today; one reading the marker would wait for him. **The marker governs**:
     D1 and item 3 are different strings for different surfaces, and which one a
     given surface carries is the open decision. This item stands unchanged
     until he answers it.
   - **Not reconciled into code, and it has more than one consumer.** The
     "single consuming source" model this record uses was built for entity
     strings rendered on Congdon & Coleman web surfaces, where
     `cnc-web-fe/src/config/legal-strings.ts` genuinely is the only consumer.
     This string is not like that: it is a portfolio statement, and the surfaces
     needing it sit in at least two repositories.

     | Consumer | State |
     |---|---|
     | `cnc-web-fe/src/config/legal-strings.ts` | Existing single source for entity strings; **not changed here**, as with the 2026-09-04 entity removal |
     | Consent-collection surfaces adopting portfolio-wide collection | Wherever they land; **none changed here** |
     | The `W3` homeowner launch email, `nantuckethouses-platform` | **Not yet built** — slices 0–2 are unstarted, so there is no copy to reconcile. When it is, it sources the string from this record rather than composing its own |

     Flagging the model rather than only the omission: a string used across
     repositories has no single consuming source, so "diff the one copy against
     this record" — which is how the launch audit works — cannot verify it. Either
     the audit learns about the other consumers, or this string needs a
     distribution mechanism the entity strings never required. Not resolved here.

   **Conformance checks.** Names no legal entity, so it satisfies the
   entity-mention rule ("there is never any reason to mention O2554 LLC",
   register item 1a, applying to every surface since 2026-09-04). Uses no
   collective abstraction, so it satisfies the 2026-08-14 retirement. Uses
   "Congdon & Coleman Real Estate" in full and "NantucketRentals.com" with the
   `.com`, per `canonical-naming.md`. Cannot be read to include Congdon and
   Coleman Insurance, Inc., since it enumerates the four brands rather than
   gesturing at a group.

4. **Portfolio ownership relation, three-brand form** (Stephen, 2026-09-12).
   Ratifies the narrower companion to item 3, for grants that cover three brands
   rather than four. Verbatim:

   > NantucketRentals.com and Nantucket Houses are services of Congdon & Coleman
   > Real Estate.

   **What it is for.** The sign-in acknowledgement on the merged customer
   account (`amendments/2026-09-12-merged-contact-marketing-authorization.md`),
   which grants for Congdon & Coleman Real Estate, NantucketRentals.com and
   Nantucket Houses. Hello Nantucket sits outside that grant in both directions,
   confirmed by the owner 2026-09-12: a Hello subscription does not authorize
   the other three, and the acknowledgement does not authorize Hello editorial
   sends.

   **Usage rule, and it cuts both ways.** Items 3 and 4 are not
   interchangeable, and picking the wrong one misstates a permission:

   | Grant scope | Form | Getting it wrong |
   |---|---|---|
   | Portfolio-wide, four brands | Item 3 | Using item 4 states a narrower scope, so a narrower permission is collected |
   | Three brands | Item 4 | Using item 3 names Hello Nantucket, and under the 2026-09-05 limiting rule a surface that names a brand may be read as granting scope to it |

   The 2026-09-05 rule requires a collection surface to enumerate every brand
   the grant *covers*. It does not require naming brands the grant does not
   cover, and naming one it does not is how a grant acquires a scope nobody
   decided to give. Neither form replaces item 2, which is a *referral*
   disclosure sitting adjacent to a link and deliberately shorter.

   **Consumers.** The acknowledgement surface, which is not yet built. In
   `docs/vendor-retirement-and-identity-unification.md` the plumbing is **phase
   7** and the record's schema belongs to **phase 8's** design document
   (corrected 2026-09-13; this note previously said phase 5, which is the
   Sakari-traffic migration and has no design artifact). Whichever builds it
   sources the string from this record rather than composing its own.

   Note also that item 4 is **one of four** statements the first-sign-in
   acknowledgement has to make. Counsel also requires the account-ownership
   statement, the communication authorization and the revocation notice.
   **All three are ratified as of 2026-09-15 and are item 5 below** — account
   ownership and the revocation notice on 2026-09-14, the communication
   authorization on the owner's third wording after a withdrawal, and item 5's
   revocation notice replaced the same day. *Updated after review (P2): this
   read "two of those three … and its replacement is unratified", which told a
   consumer the surface could not ship for want of a sentence the owner had
   supplied.* **The acknowledgement's copy is complete; the surface still does
   not ship**, because the privacy link has no destination while the policy's
   communications section sits with counsel. *Corrected after
   review (P2): this note said all three were ratified, the third copy of that
   status to go stale against the same fact.* The
   multi-consumer caveat recorded under item 3 applies unchanged: a
   portfolio string used across repositories has no single consuming source, so
   the launch audit's diff-the-one-copy method cannot verify it.

   **Intersected the D1/D3 review on the same footing as item 3**, and counsel
   approved that wording on 2026-09-15. It is a common-ownership statement;
   ratifying it settled what Congdon & Coleman wants to say about the relations,
   not that the wording discharges a disclosure obligation.

   **The automatic reconciliation is withdrawn here too — updated after review
   (P2), which found it surviving in this item after item 3's copy was fixed.**
   This said that if counsel's approved D1 differs, *both items reconcile to it
   together*, and that the difference could not be checked until D1 was
   transcribed. D1 **is** transcribed and it **does** differ. Following the old
   instruction would rewrite two owner-ratified strings with no named-surface
   override, which is drift whoever typed it. **The placement marker under item
   2 governs**: whether D1 displaces this item on any surface is the owner's
   open decision, and nothing here reconciles until he answers it.

   **Conformance checks.** Names no legal entity, satisfying the entity-mention
   rule (register item 1a). Uses no collective abstraction, satisfying the
   2026-08-14 retirement. Uses "Congdon & Coleman Real Estate" in full and
   "NantucketRentals.com" with the `.com`, per `canonical-naming.md`. Cannot be
   read to include Congdon and Coleman Insurance, Inc., since it enumerates the
   brands rather than gesturing at a group.

5. **The first-sign-in acknowledgement — the three remaining sentences**
   (Stephen, 2026-09-14, replaced and completed 2026-09-15). Supplies the three
   sentences that follow item 4 and **completes the acknowledgement's copy** —
   all three are ratified, per the status below. *This heading has now been
   wrong in both directions: it read "completes" while one sentence was
   withdrawn (P2), then kept "does not complete" after the owner ratified the
   last of them. It says what the status four lines down says, which is the
   only way it stays right.* The surface still does not ship, for a reason that
   is not copy: the privacy link has no destination.
   Counsel's answer 1 requires the surface to state account ownership and the
   communication authorization; counsel's answer 2 requires the revocation
   notice. **All three are ratified and verbatim as of 2026-09-15** — account
   ownership and the revocation notice, the communication authorization on the
   owner's third wording after a withdrawal, and the revocation notice's
   replacement supplied the same day. *Updated after review (P2): this read "the
   communication authorization is WITHDRAWN and its replacement is a proposal",
   which was true for a few hours and then sent an implementer looking for a
   decision already made.* **This item completes the acknowledgement's copy. The
   surface still does not ship**, for the reason under item 4: the privacy link
   has no destination. *Corrected after review (P2):
   this paragraph still read "all three are now ratified" after the
   authorization sentence was struck below it, so a consumer reading the item's
   status rather than its body would have treated the copy as complete.*

   **Rendered in this order**, item 4 first:

   > NantucketRentals.com and Nantucket Houses are services of Congdon & Coleman
   > Real Estate.
   >
   > Your account is with Congdon & Coleman Real Estate, whichever of these you
   > use to sign in.
   >
   > **[FIRST SENTENCE WITHDRAWN — see below.]** **[SECOND SENTENCE WITHDRAWN
   > — see below.]**
   >
   > You may update your preferences or stop marketing messages at any time by
   > brand (Congdon & Coleman Real Estate, NantucketRentals.com, Nantucket
   > Houses), channel, or message type. Required service communications
   > regarding your bookings, payments, and leases will continue to be delivered
   > regardless of marketing opt-out settings.

   *Replaced 2026-09-15 by the owner. The superseded wording — "You can stop
   these messages at any time, and choose which ones stop — Congdon & Coleman
   Real Estate, NantucketRentals.com, Nantucket Houses, or all three." — is kept
   below as history, because two of this record's markers exist only because it
   was narrower than the design it described.*

   **Why the withdrawn sentence named email — history, not live rationale.**
   Kept because the reasoning is half right and the half that is right still
   governs the proposal below. The 2026-09-12 amendment carves SMS out of the
   merge authorization, so a channel-silent wording — "may contact you about all
   of them" — would state a scope wider than the permission the owner decided to
   take; and under the item 3/4 usage rule the wording on the surface *is* the
   scope collected, so the carve-out has to be visible in the sentence or it is
   not a carve-out. What that reasoning got wrong was the remedy: making the
   carve-out visible by naming one channel collected one channel. The proposal
   below keeps the carve-out visible without narrowing the grant. An SMS grant
   is still collected separately and on its own surface.

   *Corrected after self-review: this paragraph stood in the present tense
   above the withdrawal, so a reader met a live-sounding justification for a
   wording struck eight lines later — and one that contradicts the replacement
   proposed beneath it. Same stale-copy class as the findings on rounds two
   through seven, found by re-reading my own diff rather than by a reviewer.*

   **The whole authorization sentence was WITHDRAWN on 2026-09-14 — both halves,
   on two consecutive review rounds — and a third wording was RATIFIED on
   2026-09-15.** What follows is the withdrawal history, kept because it is why
   the ratified wording says what it says; it is not a description of live copy.
   The ratified sentence is recorded verbatim in
   `docs/strategy/amendments/2026-09-12-merged-contact-marketing-authorization.md`
   and nowhere else, one string one home. *Status line added 2026-09-15 after
   review (P2): this block opened in the present tense on a withdrawal that had
   since been superseded, and a reader scheduling the collection surface from it
   would have held the surface back.*

   The two withdrawn drafts were wrong in one direction, corrected, and wrong in
   the other. Both errors are the branch owner's: drafted here, recommended to
   the owner, ratified on that recommendation.

   **The channel half — withdrawn on the second round (P1).** After the SMS
   correction the sentence read *"may email you about all of them"*, which
   narrows the grant to one channel. The 2026-09-12 amendment authorizes **all
   and any channel, except SMS** — so push notifications, in-app messages and
   postal mail are authorized and this wording collects none of them. That is
   not academic: phase 7 reuses this exact sentence as the scope statement for
   Nantucket Houses consent collection, so every contact gathered there would
   have granted email only, and the other channels would be either refused or
   sent beyond what the customer-facing text says. Under item 4's usage rule the
   wording on the surface *is* the scope collected, which cuts both ways and cut
   the other way here.

   Fixing an overbroad channel promise produced an overnarrow channel grant, one
   round apart, in the same sentence. Recorded plainly because two opposite
   errors in one string is the signal worth keeping.

   **The SMS half — withdrawn on the first round (P1).** As drafted it read *"Text messages are separate
   — we send those only if you ask us to."* That is **false**, and the error is
   the branch owner's: it was drafted here and recommended to the owner, who
   ratified it on that recommendation. The 2026-09-12 amendment carves out
   **marketing** SMS only, and says in terms that *"transactional and service
   SMS are unaffected — the passcode path, booking confirmations, payment
   messages and in-stay service texts continue."* A person who read the ratified
   sentence and then received a booking confirmation text would have been told
   something untrue, on the one surface whose entire purpose is to state
   accurately what they are agreeing to.

   Fixing the scope of one sentence introduced a false promise in another, which
   is why the withdrawal is recorded here in full rather than quietly replaced.

   **SUPERSEDED as the standing proposal, 2026-09-15 — kept for its analysis,
   not as the text on offer.** The owner supplied his own replacement wording
   later the same day, and it is held with the live decision token in
   `docs/strategy/amendments/2026-09-12-merged-contact-marketing-authorization.md`,
   which is the single authoritative home of the current proposal. Recorded after
   review (P2): two records each presenting a different sentence as "the standing
   proposal" let the owner amend or ratify the obsolete one depending on which
   pointer he followed, and the two have different channel scopes and different
   defects. The flags below apply to the text below and are why a replacement was
   wanted; the flags on **his** wording are recorded with it, in that amendment.

   **The earlier proposed replacement, superseded — NOT ratified and no longer
   the text on offer:**

   > Using any of these services means Congdon & Coleman Real Estate may contact
   > you about all of them — by email, push notification, in-app message, post,
   > or any other way we add later except text. Messages that are part of a
   > booking, a payment or a lease reach you either way. Marketing texts are
   > separate — we send those only if you ask us to.

   **Two things about this proposal have gone stale since it was written —
   raised 2026-09-15, not repaired here, because no contributor drafts this
   sentence.** Both are reasons to amend it before ratifying, and both are the
   same defect that withdrew the sentence in the first place: copy stating a
   scope the record or the code does not hold.

   - **Its channel clause now disagrees with item 7.** *"or any other way we add
     later except text"* was written when nothing else stated a collected
     channel scope. Item 7's marketing opt-in label, ratified 2026-09-15, names
     email, push notification, in-app message and mail — and under item 4's
     usage rule the wording on the surface **is** the scope collected. Ratifying
     this sentence as drafted would have the acknowledgement collect an
     open-ended scope on one surface and four channels on another, for the same
     grant.

     **Updated 2026-09-15 after review (P2): the owner has now chosen the
     open-ended reading, and that makes this a live decision rather than a
     sentence lagging behind.** When item 7 was ratified he had chosen four
     channels, and this bullet said so. His second revision of the privacy-policy
     draft states marketing may go by the four named channels *"or any new
     communication channels we introduce in the future"* — supplied, not
     hypothetical. So three surfaces now disagree: item 7 collects four, item 5's
     proposal is open-ended, and the policy describes open-ended. Under item 4's
     usage rule the wording on the surface **is** the scope collected, so a grant
     taken under item 7 carries four channels whatever the policy says, and
     `2026-09-05-cross-brand-consent-single-entity.md` forbids widening
     permissions already held. *(Still true of the channel axis after
     2026-09-15: the cross-brand seeding amendment of that date widens the
     **brand** axis only, and says in terms that a grant keeps the channel and
     purpose its surface named.)* Either the clause reverts or item 7 is
     re-ratified; a policy edit cannot do the second by itself.

     ~~`[DECIDE: reconcile the channel scope across item 7, item 5's proposal and the privacy-policy draft — either revert the policy's open-ended clause to the four channels item 7 collects, or re-ratify item 7 with open-ended wording; the surface wording is the scope collected, so the three cannot differ]`~~ **Answered 2026-09-15: reverted to the four ratified channels.** The
     privacy-policy draft's open-ended clause is withdrawn, so the policy and
     item 7 agree. The acknowledgement side closed the same day and by a
     different route: the open-ended wording above is **superseded**, not
     amended — the owner supplied his own replacement, which names the four
     channels, and it is the standing proposal. Rewritten after review (P2),
     because this block still called the superseded wording "the standing
     proposal" and asked for it to be amended, which would have reopened the
     disagreement the current proposal does not have.

     *Raised as a token after review (P2). It had been left out deliberately, on
     the reasoning that it was conditional on his keeping the clause — but he has
     supplied the clause, so the condition has fired and the obligation is real.
     An owner action that exists only in prose is invisible to the
     marker-derived open-work list, and this one gates customer-facing copy.*
   - **Its transactional promise is absolute and the send path is not.**
     *"Messages that are part of a booking, a payment or a lease reach you
     either way"* is false for an address under a global suppression:
     `src/lib/comms/consent-policy.ts:134-143` refuses every classification,
     transactional included — *"Nothing below may override it."* A spam
     complaint writes exactly that row (`src/lib/hello/receiver.ts:778-795`,
     `scope: 'global'`, because §4's shared suppression is company-wide), as
     does an erasure tombstone. The same sentence was withdrawn once for
     promising what SMS could not keep; this is the email leg of it.

   Recorded here rather than fixed because the sentence is the owner's to
   accept, amend or reject, and because a proposal quietly rewritten between
   being offered and being ratified is not the proposal he was shown.

   **Reordered after review (P2), and a residual question for the owner.** The
   revocation notice renders immediately after this sentence and reads *"You can
   stop these messages at any time"*. With the required-message clause last, a
   reader met *"…a booking, a payment or a lease reach you either way"* and then
   *"you can stop these messages at any time"* — which invites exactly the
   reading the clause before it denies, and would have had the surface promise a
   control over booking confirmations and payment receipts that the required
   classes do not allow. Moving the required-message clause off the end puts the
   marketing sentence next to the revocation notice, where "these messages" is
   the right referent.

   **That narrows the collision; it does not remove it, and the rest is the
   owner's.** "These messages" in the revocation notice is a **ratified**
   string, and its referent is only ever as clear as whatever renders above it.
   If he wants it unambiguous on its face — *"you can stop marketing messages at
   any time"* — that is an amendment to a ratified sentence, which no
   contributor may draft or make. Recorded here so that ratifying the
   replacement above and leaving the revocation notice untouched is a choice
   rather than an oversight.

   *Corrected on each round since it was first proposed, and the corrections
   are listed rather than counted because a count is one more thing that goes
   stale. Enumerating four
   channels closed the grant over exactly those four, while the amendment
   authorizes "all and any channel, except SMS" — so a channel added later would
   be authorized at send time and unauthorized by the acknowledgement, which is
   the mismatch this sentence exists to prevent (P2). And "needed to complete"
   excluded required messages that arrive after completion, such as
   confirmations and receipts (P2).*

   Three things it is built to get right, each of which a previous draft got
   wrong: it **enumerates the authorized channels** rather than naming one, so
   the grant matches the 2026-09-12 authorization; it **carves out marketing
   texts specifically** rather than all texts, so it does not contradict the
   transactional and service SMS the same amendment leaves running; and it says
   **"part of a booking, a payment or a lease"** rather than "bookings,
   payments and stays" — corrected twice after review (P2 ×2). "Stays" would
   have made every in-stay text non-suppressible, against the required classes
   of booking transactional, payment lifecycle and lease execution; the
   replacement "needed to complete" then excluded the required messages that
   arrive *after* completion, such as confirmations and receipts. The first of
   those errors was the same one corrected in the privacy-policy draft an hour
   earlier and left standing here; the second was this paragraph quoting a
   wording the proposal above had already moved past.

   Until the owner ratifies a replacement, **the acknowledgement has no
   authorization sentence at all and may not ship**, since counsel's answer 1
   requires the communication authorization to be complete. Both halves are
   withdrawn, not only the SMS half — this line said "no SMS sentence" after
   the channel half was struck too. The matching corrections in the draft
   privacy-policy copy held in
   `docs/vendor-retirement-and-identity-unification.md` were made on the rounds
   that found them; that draft no longer carries either overbroad promise.

   **Why the third sentence enumerates the brands.** The owner's rule of
   2026-09-14 is that opting out requires the person to select one or more
   brands rather than being all-or-nothing, which matches counsel's 2026-09-12
   answer that revocation is per brand. A revocation notice that does not show
   the choice describes a control the person cannot see.

   **But brand is not the ratified unit, and this sentence makes it look like
   one — flagged after review (P2), and still not resolved here. It is further
   from the unit than when it was flagged**: as of 2026-09-15 the person is
   owed a channel choice as well
   (`docs/strategy/amendments/2026-09-15-channel-per-brand-revocation.md`), so
   this sentence now understates two axes rather than one. The withdrawal
   design ratified 2026-09-05 is **per message class**, multi-select, grouped by
   sending brand — *"finer than brand, and finer than the three purposes"* — and
   `2026-09-12-merged-contact-marketing-authorization.md` reaffirms it and says
   in terms:

   > It is *finer* than the per-brand revocation counsel specified, so counsel's
   > requirement is already satisfied by the ratified design; **no coarsening is
   > authorized here.**

   This sentence presents the brand as the thing a person chooses to stop. Read
   as the canonical customer-facing copy it is, an implementer building the
   preference centre must either expose brand-level opt-outs only — the
   coarsening the amendment forbids — or ship a control the acknowledgement does
   not describe. The person is not harmed either way, since the ratified design
   gives them *more* control than the sentence promises; the defect is that the
   two instruments disagree about the unit, and the copy is the one an
   implementer builds to.

   **Whose it is.** Not a contributor's. Either the copy changes, or the
   withdrawal design does, and the second would be an amendment to two ratified
   amendments. The owner's 2026-09-14 direction was recorded here as ratified
   copy without being checked against that design — the same error as the
   cross-brand seeding direction and the per-brand cap keying, and the third
   time on this change that an owner instruction was recorded as operative
   before being read against ratified law. It joins the reconciliations below.

   **He took neither branch on 2026-09-15 — corrected after review (P2), which
   caught this paragraph saying "the first branch" while the marker below
   correctly records that he took neither.** The marker offered a choice: change
   the copy, or amend the design to make brand the unit. He did something else,
   and both halves moved:

   - **The design was amended** — by him, not by a contributor — to add
     **channel** as a third axis, leaving message class where it was. Withdrawal
     is now a selection over (brand, channel, message class).
   - **The copy must change too**, and by more than the first branch would have
     required: the notice is now narrower than the design on two axes rather
     than one.

   So the answer to "which half moves" is *both*, which closes nothing here: the
   copy is a ratified string and its replacement is his to write. The marker
   below carries it.

   **Consumers.** The acknowledgement surface, still unbuilt; plumbing in phase
   7 of `docs/vendor-retirement-and-identity-unification.md`, record schema in
   phase 8's design document. The surface persists the acknowledgement version
   and timestamp per contact; these strings do not change that requirement.

   **What this does not settle.** It does not release the phase-7 launch gate
   by itself — the gate is the built surface rendering this copy and persisting
   its record, not the copy existing. And it does not reach the privacy policy,
   which is separately with counsel.

   **Conformance checks.** Names no legal entity (register item 1a). Uses no
   collective abstraction, satisfying the 2026-08-14 retirement — the brands are
   enumerated, never grouped under a name. "Congdon & Coleman Real Estate" in
   full, "NantucketRentals.com" with the `.com`, "Nantucket Houses" rather than
   "the app", per `canonical-naming.md`. Cannot be read to include Congdon and
   Coleman Insurance, Inc. Names no fourth brand, so it collects nothing for
   Hello Nantucket, per item 4's usage rule.

   **Upstream reconciliation — done 2026-09-15, and recorded rather than
   deleted.** `2026-09-12-merged-contact-marketing-authorization.md` used to
   record that three of the acknowledgement's four statements had no ratified
   string. Two of those three — account ownership and the revocation notice —
   are ratified above, so the count was corrected there to **one**, and its marker
   now names the communication-authorization sentence alone. *That sentence was
   withdrawn on 2026-09-14 and **ratified by the owner on 2026-09-15** on his
   third wording; this paragraph said it was awaiting a replacement for the
   hours after he supplied one — corrected after review (P2). All four
   components now have ratified strings; the component note below is the
   authority on that.* Corrected by the branch owner on
   the reading that a **count of what is ratified elsewhere is a report, not a
   decision**: it states external fact and changes nothing the amendment
   decides, so odin#423's rule against a contributor amending a ratified
   instrument does not reach it. Narrowing what the marker *asks* would be a
   different act; the marker was narrowed by the owner's own ratifications, not
   by the edit.

   **All four reconciliations are done, dated 2026-09-15 — corrected after
   review (P2).** The fourth was the heaviest and the last to close: a
   contradiction between two ratified instruments about what a person is
   actually offered, which the owner answered with a third unit neither branch
   of the marker had proposed. This heading described it as still open for the
   hours after he answered it, which is how an answered decision gets
   re-solicited:

   | Where | What was stale | State |
   |---|---|---|
   | `2026-09-12-…-authorization.md` | "three statements have no ratified string" — two now do | **Done 2026-09-15.** Corrected to one as a report of external fact; see the paragraph above |
   | `2026-09-12-…-authorization.md` | its live decision marker on the two SMS paths, both now decided | **Done 2026-09-15.** The owner answered both paths — Sakari dropped, the listings path kept and paused — and the marker is struck with his answer |
   | `2026-09-14-nr-renter-pmo-record-class-migration.md` | "Three of its four required strings are unwritten" — one is | **Done 2026-09-15.** Corrected at both sites on the same report-not-decision reading, after review (P2) pointed out that recording it as follow-up leaves an *executable* cutover prerequisite soliciting completed work — which is worse than the one-file widening that fixing it costs |
   | This record, item 5's revocation notice | It makes **brand** the unit a person chooses to stop; the ratified withdrawal design is **per message class** and forbids coarsening | **Done 2026-09-15, both halves.** The owner answered the design with a third unit rather than either offered — channel, added to class — and then supplied the replacement string, ratified as supplied and quoted in item 5 |

   **The fourth had a token, because prose is not a flag — raised after review
   (P2).** The paragraphs above described this contradiction and said it was the
   owner's, and that is where it stopped: no marker named it, so a repo-wide
   scan reported nothing and the census listed nothing. Work here is generated
   from the token, and the token is what he answered:

   ~~`[DECIDE: reconcile item 5's revocation notice with the ratified per-message-class withdrawal design — either the copy changes to describe the finer unit, or the 2026-09-05 design and the 2026-09-12 amendment are amended to make brand the unit]`~~
   **Answered 2026-09-15, and with neither branch the marker offered:** *"change
   the amendments, user must be able to opt-out of any channel per brand."* He
   made **channel** a revocation axis, which no instrument had done, and left
   message class where it was. The design half is recorded in
   `docs/strategy/amendments/2026-09-15-channel-per-brand-revocation.md`, ratified
   the same day: withdrawal is a selection over **(brand, channel, message
   class)**, additive rather than substitutive, because dropping the class axis
   would be the coarsening the 2026-09-12 amendment forbids and he asked for a
   control that does not exist rather than the removal of one that does.

   **The copy half is untouched by that, and is why a marker still stands here.**
   Item 5's notice offers the brand and nothing finer; it was in contradiction
   with one axis and is now in contradiction with two. A contributor cannot write
   its replacement — ratified strings are verbatim-only and an unrecorded variant
   is drift whoever typed it — and this is a replacement rather than an override,
   since the text is wrong for every surface and not just one:

   ~~`[DECIDE: supply item 5's replacement revocation notice, describing withdrawal by brand, by channel and by message class, and saying that required booking, payment and lease mail still arrives on a channel the person has switched off — and settling its overlap with the acknowledgement's ratified closing clause "You can stop promotional messages at any time", which renders immediately before it and says nearly the same thing unscoped]`~~
   **Answered 2026-09-15: the owner supplied the replacement and it is ratified
   as supplied.** It is quoted above, in item 5's block, and it is now the
   notice — the superseded wording sits beside it as history.

   **It meets every requirement the marker set.** Checked one at a time, because
   this string had to satisfy four things at once and three of them came from
   his own earlier decisions:

   - **All three axes are named** — *"by brand (Congdon & Coleman Real Estate,
     NantucketRentals.com, Nantucket Houses), channel, or message type."* The
     copy and the ratified design now describe the same unit, which is what the
     original contradiction was about.
   - **Required mail is stated, not implied** — *"Required service
     communications regarding your bookings, payments, and leases will continue
     to be delivered regardless of marketing opt-out settings."* That is his
     channel-switch decision of the same day rendered in customer-facing copy:
     a person who switches off a channel is told what still arrives on it,
     rather than discovering it.
   - **The unscoped promise is gone.** The superseded sentence said *"stop
     these messages"* directly after a sentence naming both essential service
     mail and promotional updates, so read in sequence it promised more than the
     system does. The replacement scopes itself to **marketing messages** and
     then names the exception explicitly.
   - **The naming law holds.** The three entities are enumerated with no
     collective abstraction, "Congdon & Coleman Real Estate" in full,
     "NantucketRentals.com" with the `.com`, "Nantucket Houses" rather than "the
     app". Nothing can be read to include Congdon and Coleman Insurance, Inc.,
     and no fourth brand is named, so the sentence collects nothing for Hello
     Nantucket.

   **One thing it does not remove, flagged rather than fixed: the repetition.**
   The acknowledgement's ratified authorization sentence ends *"You can stop
   promotional messages at any time"* and this notice renders immediately after
   it, opening with the same promise in more detail. The **defect** the marker
   named is gone — the second sentence is no longer looser than the first, which
   was the part that mattered — but a reader still sees the same undertaking
   twice in consecutive sentences. Redundant rather than wrong, and tightening
   it means editing one of two strings the owner ratified on the same day, which
   is his call and not a contributor's. Recorded here so the choice is visible
   the next time either sentence is opened.

   **The required-mail clause was added to this marker on 2026-09-15, by his own
   answer rather than by a contributor's reading.** He decided that a channel
   switch *"stops only suppressible classes, required mail still goes"*. That
   settles the behaviour and makes the sentence harder rather than easier: a
   notice saying a person can stop a channel, with nothing about what still
   arrives on it, is the unscoped promise this record keeps catching — and the
   2026-09-05 rules *a toggle shown is a toggle honoured* and *required rows are
   shown, not hidden* both bear on the copy, not only on the control. The
   marker gained a requirement; it did not gain a second question, and it is
   still one string.

6. **Surface extension: unsubscribe footers and About Us pages** (Stephen,
   2026-09-14). No new string. The owner was offered a shorter footer variant
   and declined it, on the reasoning that a second portfolio-relation string
   saying the same thing in different words is the drift this record exists to
   prevent. What is ratified is **which existing string each surface carries**:

   | Surface | String | Why that one |
   |---|---|---|
   | Unsubscribe footers on templates sending **under the three-brand grant** | **Item 4**, verbatim | The footer sits on a message sent under that grant, so it states that grant's scope |
   | Unsubscribe footers on **Hello Nantucket** sends | **Hello's own footer string** (ratified 2026-09-15, quoted below), verbatim | Hello is outside the three-brand grant in both directions, and item 4 does not name it, so item 4 is the wrong string on a Hello footer |
   | About Us pages | **Item 3**, verbatim | An About Us page describes the business rather than collecting a permission, so naming Hello Nantucket is accurate rather than scope-widening |

   **The distinction is the point.** Item 4's usage table warns that using the
   four-brand form where a grant covers three "may be read as granting scope" to
   the brand named in excess. That warning is about *collection surfaces*. An
   About Us page grants nothing, so it takes the complete description; an
   unsubscribe footer is attached to the grant and takes the grant's form.

   **Scope of the rollout.** This spans repositories — `cnc-web-fe`,
   `nr-web-fe`, the Nantucket Houses app, and every provider template carrying
   an unsubscribe footer **on a three-brand send**. Beehiiv, which carries Hello
   Nantucket, is deliberately outside **that** rollout — corrected after review
   (P2), because an earlier draft of this item said "every provider template" and
   so swept in the one lane this record repeatedly separates. A Hello footer
   needs its own string, and as of 2026-09-15 it has one, so Beehiiv now has a
   rollout of its own rather than a block:

   ~~`[DECIDE: ratify the relationship string for Hello Nantucket unsubscribe footers — item 4 does not name Hello and may not be used there]`~~
   **Ratified by the owner 2026-09-15, as supplied.** Verbatim:

   > You are receiving this because you subscribed to Hello Nantucket.
   > Unsubscribing here applies solely to Hello Nantucket updates and does not
   > affect your Congdon & Coleman Real Estate preferences.
   > [Unsubscribe from Hello Nantucket]

   It does the one thing item 4 could not: it states the separation from inside
   a Hello surface without naming Hello in a three-brand relation string. The
   separation runs in both directions, as §7.1 requires.

   **One thing to watch on rollout, recorded rather than fixed because the
   string is ratified and verbatim-only.** It names *"your Congdon & Coleman
   Real Estate preferences"* and not NantucketRentals.com or Nantucket Houses,
   so a reader who holds preferences for those two is told about one of the
   three. That understates what is unaffected rather than overstating what is
   affected — the safe direction — and the alternative would have been a
   four-entity sentence in an unsubscribe footer. Flagged for the owner if he
   wants it widened; it ships as ratified until he says otherwise.

   **The marker was owed and was missing — added after review (P2).** This item
   excluded Hello from the rollout in prose and left the exclusion discoverable
   only by reading it. Work in this repository is generated from the marker
   tokens, so phase 6a could have completed its scoped rollout, reported done,
   and left Beehiiv sending without the relationship language §7.1 requires —
   an exclusion turning quietly into an omission. Phase 6a's Beehiiv gate is
   tied to this marker rather than to the paragraph.

   Sequence, unchanged from the plan: copy ratified →
   rolled out on every surface → conformance audit that finds the surfaces
   nobody remembered. The multi-consumer caveat under item 3 applies with full
   force here, since this is the widest consumer set any string in this record
   has.

7. **Consent-collection copy — three of four components** (Stephen,
   2026-09-15). The owner asked for suggested language, revised it, and
   directed *"use the text exactly as I supplied it"*. These are his words,
   ratified as supplied, and they ship verbatim. Recorded here because this
   record is the only ratified string record
   (`docs/strategy/brands/skill/references/shared-standards.md`); until this
   entry existed they lived only in
   `docs/vendor-retirement-and-identity-unification.md`, where a consumer
   looking for canonical copy would not find them and might make a second one.

   > **Marketing opt-in label.** Keep me updated with news, featured listings, and
   > special offers from Congdon & Coleman Real Estate, NantucketRentals.com, and
   > Nantucket Houses via email, push notification, in-app message, or mail.

   > **SMS disclosure.** Send me marketing texts. Message and data rates may apply.
   >
   > Please note: Replying STOP to any text message will unsubscribe you from all
   > text communications from us, including essential booking and payment updates. To
   > opt out of marketing texts while keeping your transactional updates active,
   > please contact us directly.

   > **Privacy link.** Learn how we protect and use your information in our [Privacy
   > Policy].

   **The label's four channels are the collection scope.** It names email, push
   notification, in-app message and mail, and under item 4's usage rule the
   wording on the surface *is* the scope collected. So a marketing channel
   authorized later — the 2026-09-12 amendment's "all and any channel, except
   SMS" contemplates them — is not covered by a permission collected under this
   label and needs its own collection. **SMS is not in this label**: it is the
   separate disclosure above, given separately, and no email or general
   marketing permission enables it.

   **The privacy link needs a destination.** It renders as a link to the
   privacy policy, whose communications section is still a draft with counsel
   (`docs/vendor-retirement-and-identity-unification.md`, 7.7). The string is
   ratified; the page it points at is not written.

   **This completes the consent-collection copy — updated 2026-09-15 after
   review (P2), which found this paragraph still gating the surface on an
   unratified fourth component.** It read *"the fourth component — the
   authorization sentence — is unratified … the surface does not ship on three
   of four"*, and stayed that way for the hours after the owner ratified it. An
   implementer scheduling the Nantucket Houses collection surface from this
   canonical record would have held it back and gone looking for a decision he
   had already made.

   The authorization sentence was **ratified by the owner on 2026-09-15**, on his
   third wording, and is recorded verbatim in
   `docs/strategy/amendments/2026-09-12-merged-contact-marketing-authorization.md`
   — still the single authoritative home for it, which is why it is pointed at
   rather than copied here. All four components now have ratified strings.

   One thing this does **not** release, because it is a separate obligation and
   not this component's: **the privacy link still needs a destination**, per the
   paragraph above.

   *Item 5's revocation notice was the other open component when this paragraph
   was written, and it closed the same day — the owner supplied the replacement
   and it is ratified in item 5. The surface's revocation copy and its
   authorization copy are now both settled.*

   Item 5's earlier authorization wording remains marked **superseded** and is
   not the text on offer. *Both pointers were corrected in an earlier round
   (P2): they sent a reader to item 5 for the proposal and to the plan for the
   marker, so an owner could have reviewed the obsolete, differently scoped
   wording.*

## Owner overrides

A ratified string is verbatim for everyone except the owner, who may direct
that a named surface render a shortened or different form. The rule the
override displaces is the one above; the rule it does not displace is that
nobody else may do the same, and that an override nobody wrote down is
indistinguishable from drift.

Each entry names the surface, not the string alone: an override is granted to
a surface and does not travel to any other.

### Odin listing sheet — Stephen, 2026-09-09

The listing sheet PDF (`src/lib/listings-manager/sheet/`) renders a reduced
footer. Directed in the 2026-09-09 templates session, after the compliance
question was raised twice and answered both times.

- **`legal.nr.listing.cc`** — the sheet carries only the closing sentence,
  "Information is believed to be reliable but is not guaranteed." The opening
  sentence, which names the brokerage and states that it represents the owner,
  is not rendered on this surface.
- **`legal.cc.poweredby`** — not rendered on this surface at all. The logo is
  the sheet's broker identification.

What this leaves, recorded because a reader should not have to reconstruct
it: with both removed, the sheet carries no licence number and no statement of
agency, and the logo is its only broker identification.

~~`[LEGAL REVIEW: broker identification on the listing sheet]` — raised by the
owner's own instruction, not yet answered by counsel.~~ **Answered 2026-09-10:
counsel approved.** The reduced footer stands as directed; logo-only broker
identification on this surface is approved. Relayed by Stephen and recorded by
the branch owner — the approval itself is not held in this repository, so a
reader who needs its terms should go to counsel rather than to this line.

Implemented the same day in odin#400: `renderOdinListingSheetDisclosure()`
derives the closing sentence from the ratified string and refuses to render if
the ratified text stops ending with it.

This override reaches the listing sheet and nothing else: no other surface
renders a reduced form *by virtue of it*. *(That is the limit of what this
sentence claims. It once read "every other surface continues to render both
strings in full", which stopped being true on 2026-09-16 when the off-market
listing page override replaced that same pair on its own surface — a universal
claim in a register that grows by exception was always going to be falsified by
the next exception. Each grant states its own scope; the ones on file are the
privacy policy and the NantucketRentals.com inquiry-notification email
(2026-09-15) and the Nantucket Houses off-market listing page (2026-09-16), all
below.)*

### Privacy policy — Stephen, 2026-09-15

The privacy policy (`packages/core/src/privacy-policy-content.ts` in the
Nantucket Houses app, and any surface that publishes that policy) opens its
communications section with the owner's wording rather than item 3 verbatim.
Directed on 2026-09-15, after the branch owner declined to ship the variant
without a recorded override and raised it as a decision.

- **Item 3** — this surface renders:

  > NantucketRentals.com and Nantucket Houses are services operated by Congdon &
  > Coleman Real Estate, publisher of Hello Nantucket.

**What changes and what does not**, recorded because the difference is the
reason this override is narrow. The variant names the same four brands and
states the same two relations — the two services and their operator, and that
operator as Hello Nantucket's publisher. It changes the verbs: *"are services
operated by"* for *"are services of"*, and *"publisher of"* for *"who also
publish"*. So item 3's usage rule is not engaged: a surface using a narrower
form states a narrower scope, and this form is not narrower. Had the variant
dropped a brand or a relation, it would have been a scope change wearing a
wording change's clothes, and would have needed more than an override.

**It does not travel.** Consent-collection surfaces, the first-sign-in
acknowledgement, About Us pages and the launch email continue to render item 3
or item 4 as their own rules direct. The override is granted to the privacy
policy and to nothing else.

**It does not survive counsel.** The communications section it opens is a draft
with counsel, and if counsel returns different wording that is counsel's text,
not this override's — the override records what the owner directed for this
surface, not an approval of the paragraph around it.

### NantucketRentals.com inquiry-notification email (Klaviyo) — Stephen, 2026-09-15

The agent-facing new-inquiry notification carries its brand relation inside the
masthead image
(`https://d3k81ch9hvuctc.cloudfront.net/company/V9cNAv/images/649082f7-f87a-497a-8a9e-2d75a50f18ba.png`),
which reads, and whose `alt` reads:

> Nantucket Rentals — a service of Congdon & Coleman Real Estate

Directed in the 2026-09-15 brand-compliance review of that template, after both
deviations below were raised as findings: "the logo is accepted, disregard."

- **`legal.nr.ownership`** — the ratified string ("NantucketRentals.com is a
  service owned by Congdon & Coleman Real Estate.") is not rendered on this
  surface. The masthead states the same relation in its own words.
- **Canonical naming (register item 5)** — "Nantucket Rentals", without the
  `.com`. This is the only surface on which that form is permitted.

What this leaves, recorded because a reader should not have to reconstruct it:

- The relation is stated and is accurate — NantucketRentals.com is owned by
  Congdon & Coleman Real Estate, and "a service of" neither denies nor narrows
  that. What the surface does not do is state it in the approved words.
- **The wording is baked into a raster asset on the ESP's CDN, and no guard can
  reach it.** This is the material difference from the listing-sheet override
  above: there, `renderOdinListingSheetDisclosure()` derives the reduced form
  from the ratified string and refuses to render if the ratified text drifts
  away from it. Here the template is not held in this repository,
  `disclosures.ts` cannot pin an image, and nothing will notice if
  `legal.nr.ownership` is re-worded. The override is therefore permanent in a
  way odin#400's is not — it survives changes to the string it displaces,
  silently.
- **The naming half is excepted in the naming record itself**, as of the answer
  below. `canonical-naming.md` carries a precedence section, lists this masthead
  as its one excepted surface, and requires a lint arming the `.com` row to
  carry that surface as an exemption scoped the way the grant is scoped — the
  masthead image alone, never the file it sits in, since a path-wide exemption
  would also pass a later "Nantucket Rentals" in the template's subject or body.
  So a naming lint reaching this template has an exception to apply rather than
  a finding to raise, and no more exception than was granted. None of
  that was true when this entry was first written; the answer below records what
  changed and when.

  ~~`[DECIDE: record the .com exception for this masthead in canonical-naming.md, or establish which record wins where an owner override meets the naming table]`~~
  **Answered 2026-09-16 by Stephen: the override wins.** Where an override
  recorded under "Owner overrides" grants a named surface a form the naming
  table forbids, the override governs on that surface. Recorded in
  `canonical-naming.md` under "Owner overrides take precedence over this table,
  per named surface", with this masthead listed as the one excepted surface and
  the `.com` row carrying a pointer to it.

  Raised in review of [#455](https://github.com/stephen329/odin/pull/455), where
  the contradiction was the finding: this record granted an exception the naming
  table did not admit existed, so a reviewer or a lint reading that table alone
  had none to apply. The precedence is per surface and the owner's alone — it
  gives no contributor a route around either record.
- **No counsel question was raised or answered for this surface**, unlike the
  listing-sheet override. Recorded as a fact rather than as a recommendation:
  nothing is removed here — no licence number and no statement of agency is at
  stake, since `legal.nr.ownership` carries neither — which is why it does not
  obviously present the question the listing sheet did. Whether it presents one
  anyway is the owner's to decide.

Granted to this surface and no other. A second template wanting the same
masthead needs its own recorded grant.

**Amended 2026-09-16 — the masthead is being replaced, and one half of this
override will retire with it.** A revision of the template swaps the wide
horizontal lockup above for a compact endorsed lockup, whose `alt` reads:

> NantucketRentals.com, a service of Congdon & Coleman Real Estate

Read against the two deviations, that artwork splits them:

| Deviation | On the replacement |
|---|---|
| Canonical naming (register item 5) | **Resolved** — the `.com` is present, so the override is not needed for it |
| `legal.nr.ownership` paraphrase | **Unchanged** — "a service of" still stands where "is a service owned by" is the approved wording |

**This amendment records the direction of travel; it does not retire anything
yet, and the entry above still describes the live surface.** Three reasons,
each of which would be enough on its own:

- **The replacement is not shipping.** The revision references the lockup as a
  relative path to an `.svg`. Email clients resolve no base URL and most do not
  render SVG at all, so that masthead renders in no mailbox. What recipients
  receive today is still the CloudFront PNG named above.
- **Only the `alt` has been read, not the artwork.** The SVG itself was never
  supplied to the branch owner. An override attaches to what a masthead
  *displays*, and `alt` text and a rendered wordmark can disagree. Retiring the
  naming half on the strength of an attribute nobody has checked against the
  image would be recording a conformance that may not exist.
- **The asset identifier will change.** This entry pins a CloudFront URL that
  the replacement supersedes. Re-pinning it to a URL that does not yet exist is
  not possible, and an entry naming a retired asset is the staleness this
  record exists to prevent.

**What is owed when the exported PNG is live at an absolute URL**, and it is
more than one edit — the `.com` exception is now recorded in five places, so
retiring it in one leaves four saying it still stands:

1. **This entry** — and it is the whole entry, not the asset line. **Two things
   happen here and only one of them is conditional.**

   *Unconditionally*, whatever the artwork turns out to say: re-pin the URL and
   rewrite every statement describing the live masthead to match what was
   actually observed — the opening quote of what it reads, the canonical-naming
   bullet under the two deviations, and the comparison table's naming row, which
   currently calls the replacement "Resolved" on the strength of its `alt` alone.
   A conditional that re-pins the asset and leaves the prose would point the
   register at a new image while describing the old one, or certify a conformance
   nobody checked.

   *Conditionally* — if and only if the rendered wordmark confirms what the `alt`
   claims: retire the naming exception itself, here and in the four other copies
   below, including the bullet on the naming half being excepted and needing a
   scoped lint exemption. If it does not confirm, the exception stays and this
   entry says so plainly, because the surface still carries the deviation.

   Leaving the exception anywhere makes this register — the authoritative one —
   the last place still advertising an override the other copies have removed.
2. **`canonical-naming.md`** — and it is four edits, not one: the row in the
   exception table, the `†` on the `.com` row, the `†` footnote under the table
   that says a surface is excepted, and the grant-specific prose in the
   precedence section that names this masthead and calls it the one grant on
   file. **Keep the precedence rule itself** — the owner's 2026-09-16 decision
   stands whether or not a grant is currently outstanding; what goes is the
   claim that one is.
3. **`CLAUDE.md`** and 4. **`AGENTS.md`** — both blocks describe the naming half
   and its retirement condition; both stop being true on the same day.
5. **`docs/strategy/brands/skill/references/shared-standards.md`** — the skill
   source carries its own naming table and its own `†` footnote, both of which
   need the same treatment as step 2.
6. **Republish the skill to the account, and verify it in a fresh session** —
   for the *second* time; see "Publishing this exception" below, which owes the
   first one now. Editing the source in step 5 changes nothing that an agent
   loads: per `skill/README.md`, the account copy is an uploaded snapshot with
   no ref to follow, and merging publishes nothing. Skip this and the plugin keeps authorizing the retired
   exception indefinitely, after all five repository copies are correct — the
   failure mode is invisible from inside this repository, which is exactly why
   it is written into the checklist rather than assumed. The reconciliation
   record's own caveat applies: a synced skill is downloaded at session start,
   so verifying the republish takes a fresh session rather than this one.

**Publishing this exception — owed now, not at closeout.** The exception was
written into the skill source in this change, and that source is not what any
agent loads. The account plugin is a hand-uploaded snapshot, it is already
behind the repository (roadmap item `brand-skill-republish`, `status: approved`),
and merging this does not upload anything. **Until someone re-uploads it, every
agent loading `nantucket-brands` will go on reading "one form everywhere", find
this masthead, and flag or rewrite copy the owner accepted** — for the whole
life of the exception, which is the opposite of what recording it was for. The
upload is the owner's to make; this record can only say that it is owed and
that a fresh session is needed to confirm it, since a synced skill is
downloaded at session start.

**Only the naming half retires. The `legal.nr.ownership` paraphrase does not** —
the replacement `alt` still reads "a service of" where the approved string reads
"is a service owned by", so this override and its entry survive the swap in
reduced form. Retiring the whole entry would un-record a deviation the surface
still carries.

Until all of that, this entry stands whole and the override covers both
deviations, because the surface still carries both.

### Nantucket Houses off-market listing page — Stephen, 2026-09-16

The document Odin publishes to Nantucket Houses for an off-market listing
(`src/lib/listings-manager/publication/payload.ts`) carried two footer lines:

- **`legal.nr.listing.cc`** — "This listing is provided by Congdon & Coleman
  Real Estate, Massachusetts Licensed Real Estate Broker #422678, which
  represents the owner. Information is believed to be reliable but is not
  guaranteed."
- **`legal.cc.poweredby`** — "Congdon & Coleman Real Estate, MA Real Estate
  Broker's License #422678"

Between them they named the brokerage twice and printed #422678 twice, in two
different phrasings of the same licence. The owner directed that both come off
this surface and one line replace them, ratified as **`legal.cc.license`**:

> Congdon & Coleman Real Estate, Massachusetts Real Estate Broker's License
> #422678. Information is believed to be reliable but is not guaranteed.

**Approved 2026-09-16 by Stephen Maury and by counsel.** Relayed by the owner
and recorded by the branch owner; the approval itself is not held in this
repository, so a reader who needs its terms should go to counsel rather than
to this line. Same standing as the 2026-09-10 approval recorded for the Odin
listing sheet above.

What this leaves, recorded because a reader should not have to reconstruct it:
the page states the brokerage, its Massachusetts licence number, and that the
information is not guaranteed. It no longer states that Congdon & Coleman
Real Estate **represents the owner** — that clause lived only in
`legal.nr.listing.cc`, and it does not survive into the replacement. The
question was put to the owner before the change was written and answered with
the approval above.

Scope, as for every entry here: the override is granted to this surface. Both
replaced strings remain ratified and unchanged, and both remain in use — the
listing sheet reduces `legal.nr.listing.cc` under its own 2026-09-09 override,
and cnc-web-fe renders `legal.cc.poweredby` on every public page. Neither
record was removed; only this document's use of them was.
