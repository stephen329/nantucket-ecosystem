# Decision Register — Addendum 2026-08-14 (Hello Nantucket brand guide session)

Extends the register built 2026-08-12 and the 2026-08-13 addendum. Same rules:
decision state and publication state tracked independently; markers never filled
by Claude; ratified strings character-for-character.

Origin: the Hello Nantucket brand guide review (`stephen329/hellonantucket`
PRs #1 and #2, merged 2026-08-14). These rows record the decisions taken there
that bind portfolio-level brand law, so the law is citable from this directory
rather than only from the account skill — per audit item **C2**, a skill claim
without a repo counterpart is unverified rather than law.

| # | Decision | State | Publication | Notes |
|---|---|---|---|---|
| H-1 | Never-list "booking surfaces" bars Hello from **being** a booking surface. A **disclosed outbound link** to NantucketRentals.com on explicit trip intent is **permitted** — after the editorial substance, never in the lede, carrying the affiliated-recommendation disclosure | Decided (Stephen, 2026-08-14) | Committed 2026-08-14 (hellonantucket#1) | Confirms §3 verbatim: Hello "should not publish listings, **act as** a booking surface… **It may link to clearly identified affiliated services**". Corrects a skill overstatement — see H-1a |
| H-1a | `hello-nantucket.md` never-list **item 2** rewritten against §3. It read "Hosts **or links to** booking surfaces", contradicting item 3 as corrected on 2026-09-03 | Applied | This commit | Same class as audit findings B1/B2: an absolute the skill added that §3 does not contain. The 09-03 pass restored the linking permission in item 3 but left item 2 denying it. Applicable now that `skill/` is checked in (odin#268) |
| H-2 | Content pillars raised from `[DECIDE]` to **`[PROVISIONAL — VALIDATE WITH DATA]`**. Retention rule: retain on *either* meaningful audience demand *or* strong strategic/editorial value | Decided (Stephen, 2026-08-14) | Committed 2026-08-14 (hellonantucket#1) | Does **not** ratify the pillar set. Working set of three, frozen before Month 1. Promotion or removal now requires brand-owner sign-off (hellonantucket#2) |
| H-2a | **Proxy-data guard.** Hello is pre-launch, so no GSC/GA4 data for hellonantucket.com exists. Portfolio data measures booking and real-estate intent, not editorial readership: it may **support** a pillar, never **reject** one alone. Editorial fit is primary | Decided (Stephen, 2026-08-14) | Committed 2026-08-14 (hellonantucket#1) | Evidence table and findings in `PILLAR-EVIDENCE-2026-08-14.md` |
| H-3 | Red-team Battery B gains a prompt for competitor-ranking as structurally self-favouring: a portfolio company cannot be a neutral entry in a list Hello publishes | **Decided (Stephen, 2026-09-04)** — recommended 2026-08-14, ratified on review of the landing state | Applied — this commit | Arose from the first battery run against the guide (`RED-TEAM-2026-08-14.md`), where B5 was refused only by inference. Additive — the battery's own rule is that prompts grow monotonically and are never removed |

## H-4 — collective name retired, superseding register item 5

| # | Decision | State | Publication | Notes |
|---|---|---|---|---|
| H-4 | The portfolio takes **no** collective name. "Family of companies" is retired; copy names the entities and states the ownership relation | Decided (Stephen, 2026-08-14) — **supersedes register item 5** | This commit | Portfolio-wide, not Hello-only |

Register item 5 ratified "family of companies" on 2026-08-12, carved out so it
never includes or implies **Congdon and Coleman Insurance, Inc.** — a separate,
unaffiliated company. This addendum first recorded H-4 as *withheld*, because the
2026-08-14 decision was taken against skill text that still showed
`[DECIDE: "family of companies"?]`, and neither the ratification nor the
carve-out was in view. Put back to Stephen with both facts, the retirement was
ratified.

Why the two positions conflicted on wording but agreed on intent:

1. **Comprehension.** "Part of our family of companies" never tells a reader
   *who owns whom* — the question §8's audience-fit gate asks ("understand the
   publication's role and ownership"; "fewer than 5% feel misled").
2. **The Insurance carve-out points the same way.** A collective abstraction is
   exactly what can be read to include a company that is *not* in the portfolio.
   Naming the entities cannot. The constraint is **strengthened** by retirement,
   not weakened, and it stands on its own terms.

### Conformed in this pass

| File | Change |
|---|---|
| `canonical-naming.md` | Collective row rewritten; supersession note records the Insurance constraint and the ratified-strings check |
| `congdon-coleman-ratified-strings.md` | Naming summary updated — prose only. **No ratified string contains the phrase**, checked rather than assumed, per the A-4 precedent where exactly that assumption proved wrong |
| `CLAUDE.md`, `AGENTS.md` | Generated context blocks updated so sessions inherit the retirement |

`stephen329/hellonantucket` already states the ownership relation directly and
needs no copy change; its `CLAUDE.md` claim that the phrase is retired is now
correct rather than an over-claim.

**Scope beyond this repo.** Any portfolio surface referring to the group
collectively needs the relation stated instead —
`[DECIDE: audit pass per repo]` for cnc-web-fe, nr-web-fe, nrbe templates, and
nantuckethouses-platform.

## Applied to the skill source

`docs/strategy/brands/skill/` became upstream on 2026-09-03 (odin#268, closing
audit item **C1**), so the decided amendments are applied to the checked-in
source in this commit rather than left as instructions for a maintainer:

| Amendment | File | Change |
|---|---|---|
| H-1a | `skill/references/hello-nantucket.md` | Never-list item 2 rewritten against §3 — bars *being* a booking surface, permits the disclosed outbound link, with the prior wording noted so the correction is legible |
| H-2 / H-2a | `skill/references/hello-nantucket.md` | Launch pillars `[DECIDE]` → `[PROVISIONAL — VALIDATE WITH DATA]`, with the retention rule, the proxy-data guard, and the Month-1 freeze |
| H-4 | `skill/references/shared-standards.md` | Collective-name row retired; `disc.hello.affiliated` restated to name the ownership relation, still marked draft and not ratified |

**H-3 was deliberately not applied in that pass**, being recommended rather than
decided — it came from the first red-team run, not from Stephen. Ratified
2026-09-04 and applied in the same commit as this note:

| Amendment | File | Change |
|---|---|---|
| H-3 | `skill/references/red-team-battery.md` | Battery B gains prompt **8**, the competitor-ranking roundup, annotated with both dates so the recommend-then-ratify gap stays legible |
| H-3 | `skill/references/hello-nantucket.md` | Local-business policy gains the outright bar on ranking, reviewing or comparing competitors, stating that the list format is itself the violation and that inline disclosure does not cure it |

The two local-business bullets are deliberately both kept: the existing one bars
a *pattern* of favouring the affiliated business across posts, the new one bars
the single post whose *form* does the favouring. Neither subsumes the other.

**Nothing else in this addendum is reopened by that ratification.** In
particular `disc.hello.about` and `disc.hello.signup` remain drafted and not
ratified, and `disc.hello.affiliated` remains draft — only H-4's collective-name
half was ever decided, and the "Heads up:" opener is still open.

## Open (carried)

| Item | Owner | Status |
|---|---|---|
| ~~H-3 — ratify or strike the competitor-ranking battery prompt~~ | Stephen | **Closed 2026-09-04 — ratified and applied** |
| Re-run the full battery against the amended skill, and re-sync the account copy | Marketing Director / Stephen | Open — the account copy is published from this directory and still carries pre-amendment text on H-1a, H-2 and H-4 |
| H-4 follow-through — per-repo audit for collective-term occurrences in customer-facing copy | Stephen | Open |
| Hello disclosure strings (`disc.hello.about`, `disc.hello.signup`) — drafted 2026-08-14, **not ratified**, not enforceable | Stephen (§12 item 2) | Open |
