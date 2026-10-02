# Reconciliation — the `nantucket-brands` skill against the checked-in strategy

Status: **audit — creates no brand law.** Owner: Stephen. Written 2026-09-03.

Authority for every correction below is
`docs/strategy/nantucket-ecosystem-integrated-strategy.md`, its
`amendments/`, and the ratified records in this directory. Where this file and
the strategy disagree, the strategy wins. Nothing here ratifies anything; two
findings are decisions only Stephen can make and are marked.

## Why this exists

The `nantucket-brands` skill and this directory are two copies of the same law
with no sync between them. On 2026-09-03 that cost a review cycle on
[#254](https://github.com/stephen329/odin/pull/254): a scoping document sourced
brand rules from the skill, and two of three review findings traced to the
skill saying something the strategy does not.

When this was written the skill was not in this repository: it synced from
Stephen's Claude account (`source: custom` in the skills manifest), so it could
not be corrected by a repo change and nothing here could be reviewed against
it. That asymmetry was the root finding and the rest are its symptoms.

**The delivery mechanism has since changed; the paragraph above is history, not
current state.** Observed 2026-09-04 in a session's synced skills manifest:
`nantucket-brands` reports `"source": "plugin"`, backed by
`plugin_01PvDFHp2aRmA1NAEVYunLet`, `updatedAt` 2026-09-03T23:20:53Z. It is no
longer a custom account skill.

This is recorded because it changes where the re-sync step happens — republishing
the account copy from this directory is a plugin update, not a custom-skill
upload — and because that `updatedAt` predates every amendment landed on
2026-09-04, which is why a loaded skill still carries superseded text.

**The plugin is sourced from this repository, and publishes from
`docs/strategy/brands/skill/`** — both read from the account's plugin
configuration by Stephen, 2026-09-04.

**C1 is now confirmed at both granularities.** Repository and directory are
separate facts and were answered separately: the first rules out a second
upstream, the second rules out this repo publishing the skill from some other
path. Either alone would have left the account copy possibly published from
somewhere other than the directory C1 named. Together they close it — this
directory is upstream in fact, not only by decision.

**Nothing in this repository declares the binding.** Checked on `main`:
there is no `.claude-plugin/`, no `plugin.json`, no `marketplace.json`, and
`.claude/settings.json` carries only hooks. So the binding between `skill/` and
what the plugin publishes exists only in account-side configuration. Two
consequences worth holding:

1. The path is now known to be `docs/strategy/brands/skill/`, but it is known
   from configuration read once and written down here, not from anything the repo
   itself asserts. A rename or move of that directory would break publishing with
   nothing in review to catch it, and this record would quietly become wrong.
2. This is a thinner version of the asymmetry that started the audit — the repo
   still cannot be reviewed against the thing that publishes from it, only
   against a claim about it. `yarn check:brand-skill` covers the skill against
   the strategy; nothing covers the skill against what actually ships.

**A note on how the staleness observations here were made.** The synced copy a
session reads is downloaded when its container starts, so every "verified
2026-09-04" statement in this directory describes a snapshot taken at that
session's start, not a live read of the account. It is sound for what it claims —
the copy that session loaded was pre-amendment — but it cannot tell you whether
something republished the plugin afterwards. Anyone checking whether the account
copy is current needs a fresh session, not this record.

**Resolved 2026-09-03.** C1 below is decided: `docs/strategy/brands/skill/` is
now the source of record and the account copy is a published artifact. The
corrections in A and B were applied to the account skill the same day, and a
CI check (`yarn check:brand-skill`) now asserts that law the skill quotes still
matches the file it cites. See
[skill/README.md](./skill/README.md).

To the skill's credit, it does not claim more authority than it has: every
reference file opens "Subordinate to the Nantucket Ecosystem Strategy …
Conflicts resolve to the plan", strings are labelled interim, and unfilled
`[STRATEGY §n]` markers are left standing. The problem is that a reader in a
hurry — human or model — reads the summaries, not the caveats.

## A. Ratified, never backfilled

The skill still shows open markers where a decision has since been recorded
here. These are transcription, not judgement.

**A1 — canonical naming.** `shared-standards.md` → Canonical naming carries
`[DECIDE: complete the table]` plus three open markers. All were closed by
register item 5 (2026-08-12) and addendum A-4 (2026-08-13), and are recorded
in `canonical-naming.md`:

| Skill row | Skill state | Ratified |
|---|---|---|
| NantucketRentals.com | `[DECIDE: with/without .com]` | **with** the `.com`, one form everywhere |
| The portfolio collectively | `[DECIDE: "family of companies"?]` | "family of companies" — never includes or implies Congdon and Coleman Insurance, Inc. |
| Congdon & Coleman | "C&C" never customer-facing, marked `[DECIDE]` | ratified, no longer open |
| The advisory role | *row absent* | **"advisor"**, never "adviser", any casing |

**A2 — the A-4 spelling.** The skill spells it "adviser" throughout: `SKILL.md`
(portfolio table and routing matrix), `congdon-coleman.md` (the "Voice — the
named adviser" heading and body), `nantucket-houses.md`, `nantucketrentals.md`.
`canonical-naming.md` scopes A-4 to "customer-facing copy across the portfolio,
and all newly drafted internal copy documents", and exempts code identifiers,
module paths and historical governance records. A brand-guidelines file that
carries worked examples of customer copy is not obviously any of the exempt
categories. `[DECIDE]` below.

**A3 — the Odin sends exemption.** `amendments/2026-09-02-odin-interactive-send-governance-removal.md`
was ratified when PR #216 merged on 2026-09-02 (`cbba309`), and
`docs/contacts-communication-governance.md` now stands as a historical record.
Odin's interactive, agent-initiated Gmail sends — the `/contacts` compose modal
and the homeowner email modal — are exempt from the mechanical communication
governance. The skill's sending-brand matrix and its "Enforcement hooks"
section carry no such exception, and `SKILL.md` → Repository touchpoints names
Odin without it.

## B. Where the skill overstates the strategy

These are not transcription gaps. The skill states as absolute what the
strategy states as bounded, and in each case the strategy's version is
narrower.

**B1 — Hello and market intelligence.** The skill's never-list item 3 reads
"Publishes market intelligence (pricing data, valuation commentary, market
reports — that is C&C's lane)", and the `SKILL.md` table's Never column says
"market-intelligence publishing". §3 says:

> Hello should not publish listings, act as a booking surface, or become the
> primary publisher of real-estate and rental-market intelligence. It may link
> to clearly identified affiliated services and may interpret broader
> island-life data within its editorial remit.

Three differences: the constraint is on being the **primary publisher**, not on
publishing at all; the skill drops the permission to **link to clearly
identified affiliated services**; and it drops the permission to **interpret
broader island-life data**. An editorial brand told it may never touch data is
a different brand from the one the strategy describes.

**B2 — the same overstatement from C&C's side.** `congdon-coleman.md` says a
market report is "Never published on Hello (market intelligence is C&C's
exclusive lane)". §3's Content ownership table assigns the topic to Congdon &
Coleman; "exclusive" and the absolute prohibition are the skill's addition.

**B3 — the Content ownership table is missing entirely.** §3 carries a
five-row table assigning topics to Hello Nantucket, NantucketRentals.com,
Nantucket Houses, Congdon & Coleman and Odin. The skill has no equivalent, and
its routing matrix answers a different question — which brand *sends a message*.
Reasoning from routing to ownership is what produced the #254 finding: it
concluded editorial belongs to Hello alone and would have excluded Congdon &
Coleman from a posts collection whose entire contents are Congdon & Coleman.
The table belongs in the skill, with a sentence distinguishing it from the
sending-brand matrix.

**B4 — Hello's disclosure placements.** `hello-nantucket.md` lists five
"Required placements — all of them, always" and calls the signup items "Stage 0
launch blockers; Hello does not go public without them". §3 offers a
**recommended** public system and says the publisher credit "should be easy to
find" in the bio, About page, footer, newsletter footer and signup/privacy
language. §12 then lists "Approve the Hello Nantucket descriptor,
publisher credit, editorial charter, and related-party-link standard" among the
remaining 90-day decisions. Recommended and unapproved is not required.

**B5 — the comprehension gate.** The skill states "≥80% reader-comprehension …
passing is a Stage 0 launch condition". §8 lists it among **provisional** Hello
*audience-fit* gates, and in two halves: "At least 80% of surveyed readers
understand the publication's role and ownership; **fewer than 5% feel misled**."
The skill hardens a provisional gate, relocates it to Stage 0, and drops the
second criterion.

**B6 — the interim publisher string.** The skill's `disc.hello.publisher` is
"Hello Nantucket is published by Congdon & Coleman Real Estate." The strategy's
recommended line is "Published by Congdon & Coleman". These are different
strings, the skill's own marker says to replace it with the ratified text, and
no ratified Hello string exists in this directory — `congdon-coleman-ratified-strings.md`
is the only ratified string record. Until §12 closes, neither string may
be enforced anywhere.

**B7 — the named-advisor requirement, added 2026-09-05.** `congdon-coleman.md`
opened "All consequential communication from C&C comes from a **named person**,
not the firm", and boundary rule 1 glossed it as "advisory communication is named
and personal". §4 states it bounded:

> Anything involving representation, valuation, fiduciary judgment, negotiation,
> or consequential advice comes from a named person.

An operational message — asking an owner to update a vacation-rental calendar,
inviting them into the portal — involves none of those five things. The skill's
"all consequential communication" reads as a blanket over everything Congdon &
Coleman sends, and that is how it was applied: while scoping `W3` in
`nantuckethouses-platform` on 2026-09-05, the launch email to homeowners was
written up as requiring a per-owner named advisor, sourced from this file rather
than from §4. Stephen corrected it. Same shape as B1, B2 and B5 — absolute where
the strategy is bounded — and the second time the drift has cost a review cycle
after #254.

Corrected here by quoting §4 in place, stating that operational and service
communication may come from the brand, and reframing boundary rule 1 around
message *class* rather than signature: a named advisor on a marketing blast is
still a blast, and an unsigned service message is not one. The named-sender
question survives as a design-time item for new communication flows, which is
what it was for.

**Superseded in part, 2026-09-16.** The owner decided *"All brands can market,"*
so the class-level prohibition this entry reframed no longer stands: Congdon &
Coleman may hold marketing message classes. The paragraph above is left as
written because it records what was decided and why on its own date, and a
reconciliation record that is edited to match later decisions stops being
evidence of anything. **What survives of it is the half his decision did not
touch** — §4's requirement that representation, valuation, fiduciary judgment,
negotiation or consequential advice comes from a named person. Recorded in
`../amendments/2026-09-16-per-brand-marketing-classes.md`.

## C. Structural

**C1 — which copy is upstream. Decided 2026-09-03: this repository.**
`docs/strategy/brands/skill/` holds the source; the account copy is published
from it and is never authoritative. The original finding follows.

 The skill's "Enforcement hooks" says per-repo
context blocks "are generated from these files — regenerate on every merge to
`strategy/brands/`", and points assets at `strategy/brands/assets/<brand>/`.
This repo's `CLAUDE.md` says its brand block is "regenerated from
docs/strategy/brands/ on merge", and the assets are at
`docs/strategy/brands/assets/`. Each artefact currently describes itself as the
generator. One of them has to be the source. `[DECIDE]` below.

**C2 — reviewability.** Because the skill is not checked in, a repo change
citing it cannot be reviewed against it — the reviewer cannot open the file. For
anything a repo change relies on, this directory should be the citable
authority, and a skill claim without a repo counterpart should be treated as
unverified rather than as law.

## D. Applied 2026-09-05 — the booking amendment (history)

**Current state.** `amendments/2026-08-10-nh-in-app-booking-and-paid-installs.md`
was approved 2026-09-05. The three artefacts this section had held back
changed in the same change, so the skill is aligned to approved text as
amended:

| Artefact | Was | Is |
|---|---|---|
| `skill/references/nantucket-houses.md` prohibition 1 | "Hosts booking search surfaces" | Issuing booking, lease, or payment records of its own; NH may originate a first-time booking, NantucketRentals remains the system of record |
| `skill/SKILL.md` Never column, Nantucket Houses row | "Booking search surfaces" | Issuing booking, lease, or payment records of its own |
| Strategy §4, "Rental or rebooking intent hands back to NR" | Read as a surface rule | Read as a systems-of-record rule, per the amendment's item 7 |

Two things did **not** change. Hello's "never routes a reader directly into
Nantucket Houses" stands; the amendment leaves it open for re-derivation. And
the NH-to-NantucketRentals.com handoff string is not ratified — the six
approved disclosures do not cover it — so both skill artefacts carry a
`[LEGAL REVIEW]` flag rather than fixed handoff copy.

The account copy of the skill is behind this directory until re-uploaded
per `skill/README.md`.

**History.** From 2026-09-03 to 2026-09-05 this section read "Pending — do not
apply": the amendment's status was "Drafted, awaiting approval", the skill was
correctly aligned to the unamended text, and applying the change early would
have repeated the #254 mistake in the opposite direction. That instruction is
discharged, not overridden — the condition it waited on occurred.

## What could not be done here

The corrections in A and B cannot be made from this repository — the skill
lives in the account skill store and syncs one way. Applying them means editing
the skill at its source. This file is written so that is mechanical: each
finding names the file, the current text, and the authority for the change.

## Open decisions

- ~~`[DECIDE]` Which copy is upstream.~~ **Decided 2026-09-03: this repository.**
  `docs/strategy/brands/skill/` is the source; the account copy is published
  from it. `yarn check:brand-skill` asserts quoted law still matches its source,
  in both directions, and CI runs it on any change under `docs/strategy/`. It
  cannot catch law paraphrased without a marker — that is what review is for,
  and why load-bearing text is quoted rather than summarised.
- ~~`[AUDIT]` The configured publish path for `plugin_01PvDFHp2aRmA1NAEVYunLet`.~~
  **Answered 2026-09-04 (Stephen), from the account's plugin configuration: this
  repository, publishing from `docs/strategy/brands/skill/`.** Both halves —
  repository and directory — are now confirmed, so **C1 is closed in fact as well
  as by decision.** What it does not cover is carried by the items below: nothing
  in the repo declares this binding, so the answer lives in this record rather
  than in anything a check could enforce.
- ~~`[AUDIT]` What the plugin release step actually is.~~ **Answered 2026-09-04
  (Stephen): the plugin was added by direct upload of `skill/`, with no
  marketplace entry and no `version` field.** So the release step is a manual
  re-upload at claude.ai → Organization settings → Plugins, written out in
  [`skill/README.md`](./skill/README.md), and the superseded callout there is
  replaced by real steps.

  The answer also explains the drift rather than just ending the question. A
  direct upload with no version and no git source has **no ref to follow**, so
  merging here publishes nothing and every session reads the last uploaded
  snapshot. The account copy sat at its 2026-09-03 23:20 upload through all of
  the 2026-09-04 amendments because merging was never going to move it. The
  audit's original condition — two copies with no sync between them — survives
  in narrower form: one upload apart rather than one hand-edit apart.
- `[DECIDE]` Whether to replace the direct upload with a **marketplace entry on a
  git source**, so the binding lives in a file review can see rather than in
  configuration read once. This is the sharpened form of the earlier question
  about declaring the binding in-repo, and the release-step answer is what
  sharpens it: a direct upload has no ref to follow, so publishing is an action
  someone has to remember and the two copies drift by default rather than by
  accident.

  **It would not on its own make publishing automatic.** An earlier draft claimed
  a git source with no `version` field would make every merge an update; review
  corrected it. Organization sync has its own trigger above the plugin's version
  resolution — for a GitHub-synced organization marketplace it runs when *Sync
  automatically* is enabled and a merged pull request bumps a plugin version,
  and otherwise an owner still clicks Update. So the realistic gain is
  reviewability plus a possible reduction of the manual step to a version bump,
  not the end of the drift class.

  Costs worth weighing rather than assuming away: it needs a `plugin.json` and a
  marketplace entry this repo does not have today, and the marketplace repository
  has to be private or internal for organization sync. Recorded as an option, not
  a plan. — Stephen
- `[AUDIT]` The exact organization-sync trigger conditions, from
  [Manage plugins for your organization](https://support.claude.com/en/articles/13837433-manage-plugins-for-your-organization).
  The summary above is recorded as reported by review, not as verified: that
  article is not reachable from the environment these notes were written in.
  Anyone acting on the `[DECIDE]` above should read it first rather than
  inheriting the claim from here. — Stephen
- `[AUDIT]` What `CHANGES.md` in the published plugin is, and whether it belongs
  in this directory. The uploaded archive and this directory have never been the
  same file set: the published plugin omits `README.md` and carries a
  `CHANGES.md` that does not exist here, whose origin is unrecorded. Repackaging
  by zipping this directory as it stands would drop it silently. — Stephen
- `[DECIDE]` Whether A-4's "advisor" spelling binds the brand skill. It is a
  drafted internal copy document containing customer-copy examples, which reads
  as in scope, but `canonical-naming.md` names its exemptions and a guidelines
  file is not among them either way. — Stephen

## Related

- `docs/strategy/nantucket-ecosystem-integrated-strategy.md` §§3–5, §8, §12
- `docs/strategy/amendments/` — one approved (2026-08-13), one ratified by
  merge (2026-09-02), one awaiting approval (2026-08-10)
- `canonical-naming.md` — register item 5 and addendum A-4
- `congdon-coleman-ratified-strings.md` — the only ratified string record
- `docs/blog-multi-brand-administration.md` — the document whose review
  surfaced this
