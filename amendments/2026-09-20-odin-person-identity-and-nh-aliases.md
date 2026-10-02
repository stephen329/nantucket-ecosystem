# Odin person identity and historical NH aliases

- **Date:** 2026-09-20
- **Owner:** Stephen Maury
- **Status:** **Approved and ratified — Stephen Maury, 2026-09-20.**
  The ratification record below states the approval and its limits.
- **Decision evidence:** The owner accepted the proposal to separate Odin person
  ownership from historical NH provenance: “good plan, let's do that.” This
  records the original direction. The later explicit ratification is recorded
  below.
- **Scope:** Narrow follow-up to the September 16 person/inquiry relocation.
  No live migration, writer change, or Step 4 release is authorized by this text.

## Decision

Odin owns the person and inquiry after the separately released joint cutover.
New persons receive stable Odin-owned IDs. Existing NH contact IDs survive as
historical aliases for migration, reconciliation and references. Such aliases
neither make NH authoritative nor require an NH backend call to resolve them.

The selected implementation direction is to retain `nh_renter` as the historical
alias namespace, rather than rename all historical keys. Do not mint new Odin
person IDs in that namespace or create a competing person for each alias.
A person may have multiple external aliases, but one alias has one canonical
target. Email and phone are evidence, not person IDs or alias keys.

## Exact change to the September 16 contract

[The September 16 amendment](2026-09-16-nh-originator-classes-retire-to-odin.md)
§1a includes `nh_renter` in the person class, and §3 step 2 says to give it a
producer. This ratified amendment replaces that interpretation
with: backfill the person class into Odin-owned person records and preserve
historical NH contact IDs in the `nh_renter` alias namespace. New Odin-originated
persons need no NH alias. The person class still includes its conflicts and
external links; they do not disappear because the naming changes.

Ratification satisfies the prerequisite for the bounded canonical-transaction PR
in the September 20 integration handoff. Its schema, source mapping and acceptance
tests may now be implemented against these semantics under the repository's review
protocol. This does not authorize live migration or deployment of changed source
semantics; those still require the existing migration and cutover releases.

Unchanged: corroboration or review for every uncorroborated single-key match;
a person, inquiry and initial lifecycle state on intake; preservation of source
lineage and audit; joint person/inquiry cutover; earlier cutover prerequisites;
and separate owner release of Step 4. Transaction authority remains with its
provider. This is not a bypass of #492's held merge or fence requirements.

## Approved representation

Reuse `contact_identity.id` as the stable Odin person ID; do not introduce a
parallel person table or new origin-source label solely to rename ownership.
Inquiries reference that ID. Existing canonical identities are reused through
verified source mapping and reconciliation, never blindly re-created.

Keep `identity_link(source_system='nh_renter', source_record_id=<historical ID>)`
as the historical alias mapping. Audit the historical key encoding and tenancy
scope first: the existing uniqueness constraint is safe only if those source IDs
are unique within the historical namespace. Preserve existing key bytes during
migration; any discovered collision needs an explicit mapping migration.

Alias metadata may retain names/contact evidence for provenance. Ownership comes
from the person domain and authority transition, not an alias's spelling or a
source-system list. Update documentation and source classifications that currently
conflate origin ownership with presence of a link. An Odin-native person with no
external aliases must still be readable, searchable and eligible for review.

Canonical person contact methods need a first-class storage/read contract:
`contact_identity` currently lacks email/phone columns, and existing matching reads
those keys from `identity_link`. Implement contact-method storage and candidate
lookup for native people without manufacturing NH or other external aliases.
Preserve shared contact methods, evidence provenance, erasure and merge/split
behavior. Exact schema belongs in the implementation review, not this direction.

A pending inquiry has its own provisional Odin person when candidate identity is
uncorroborated. Review can confirm that person is distinct or reconcile it with an
existing identity under canonical graph rules. Preserve all original person IDs
through audited remaps; never transfer candidate account access merely because
email or phone matched.

## Migration and compatibility sequence

1. Inventory all `nh_renter` consumers: source enumerations and CHECK constraints,
   synchronization, search/read models, candidate lookup, access grants, exports,
   merge/split and audit. Identify native-person readers that require a source link.
2. Implement native-person creation/contact methods and alias resolution on one
   transaction boundary. Add readers before enabling native-only person writers.
3. Build and verify a durable historical NH-contact-to-Odin-person map. Existing
   alias reuse, conflicts and missing targets must be explicit; do not create a
   second person because an alias already exists under a different spelling.
4. Backfill in the ratified sequence, including the agreed NH corroboration change
   before early backfill. Preserve inquiry/person, publication/selection and audit
   references. Keep ordinary NH synchronization in force while NH is authoritative;
   “historical alias” is the destination semantics, not permission to stop it early.
5. Rehearse the joint cutover and old-reference compatibility. Only after the
   existing gates and separate Step 4 release, stop NH-originator writes and enable
   Odin native intake. Alias resolution then works from Odin's own storage.
6. Retain historical aliases under approved retention/erasure policy. No blind
   rollback to NH after Odin has accepted new writes; use the governing recovery
   and reconciliation procedure. Never reassign old alias keys to a new person.

## Required verification

- Migrating the same historical person twice produces one mapping, with unchanged
  old identifiers and inquiry references; a conflicting mapping fails visibly.
- New native intake creates an Odin person and inquiry without minting an NH ID
  or calling NH, and the person is visible to search/read/review without an alias.
- A verified existing NH alias resolves to the same Odin person offline from NH;
  removing NH network access does not break that lookup.
- Single-key candidate matches remain reviewable without inherited candidate
  access; shared-email distinct people remain distinct.
- Merge/split preserves canonical remaps, native contact methods, aliases, review
  decisions and audit. Concurrent alias creation and merge cannot repoint silently.
- New or expired callers cannot gain permission through historical provenance.
- Source-key collisions, failed backfill, partial transaction and retry paths
  preserve the same person/inquiry/attribution relationships.

## Ratification record

The owner records approval here, with a date, and the Status line above is
flipped to match in the same commit. Both move together; neither is set by the
act of merging.

> Approved by: **Stephen Maury**  Date: **2026-09-20**

- **How this approval was given.** After
  [#493](https://github.com/stephen329/odin/pull/493) merged with this amendment
  Proposed, the owner was asked to ratify it so canonical implementation could
  begin. He replied: **“ok, let's do it.”** The block was filled in the pull
  request that records the ratification
  ([#494](https://github.com/stephen329/odin/pull/494), commit `7cbb7f6`) rather
  than typed by him, following the convention
  [the 2026-09-14 amendment](2026-09-14-nr-renter-pmo-record-class-migration.md)
  records: an approval block is a record of who decided, and the accurate answer
  is that he did and an agent wrote it down. This is approval of the detailed
  text, not a ratification inferred from the earlier direction approval or from
  the act of merging a document.
- **What he was asked before deciding.** The message his answer replies to, in
  full — supplied by the owner for this record on 2026-09-20 from the session
  it was sent in:

  > That closes #493. The next decision is **ratifying the September 20
  > amendment** so canonical implementation can begin.
  >
  > Ratification would approve Odin-owned person IDs with historical NH aliases.
  > It would **not** authorize production migration or release Step 4.
  >
  > Consumer inventory, test scaffolding and attribution-contract work can
  > proceed meanwhile.

  It states ratification as the next decision rather than putting a literal
  question, and the owner has said so. Both halves of the exchange are now
  verbatim, which is what lets a reader check what “ok, let's do it” attaches
  to: a message that names this instrument, says what ratifying it approves,
  and says in the same breath what it withholds. That is the distinction
  between this answer and the earlier “good plan, let's do that” recorded under
  Decision evidence, which answered a proposal to separate person ownership
  from NH provenance — a direction, with no instrument named and no limits
  stated.
- **What ratification releases.** The canonical implementation prerequisite,
  and nothing further. NH remains the live person/inquiry authority until the
  separately released joint cutover. Step 4 remains unreleased; no data
  migration, writer switch or production deployment is authorized by this
  ratification record.
