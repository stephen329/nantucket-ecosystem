import assert from 'node:assert/strict';
import test from 'node:test';

import {
  extractLawCitations,
  findMissingExcerpts,
  normalizeLawText,
} from './skill-citations';

const SOURCE = `## 3. Brand Portfolio

| Topic | Owning brand |
|---|---|
| Island culture, local voices | Hello Nantucket |

Hello should not publish listings, act as a booking surface, or become the
primary publisher of real-estate and rental-market intelligence.
`;

const read = (path: string) => (path === 'strategy.md' ? SOURCE : null);

test('a quoted table is checked cell by cell', () => {
  const skill = [
    '<!-- law: strategy.md -->',
    '| Topic | Owning brand |',
    '|---|---|',
    '| Island culture, local voices | Hello Nantucket |',
    '',
  ].join('\n');

  const citations = extractLawCitations(skill);
  assert.equal(citations.length, 1);
  assert.ok(citations[0]?.excerpts.includes('Island culture, local voices'));
  assert.deepEqual(findMissingExcerpts('SKILL.md', citations, read), []);
});

test('a cell edited away from the source fails', () => {
  const skill = [
    '<!-- law: strategy.md -->',
    '| Topic | Owning brand |',
    '|---|---|',
    '| Island culture, local voices | Congdon & Coleman |',
    '',
  ].join('\n');

  const failures = findMissingExcerpts(
    'SKILL.md',
    extractLawCitations(skill),
    read,
  );
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.excerpt, 'Congdon & Coleman');
});

// The failure this exists for: the skill said Hello may never publish market
// intelligence where the strategy says it should not be the *primary
// publisher*. A paraphrase that drops a qualifier must not pass.
test('a paraphrase of quoted prose fails', () => {
  const faithful =
    '<!-- law: strategy.md -->\n' +
    'The rule is "Hello should not publish listings, act as a booking surface,\n' +
    'or become the primary publisher of real-estate and rental-market\n' +
    'intelligence."\n';
  assert.deepEqual(
    findMissingExcerpts('s.md', extractLawCitations(faithful), read),
    [],
  );

  const paraphrased =
    '<!-- law: strategy.md -->\n' +
    'The rule is "Hello should not publish listings, act as a booking surface,\n' +
    'or publish real-estate and rental-market intelligence."\n';
  assert.equal(
    findMissingExcerpts('s.md', extractLawCitations(paraphrased), read).length,
    1,
  );
});

test('typographic drift is not legal drift', () => {
  assert.equal(
    normalizeLawText('“Hello”  should   not—publish'),
    '"Hello" should not-publish',
  );
});

test('a marker naming a file that does not exist is a failure, not a pass', () => {
  const skill = '<!-- law: missing.md -->\n| Topic | Hello Nantucket |\n';
  const failures = findMissingExcerpts(
    'SKILL.md',
    extractLawCitations(skill),
    read,
  );
  assert.equal(failures.length, 1);
  assert.match(failures[0]?.excerpt ?? '', /source file not found/);
});

test('unmarked prose is not checked — the convention is marking, not guessing', () => {
  assert.deepEqual(extractLawCitations('Some ordinary guidance text.\n'), []);
});

// Quotes alternate; the prose between two quotations is not a quotation. A
// character-class regex reads that gap as a span and reports it missing.
test('the text between two quotations is not treated as quoted', () => {
  const skill =
    '<!-- law: strategy.md -->\n' +
    'Ask "Hello should not publish listings, act as a booking surface, or become\n' +
    'the primary publisher of real-estate and rental-market intelligence." and then\n' +
    'state the gate as the section does, in two halves and as provisional, thus: "Island\n' +
    'culture, local voices"\n';
  assert.deepEqual(
    findMissingExcerpts('s.md', extractLawCitations(skill), read),
    [],
  );
});

// The README documents the marker convention by showing one. A checker that
// read its example as a citation would fail on the file explaining it.
test('a marker inside a fenced example is not a citation', () => {
  const readme = [
    'Mark a quotation like this:',
    '',
    '```markdown',
    '<!-- law: strategy.md -->',
    '| Island culture, local voices, history, … | Hello Nantucket |',
    '```',
    '',
  ].join('\n');
  assert.deepEqual(extractLawCitations(readme), []);
});

// Every test below is a way Markdown says "this is an example, not law" that a
// hand-tracked fence did not recognise. Each one was a live defect: the first
// three read an example as a citation, and the fourth — the one that matters —
// opened a fence nothing closed and stopped checking the rest of the file.

test('an indented code example is not a citation', () => {
  const readme = [
    'Mark a quotation like this:',
    '',
    '    <!-- law: strategy.md -->',
    '    | Island culture, local voices | Congdon & Coleman |',
    '',
  ].join('\n');
  assert.deepEqual(extractLawCitations(readme), []);
});

test('a tilde-fenced example is not a citation', () => {
  const readme = [
    '~~~markdown',
    '<!-- law: strategy.md -->',
    '| Island culture, local voices | Congdon & Coleman |',
    '~~~',
    '',
  ].join('\n');
  assert.deepEqual(extractLawCitations(readme), []);
});

// How a document documents how to document the convention: the outer fence has
// to be longer than the one it contains. A toggle flipped by any ``` line read
// the inner fence as a closer and exposed the example between them.
test('a fence nested inside a longer fence stays closed', () => {
  const readme = [
    '````markdown',
    '```markdown',
    '<!-- law: strategy.md -->',
    '| Island culture, local voices | Congdon & Coleman |',
    '```',
    '````',
    '',
  ].join('\n');
  assert.deepEqual(extractLawCitations(readme), []);
});

// The silent miss, and the reason this file exists: a ``` inside an HTML
// comment opened a fence with no closer, so every citation below it went
// unchecked and the run still passed.
test('a fence character inside an HTML comment does not stop the checker', () => {
  const skill = [
    '<!--',
    '```',
    'an earlier draft of this section',
    '-->',
    '',
    '<!-- law: strategy.md -->',
    '| Island culture, local voices | Congdon & Coleman |',
    '',
  ].join('\n');

  const citations = extractLawCitations(skill);
  assert.equal(citations.length, 1);
  assert.equal(citations[0]?.line, 6);

  const failures = findMissingExcerpts('SKILL.md', citations, read);
  assert.equal(failures.length, 1);
  assert.equal(failures[0]?.excerpt, 'Congdon & Coleman');
});

// A document showing the convention inside a quotation. Nothing rules
// blockquotes out; the `>` in front of the marker means it is not the whole
// line, which is the same rule that keeps a marker out of a sentence.
test('a marker inside a blockquote is shown, not used', () => {
  const readme = [
    '> Mark a quotation like this:',
    '>',
    '> <!-- law: strategy.md -->',
    '> | Island culture, local voices | Congdon & Coleman |',
    '',
  ].join('\n');
  assert.deepEqual(extractLawCitations(readme), []);
});

test('a marker nested in a list item still cites', () => {
  const skill = [
    '1. The ownership split:',
    '',
    '   <!-- law: strategy.md -->',
    '   | Island culture, local voices | Hello Nantucket |',
    '',
  ].join('\n');

  const citations = extractLawCitations(skill);
  assert.equal(citations.length, 1);
  assert.ok(citations[0]?.excerpts.includes('Island culture, local voices'));
  assert.deepEqual(findMissingExcerpts('SKILL.md', citations, read), []);
});

// Mid-sentence the marker names no block: what follows it is the rest of the
// sentence, not a quotation.
test('a marker inside a sentence is prose about the convention', () => {
  const readme =
    'Write the marker as <!-- law: strategy.md --> on its own line.\n' +
    '| Island culture, local voices | Congdon & Coleman |\n';
  assert.deepEqual(extractLawCitations(readme), []);
});

// The marker names the block it sits on top of. A blank line between them
// means it names nothing, which is a marker to fix rather than a licence to
// check the next paragraph that happens along.
test('a marker separated from its block by a blank line quotes nothing', () => {
  const skill = [
    '<!-- law: strategy.md -->',
    '',
    '| Island culture, local voices | Congdon & Coleman |',
    '',
  ].join('\n');
  assert.deepEqual(extractLawCitations(skill)[0]?.excerpts, []);
});

// The block is what the parser calls a block, not "lines until the next blank
// line". A list written with blank lines between its items is one block, and
// the old rule checked its first item and dropped the rest without saying so.
test('a quotation split across list items is checked whole', () => {
  const skill = [
    '<!-- law: strategy.md -->',
    '- "Hello should not publish listings, act as a booking surface, or become',
    '  the primary publisher of real-estate and rental-market intelligence."',
    '',
    '- "Island culture, local voices, and the primary publisher of everything else."',
    '',
  ].join('\n');

  const failures = findMissingExcerpts('SKILL.md', extractLawCitations(skill), read);
  assert.equal(failures.length, 1);
  assert.match(failures[0]?.excerpt ?? '', /^Island culture, local voices/);
});
