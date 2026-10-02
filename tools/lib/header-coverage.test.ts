import assert from 'node:assert/strict';
import test from 'node:test';

import { analyzeCoverage, describeFailure, findCoverageFailures, isRealDate } from './header-coverage';

/**
 * The case this exists for, reproduced from the 2026-09-05 miss: an item
 * ratified 2026-09-05 added under a heading claiming coverage through
 * 2026-08-18.
 */
test('an item dated after the heading claim fails', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Strings ratified after this record was cut — reconciled through 2026-08-18',
    '',
    '1. **Footer short form re-worded** (Stephen, 2026-08-13).',
    '2. **Portfolio ownership relation** (Stephen, 2026-09-05).',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-09-05');
  assert.equal(failures[0]?.claimed, '2026-08-18');
  assert.equal(failures[0]?.offendingLine, 5);
  assert.match(describeFailure(failures[0]!), /2026-09-05 sits under a heading claiming coverage through 2026-08-18/);
});

test('advancing the heading is what makes it pass', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Strings ratified after this record was cut — reconciled through 2026-09-05',
    '',
    '1. **Footer short form re-worded** (Stephen, 2026-08-13).',
    '2. **Portfolio ownership relation** (Stephen, 2026-09-05).',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

/**
 * The counter-case, and the reason the check is opt-in. Most dated headings
 * carry the date of their own decision, and an item elsewhere in the document
 * does not falsify them. An unmarked heading is not a coverage claim.
 */
test('an unmarked dated heading is left alone', () => {
  const doc = [
    '## Entity form removed from transactional surfaces (Stephen, 2026-09-04)',
    '',
    'Superseded by a later decision on 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('the claim ends where the section does', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    'An item from 2026-08-12.',
    '',
    '## A later section',
    '',
    'An item from 2026-09-05, which the earlier heading does not claim.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a deeper subsection stays inside the claim', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '### A subsection',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-09-05');
});

/** Same carve-out `skill-citations.ts` makes: a worked example is not content. */
test('a fenced example does not trip the check that enforces it', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    'Write it like this:',
    '',
    '```markdown',
    '<!-- covers-through -->',
    '## Something — through 2026-01-01',
    'An item from 2026-09-05.',
    '```',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('the heading date is read from the heading, never duplicated in the marker', () => {
  // A marker carrying its own date would be a second copy to drift — the exact
  // failure this module exists to catch — so the marker takes no argument and a
  // heading without a date is itself a failure.
  const doc = ['<!-- covers-through -->', '## Reconciled recently', '', 'An item from 2026-09-05.', ''].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.reason, 'no-date-in-heading');
  assert.match(describeFailure(failures[0]!), /carries no ISO date/);
});

test('a heading with two dates is ambiguous rather than silently resolved', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Cut 2026-08-01 — reconciled through 2026-08-18',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.reason, 'ambiguous-heading-date');
  // Guessing which date is the claim is how a check becomes wrong quietly.
  assert.match(describeFailure(failures[0]!), /must be one date/);
});

test('a stray marker does not attach to a later heading', () => {
  const doc = [
    '<!-- covers-through -->',
    '',
    'Prose that separates the marker from the heading.',
    '',
    '## Reconciled through 2026-08-18',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('every later date is reported, not just the first', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    'One from 2026-09-05 and another from 2026-09-12.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.deepEqual(
    failures.map((f) => f.offendingDate),
    ['2026-09-05', '2026-09-12'],
  );
});

test('a date equal to the claim is covered', () => {
  const doc = ['<!-- covers-through -->', '## Covered — through 2026-09-05', '', 'An item from 2026-09-05.', ''].join(
    '\n',
  );

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

/**
 * Review on the PR adding this checker found three ways it missed or over-fired.
 * Each is kept as a test named for what it costs, not for the code path it
 * exercises.
 *
 * The PR number is spelled out rather than written `#`-prefixed: the design
 * token census reads a bare `#` followed by three hex digits as a colour, so a
 * reference like that in `src/` counts against the drift ceiling. It cost this
 * branch a CI cycle.
 */

test('a date in a deeper unmarked heading is covered by the open claim', () => {
  // The original subsection test put its date in the *body*, so it passed while
  // this hole was open: heading text was skipped entirely once the marker check
  // returned. A silent miss in the invariant the checker claims to enforce.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '### Decision (2026-09-05)',
    '',
    'Body text with no date.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-09-05');
  assert.equal(failures[0]?.offendingLine, 4);
});

test('an impossible date in the heading fails instead of disabling the check', () => {
  // 2026-99-99 is ISO-shaped and sorts above every real date, so as a claim it
  // would let anything through. A passing check that cannot fail is worse than
  // no check, because it reads as assurance.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-99-99',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.reason, 'invalid-heading-date');
  assert.match(describeFailure(failures[0]!), /disable the check/);
});

test('an impossible date in the body is reported rather than compared', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-09-05',
    '',
    'An item from 2026-02-30.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.reason, 'invalid-date-in-section');
});

test('isRealDate separates shape from existence', () => {
  assert.equal(isRealDate('2026-09-05'), true);
  assert.equal(isRealDate('2024-02-29'), true, 'leap day');
  assert.equal(isRealDate('2026-02-29'), false, 'not a leap year');
  assert.equal(isRealDate('2026-99-99'), false);
  assert.equal(isRealDate('2026-13-01'), false);
  assert.equal(isRealDate('2026-00-10'), false);
  assert.equal(isRealDate('2026-9-5'), false, 'must be zero-padded for lexical ordering');
});

test('a tilde fence is skipped like a backtick one', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '~~~markdown',
    'An item from 2026-09-05.',
    '~~~',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a longer fence is not closed by a shorter one inside it', () => {
  // The documentation for this convention contains a fenced example that itself
  // contains a fence. Closing on the inner one leaks the rest into the scan.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '````markdown',
    '```',
    'An item from 2026-09-05.',
    '````',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a fence with a different delimiter does not close the open one', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '~~~markdown',
    '```',
    'An item from 2026-09-05.',
    '~~~',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a fence between the marker and a heading breaks the adjacency', () => {
  // Every line of a fenced block returned before the stray-marker reset, so a
  // marker stayed live across the whole block and attached to a heading nobody
  // marked. A claim the author never made is a failure report they cannot act
  // on, which is how a check gets switched off.
  const doc = [
    '<!-- covers-through -->',
    '',
    '```markdown',
    'a worked example',
    '```',
    '',
    '## An unrelated heading, never marked — through 2026-08-18',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('four-space-indented backticks are code, not a fence', () => {
  // Markdown allows a fence at most three leading spaces; at four it is an
  // indented code block. Reading it as an opener started a fence that never
  // closed, so every date to the end of the file was skipped — a silent miss,
  // and the failure direction that costs the most.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '    ```',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-09-05');
});

test('three-space-indented backticks are still a fence', () => {
  // The boundary matters in both directions: tightening it far enough to catch
  // indented code must not stop skipping a legitimately indented example.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '   ```',
    '   An item from 2026-09-05.',
    '   ```',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a marked heading indented up to three spaces still opens a claim', () => {
  // Valid Markdown. The marker was trimmed while the heading was anchored at
  // column zero, so the heading read as prose, the marker was discarded, and no
  // claim was installed — a section that looks guarded and is not.
  const doc = [
    '<!-- covers-through -->',
    '   ## Covered — through 2026-08-18',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-09-05');
  assert.equal(failures[0]?.claimed, '2026-08-18');
});

test('an indented same-level heading closes an open claim', () => {
  // The mirror of the case above, and the reason both directions need a test:
  // a heading the parser cannot see cannot end a section either, so the claim
  // ran on and reported an item it never covered.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '   ## A later section, indented',
    '',
    'An item from 2026-09-05, which the earlier heading does not claim.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('four-space-indented hashes are code, not a heading', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-09-05',
    '',
    '    ## Not a heading — this is indented code',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('an indented marker is not a marker', () => {
  // Four spaces makes the marker itself indented code. It must not install a
  // claim, or the bound on the heading would be undone by the line above it.
  const doc = [
    '    <!-- covers-through -->',
    '## Reconciled through 2026-08-18',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a marker in a fenced example is not counted as a claim', () => {
  // The success line said "N claims still cover their contents" from its own
  // regex over the markers. That counted markers the parser never accepted, so
  // the reassurance covered sections nobody had checked — a second definition
  // of "a claim", disagreeing with the first. The failure this module is about,
  // in its own output.
  const doc = [
    'Write it like this:',
    '',
    '```markdown',
    '<!-- covers-through -->',
    '## Something — through 2026-01-01',
    '```',
    '',
  ].join('\n');

  const { claims, failures } = analyzeCoverage('record.md', doc);
  assert.deepEqual(claims, []);
  assert.deepEqual(failures, []);
});

test('a stray marker is not counted as a claim', () => {
  const doc = ['<!-- covers-through -->', '', 'Prose, then an unmarked heading.', '', '## Later — 2026-01-01', ''].join(
    '\n',
  );

  assert.deepEqual(analyzeCoverage('record.md', doc).claims, []);
});

test('a marked heading the parser rejects is not counted as a claim', () => {
  // It is a failure, so the run fails anyway — but it must never be counted as
  // a claim that holds, or a broken claim would inflate the assurance.
  const doc = ['<!-- covers-through -->', '## Reconciled recently', '', 'An item from 2026-09-05.', ''].join('\n');

  const { claims, failures } = analyzeCoverage('record.md', doc);
  assert.deepEqual(claims, []);
  assert.equal(failures.length, 1);
});

test('a recognised claim is reported with the heading it came from', () => {
  const doc = ['<!-- covers-through -->', '## Covered — through 2026-09-05', '', 'An item from 2026-08-13.', ''].join(
    '\n',
  );

  const { claims } = analyzeCoverage('record.md', doc);
  assert.equal(claims.length, 1);
  assert.equal(claims[0]?.claimed, '2026-09-05');
  assert.equal(claims[0]?.line, 2);
});

/**
 * A fourth review round. All three are silent misses or spurious failures in
 * the same place — what the parser believes is currently claiming a line.
 */

test('a nested claim does not discard the one around it', () => {
  // Holding a single open claim meant a marked subsection replaced its parent.
  // Once a sibling subsection closed the nested claim, the parent was gone too
  // and the rest of its section stopped being scanned — a December date passing
  // under a heading claiming August, while the summary counted both claims as
  // sound. The nested date sits inside the parent's, so the nested heading does
  // not itself fail: the bug is isolated.
  const doc = [
    '<!-- covers-through -->',
    '## Parent — through 2026-08-18',
    '',
    '<!-- covers-through -->',
    '### Nested — through 2026-08-10',
    '',
    'An item from 2026-08-05.',
    '',
    '### A sibling subsection, which closes the nested claim',
    '',
    'An item from 2026-12-25.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-12-25');
  assert.equal(failures[0]?.claimed, '2026-08-18', 'judged against the parent');
  assert.equal(failures[0]?.headingLine, 2);
});

test('a date breaking both a nested claim and its parent is reported against each', () => {
  // A heading's claim covers everything below it, so an item in a subsection
  // sits under both. Each broken claim is its own falsehood in its own heading.
  const doc = [
    '<!-- covers-through -->',
    '## Parent — through 2026-08-18',
    '',
    '<!-- covers-through -->',
    '### Nested — through 2026-08-10',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.deepEqual(
    failures.map((f) => f.claimed),
    ['2026-08-18', '2026-08-10'],
  );
});

test('a nested claim still narrows within its own section', () => {
  // The stack must not turn every claim into the outermost one: a date legal
  // under both is not a failure.
  const doc = [
    '<!-- covers-through -->',
    '## Parent — through 2026-09-30',
    '',
    '<!-- covers-through -->',
    '### Nested — through 2026-09-30',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('blank lines break marker adjacency', () => {
  // The convention is that the marker sits on the line above its heading, and
  // the code let blank lines through — so an orphaned marker opted in a heading
  // nobody marked. The documented rule and the code disagreeing.
  const doc = [
    '<!-- covers-through -->',
    '',
    '',
    '## An unrelated heading — through 2026-08-18',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a heading inside an HTML comment does not close the claim', () => {
  // `## Not a real heading` inside a comment closed the live claim, so every
  // date after the comment escaped it.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '<!-- an aside',
    '## Not a real heading',
    '-->',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-09-05');
});

test('a date inside an HTML comment is not content', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '<!-- superseded on 2026-09-05,',
    '     see the later record -->',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('the marker is a comment that closes on its own line, and still works', () => {
  // The HTML-comment tracking must not swallow the marker itself.
  const doc = ['<!-- covers-through -->', '## Covered — through 2026-08-18', '', 'An item from 2026-09-05.', ''].join(
    '\n',
  );

  assert.equal(findCoverageFailures('record.md', doc).length, 1);
});

/**
 * A fifth round. Two of these are consequences of the fourth round's fixes —
 * the cost of adding a second block construct to a parser that had one.
 */

test('a fence opened inside an HTML comment does not eat the rest of the file', () => {
  // A fence and an HTML comment are mutually exclusive: whichever opened first
  // owns every line until it closes. Testing "opens a fence" before "inside a
  // comment" let a ``` inside a comment start one, which then swallowed the
  // `-->` as fenced content and every date after it.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '<!--',
    '```',
    '-->',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-09-05');
});

test('a comment inside a fence is not a comment', () => {
  // The other side of that ordering: a fenced example showing the marker must
  // not open comment state.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '```markdown',
    '<!-- an unclosed comment in an example',
    '```',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.equal(findCoverageFailures('record.md', doc).length, 1);
});

test('a date in a one-line HTML comment is not content either', () => {
  // The multiline case was fixed and this one was not, so the same non-content
  // date was reportable purely because its delimiters shared a line.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '<!-- superseded on 2026-09-05 -->',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a trailing comment on a heading does not become part of its claim', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18 <!-- cut 2026-09-30 -->',
    '',
    'An item from 2026-08-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('an empty heading closes the section', () => {
  // `##` with no text is a valid ATX heading. Requiring whitespace and text
  // meant it did not close the claim, so a later section's dates were reported
  // against a heading that no longer covered them.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '##',
    '',
    'An item from 2026-09-05, in a new section.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a hash with no space is not a heading', () => {
  // The other side of accepting an empty heading: `#foo` is not one, and
  // reading it as a section boundary would close claims that are still open.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '#hashtag',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.equal(findCoverageFailures('record.md', doc).length, 1);
});

/**
 * A sixth round, and every one is Markdown structure the regexes did not model:
 * HTML blocks, Setext headings, container prefixes, and the boundary between a
 * comment and the content sharing its line.
 */

test('content before a comment opener is still content', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    'Added 2026-09-05 <!-- note',
    'still inside the comment',
    '-->',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-09-05');
  assert.equal(failures[0]?.offendingLine, 4);
});

test('text after a comment closer belongs to the comment, per CommonMark', () => {
  // Review asked for this to be scanned, and the hand-written version did. The
  // parser disagrees, and it is right: a CommonMark HTML block ends at the line
  // *containing* `-->`, and that whole line is part of the block. Following the
  // parser rather than re-adding a special case is the point of this change —
  // the special cases are what kept producing the next defect. Flagged on the
  // PR rather than silently changed.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '<!-- note',
    'still inside the comment',
    '--> Added 2026-09-05',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a comment that begins a line makes the whole line a comment', () => {
  // Markdown reads `<!-- note --> ## example` as an HTML block. Removing the
  // comment and reading the rest turned the suffix into a same-level heading,
  // which closed the live claim and let every later date escape.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '<!-- note --> ## example',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.claimed, '2026-08-18');
});

test('a marked Setext heading opens a claim', () => {
  // Underlined text is a heading. Reading it as prose cleared the marker and
  // installed nothing — the guard silently off on a section that visibly
  // opted in, which is the worst way for this checker to fail.
  const doc = [
    '<!-- covers-through -->',
    'Covered through 2026-08-18',
    '---',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.claimed, '2026-08-18');
});

test('a Setext heading closes an open claim', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    'A later section',
    '---',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a thematic break is not a Setext heading', () => {
  // `---` after a blank line is a rule, not an underline. Reading it as one
  // would turn the blank into a heading and close claims that are still open.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '---',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.equal(findCoverageFailures('record.md', doc).length, 1);
});

test('a fenced example inside a blockquote is still skipped', () => {
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '> ```',
    '> An item from 2026-09-05.',
    '> ```',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a quoted date outside a fence is still content', () => {
  // Stripping the container prefix must not make quoted prose invisible.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '> An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.equal(findCoverageFailures('record.md', doc).length, 1);
});

/**
 * A seventh round, against the parsed version. Three are the parser being asked
 * the wrong question rather than answering wrongly — the same lesson the sibling
 * PR learned when a real parser did not remove the need to check.
 */

test('a quoted heading does not close the claim', () => {
  // `visit` added every heading to one flat outline, so a heading inside a
  // blockquote — quoted from somewhere else, not this document's structure —
  // closed the live claim and let every date after it escape.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '> ## Heading from an older document',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.claimed, '2026-08-18');
});

test('a real heading after a quoted one still closes the claim', () => {
  // The other side: restricting the outline to the top level must not stop
  // genuine headings ending a section.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    '> ## Quoted',
    '',
    '## A real later section',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('emphasis does not hide a date', () => {
  // `_` is a word character, so `\b` failed on both sides of `_2026-09-05_`
  // and a later date wearing italics passed an older claim in silence.
  for (const written of ['_2026-09-05_', '__2026-09-05__', '*2026-09-05*']) {
    const doc = [
      '<!-- covers-through -->',
      '## Covered — through 2026-08-18',
      '',
      `An item from ${written}.`,
      '',
    ].join('\n');
    assert.equal(findCoverageFailures('record.md', doc).length, 1, written);
  }
});

test('a date is not matched inside a longer run of digits', () => {
  // The other side of loosening the boundary: digits either side must still
  // prevent a match, or version strings become dates.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    'Build 12026-09-050 is not a date.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a marker spread over several lines is not a marker', () => {
  // `\s` spans newlines, so `<!--` / `covers-through` / `-->` matched and opted
  // in the heading below — a claim the author never made, and failures against
  // it that nobody could act on.
  const doc = [
    '<!--',
    'covers-through',
    '-->',
    '## Not marked — through 2026-08-18',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a date in inline code is not record content', () => {
  // The module says code is not record content; the exclusion set recognised
  // only block code, so a filename in backticks was read as a ratification date.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    'See `snapshot-2026-09-05.json` for the export.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

/**
 * An eighth round. Both are consistency failures inside the previous round's
 * fixes rather than new territory — the root rule applied to one thing and not
 * its neighbour, and a line number that stopped being true once headings could
 * span lines.
 */

test('a quoted marker does not opt a real heading in', () => {
  // I scoped headings to the document root and left markers reading from
  // anywhere, in the same commit. `> <!-- covers-through -->` is a marker the
  // document is showing, and it was opting the next real heading into a claim
  // nobody made.
  const doc = [
    '> <!-- covers-through -->',
    '## Not marked — through 2026-08-18',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.deepEqual(findCoverageFailures('record.md', doc), []);
});

test('a real marker still opts its heading in', () => {
  // The other side of that restriction, since narrowing where markers count is
  // how the convention stops working entirely.
  const doc = [
    '<!-- covers-through -->',
    '## Covered — through 2026-08-18',
    '',
    'An item from 2026-09-05.',
    '',
  ].join('\n');

  assert.equal(findCoverageFailures('record.md', doc).length, 1);
});

test('a date in a multi-line heading is reported on its own line', () => {
  // A Setext heading can span several lines of text. Scanning the joined text
  // attributed every date to the heading's first line, so `offendingLine`
  // pointed somewhere the date was not — the field's contract broken in the
  // one output a reader navigates by.
  const doc = [
    '<!-- covers-through -->',
    '# Covered — through 2026-08-18',
    '',
    'A later subsection heading',
    'that mentions 2026-09-05 on its second line',
    '---',
    '',
  ].join('\n');

  const failures = findCoverageFailures('record.md', doc);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.offendingDate, '2026-09-05');
  assert.equal(failures[0]?.offendingLine, 5);
});
