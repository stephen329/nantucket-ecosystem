/**
 * The brand skill quotes law it does not own. `docs/strategy/` is upstream
 * (see `docs/strategy/brands/skill/README.md`), so a quote in the skill is
 * only correct while the source still says it — and the 2026-09-03 audit
 * found six places where it no longer did, silently, for about three weeks.
 *
 * A quoted passage carries a marker naming its source:
 *
 *     <!-- law: docs/strategy/nantucket-ecosystem-integrated-strategy.md -->
 *     | Topic | Owning brand |
 *     ...
 *
 * The block after the marker is checked against that file. Markdown tables are
 * checked cell by cell; anything else is checked on its quoted spans, which is
 * how the skill quotes prose. Both directions are covered by the same test:
 * editing the skill away from the source fails, and amending the source
 * without the skill fails too.
 *
 * **Structure comes from a Markdown parser, not from a fence toggle.** Finding
 * the marker used to mean tracking fences by hand — flip a boolean on any line
 * starting with ``` — and every way Markdown opens a code block that the
 * toggle did not know about was a defect:
 *
 *   - an indented code block, never recognised at all, so an example written
 *     the four-space way was read as a live citation;
 *   - a `~~~` fence, likewise, with the same result;
 *   - a ``` fence nested inside a longer ```` one — how the README documents
 *     how to document the convention — closing the outer block early and
 *     exposing its contents;
 *   - a ``` line inside an HTML comment, which opened a fence that nothing
 *     closed and so swallowed the rest of the file: every real citation below
 *     it went unchecked, in silence, which is the one failure this file exists
 *     to prevent.
 *
 * `header-coverage.ts` reached the same conclusion by a longer road — six
 * review rounds, twenty defects — and the fix there is the fix here: parse the
 * document, and let the parser say what is code, what is HTML, and where one
 * block ends and the next begins.
 *
 * Two consequences of parsing worth stating:
 *
 *   - The cited block is *the block that follows the marker*, not "lines until
 *     the next blank line". The two agree on a table and on a paragraph, and
 *     disagree on a list written with blank lines between its items, where the
 *     old rule checked the first item and quietly dropped the rest.
 *   - Nesting is not restricted, as it is for a coverage claim in
 *     `header-coverage.ts`. A marker governs only the block beside it, so a
 *     marker inside a list item is a citation like any other. A marker in a
 *     blockquote is not, but for its own reason rather than a rule about
 *     quoting: the `>` in front of it means it is no longer the whole line.
 */

import { fromMarkdown } from 'mdast-util-from-markdown';

export type LawCitation = {
  /** 1-based line of the marker, for a message that names where to look. */
  line: number;
  sourcePath: string;
  /** The excerpts that must appear in the source, verbatim after normalizing. */
  excerpts: string[];
};

export type CitationFailure = {
  file: string;
  line: number;
  sourcePath: string;
  excerpt: string;
};

const MARKER = /^<!--\s*law:\s*(\S+?)\s*-->$/;

/**
 * Typographic drift is not legal drift: a curly apostrophe pasted from one
 * editor and a straight one from another are the same law. Everything else —
 * wording, order, emphasis — is left alone so a real edit still fails.
 */
export function normalizeLawText(text: string): string {
  return text
    .replace(/[‘’‛]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function tableCells(line: string): string[] {
  return line
    .split('|')
    .map((cell) => cell.trim())
    .filter((cell) => cell.length > 0 && !/^-{2,}$/.test(cell));
}

/**
 * Quoted spans long enough to be a claim rather than a word. Quotes alternate
 * open/close, so the text *between* two quotations is not itself a quotation —
 * splitting and taking the odd segments gets that right where a regex over a
 * character class does not.
 */
function quotedSpans(text: string): string[] {
  return text
    .split(/["“”]/)
    .filter((_, index) => index % 2 === 1)
    .map((span) => span.trim())
    .filter((span) => span.length >= 40);
}

type Node = {
  type: string;
  value?: string;
  children?: Node[];
  position?: { start: { line: number }; end: { line: number } };
};

/**
 * The source path a node marks, or null if it marks nothing.
 *
 * The marker must be the whole source line, which is what the line-based
 * version asserted and is still the right rule: `see <!-- law: x --> above` is
 * prose about the convention, and mid-sentence it names no block to check.
 * Comparing against the line also settles the multi-line case, where `<!--`,
 * `law: x` and `-->` on three lines are one node whose value is not any line.
 */
function markedSourcePath(node: Node, lines: string[]): string | null {
  if (node.type !== 'html' || !node.position) return null;
  const line = lines[node.position.start.line - 1];
  const value = (node.value ?? '').trim();
  if (line === undefined || line.trim() !== value) return null;
  return MARKER.exec(value)?.[1] ?? null;
}

/**
 * The quoted excerpts a cited block carries.
 *
 * Read from the block's source lines rather than from its text, because the
 * pipes of a table are what tells a table from a paragraph — without a GFM
 * extension the parser sees one paragraph either way, and cell-by-cell
 * checking is the point of quoting a table at all.
 */
function excerptsIn(body: Node, lines: string[]): string[] {
  if (!body.position) return [];
  const block = lines.slice(body.position.start.line - 1, body.position.end.line);

  // Tables are checked cell by cell. Everything else is read as one string
  // before extracting quotations, because a quoted passage wraps across
  // lines and a line-by-line pass would never see the half that changed.
  const excerpts: string[] = [];
  const prose: string[] = [];
  for (const line of block) {
    const trimmed = line.trimStart();
    if (trimmed.startsWith('|')) {
      excerpts.push(...tableCells(line));
    } else if (trimmed.startsWith('> ')) {
      excerpts.push(trimmed.slice(2));
    } else {
      prose.push(line);
    }
  }
  excerpts.push(...quotedSpans(prose.join(' ')));
  return excerpts;
}

export function extractLawCitations(markdown: string): LawCitation[] {
  const lines = markdown.split('\n');
  const citations: LawCitation[] = [];

  const visit = (node: Node): void => {
    const children = node.children ?? [];
    for (let index = 0; index < children.length; index += 1) {
      const child = children[index]!;
      const sourcePath = markedSourcePath(child, lines);
      if (sourcePath === null) {
        visit(child);
        continue;
      }

      // The block must sit immediately below the marker. Adjacency is measured
      // in lines rather than in tree order because a blank line leaves no node,
      // so a marker and an unrelated later paragraph are siblings in the tree
      // and a screen apart in the document.
      const body = children[index + 1];
      const adjacent = body?.position?.start.line === child.position!.end.line + 1;
      citations.push({
        line: child.position!.start.line,
        sourcePath,
        excerpts: adjacent ? excerptsIn(body!, lines) : [],
      });
    }
  };
  visit(fromMarkdown(markdown) as unknown as Node);

  return citations;
}

export function findMissingExcerpts(
  file: string,
  citations: LawCitation[],
  readSource: (path: string) => string | null,
): CitationFailure[] {
  const failures: CitationFailure[] = [];

  for (const citation of citations) {
    const source = readSource(citation.sourcePath);
    if (source === null) {
      failures.push({
        file,
        line: citation.line,
        sourcePath: citation.sourcePath,
        excerpt: '(source file not found)',
      });
      continue;
    }
    const haystack = normalizeLawText(source);
    for (const excerpt of citation.excerpts) {
      if (!haystack.includes(normalizeLawText(excerpt))) {
        failures.push({
          file,
          line: citation.line,
          sourcePath: citation.sourcePath,
          excerpt,
        });
      }
    }
  }

  return failures;
}
