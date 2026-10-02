# Shared Standards — Cross-Brand Law

*Subordinate to the Nantucket Ecosystem Strategy, Sections 1, 4, and 5. Conflicts resolve to the plan.*

Rules that belong to no single brand. Everything here is designed to be enforceable mechanically — as a canonical string, a routing rule, or a lint check — not remembered.

## Sending-brand matrix

One message class → exactly one sending brand → one consent purpose. `[STRATEGY §4: transcribe full matrix]` Working skeleton:

| Message class | Sending brand | Consent class | Frequency cap | Examples |
|---|---|---|---|---|
| Booking transactional | NantucketRentals | Transactional (no opt-in required) | Event-driven only | Confirmation, lease execution, payment receipt |
| Payment lifecycle | NantucketRentals | Transactional | Event-driven | Reminder, failed payment, refund |
| In-stay service | Nantucket Houses | Service | Event-driven | Check-in, home guide, issue follow-up |
| Owner statements & property status | Nantucket Houses (app) / C&C (formal) | Service | `[STRATEGY §4]` | Payout posted; annual statement |
| Owner advisory & market reports | Congdon & Coleman | **Marketing (explicit opt-in)** — ~~Service or opted-in advisory `[STRATEGY §4]`~~ settled 2026-09-16 by the owner: *"Marketing is the safe choice to avoid CAN-SPAM violations."* Being marketing does **not** lift §4's named-sender requirement: an opinion of value still comes from a named person. | `[STRATEGY §4]` | Opinion of value, market report |
| Editorial / newsletter / social | Hello Nantucket | Marketing (explicit opt-in) | `[STRATEGY §4]` | Newsletter, IG content |

**Routing rules:**
- A message that appears to need two sending brands is misclassified — split or re-route.
- Marketing, service, and transactional classes are never mixed in one message (a payment receipt carries no promotional content; a newsletter carries no account-specific data).
- Consent is scoped to **purpose and channel, not to brand** (amended 2026-09-05, `amendments/2026-09-05-cross-brand-consent-single-entity.md`). The brands are not separate entities — **O2554 LLC** is the legal entity and holds the firm's broker licence, trading as **Congdon & Coleman Real Estate**, and that legal identity carries on leases whichever surface produced them — so a permission given to one brand was given to the entity. (O2554 LLC is an internal fact and belongs in no string at all: the entity form was deleted from `legal.cc.poweredby` on 2026-09-04, register item 1a now applies to every surface with no exemption, and counsel confirmed on 2026-09-11 that the trade name suffices on lease and payment surfaces. `disclosuresNamingLegalEntity()` in `src/lib/legal/disclosures.ts` fails the test suite if any string reinstates it. The trade name is the name, customer-facing and otherwise.) Whether one entity means one *controller* for data-protection purposes is a legal conclusion left to the qualified review, not settled by the amendment. A NantucketRentals.com booking address is still not a Hello Nantucket newsletter subscriber, because a booking is transactional and a newsletter is marketing requiring explicit opt-in — not because the brands differ.
- **Suppression is not consent, and stays brand-scoped.** "Stop emailing me from Hello Nantucket" is an opt-out, and common ownership does not make that instruction narrower. Brand-level and global suppression are both required states, and an unsubscribe propagates to every system affected by that specific permission.
- **Collection is portfolio-wide.** Consent is requested once for the entity per purpose. The collection surface says who the permission runs to by **naming the entities and stating the ownership relation** — never a collective abstraction, which the naming table below prohibits. It must enumerate **every brand the grant covers**. For a portfolio-wide grant (decided 2026-09-05): *"NantucketRentals.com and Nantucket Houses are services of Congdon & Coleman Real Estate, who also publish Hello Nantucket."* The three-brand Hello form (`canonical-naming.md`) omits Nantucket Houses and cannot carry four-brand scope. **A grant's scope is limited to the brands the surface actually names**, so anything collected under a narrower form stays narrower. A grant obtained under brand-specific framing was not knowingly given as a portfolio-wide one, and existing permissions are not retroactively widened. **Amended 2026-09-15 and not yet in effect** (`amendments/2026-09-15-cross-brand-seeding-of-existing-permissions.md`): a marketing permission held by any one of Congdon & Coleman Real Estate, NantucketRentals.com or Nantucket Houses becomes a permission for all three, at the same channel, purpose and **message-class family — resolved to the recipient brand's member of that family, and it is the member actually sent whose suppression is checked** — and only for grants held at a recorded eligibility cutoff. It governs nothing until **five** activation gates complete, of which **one is done and four remain** — the owner recorded that cutoff instant on 2026-09-15, `2026-09-15T14:11:29Z`; the per-brand marketing classes exist here to widen along, **this table records which of them are siblings of one another, and that mapping is carried in the runtime the send path reads with its resolution verified — this table is documentation and `decideDelivery` cannot read it** — the owner answered the class-routing collision on 2026-09-16 with **per-brand message classes**, so a **marketing** class is a (brand, class) pair and the one-brand-per-class rule above holds by construction **for the classes that amendment governs** — not for this table at large, where the owner-statements row still carries two sending brands — but this skeleton enumerates no marketing class for the three commercial brands, so there is nothing to widen along until `[STRATEGY §4: transcribe full matrix]` is discharged, **and transcribing them is not by itself enough to make the widening bite: the owner answered on 2026-09-16 that *complete families widen*, so a family carrying a member for each of the three commercial brands widens and a family short of any of them is inert — it widens nothing, not even between the brands it does cover. Classes can therefore exist here, this gate close, and the widening still reach nothing**; the qualified privacy review clears; the mitigation it prescribes is performed; and an activation instant is recorded. Until then the rule as stated in this bullet is the one to build to.
- **Withdrawal is per message class, multi-select** — the rows of the matrix above, grouped by sending brand, so opting out of Hello Nantucket editorial leaves NantucketRentals.com marketing and every brand's transactional mail untouched. `message_class` joins `purpose` in the stored consent tuple; `purpose` still governs what may be sent at all.
  - **Channel is a withdrawal axis too, added 2026-09-15** (`amendments/2026-09-15-channel-per-brand-revocation.md`): a person may switch off any channel — email, SMS, push, in-app, postal — **for any brand**, alongside the class grid rather than instead of it. A withdrawal is a selection over **(brand, channel, message class)**. Dropping the class axis in favour of channel would be the coarsening the 2026-09-12 amendment forbids. A channel switch stops only the **suppressible** rows below (owner, 2026-09-15): booking transactional, payment lifecycle and lease execution still reach the person on a channel they have switched off, so the control names what it stops rather than naming the channel alone, and the required rows sit beside it non-interactive. Switching off every channel is therefore not a route to global do-not-contact, which keeps its own control. Carrier STOP remains the exception and is not ours: it halts everything to a number, transactional included.
  - **Every class is a row, of exactly one of two kinds.** *Suppressible* rows are interactive toggles, switchable independently — all marketing, and service classes that are not operationally required. *Required* rows are non-interactive and state why the class cannot be switched off — decided 2026-09-05 as **booking transactional, payment lifecycle, and lease execution only**. Every other class is suppressible until a case is made for it individually; service classes are argued one at a time, never admitted as a block, because the required list only ever grows. A class is one kind or the other, never ambiguous.
  - **A toggle shown is a toggle honoured** — a suppressible class appears only once suppression for it is enforced at send time. An ignored preference is a violation, not a UX shortfall.
  - **Required rows are shown, not hidden.** Someone who cannot find "booking confirmations" will assume it is buried, not required, and go looking for a setting that does not exist.
  - **A new class needs its row before its first send** — a toggle by default, a required row only where the case has been made — or the new mail arrives under a neighbouring class nobody agreed to receive it under.
- **A single-step opt-out sits beside the grid**, because requiring a selection before an opt-out takes effect makes leaving harder than joining. Granularity is what the interested person gets; the blunt instrument is what the departing person is owed.
- **Unsubscribe resolves per mechanism** (decided 2026-09-05). The body "manage preferences" link and the non-one-click `List-Unsubscribe` URL both route to the per-class preference centre. The **one-click `List-Unsubscribe-Post` suppresses the originating message class server-side, with no interaction** — it cannot route to a page, because the mail client issues the POST, reports "unsubscribed" to the person, and never renders a response; a URI that only serves a page suppresses nothing while the client says it worked. Scope is sender-defined (RFC 8058 §3.1 requires the URI to identify recipient and list, not to clear every list), and the originating-class mapping is the granular reading Google's bulk-sender guidance sanctions.
- **Exemption (ratified 2026-09-02).** Odin's interactive, agent-initiated Gmail sends — the `/contacts` compose modal and the homeowner email modal — are exempt from this mechanical governance: no purpose/classification engine, consent or suppression check, or per-recipient audit row. See `docs/strategy/amendments/2026-09-02-odin-interactive-send-governance-removal.md`; `docs/contacts-communication-governance.md` is now a historical record. The exemption is scoped to that one surface and does not extend to automated sends.

## Disclosure language library

<!-- law: nantucket-ecosystem-integrated-strategy.md -->
Canonical strings — use verbatim, never paraphrase, **once ratified**. One row is now ratified and counsel-approved — `legal.cc.poweredby`, which is enforced by test in `src/lib/legal/disclosures.ts` and is not a drafting aid. Nothing else in this table is ratified: §12 item 2 ("Approve the Hello Nantucket descriptor, publisher credit, editorial charter, and related-party-link standard") is still open, and the only ratified string record is `docs/strategy/brands/congdon-coleman-ratified-strings.md`. Until §12 closes, these are drafting aids and **must not be enforced** by lint, template check, or schema validation. Note also that the interim publisher line below differs from the strategy's recommended "Published by Congdon & Coleman" — do not treat either as settled.

| ID | Surface | String (interim) |
|---|---|---|
| `disc.hello.publisher` | Hello footers, bio, newsletter | "Hello Nantucket is published by Congdon & Coleman Real Estate." |
| `disc.hello.about` | Hello About page | `[STRATEGY §5: full paragraph]` |
| `disc.hello.signup` | Hello signup flow | `[STRATEGY §5: disclosure + privacy language]` |
| `disc.hello.affiliated` | Inline at affiliated recommendations | Draft, not ratified — states the ownership relation, no collective term (H-4): "Heads up: [business] is owned by Congdon & Coleman Real Estate, who publish Hello Nantucket." `[STRATEGY §5]` |
| `disc.hello.sponsored` | Sponsored content (Stage 3, inactive) | `[STRATEGY §5 on activation]` |
| `attr.nh.listing` | Listing attribution in NH app | `[DECIDE]` |
| `legal.cc.poweredby` | Legal footers on every C&C surface, lease and payment included | **Ratified and counsel-approved — use verbatim:** "Congdon & Coleman Real Estate, MA Real Estate Broker's License #422678". Re-ratified by Stephen 2026-08-13, compact form approved by counsel 2026-09-11. ~~`[DECIDE: exact licensed-entity string — Stephen authors]`~~ — answered: there is no licensed-entity string, because no surface carries the entity. Held verbatim in `src/lib/legal/disclosures.ts` and recorded in `docs/strategy/brands/congdon-coleman-ratified-strings.md`. |

<!-- law: nantucket-ecosystem-integrated-strategy.md -->
The reader-comprehension gate applies to `disc.hello.*`: disclosure design should be validated by showing sampled readers the surface and asking "who publishes this?". State it as §8 does, in two halves and as **provisional**: "At least 80% of surveyed readers understand the publication's role and ownership; fewer than 5% feel misled." It is a provisional *audience-fit* gate, not a ratified Stage 0 launch condition.

## Canonical naming

How each brand refers to itself, the others, and the company — one form each, no drift. Ratified 2026-08-12 (register item 5) and 2026-08-13 (addendum A-4); the authoritative record is `docs/strategy/brands/canonical-naming.md` in the Odin repository.

| Referent | Canonical form | Never | Decided |
|---|---|---|---|
| Congdon & Coleman Real Estate | "Congdon & Coleman" after first full use | "C&C" in customer-facing copy | 2026-08-12 |
| NantucketRentals.com | "NantucketRentals.com" — **with** the .com, one form everywhere | "NR"; "NantucketRentals" without the .com **†** | 2026-08-12 |
| Nantucket Houses | "Nantucket Houses" | "NH", "the app" in external copy | standing |
| Hello Nantucket | "Hello Nantucket" | "HN", "the blog" | standing |
| The portfolio collectively | **None — the portfolio takes no collective name.** Name the entities and state the ownership relation | "family of companies"; "our brands"; any collective abstraction | 2026-08-14 (supersedes register item 5) |
| The advisory role (person) | **"advisor"** | **"adviser"** — any casing | A-4, 2026-08-13 |

**† One surface is excepted by owner override.** The owner may grant a named
surface a form this table forbids; where he has, the override governs on that
surface and nowhere else. One grant is on file — the NantucketRentals.com
inquiry-notification email's masthead image, which carries "Nantucket Rentals"
without the `.com` (Stephen, 2026-09-15). Do not re-flag or rewrite that
masthead. The authoritative record is `docs/strategy/brands/canonical-naming.md`
under "Owner overrides take precedence over this table, per named surface",
with the grant itself in `congdon-coleman-ratified-strings.md` under "Owner
overrides"; read the exception's current scope there rather than from this
summary, and expect it to retire once the replacement masthead ships **and** its
rendered wordmark has been checked against the `alt` text — not on the swap
alone.

## Accessibility and email-rendering baselines

- Text contrast ≥ WCAG AA (4.5:1 body, 3:1 large text) on every brand's palette; verify token pairs, not intentions.
- All meaning conveyed by color is also conveyed by text or shape.
- Email: single-column ≤ 640px layouts; system-font fallback stacks defined per brand in `assets/`; every image has alt text; dark-mode checked for the four template families; plain-text alternative generated for every HTML send.
- SMS: no links without preceding context naming the sender brand; sender identity in the first message of any thread.

## Photography licensing and credit

- Every image in the shared library carries: source, license/rights (owned / licensed / UGC-permitted), permitted brands, credit requirement, expiry if licensed. `[AUDIT: inventory existing assets]`
- UGC requires documented permission before use; credit as specified by the rights record.
- Inventory photography (listing photos) is NR/C&C material and does not migrate to Hello (that would be listing-like content on the editorial brand).

## Asset and file conventions

- Assets live in `docs/strategy/brands/assets/<brand>/` — logos (SVG master + PNG exports), color tokens (`tokens.json`: hex + usage role), type stacks (licensed webfont + system fallback), templates.
- Tokens are the source of truth; hex values in code that don't trace to a token are audit findings.
- File naming: `<brand>-<asset>-<variant>.<ext>`, lowercase, hyphenated.

## Enforcement hooks

- Per-repo context blocks (CLAUDE.md/AGENTS.md) are **maintained by hand** from `docs/strategy/brands/` in the Odin repository — which is also where the ratified records live. **No generator exists**, so a merge changing a ratified record updates nothing on its own and every context block is a separate manual edit. ~~`[DECIDE: which copy is upstream, and how the other is regenerated — Stephen]`~~ **Decided 2026-09-03: that directory is upstream** and this skill is published from it (`../../nantucket-brands-skill-reconciliation.md`, C1); the "how" half is answered by there being no regeneration — it is a re-upload, and it is manual too.
- Lintable rules: canonical-name table (string match — armed in cnc-web-fe, `[DECIDE: implementation tickets per repo]` elsewhere); sending-brand header on outbound templates in nrbe (routing-layer check `[DECIDE: implementation ticket]`).
- **Disclosure-string presence on Hello surfaces is NOT lintable yet**, and was listed here as though it were. It contradicted this file's own disclosure-library rule above: nothing in that library is ratified, §12 item 2 is open, and the strings "must not be enforced by lint, template check, or schema validation" until it closes. A template check is exactly the enforcement that rule forbids. It becomes lintable when §12 closes and the strings are ratified — not before.
- Run `references/red-team-battery.md` on any guideline, template, or flow change.
