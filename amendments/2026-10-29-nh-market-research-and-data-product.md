# Amendment — Nantucket Houses is the market research and real-estate data product

- **Status:** **Approved and ratified — Stephen Maury, 2026-10-29.** Stephen directed in the Codex task that Nantucket Houses is a true market research and data tool, including active listings and data reports. The decision becomes operative when this amendment is merged to `main`.
- **Owner:** Stephen Maury
- **Affects:** Strategy §3 brand table and content ownership; Nantucket Houses and Congdon & Coleman brand references; the sending-brand matrix; listing attribution; red-team tests

## Decision

Nantucket Houses is the portfolio's customer-facing market research and
real-estate data product. Its public website and applications may provide:

- active real-estate listings and listing search;
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
| Active listings, property facts, market datasets, research tools, and factual data reports | Nantucket Houses |
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

Required source, listing-brokerage, and other regulated attribution must appear
where the listing data or applicable rules require it. The exact canonical
`attr.nh.listing` wording and placement remain `[DECIDE]`; this amendment does
not invent or ratify that string and does not waive any required attribution.

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
- This amendment does not decide a source, refresh cadence, methodology,
  report taxonomy, listing-attribution string, or regulated disclaimer. Those
  implementation details remain subject to their existing gates or `[DECIDE]`
  markers.

## Acceptance criteria

The decision is implemented correctly only when:

1. Nantucket Houses is described as the market research and real-estate data
   product, not only as a stay, owner-service, or vacation-rental surface.
2. Active listings and factual data reports are explicitly permitted on
   Nantucket Houses.
3. Factual reporting is separated from valuation, representation, and
   individualized advice.
4. Listing and source attribution obligations remain fail-closed until their
   exact requirements are ratified or supplied by the governing data rules.
5. Research surfaces do not become an excuse to put marketing inside service
   flows or to send unconsented market content.
