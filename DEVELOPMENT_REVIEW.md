# Portfolio development review policy

**Owner:** Stephen Maury

**Approved:** 2026-10-03

**Applies to:** `nantucket-ecosystem`, `odin`, `cnc-web-fe`, `nr-web-fe`,
`nrbe`, `nantuckethouses-platform`, and `hellonantucket`

This is the minimum development-review policy for the Nantucket portfolio. A
repository may add stricter checks or reviewers, but it may not weaken, replace,
or silently reinterpret this policy. When a repository rule conflicts with this
file, follow the stricter rule and record the conflict for reconciliation.

## Required reviewers

- Every candidate requires an independent Codex review.
- A high-risk candidate also requires an independent Claude review of the same
  final commit.
- The implementer's self-review does not satisfy either requirement. Every
  candidate needs an independent Codex reviewer and, when high risk, an
  independent Claude reviewer. When a required reviewer is from the same model
  family as the implementer, it must be a fresh instance. A same-family review
  never substitutes for a reviewer of a different model family required above.
  Required reviewers receive the requirements, diff, code, and verification
  evidence, not the implementer's reasoning transcript or another reviewer's
  findings before their initial report.
- Grok is not part of this process. Do not request, run, or count a Grok review as
  required review, escalation, substitution, compensating evidence, or a merge
  gate.

High-risk work includes authentication, authorization, identity, privacy,
security, consent, legal disclosures, payments or money movement, production data
or migrations, destructive operations, authoritative-system or record-class
cutovers, external messages or side effects, cross-repository contracts, and
changes to governing instructions, required checks, review enforcement, or merge
policy. Uncertainty about whether a change is high risk is resolved as high risk.

## Candidate and review sequence

1. Run the repository's conflict preflight and assign one writer before editing.
2. The writer implements, self-reviews, runs the required checks, commits only the
   intended change, and records the full candidate SHA and evidence.
3. Freeze that candidate before requesting review. Required checks are green, or a
   repository-owner exception names the exact check, SHA, reason, and compensating
   evidence. Do not push to the candidate while its required first passes run. For
   high-risk work, request the independent Codex and Claude reviews in parallel
   where supported. A report on a different SHA does not count and cannot be
   combined with a report on the frozen SHA.
4. Record every finding with its reviewed SHA, class, severity, affected behavior,
   failure path, and disposition. Only a blocking finding may produce a remediation
   commit. Disputed blocking findings are answered with reproducible evidence;
   accepted residual risk requires a recorded owner decision.
5. Blocking fixes land as one consolidated commit, then each required reviewer
   re-verifies that delta. A full reread is required only when the fix changes who
   may act, when a gate is satisfied, what a check accepts, how an exception is
   granted, or the meaning of a governing rule.

## Finding classes

A blocking finding is a confirmed defect that changes behavior, weakens or
misstates a gate, makes a false claim about a ratified record, or breaks a path a
session will follow. A non-blocking finding is style, structure, a suggestion, or
follow-up work. Record non-blocking findings on the pull request. Do not "fix"
them in the same candidate: that commit invalidates the reviews without buying
safety. A reviewer that does not label a finding blocking or non-blocking has not
finished the report.

## Reviewer time box

A required reviewer has 30 minutes from a successful request to return a report on
the frozen SHA. If the report is missing, empty, malformed, or bound to another
SHA, retry once through the same reviewer or its authorized wake-up. If the retry
does not return a valid report, record `required review unmet`, name the reviewer
and the smallest recovery action, and stop polling. Do not substitute Grok,
self-review, or an extra reviewer of a family the policy does not require.
Waiting is not a review round.

## Review shape

Match the pass to the change. An index, an unmodified supplied asset, a link, or
another docs-only claim is reviewed against a checklist of those claims, not by a
line audit of unrelated prose. Authentication, authorization, identity, privacy,
security, consent, legal disclosures, payments, production data or migrations,
destructive operations, authoritative-system cutovers, external side effects,
cross-repository contracts, and changes to governing meaning still get a full
pass. Uncertainty about the class is resolved as a full pass.

## Round accounting and escalation

A substantive remediation round is one frozen candidate, its required reports,
and the resulting blocking-fix commit or consolidated commit batch. A recorded
non-blocking finding with no commit is not a round. A cosmetic commit made
despite that rule still needs verification on the resulting SHA, and it counts as
a round if it was not necessary to correct a blocking finding.

Count substantive remediation rounds against the original task scope. Starting a
new task, cutting another branch, opening another worktree or pull request,
changing writers, splitting the same scope, or superseding a candidate does not
reset the count.

After the third substantive remediation round, required reviewers may verify the
resulting candidate. If another substantive correction is needed, stop autonomous
cycling and hand the owner the remaining findings, evidence, and proposed next
step. Continue only under a recorded owner authorization that states its scope and
bounds. Reaching the limit never authorizes merge and never resets the counter.

A reviewer timeout, tool error, empty or malformed result, usage limit, or
incomplete report is not a pass. It does not count as a substantive remediation
round unless it produces findings that lead to a substantive correction. Retry a
failed required reviewer only through the same permitted reviewer or an authorized
wake-up mechanism; never substitute Grok or self-review.

## Completion and merge

A candidate is review-complete only when:

- every required reviewer has a valid final record on the same final SHA;
- required tests and CI are green, or a repository-owner exception names the
  exact check, SHA, reason, and compensating evidence;
- every confirmed bug has a valid disposition;
- there is no merge conflict, unresolved required review thread, changes-requested
  review, or outstanding owner decision; and
- governing-file changes carry any required owner approval under the pre-change
  policy.

Local review is pre-push evidence, not merge authority. Branch protection,
repository CI, required pull-request reviews, and explicit merge authorization
remain separate gates. If a required reviewer is unavailable, record `required
review unmet`, name the missing reviewer and smallest recovery action, and keep
merge blocked.

## Downstream instruction surfaces

Each repository in scope must link to this file from its agent instructions and
state that it is the portfolio minimum. Local instructions should contain only
repository-specific additions, not a forked copy of this policy. If this private
repository cannot be accessed, the policy is unavailable rather than optional;
record the blocked dependency and do not reconstruct it from memory.

Any local skill, helper, automation, or other non-repository instruction surface
that governs portfolio development review must also link to this file and defer
to it for reviewer selection, round accounting, escalation, and completion. Such
an instruction surface may explain its own mechanics but must not duplicate or
weaken the policy.
