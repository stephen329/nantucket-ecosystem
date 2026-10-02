# The `nantucket-brands` skill — source of record

**This directory is upstream.** The copy in the Claude account is a published
artifact, the way a build output is: edit here, then publish. Decided
2026-09-03, closing `[DECIDE]` C1 in
[../nantucket-brands-skill-reconciliation.md](../nantucket-brands-skill-reconciliation.md).

## Why this way round

Ratification already happens in this repository. Register item 5, addendum
A-4 and every amendment landed as merges, and the strategy they amend lives in
`docs/strategy/`. An artefact nobody can open in review cannot be the source of
law: on 2026-09-03 a scoping document cited the account copy, three of its four
review findings traced to that copy saying something the strategy does not, and
the reviewer could not check the citation because the file was not in the repo.

Before this, both artefacts claimed to generate the other. The skill said
per-repo context blocks "are generated from these files"; `CLAUDE.md` said its
brand block is regenerated from `docs/strategy/brands/`. Neither was true —
there was no generator, and no check. Two hand-maintained copies drifted for
about three weeks without anything noticing.

## Publishing to the account

The skill ships as an **account plugin** — `nantucket-brands`,
`plugin_01PvDFHp2aRmA1NAEVYunLet` — added by **direct upload** of this directory,
with no marketplace entry and no `version` field (Stephen, 2026-09-04). To
publish a change:

1. Merge the change to `main` here.
2. claude.ai → **Organization settings → Plugins**
   ([claude.ai/admin-settings/plugins](https://claude.ai/admin-settings/plugins)).
3. **Package this directory as a `.zip`.** The upload takes an archive, not a
   folder. Zip the **contents** of `docs/strategy/brands/skill/`, not the folder
   itself, so `SKILL.md` and `references/` sit at the archive root:

   ```bash
   rm -f /tmp/nantucket-brands.zip
   (cd docs/strategy/brands/skill && zip -qr /tmp/nantucket-brands.zip . -x 'README.md')
   unzip -Z1 /tmp/nantucket-brands.zip   # confirm SKILL.md is at the root
   ```

   **The `rm -f` is load-bearing, not tidiness.** `zip` updates an existing
   archive in place: it adds and replaces members but never removes them. Run
   against a previous archive, it keeps files you have since deleted from
   `skill/` and files you have since started excluding — republishing exactly the
   stale content this procedure exists to prevent. Verified 2026-09-04 by
   rebuilding an archive after deleting a member and adding an exclusion: both
   survived, and only deleting the archive first produced a correct one.

   The output goes to `/tmp` rather than the repository root because `*.zip` is
   not in `.gitignore`, so a repo-root archive is an untracked artifact sitting
   where someone can commit it.

   `README.md` is excluded deliberately — see the note below on what the
   published plugin actually contains.
4. **Add plugins → Upload a file**, and upload that archive as
   `nantucket-brands`. A size limit applies; the archive here is a few tens of
   kilobytes, so it is not a practical constraint.
5. Note the date in the PR that made the change, so a later reader can tell
   whether the account copy is behind.
6. Confirm in a **fresh session**. The synced copy is downloaded when a
   container starts, so an open session keeps reading the copy it began with and
   cannot verify its own re-sync.

### The published plugin is not a byte copy of this directory

Compared 2026-09-04 against the copy a session loads. Two differences, neither
accidental-looking:

- **`README.md` is not in the published plugin.** This file is instructions for
  maintainers, not skill content, and it does not belong in what a session loads.
  Keep excluding it.
- **The published plugin contains a `CHANGES.md` that does not exist here.**
  Where it came from is unrecorded. Anyone repackaging should decide whether to
  carry it forward rather than dropping it silently by zipping this directory as
  it stands — `[AUDIT]` what `CHANGES.md` is and whether it should live here.

So "re-upload this directory" is shorthand. The archive and the directory have
never been the same file set.

### The upload is a snapshot, not a link

**Nothing connects the published plugin to this directory after the upload.** A
direct upload with no version field and no git source has no ref to follow: not a
branch, not a commit, not a version string. Merging here therefore publishes
nothing on its own, and every session keeps loading the last uploaded snapshot
until a person uploads again.

That is the same condition the 2026-09-03 audit was opened about — two copies of
the same law with no sync between them — surviving in a new form. The copies are
now one upload apart rather than one hand-edit apart, which is narrower but not
different in kind. It is also the mechanism behind the observed drift: the
account copy sat at its 2026-09-03 23:20 upload while the 2026-09-04 amendments
merged here, because merging was never going to move it.

`yarn check:brand-skill` cannot see this. It compares the skill in this directory
against the strategy it quotes; nothing compares either against what the account
actually serves.

### The standing option

`[DECIDE]` in [`../nantucket-brands-skill-reconciliation.md`](../nantucket-brands-skill-reconciliation.md)
asks whether the binding should be declared in this repository. The concrete form
that would take: replace the direct upload with a marketplace entry pointing at a
git source, so the binding lives in a file review can see rather than in
configuration read once.

**It would not, on its own, make publishing automatic**, and an earlier draft of
this section wrongly said it would. Organization sync has its own trigger, which
is a layer above how a plugin's version resolves: for a GitHub-synced
organization marketplace, sync runs when *Sync automatically* is enabled and a
merged pull request bumps a plugin version — otherwise an owner still clicks
Update. The exact conditions are `[AUDIT]`: they are documented in
[Manage plugins for your organization](https://support.claude.com/en/articles/13837433-manage-plugins-for-your-organization),
which is not reachable from the environment these notes were written in, so the
trigger is recorded as reported and not as verified.

What that means for the choice: a git source is worth wanting for reviewability,
and *may* reduce the manual step to a version bump, but it does not by itself end
the drift class. Anyone proposing it should read the sync conditions first rather
than inheriting the claim from here. Stephen's call — an option, not a plan.

The account copy is not authoritative at any point. If the two disagree, this
directory is right and the account copy is stale.

## Quoting law: the marker convention

Most of the 2026-09-03 findings were paraphrase. The skill restated law in its
own words, the words drifted, and nothing could tell. So law that belongs to
the strategy is **quoted, not restated**, and the quotation carries a marker
naming its source:

```markdown
<!-- law: nantucket-ecosystem-integrated-strategy.md -->
| Topic | Owning brand |
|---|---|
| Island culture, local voices, history, … | Hello Nantucket |
```

The marker must be alone on its line, and it cites **the block directly below
it** — the block as Markdown defines one, which the checker gets from a parser
rather than by counting blank lines. For a table or a paragraph that is the
same thing. For a list it is not: a marker above a list cites the whole list,
including items separated by blank lines, so do not put an unrelated quotation
in a later item of a list whose first item is quoted law. A blank line between
the marker and the block means the marker cites nothing, which is a marker to
fix.

Tables are checked cell by cell; anything else is checked on its quoted spans,
which is how prose is quoted here. `yarn check:brand-skill` asserts every
marked excerpt still appears in the file it cites, and CI runs it on any change
under `docs/strategy/`.

That covers both directions with one check: editing the skill away from the
source fails, and amending the source without updating the skill fails too. It
caught a real error the first time it ran — four rows of §3's content-ownership
table had been transcribed with the Oxford "and" dropped.

What it does **not** do is notice law that was paraphrased without a marker.
Nothing mechanical can. That is what review is for, and why the convention is
to quote rather than summarise anything load-bearing.

## What belongs here, and what does not

Keep in the skill:

- the decision procedure, the routing summary, and the red-team battery
- voice, worked examples, and the prohibition lists — the model-facing craft
  that exists nowhere else
- quotations of law, marked

Do not put here:

- new law. A rule that is not in the strategy or a ratified record in
  `docs/strategy/brands/` does not become true by being written in the skill —
  that is how "required disclosure placements" and "Hello may never publish
  market intelligence" came to exist.
- unratified strings. `[STRATEGY §n]` and `[DECIDE]` markers stay unfilled
  until a human fills them, per `CLAUDE.md`.

## Running the check

```bash
yarn check:brand-skill   # citations still match their source
yarn test:brands         # the checker's own unit tests
```
