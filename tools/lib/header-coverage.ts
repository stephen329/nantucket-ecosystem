/**
 * A section heading that claims coverage through a date is an assertion about
 * everything below it, and a later addition can falsify it silently.
 *
 * That happened on 2026-09-05: a string ratified that day was added to
 * `congdon-coleman-ratified-strings.md` under a heading reading "reconciled
 * 2026-08-18". The provenance header was then false about its own contents, and
 * the new entry read as though it had existed in the August reconciliation.
 * Nothing failed, because nothing was checking. It was found in review, on the
 * third pass, after the same class of error had already been found twice that
 * day in other files.
 *
 * The shape is always the same: a general claim, true when written, narrowed by
 * an addition nobody thought to check it against. `skill-citations.ts` catches
 * one instance of that shape — a quotation drifting from its source. This
 * catches another.
 *
 * A heading opts in with a marker on the line above it:
 *
 *     <!-- covers-through -->
 *     ## Strings ratified after this record was cut — reconciled through 2026-09-05
 *
 * The date is read *from the heading*, never from the marker. Putting it in both
 * would create a second copy to drift, which is the problem this file exists to
 * catch.
 *
 * Opt-in is deliberate. Most dated headings carry the date of their own
 * decision — "Entity form removed from transactional surfaces (Stephen,
 * 2026-09-04)" — and a later item elsewhere does not falsify those. Only a
 * heading making a claim *about its section* wants this check, and only a human
 * can say which is which.
 *
 * **Markdown is parsed, not pattern-matched, and that was learned the hard
 * way.** Six review rounds found twenty defects in a regex model of Markdown,
 * and by the last round every finding was ordinary block structure the patterns
 * did not represent:
 *
 *   - a marked Setext heading (`text` underlined by `---`) read as prose, so the
 *     marker was cleared and no claim installed — the guard silently off on a
 *     section that visibly opted in;
 *   - a fenced example inside a blockquote never recognised as a fence, so its
 *     dates were scanned as record content;
 *   - `<!-- note --> ## example`, which Markdown reads as one HTML block, split
 *     into a comment and a heading that closed the live claim;
 *   - content sharing a line with a comment delimiter, discarded in both
 *     directions;
 *   - a fence opened inside an HTML comment swallowing the rest of the file.
 *
 * Each fix was correct and each exposed the next, because the seams between
 * constructs added one at a time are where a hand-written model fails. The
 * parser knows all of it: headings of both forms, fenced and indented code,
 * HTML blocks and inline HTML, container prefixes. What is left here is only
 * the part that is actually about coverage.
 *
 * **Known limitation, stated rather than hidden.** Every ISO date in the section
 * is read as something the claim must cover, including a date that is only
 * *referred to* — "superseded on 2026-09-12, see below" under a heading claiming
 * through 2026-09-05 will fail even though nothing was ratified that day. The
 * check errs toward a false alarm rather than a silent miss, which is the right
 * direction for a claim nobody was verifying at all; the escape is to advance the
 * heading, reword the reference, or put it in a comment. If forward references
 * become common enough to be annoying, the fix is an inline opt-out marker, not
 * loosening the rule.
 */

import { fromMarkdown } from 'mdast-util-from-markdown';

export type CoverageClaim = {
  file: string;
  /** 1-based line of the heading. */
  line: number;
  heading: string;
  claimed: string;
};

export type CoverageFailure = {
  file: string;
  /** 1-based line of the heading whose claim is broken. */
  headingLine: number;
  heading: string;
  /** The date the heading claims coverage through, or null when unreadable. */
  claimed: string | null;
  /** 1-based line carrying the offending date. */
  offendingLine: number;
  offendingDate: string;
  reason:
    | 'later-date'
    | 'no-date-in-heading'
    | 'ambiguous-heading-date'
    | 'invalid-heading-date'
    | 'invalid-date-in-section';
};

const MARKER = /^<!--\s*covers-through\s*-->$/;

/**
 * ISO dates only. A looser pattern would have to guess at "Sept 5" or "5/9/26"
 * and would fire on version numbers and licence numbers; these records are
 * written in ISO throughout, so the narrow pattern costs nothing real.
 *
 * Bounded on digits rather than `\b`, because `_` is a word character: with
 * word boundaries, `_2026-09-05_` — ordinary Markdown emphasis — matched
 * nothing, and a later date wearing italics passed an older claim in silence.
 */
const ISO_DATE = /(?<!\d)(\d{4}-\d{2}-\d{2})(?!\d)/g;

/**
 * Shape is not existence, and the difference disables the check rather than
 * weakening it. `2026-99-99` matches the pattern and, as a heading claim, sorts
 * above every real date — so the section would pass no matter what was added to
 * it. A typo would silently turn the guard off, which is worse than not having
 * one, because the passing check reads as assurance.
 */
export function isRealDate(text: string): boolean {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text);
  if (!m) return false;
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const utc = new Date(Date.UTC(y, mo - 1, d));
  return utc.getUTCFullYear() === y && utc.getUTCMonth() === mo - 1 && utc.getUTCDate() === d;
}

function datesIn(text: string): string[] {
  return [...text.matchAll(ISO_DATE)].map((m) => m[1] as string);
}

type Node = {
  type: string;
  value?: string;
  depth?: number;
  children?: Node[];
  position?: { start: { line: number; offset?: number }; end: { line: number; offset?: number } };
};

/**
 * Code and HTML are not record content; nothing inside them is either.
 *
 * `inlineCode` belongs here as much as a fenced block does — a filename like
 * `snapshot-2026-09-05.json` in backticks is an identifier, not a ratification
 * date — and leaving it out made the implementation disagree with the rule
 * stated directly above it.
 */
const NOT_CONTENT = new Set(['code', 'inlineCode', 'html', 'yaml']);

/**
 * The heading's visible words. HTML children are dropped, so a trailing
 * `<!-- cut 2026-09-30 -->` on a heading is not read as a second claim date.
 */
function visibleText(node: Node): string {
  if (NOT_CONTENT.has(node.type)) return '';
  if (typeof node.value === 'string') return node.value;
  return (node.children ?? []).map(visibleText).join('');
}

/** Replace each range with spaces, keeping newlines so line numbers survive. */
function blankRanges(text: string, ranges: Array<[number, number]>): string {
  if (ranges.length === 0) return text;
  const ordered = [...ranges].sort((a, b) => a[0] - b[0]);
  let out = '';
  let cursor = 0;
  for (const [start, end] of ordered) {
    if (end <= cursor) continue;
    const from = Math.max(start, cursor);
    out += text.slice(cursor, from);
    out += text.slice(from, end).replace(/[^\n]/g, ' ');
    cursor = end;
  }
  return out + text.slice(cursor);
}

export function analyzeCoverage(
  file: string,
  markdown: string,
): { claims: CoverageClaim[]; failures: CoverageFailure[] } {
  const tree = fromMarkdown(markdown) as unknown as Node;
  const lines = markdown.split('\n');
  const failures: CoverageFailure[] = [];
  const claims: CoverageClaim[] = [];

  const excluded: Array<[number, number]> = [];
  const headings: Array<{ line: number; endLine: number; depth: number; text: string }> = [];
  /** End lines of `<!-- covers-through -->` nodes, for the adjacency rule. */
  const markerLines = new Set<number>();

  const visit = (node: Node, atRoot: boolean): void => {
    if (NOT_CONTENT.has(node.type)) {
      const { start, end } = node.position ?? {};
      if (start?.offset !== undefined && end?.offset !== undefined) excluded.push([start.offset, end.offset]);
      // One source line, not just one node. `\s` spans newlines, so a comment
      // written as `<!--` / `covers-through` / `-->` matched the marker and
      // opted in the heading below it — a claim the author never made.
      // Root-level too, for the same reason headings are: `> <!-- covers-through
      // -->` is a marker the document is *showing*, and letting it opt a real
      // heading into coverage produces failures against a claim nobody made. I
      // scoped headings to the root and left this reading every marker — the
      // inconsistency introduced by the fix that added the rule.
      if (
        node.type === 'html' &&
        atRoot &&
        start &&
        end &&
        start.line === end.line &&
        MARKER.test((node.value ?? '').trim())
      ) {
        markerLines.add(end.line);
      }
      return;
    }
    // Only a heading at the top level of the document delimits a section. One
    // inside a blockquote or a list is quoted or illustrative — `> ## Heading
    // from an older document` closed the live claim and let every date after it
    // escape, which is the document's own structure being overridden by
    // something it is merely showing.
    if (node.type === 'heading' && node.position && atRoot) {
      headings.push({
        line: node.position.start.line,
        endLine: node.position.end.line,
        depth: node.depth ?? 1,
        text: visibleText(node),
      });
    }
    for (const child of node.children ?? []) visit(child, atRoot && node.type === 'root');
  };
  visit(tree, true);

  const content = blankRanges(markdown, excluded).split('\n');
  const headingAt = new Map<number, (typeof headings)[number]>();
  for (const heading of headings) headingAt.set(heading.line, heading);

  /**
   * Every claim currently covering this line, outermost first.
   *
   * A stack rather than one claim, because claims nest: a marked subsection
   * inside a marked section does not replace it. Holding only the innermost
   * meant that when a sibling subsection closed the nested claim, the parent
   * was gone too and the rest of its section stopped being scanned.
   */
  const open: Array<{ line: number; text: string; depth: number; claimed: string }> = [];

  const closeOn = (depth: number) => {
    while (open.length > 0 && depth <= open[open.length - 1]!.depth) open.pop();
  };

  /**
   * Every date on one line, judged against *every* claim covering it.
   *
   * A heading's claim is an assertion about everything below it, so an item in
   * a subsection sits under the subsection's claim and the parent's alike, and
   * a date can break one without breaking the other. Each broken claim is its
   * own falsehood in its own heading, so each is reported.
   */
  const scan = (text: string, lineNumber: number) => {
    if (open.length === 0) return;
    for (const date of datesIn(text)) {
      if (!isRealDate(date)) {
        // Reported once, against the innermost claim: the date is unusable, and
        // saying so once per enclosing heading would be the same fact repeated.
        const innermost = open[open.length - 1]!;
        failures.push({
          file,
          headingLine: innermost.line,
          heading: innermost.text,
          claimed: innermost.claimed,
          offendingLine: lineNumber,
          offendingDate: date,
          reason: 'invalid-date-in-section',
        });
        continue;
      }
      for (const claim of open) {
        // String compare is correct for zero-padded ISO dates and avoids pulling
        // timezone behaviour into a text check.
        if (date > claim.claimed) {
          failures.push({
            file,
            headingLine: claim.line,
            heading: claim.text,
            claimed: claim.claimed,
            offendingLine: lineNumber,
            offendingDate: date,
            reason: 'later-date',
          });
        }
      }
    }
  };

  for (let index = 0; index < lines.length; index += 1) {
    const lineNumber = index + 1;
    const heading = headingAt.get(lineNumber);

    if (!heading) {
      scan(content[index] ?? '', lineNumber);
      continue;
    }

    closeOn(heading.depth);

    // A deeper heading sits *inside* the open claim, so its own text is covered
    // by it. Skipping straight to the marker check let "### Decision
    // (2026-09-05)" pass under a heading claiming 2026-08-18.
    //
    // Scanned line by line rather than as one joined string: a Setext heading
    // can span several lines of text, and attributing every date in it to the
    // heading's first line made `offendingLine` point at a line that does not
    // carry the date — the field's own contract, broken in the output a reader
    // navigates by.
    for (let l = heading.line; l <= heading.endLine; l += 1) {
      scan(content[l - 1] ?? '', l);
    }

    // A Setext heading spans its underline; step over it.
    index += heading.endLine - heading.line;

    // The marker must sit on the line immediately above. Adjacency is measured
    // in lines rather than in tree order because blank lines leave no node, so
    // siblings can be paragraphs apart in the source and adjacent in the tree.
    if (!markerLines.has(lineNumber - 1)) continue;

    const found = datesIn(heading.text);
    if (found.length === 0) {
      failures.push({
        file,
        headingLine: lineNumber,
        heading: heading.text,
        claimed: null,
        offendingLine: lineNumber,
        offendingDate: '(none)',
        reason: 'no-date-in-heading',
      });
      continue;
    }
    if (found.length > 1) {
      failures.push({
        file,
        headingLine: lineNumber,
        heading: heading.text,
        claimed: null,
        offendingLine: lineNumber,
        offendingDate: found.join(', '),
        reason: 'ambiguous-heading-date',
      });
      continue;
    }

    const claimed = found[0]!;
    if (!isRealDate(claimed)) {
      failures.push({
        file,
        headingLine: lineNumber,
        heading: heading.text,
        claimed: null,
        offendingLine: lineNumber,
        offendingDate: claimed,
        reason: 'invalid-heading-date',
      });
      continue;
    }

    open.push({ line: lineNumber, text: heading.text, depth: heading.depth, claimed });
    claims.push({ file, line: lineNumber, heading: heading.text, claimed });
  }

  return { claims, failures };
}

/**
 * The failures alone, for callers that do not report a claim count.
 *
 * Both halves come from the one parse. A separate regex over the markers was
 * how the success message came to report claims the parser had never accepted —
 * a second definition of "a claim", disagreeing with the first.
 */
export function findCoverageFailures(file: string, markdown: string): CoverageFailure[] {
  return analyzeCoverage(file, markdown).failures;
}

export function describeFailure(f: CoverageFailure): string {
  switch (f.reason) {
    case 'no-date-in-heading':
      return `${f.file}:${f.headingLine} — marked covers-through but the heading carries no ISO date: "${f.heading}"`;
    case 'ambiguous-heading-date':
      return `${f.file}:${f.headingLine} — marked covers-through but the heading carries several dates (${f.offendingDate}); the claim must be one date: "${f.heading}"`;
    case 'invalid-heading-date':
      return (
        `${f.file}:${f.headingLine} — the coverage claim "${f.offendingDate}" is not a real date, ` +
        `so it would sort above every genuine one and disable the check: "${f.heading}"`
      );
    case 'invalid-date-in-section':
      return (
        `${f.file}:${f.offendingLine} — "${f.offendingDate}" is ISO-shaped but not a real date, ` +
        `so it cannot be judged against the claim through ${f.claimed} (line ${f.headingLine}).`
      );
    case 'later-date':
      return (
        `${f.file}:${f.offendingLine} — ${f.offendingDate} sits under a heading claiming coverage ` +
        `through ${f.claimed} (line ${f.headingLine}: "${f.heading}").\n` +
        `    Advance the heading's date, or move the item to a section whose claim covers it.`
      );
  }
}
