# Decision Register — Addendum 2026-08-13 (Listing Detail Page session)

Extends the register built 2026-08-12. Same rules: decision state and
publication state tracked independently; markers never filled by Claude;
ratified strings character-for-character. Publication note: committed to
`main` 2026-08-13 via odin#141; the Publication column records the merge, so
downstream readers and automation treat these decisions as operative.

| # | Decision | State | Publication | Notes |
|---|---|---|---|---|
| A-1 | Sold-listing archive: **public** — priced, dated, advisor-attributed; indexed | Decided (Stephen, 2026-08-13) | Committed 2026-08-13 (odin#141) | Consider per-listing seller opt-out mechanism at recording |
| A-2 | Mortgage/carrying-cost calculator: **excluded at launch** | Decided (Stephen, 2026-08-13) | Committed 2026-08-13 (odin#141) | Revisit only on inquiry-behavior evidence; carrying-cost questions route to the named advisor |
| A-3 | Off-market listings: **administered from Nantucket Houses; price displayed or withheld at owner's option**; rendered on congdonandcoleman.com as C&C brokerage presentations (named advisor, documentary standards, C&C legal identity) | Decided (Stephen, 2026-08-13) | Committed 2026-08-13 (odin#141) | Withheld state renders "Price withheld at owner's request." NH-side admin flow must use ownership vocabulary, not brokerage vocabulary — requirement to log on the NH workstream. Touches `attr.nh.listing` (open) |
| A-4 | Canonical spelling: **"advisor," never "adviser"** — all portfolio copy | Decided (Stephen, 2026-08-13) | Committed 2026-08-13 (odin#141) | Add to canonical-naming table; find-and-replace across drafted copy docs (six core pages, directory architecture, this spec's upstream docs); verify slug contract URL form. Ratified strings unaffected (none contain the word) |
| A-5 | Listing-page footer takes the `legal.cc.poweredby` **short form** ("A service of Congdon & Coleman Real Estate · MA #422678") — derived from the ratified usage rule (public, non-regulated surface; never-mention rule bars full entity name) | Derived; confirm at recording | Committed 2026-08-13 (odin#141) | Application of a ratified decision, not a new one — record the application so it's lintable |

Post-merge correction (2026-08-13, odin#141 review): A-4's note "none
contain the word" was wrong for the opinion-of-value template, which used
"adviser" in prose and recurring strings. The template was conformed to A-4
spelling at Stephen's direction — see `canonical-naming.md` and the
template's status header. The decision row above is otherwise verbatim.

A-5 wording note (2026-08-18): the short form quoted in row A-5 is the
08-12 ratification and stands as history. Stephen re-ratified the short
form's wording on 2026-08-13 ("Congdon & Coleman Real Estate, MA Real
Estate Broker's License #422678" — see `congdon-coleman-ratified-strings.md`);
A-5's decision applies with the current wording.

## Open (carried)

| Item | Owner | Status |
|---|---|---|
| Advisor message field on listing pages (recommendation: include; TR-1 gate applies if reusing `/lead-request/[...slug]`) | Stephen | Open |
| `attr.nh.listing` — re-check non-gating status given A-3 | Stephen | Open |
| Photography derived rules 3–6 | Kristy | Confirm-or-strike |
| CA-1 — strategy docs commit to main | Repo session | **Done 2026-08-13** — PR #134 merged (`docs/strategy/` on `main`) |
