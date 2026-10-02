# tools

Checks that guard the records in this repository. They were moved here from `stephen329/odin` (2026-10-02, designation amendment) so a change to the strategy is checked where it merges.

| Command | What it does |
|---|---|
| `yarn test:brands` | Unit tests for the two checkers (76 tests) |
| `yarn check:brand-skill` | Fails when the `nantucket-brands` skill quotes law the strategy no longer carries. Reads the `<!-- law: ... -->` markers under `brands/skill/` |
| `yarn check:brand-headers` | Fails when a `<!-- covers-through -->` section heading claims a date that a later item in the section exceeds |
| `yarn check` | All three |

Node 24 (see `.nvmrc`). CI runs these on every pull request and push to `main` (`.github/workflows/guards.yml`).

## Provenance

Copied from `stephen329/odin` @ `c76ccb2568e75434067a918ca74e988ed7353b99`:

| Here | In Odin |
|---|---|
| `tools/check-skill-citations.ts` | `scripts/brands/check-skill-citations.ts` |
| `tools/check-header-coverage.ts` | `scripts/brands/check-header-coverage.ts` |
| `tools/lib/skill-citations.ts` and `.test.ts` | `src/lib/brands/skill-citations.ts` and `.test.ts` |
| `tools/lib/header-coverage.ts` and `.test.ts` | `src/lib/brands/header-coverage.ts` and `.test.ts` |

The library and test files are unchanged. The two scripts changed only here:

- Import paths now point at `./lib/...`.
- `check-skill-citations.ts`: `SKILL_DIR` is `brands/skill`, and the failure message names this repository as upstream.
- `check-header-coverage.ts`: it scans the whole repository (`.`) and skips `.git` and `node_modules`, because the records no longer sit under `docs/strategy`.

The eight `<!-- law: ... -->` markers under `brands/skill/` changed from `docs/strategy/nantucket-ecosystem-integrated-strategy.md` to `nantucket-ecosystem-integrated-strategy.md`, so they resolve from this repository's root. This edits the skill's source, so the account copy of the skill is republished after the cutover.

## Not moved

`check:line-citations` and the blog-brand tests check Odin's documents and code against these records. They stay in Odin and read the pinned checkout.
