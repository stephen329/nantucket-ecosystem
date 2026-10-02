# Amendment — Trigger-reliability measurement boundary

- **Date raised:** 2026-08-13
- **Direction decided:** 2026-08-13 by the owner, recorded as decision D-6 in
  `docs/odin-cloud-improvement-plan.md` §3.5 ("amendment splitting scope").
- **Status:** **Approved 2026-08-13 by Stephen Maury** (see approval block).
  The measurement boundary below is in effect; the gate can pass only on
  evidence collected under it.
- **Owner:** Stephen Maury (executive sponsor)
- **Affects:** Strategy §8, Stage 0 company pass condition "Invitation,
  escalation, and suppression triggers succeed in at least 98% of tests";
  §9 core scorecard, Odin/quality row; the office-manager KPI
  `trigger-reliability` (`src/lib/workspaces/kpis.ts`). Later-stage gates
  that name delivery or trigger reliability (Stage 1 invitation delivery
  ≥98%, compliance reminders reaching ≥98% of eligible recipients, Stage 2
  trigger reliability ≥99%) inherit the measurement-boundary rule below when
  their windows open; **no gate value changes anywhere in this amendment.**

## What the strategy currently says

| Where | Approved text | Problem |
|---|---|---|
| §8, Stage 0 company pass conditions | "Invitation, escalation, and suppression triggers succeed in at least 98% of tests." | The triggers named execute in the Nantucket Houses / NantucketRentals / nrbe systems. None of them run in Odin. The Odin scorecard tile expected to attest this gate (`trigger-reliability`, office-manager workspace) has no honest access to the events, and today reports `not-instrumented`. |
| §9, core scorecard | Odin/quality row includes "sync reliability" and the scorecard is where gate evidence is read | Without a defined measurement boundary, the only ways to fill the tile are (a) Odin fabricating an attestation it cannot make, or (b) the gate silently going unmeasured. Both violate the house rule that a number is never invented and gaps render as labeled gaps. |

## What this amendment does and does not change

**Unchanged:** the 98% threshold; the trigger classes covered (invitation,
escalation, suppression); pass/hold/stop semantics; every cohort definition;
every stage date; every later-stage gate value.

**Defined by this amendment:** which system measures each trigger class, who
attests each feed, how the evidence reaches the scorecard, and what the Odin
tile is permitted to claim.

## Text to adopt

1. **The gate is unchanged.** Invitation, escalation, and suppression
   triggers must succeed in at least 98% of tests for the Stage 0 condition
   to pass.
2. **System-of-execution measures.** Each trigger class is measured in the
   system where the trigger executes: invitation triggers in the Nantucket
   Houses backend; suppression triggers in the consent/communication system
   (nrbe); escalation triggers in the system that performs the routing
   (NH/nrbe, and Odin only for escalation prompts that Odin itself issues).
   A system never attests a trigger it does not execute.
3. **Durable outcome records.** The measuring system records every test and
   production firing durably — run identifier, trigger class, timestamp,
   outcome, and failure detail — so a success rate is computable from
   records, not recollection.
4. **Reporting path.** Outcomes reach the Odin scorecard through a governed
   feed. Until that feed ships, a weekly batch certified by the measuring
   system's engineering owner is acceptable, consistent with §9's
   minimum-viable rule that sources may enter through governed batch files
   or manual certification before their automated pipelines ship.
5. **One tile, two labeled components, never blended.** The
   `trigger-reliability` tile carries: (a) the **gate component** — the
   cross-system invitation/escalation/suppression success rate reported
   under items 2–4, which is the only number the Stage 0 gate reads; and
   (b) an **operational component** — Odin-side scheduled-job success (LINK
   sync, Vercel crons, identity sync), which Odin attests natively and which
   is labeled as not being the gate measure. The two components are never
   summed or averaged into a blended figure.
6. **Attestation separation.** The engineering owner of each measuring
   system certifies its feed; the Office Manager validates completeness and
   exceptions, consistent with §10's rule that source-system logs support
   rather than replace operational certification. No operator certifies the
   success of triggers in their own loop.
7. **Uninstrumented classes hold.** If a trigger class has no measuring
   instrument in its system-of-execution when Stage 0 evidence is assembled,
   that class reports **not instrumented** — never zero, never an estimate —
   and the gate cannot pass on that class; the affected component defaults
   to hold/continue measuring per §8.
8. **Inheritance.** When the Stage 1 and Stage 2 windows open, their
   delivery- and trigger-reliability gates are measured under the same
   boundary rules, at their existing values.

## Freeze-rule compliance

Rule 2 of the gate-parameter register requires a measurement method to be
fixed before the window it governs is read. Stage 0 is underway, but no
trigger-reliability results exist anywhere — nothing is instrumented — so no
result was visible to any party when this boundary was defined, satisfying
rule 3 trivially. This amendment is recorded so the method is fixed before
the first evidence is assembled, not after.

## Reason

The gate as written cannot be honestly attested by the surface that carries
it. Defining the measurement boundary keeps the gate's value and subjects
intact while making the evidence collectible, attributable, and
certifiable — instead of forcing a choice between an invented number and a
silently unmeasured gate.

## Work items this amendment creates

| Where | Item |
|---|---|
| NH backend / nrbe | Durable trigger-outcome recording per class (item 3) and the governed feed or certified weekly batch (item 4) — cross-repo, named owner needed |
| Odin | Improvement-plan item 25 (tile scope labels, cron-outcome table, Odin-side rate computation) and item 18 (alert channel + freshness watchdog) |
| Office Manager | Certification procedure for the interim batch path (item 6) |

## Approval

- **Approved by:** Stephen Maury (stephen@maury.net), document owner and
  executive sponsor
- **Date:** 2026-08-13
- **Recorded:** approval given in the working session that drafted this
  amendment, after review of the full text; committed by the branch owner on
  the owner's instruction.
