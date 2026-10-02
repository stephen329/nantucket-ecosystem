# Canonical naming — one form per referent, no drift

Completes the shared-standards canonical-naming table for the decisions
ratified 2026-08-12 (register item 5) and 2026-08-13 (addendum A-4). Scope:
all customer-facing copy across the portfolio, and all newly drafted internal
copy documents. Ratified strings are exempt from any replacement pass,
character-for-character.

| Referent | Canonical form | Never | Decided |
|---|---|---|---|
| Congdon & Coleman Real Estate | "Congdon & Coleman" after first full use | "C&C" in customer-facing copy | Stephen, 2026-08-12 (register item 5) |
| NantucketRentals.com | "NantucketRentals.com" — **with** the .com, one form everywhere | "NR"; "NantucketRentals" without the .com **†** | Stephen, 2026-08-12 (register item 5) |
| Nantucket Houses | "Nantucket Houses" | "NH", "the app" in external copy | Shared standards (standing) |
| Hello Nantucket | "Hello Nantucket" | "HN", "the blog" | Shared standards (standing) |
| The portfolio collectively | **None — the portfolio takes no collective name.** Name the entities and state the ownership relation | "family of companies"; "our brands"; any collective abstraction | Stephen, 2026-08-14 (supersedes register item 5) |
| The advisory role (person) | **"advisor"** | **"adviser"** — any casing, all portfolio copy | Stephen, 2026-08-13 (addendum A-4) |

**† One surface is excepted by owner override — see below.**

## Owner overrides take precedence over this table, per named surface (Stephen, 2026-09-16)

**Where an owner override recorded under "Owner overrides" in
`congdon-coleman-ratified-strings.md` grants a named surface a form this table
forbids, the override governs on that surface.** Decided by Stephen,
2026-09-16, on the question raised in review of
[#455](https://github.com/stephen329/odin/pull/455).

Until this was decided the two records contradicted each other on their face:
that one granted an exception, and this one said there were none. Both were
ratified, neither ranked the other, and a reviewer or a lint following this
table alone had no exception to apply. Recorded here rather than only there,
because the register that states a rule absolutely is the one a reader
consults to find out whether it is absolute.

**The precedence is narrow, and the narrowness is the point:**

- It runs **surface by surface**, never to a referent generally. An override
  granted to one masthead says nothing about any other surface naming the same
  brand — the override record makes that explicit ("granted to this surface and
  no other") and nothing here widens it.
- It is the **owner's alone**. Every other contributor reads this table as
  absolute; an unrecorded variant is drift whoever typed it, and this section
  gives no one a second route to one.
- It reaches only what an override actually says. A surface with no recorded
  grant is governed by the row, and the row has no exceptions of its own.

**Excepted surfaces as at 2026-09-16 — one:**

| Surface | Row | Form it carries instead | Granted |
|---|---|---|---|
| NantucketRentals.com inquiry-notification email (Klaviyo), masthead image only | NantucketRentals.com | "Nantucket Rentals", without the `.com` | Stephen, 2026-09-15 |

That grant is expected to lapse rather than persist: the replacement masthead's
`alt` text carries the `.com`, so the exception retires once that artwork ships
**and** its rendered wordmark has been checked against the `alt` text. Until
both, it stands. The override entry holds the detail and is authoritative;
this table records that an exception exists, not its terms.

## Notes on the collective-name entry (supersedes register item 5)

Register item 5 ratified "family of companies" on 2026-08-12, qualified so that
it never includes or implies **Congdon and Coleman Insurance, Inc.** — a
separate, unaffiliated company. Stephen superseded that on 2026-08-14: the
portfolio takes **no** collective name, and copy names the entities and states
the ownership relation instead.

- **The Insurance constraint is not weakened by this — it is strengthened.** It
  was the reason the collective term carried a carve-out at all, and a
  collective abstraction is precisely what can be read to include a company that
  is not in the portfolio. Naming the entities cannot. Congdon and Coleman
  Insurance, Inc. remains separate and unaffiliated, and no portfolio copy may
  imply otherwise.
- **Comprehension was the other driver.** "Part of our family of companies"
  never tells a reader *who owns whom*, which is the question §8's audience-fit
  gate asks ("understand the publication's role and ownership"; "fewer than 5%
  feel misled"). Hello Nantucket's affiliated-recommendation disclosure is the
  worked example: "NantucketRentals.com is owned by Congdon & Coleman Real
  Estate, who publish Hello Nantucket."
- **Scope is portfolio-wide**, not Hello-only. Any surface that refers to the
  portfolio collectively needs the relation stated instead. Occurrences known at
  ratification: this table, `congdon-coleman-ratified-strings.md`'s naming
  summary, and the hand-maintained context blocks in `CLAUDE.md` / `AGENTS.md` — all
  conformed in this pass. (They were described here as *generated*; no generator
  exists and none ever did. Corrected 2026-09-16 with the three other copies of
  that claim, in odin#455.) Copy in other repos is `[DECIDE: audit pass per repo]`.
- **Ratified strings are exempt, and none are affected.** Checked rather than
  assumed, per the A-4 precedent below: no ratified string in
  `congdon-coleman-ratified-strings.md` contains the phrase. Its only occurrence
  there is prose summarising register item 5, which is not a ratified string and
  is updated in this pass.

## Notes on the A-4 (advisor) entry

- Applies to **copy** — customer-facing text and drafted copy documents.
  Code identifiers, module paths, and historical governance records are not
  copy; they are not retroactively rewritten (the URL-1 slug-contract module
  `adviser-slugs.ts` keeps its internal identifiers; no adviser-spelled URL
  segment exists — the directory base is `/nantucket-real-estate-agents/`).
- The legal/disclosure ratified strings contain no occurrence of the word.
  The ratified opinion-of-value template **did** contain it — in prose and
  in its recurring strings — and was conformed to A-4 spelling on
  2026-08-13 at Stephen's direction (post-merge review of odin#141): a
  spelling-only edit, substance and structure unchanged, recorded in the
  template's status header. The photography spec's single occurrence
  ("advisor portraits") was conformed in the same pass. No standing
  exception remains.

## Lint arming

Each row above is enforceable as a string-match lint on customer-facing
sources. **A lint arming any row must honour the excepted surfaces above, and
must scope the exemption exactly as the grant is scoped** — the exception table
names the surface *and the part of it* the grant reaches, which for the one
grant on file is the masthead image alone. Exempt that occurrence or that
asset, never the file it sits in: a path-wide exemption would pass a later
"Nantucket Rentals" in the same template's subject or body as though the owner
had approved it, which he has not. A check that cannot see the exception at all
fails a build over copy he *has* accepted, so neither end of this is safe to
get wrong. **Status per repo — "armed" means the check runs in CI, not that a
script exists:**

- **cnc-web-fe** — `npm run check:naming`
  (`scripts/check-canonical-naming.mjs`): fails the build on `adviser`
  (any case, word-boundary), `C&C` in rendered copy, or a collective term
  ("family of companies", "our brands") under `src/` and in the drafted copy
  documents; comment lines and code-module path references are excluded as
  non-copy, and `adviser-slugs.ts` and the ratified `legal-strings.ts` are
  exempt by path.

  **Status: PENDING — cnc-web-fe#16 is open.** Not armed until that merges.

  **Correction, 2026-09-04.** This entry previously read "Armed with this
  commit". It was not: cnc-web-fe carried `check:tokens` and `check:td1` and no
  naming check, so these rows were documented as enforced while nothing
  enforced them. A record claiming enforcement that does not exist is worse than
  one claiming none, because it stops anyone looking — the collective term
  drifted for three weeks under exactly that cover.

  **And the first version of this correction repeated the mistake.** It said the
  checker "now exists", which was true and irrelevant: cnc-web-fe#16 added the
  script and an npm entry but not a CI step, so the `verify` job still ran
  slugs, market, tokens, TD-1 and rewrites and a build passed without the rule
  executing. Caught in review of odin#278. The CI step is now in that PR — but
  the lesson is the definition: **a script is not enforcement, and an open PR is
  not a landed state.** "Armed" in this section means the check runs in CI on a
  merged commit, and nothing else.
- Other repos (nrbe templates, nantuckethouses-platform strings, Odin
  customer-visible surfaces) arm the same rule as their surfaces are next
  touched `[DECIDE: implementation tickets per repo — Stephen]`.

## Collective-name audit, 2026-09-04

Swept after H-4 retired the collective term, since the retirement is
portfolio-wide rather than Hello-only.

| Repo | Customer-facing copy | Records |
|---|---|---|
| `cnc-web-fe` | **Clean** | Brand guide already stated there is no "a family of companies" badge — it was a prohibition, not a use. Decision-queue annotation **pending** in cnc-web-fe#16 |
| `nr-web-fe` | **Clean** — no occurrence in `src/`, meta titles or OG tags | `CLAUDE.md` and the marketplace-conversion decision register both taught the retired rule as current. **Corrected — nr-web-fe#22 merged 2026-09-04.** That PR also cleared five surviving mandates for the `legal.cc.poweredby` entity form odin#273 deleted |
| `nrbe` | **Clean** | None |
| `nantuckethouses-platform` | **Clean** | None |

**The sweep results above are findings and are final** — they record what was
searched and what was there. The *remediations* are tracked separately and each
is marked with its actual state; this table does not assert a remediation as
done before its PR merges. **Update each marker when its PR lands** — a status
that outlives the thing it depended on is the defect this document exists to
correct, and leaving one stale here would be that defect inside the correction.
`nr-web-fe#22` merged 2026-09-04 and is marked accordingly; `cnc-web-fe#16` is
still open.

**No shipped copy required a change.** Every customer-facing surface was already
compliant. What carried the superseded rule was agent context blocks and
decision registers — the artefacts that tell the *next* session what the law is.
That is the failure mode worth watching: copy gets reviewed, context files do
not.
