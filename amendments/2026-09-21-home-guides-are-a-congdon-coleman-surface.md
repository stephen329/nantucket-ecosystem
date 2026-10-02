# Amendment — home guides are a Congdon & Coleman surface

- **Date raised:** 2026-09-21
- **Direction decided:** 2026-09-21 by the owner, answering a direct question
  put during the Third Edition design-token migration (odin#522). The question
  named the four surfaces it was about — `GuestHomeGuideView`,
  `HomeGuideSectionsList`, `HomeGuideAppPromotion` and the home-guide theme —
  and said they were being held back because the strategy assigns guest and
  homeowner product education to Nantucket Houses. The answer was:
  *"home guides are C&C."*
- **Status:** **Approved and ratified — Stephen Maury, 2026-09-21.** The
  approval block at the end of this document carries his name and that date,
  and this line says so, which are together the conditions
  `2026-09-14-nr-renter-pmo-record-class-migration.md` sets for ratification.
  The supersession of §3 is authorized by that fact. The code change is
  separate and already written — it is in odin#522, which merges on its own
  conditions (green CI, no conflict, no open review business), not on this.
  See *How this document came to be ratified* below for the sequence.
- **Drafted by:** Claude Code, recording the owner's decision, and recording
  his ratification on his instruction of 2026-09-21. Writing down a decision
  is not making it, and writing down a ratification is not granting it.

## What it changes

The strategy assigns this the other way, twice, and one of them names home
guides outright:

> §3, content ownership table: *Homeowner and guest product education, stay
> operations, documents, and service workflows — **Nantucket Houses***

> §3, Nantucket Houses: *Homeowner operations, **home guides**, stay logistics,
> documents, and in-app communication remain **NH-branded**.*

This amendment supersedes both **for home guides only**. Homeowner operations,
stay logistics, in-app communication and the rest of the Nantucket Houses row
are untouched and remain NH-branded. Nothing here moves a booking surface, a
service flow or a notification.

## Why it needs to be written down rather than just applied

The skill and `CLAUDE.md` both say the strategy is upstream authority and that
a conflict is resolved by proposing an amendment rather than silently
deviating. The code change was already made under the owner's instruction, so
the deviation exists; this is what stops it being silent. A reviewer who finds
a C&C-branded guest guide and reads §3 would otherwise conclude the brand
boundary had been breached, and would be reading the record correctly.

## What shipped on it

`odin#522` migrates the home guide, screen and print, from Odin's `--brand-*`
chrome palette to Congdon & Coleman design tokens v2.0, and from the retired
Kiona and Poppins to the interim OFL faces. Ten files, 49 sites.

Worth recording because it is the reason this surface was invisible: the guide
never carried a retired hex in its own source. Its theme read
`var(--brand-navy)` and `var(--brand-secondary)`, so the design-token sweep saw
a variable while every guest saw the retired navy. The count of retired
colours in this repository did not move when the guide migrated. Detecting the
next surface like it needs a check on rendered output, not source.

## Scope, put to the owner and confirmed

The first draft left one question open: whether the guest-facing guide and the
printable owner-facing guide are one surface or two. `PropertyGuideView`
already described itself as the C&C document, while `GuestHomeGuideView` is
read by guests in-stay — which is the case §3 appears to have had in mind when
it assigned the row to Nantucket Houses. So the question was put explicitly
rather than assumed.

**Confirmed 2026-09-21 by the owner: the guest guide is C&C as well, and
stays.** The supersession covers the guide whole — guest-facing and
owner-facing, screen and print. There is no split.

One observation that sits with that reading rather than against it:
`HomeGuideAppPromotion` points guests at the Nantucket Houses app, and it is
the only other-brand identity anywhere in the guide. That is a functional
cross-brand credit of the kind the shared standards permit — a Congdon &
Coleman surface naming the product a guest installs — rather than evidence the
guide is itself a Nantucket Houses surface. Nothing about the credit itself
changes under this amendment.

> **Correction, 2026-09-21.** This paragraph originally ended "It also names
> the entity correctly, never 'the app'." That was false when written: the
> component's guest-facing copy said "Get the app", "download our free app"
> and "Already have the app?", which `canonical-naming.md` prohibits in
> external copy for Nantucket Houses. The copy is corrected on the branch that
> carries this amendment; the sentence is withdrawn rather than quietly
> deleted, because it was an assertion of compliance offered in support of a
> ratified decision, and the owner ratified the document containing it. The
> decision itself — that home guides are a Congdon & Coleman surface — does
> not rest on it and is unaffected.

## How this document came to be ratified

Three separate acts, deliberately kept apart, because
`2026-09-14-nr-renter-pmo-record-class-migration.md` records what happens when
they blur: a merge with the Status bullet still reading unratified ratifies
nothing, whoever performs it, and an amendment has sat merged and unapproved
since August on exactly that confusion.

1. **The direction**, 2026-09-21 — *"home guides are C&C"*, answering a direct
   question about four named surfaces.
2. **The scope**, the same day — the guest-facing guide put separately, since
   §3's assignment reads most naturally about guests in-stay, and confirmed:
   the guest guide is C&C as well.
3. **The ratification of this document**, the same day, on the owner's
   instruction to record it. Until he gave that instruction the Status bullet
   read unratified, even though the decision behind it had been given twice —
   because approving a decision and approving the document that states its
   supersession scope are not the same act, and only the second one is what
   this file's own rule tests for.

The Status bullet avoids naming the unratified state at all. The roadmap's
parser (`src/lib/roadmap/amendment-status.ts`) reads the bullet the record
*opens* with and calls it ambiguous if the same bullet names both, which an
earlier revision of this line did by quoting the rule inside it.

## Approval

**Approved: Stephen Maury, 2026-09-21.**

Recorded by Claude Code on his instruction the same day. The decision itself
was given twice before this — the direction, and the scope confirmed
separately when the guest-facing guide was put to him as its own question —
and both are recorded above. This block is the third act, and the one that
ratifies: a name, a date, and a Status line that says so.
