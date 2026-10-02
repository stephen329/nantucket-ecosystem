/**
 * Fails when the brand skill quotes law the strategy no longer carries.
 *   yarn check:brand-skill
 * Convention and rationale: brands/skill/README.md
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

import {
  extractLawCitations,
  findMissingExcerpts,
  type CitationFailure,
} from './lib/skill-citations';

const SKILL_DIR = 'brands/skill';

function markdownFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) return markdownFiles(path);
    return path.endsWith('.md') ? [path] : [];
  });
}

function main(): void {
  const files = markdownFiles(SKILL_DIR);
  const failures: CitationFailure[] = [];
  let citationCount = 0;

  for (const file of files) {
    const citations = extractLawCitations(readFileSync(file, 'utf8'));
    citationCount += citations.length;
    failures.push(
      ...findMissingExcerpts(
        relative(process.cwd(), file),
        citations,
        (path) => {
          try {
            return readFileSync(path, 'utf8');
          } catch {
            return null;
          }
        },
      ),
    );
  }

  if (failures.length > 0) {
    console.error(
      `The brand skill quotes ${failures.length} passage(s) its source no longer carries.\n` +
        'Either the skill drifted from the strategy, or the strategy was amended and the\n' +
        'skill was not updated with it. The strategy in this repository is upstream; fix the skill.\n',
    );
    for (const f of failures) {
      console.error(`  ${f.file}:${f.line} — cites ${f.sourcePath}`);
      console.error(`    missing: ${f.excerpt.slice(0, 120)}`);
    }
    process.exit(1);
  }

  console.log(
    `Brand skill: ${citationCount} quoted passage(s) across ${files.length} file(s) still match their source.`,
  );
}

main();
