/**
 * Fails when a section heading claims coverage through a date that an item
 * below it is later than.
 *   yarn check:brand-headers
 * Convention and rationale: tools/lib/header-coverage.ts
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

import { analyzeCoverage, describeFailure, type CoverageFailure } from './lib/header-coverage';

const ROOTS = ['.'];
const SKIP = new Set(['.git', 'node_modules']);

function markdownFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    if (SKIP.has(entry)) return [];
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) return markdownFiles(path);
    return path.endsWith('.md') ? [path] : [];
  });
}

function main(): void {
  const files = ROOTS.flatMap(markdownFiles);
  const failures: CoverageFailure[] = [];
  let claims = 0;

  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    // Counted by the parser, not by a second regex over the markers. A marker
    // inside a fenced example, or one no heading follows, is not a claim — and
    // counting it here would have this line assure the reader about sections
    // that were never checked.
    const result = analyzeCoverage(relative(process.cwd(), file), text);
    claims += result.claims.length;
    failures.push(...result.failures);
  }

  if (failures.length > 0) {
    // One entry per offending date, not per heading — five late items under one
    // claim is five findings and one broken claim. Reporting the finding count
    // as a claim count overstates how much is wrong, and the first person to
    // see it would be reading a number that does not mean what it says.
    const brokenClaims = new Set(failures.map((f) => `${f.file}:${f.headingLine}`)).size;
    console.error(
      `${failures.length} finding(s) across ${brokenClaims} dated section heading(s).\n` +
        'A heading marked covers-through asserts a date over its whole section; an item\n' +
        'added later silently falsifies it. Advance the heading, or move the item.\n',
    );
    for (const f of failures) console.error(`  ${describeFailure(f)}`);
    process.exit(1);
  }

  console.log(
    `Brand records: ${claims} dated section claim(s) across ${files.length} file(s) still cover their contents.`,
  );
}

main();
