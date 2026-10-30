# Amendment — Nantucket Houses is the market research and real-estate data product

- **Date raised:** 2026-10-29
- **Status:** **Approved and ratified — Stephen Maury, 2026-10-29.** Stephen directed in the Codex task that Nantucket Houses is a true market research and data tool, including active listings and data reports. The decision becomes operative when this amendment is merged to `main`.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** Strategy §3 brand table and content ownership; Strategy §4 handoffs; Nantucket Houses and Congdon & Coleman brand references; the sending-brand matrix; listing attribution; red-team tests

## Reason

The strategy and derived brand rules described Nantucket Houses primarily as a
stay and owner-service product and assigned real-estate market reports wholly
to Congdon & Coleman. That framing omitted Stephen's intended role for
Nantucket Houses as the customer-facing product for real-estate research,
active for-sale listings, and factual data reporting.

## Change

Nantucket Houses is the portfolio's customer-facing market research and
real-estate data product. Its public website and applications may provide:

- active for-sale real-estate listings and listing search;
- factual property and parcel information;
- current and historical market data;
- filters, maps, comparisons, charts, trends, and other research tools; and
- source-dated, methodology-labeled data reports.

These are core Nantucket Houses functions, not exceptions to a stay or owner
service product.

## Content ownership split

This amendment replaces the strategy's single-owner assignment for
real-estate market reports with a fact-versus-judgment split:

| Topic | Owning brand |
|---|---|
| Active for-sale listings, property facts, market datasets, research tools, and factual data reports | Nantucket Houses |
| Representation, valuation, fiduciary judgment, negotiation, recommendations, and advice about what market facts mean for a person's property or decision | Congdon & Coleman, from a named advisor where §4 requires one |

A Nantucket Houses data report may describe what the sourced data shows. It
must identify its sources, applicable period, methodology, and material
limitations. It may not present an automated estimate as an appraisal, claim
to represent a customer, recommend a transaction, or turn factual reporting
into unsigned brokerage advice.

Congdon & Coleman may use Nantucket Houses data in an advisor-authored market
report, opinion of value, or client communication. That advisory layer does not
make the underlying factual dataset or research surface a Congdon & Coleman
product.

## Listing presentation and attribution

Nantucket Houses may use ordinary factual real-estate vocabulary, including
`active listing`, `sale`, `asking price`, `days on market`, and listing status.
Display of a listing does not imply that Congdon & Coleman represents the
seller, buyer, or property.

This market-research authority does not include long-term-rental inventory or
long-term-rental listings. The strategy's original rental ownership row remains
controlling outside vacation rentals. Vacation-rental presentation is governed
only by `2026-10-29-nh-vacation-rentals-shared-surface.md`; a separate approved
decision is required before long-term rentals may appear on Nantucket Houses.

Required source, listing-brokerage, and other regulated attribution must appear
where the listing data or applicable rules require it. The exact canonical
`attr.nh.listing` wording and placement remain `[DECIDE]`; this amendment does
not invent or ratify that string and does not waive any required attribution.

## Listing actions and advisor handoff

The existing Strategy §4 handoff remains unchanged. Buying, selling, valuation,
and showing requests that begin on a Nantucket Houses listing or research
surface route to a named Congdon & Coleman advisor under the approved consent
and escalation rules. They do not terminate in a generic Nantucket Houses inbox
or an automated advisory workflow.

## Product voice and marketing boundary

The Nantucket Houses research experience remains calm, useful, factual, and
service-first. Search results, charts, data reports, and listing detail may help
people discover and understand the market. Marketing may not be inserted into
an in-stay, home-guide, payment, or owner-service flow.

Public research and listing discovery are permitted product experiences. They
do not by themselves authorize a marketing send. A subscription, alert, saved
search, or distributed report still needs the correct consent class, sending
brand, suppression behavior, and frequency rule before launch.

## Relationship to other decisions

- The vacation-rental shared-surface amendment remains controlling for
  vacation-rental provider attribution and record authority.
- NantucketRentals.com remains authoritative for vacation-rental inventory,
  rates, availability, booking, lease, payment, and transaction records.
- Congdon & Coleman remains the trust, advisory, valuation, representation,
  and licensed-identity brand.
- Hello Nantucket remains the editorial brand and may not become the primary
  publisher of real-estate or rental-market intelligence.
- Decision-register item A-3 remains controlling for owner-facing off-market
  administration in Nantucket Houses: that flow uses ownership vocabulary, not
  brokerage vocabulary. The factual listing terms permitted by this amendment
  apply to public research and customer-facing for-sale listing surfaces, not
  the off-market owner-admin workflow.
- This amendment does not decide a source, refresh cadence, methodology,
  report taxonomy, listing-attribution string, or regulated disclaimer. Those
  implementation details remain subject to their existing gates or `[DECIDE]`
  markers.

## Affected metrics, gates, and parameters

- No existing launch gate, consent rule, frequency cap, authoritative system,
  or legal parameter is cleared or weakened.
- Public, user-initiated research is a product interaction, not a send. The new
  Nantucket Houses research-alert and distributed-data-report matrix row is
  marketing, remains fail-closed at `[DECIDE: class and cap]`, and cannot launch
  until its class, suppression behavior, and cap are approved.
- `attr.nh.listing` remains `[DECIDE]`; this amendment ratifies no exact listing
  attribution string or placement.
- Strategy §4 continues to route buying, selling, valuation, and showing
  requests to a named Congdon & Coleman advisor.
- The vacation-rental booking launch hold, provider attribution, record
  authority, and long-term-rental exclusion remain unchanged.

## Copies that must change with it

- `amendments/README.md`
- `brands/skill/SKILL.md`
- `brands/skill/references/nantucket-houses.md`
- `brands/skill/references/congdon-coleman.md`
- `brands/skill/references/shared-standards.md`
- `brands/skill/references/red-team-battery.md`
- `brands/cc-decision-register-addendum-2026-08-13.md` (A-3 remains
  unchanged and controlling)

## Acceptance criteria

The decision is implemented correctly only when:

1. Nantucket Houses is described as the market research and real-estate data
   product, not only as a stay, owner-service, or vacation-rental surface.
2. Active for-sale listings and factual data reports are explicitly permitted on
   Nantucket Houses.
3. Factual reporting is separated from valuation, representation, and
   individualized advice.
4. Listing and source attribution obligations remain fail-closed until their
   exact requirements are ratified or supplied by the governing data rules.
5. Research surfaces do not become an excuse to put marketing inside service
   flows or to send unconsented market content.
6. Long-term-rental inventory remains outside this authority, and buying,
   selling, valuation, and showing requests preserve the named-advisor handoff.
7. Owner-facing off-market administration continues to use ownership
   vocabulary rather than brokerage vocabulary under decision-register item
   A-3.

## Approval

Approved and ratified by Stephen Maury through explicit Codex task direction on
2026-10-29. The approval becomes operative when the implementing pull request is
merged to `main`: [nantucket-ecosystem#11](https://github.com/stephen329/nantucket-ecosystem/pull/11).
