# AGENTS.md

## Cursor Cloud specific instructions

### What this repository is

This repo is a **GitHub Skills exercise: "Introduction to GitHub"** (based on
`skills/introduction-to-github`). It is **not** a runnable application. There is:

- No package manager, lockfile, or dependency manifest.
- No build system, no local dev server, and no automated test suite.
- No git hooks (`.git/hooks` has only samples).

The "product" is an interactive tutorial that runs entirely on **GitHub.com** via
**GitHub Actions**. The learner performs git actions (branch → commit → open PR →
merge) and the workflows in `.github/workflows/` post feedback on an issue.

### Repository layout

- `.github/workflows/0-4*.yml` — sequentially gated GitHub Actions workflows (Step 0–4).
  Each step disables itself and enables the next via `gh workflow enable "Step N"`.
- `.github/steps/*.md` — the Markdown instructions posted to the exercise issue.
- `.github/images/*.png` — screenshots referenced by the step instructions.
- `README.md`, `PROFILE.md` — starter content the learner edits.

### There is nothing to install

The update script is intentionally a near no-op (only verifies `git`). Do not add
dependency-install steps — there are no dependencies. `git` and the GitHub CLI
(`gh`) are preinstalled on the VM; `python3` and `node` are also available if
needed for ad-hoc tooling, but the repo does not require them.

### How to "run"/validate the product locally

You cannot execute the GitHub Actions workflows locally (they need GitHub.com,
`GITHUB_TOKEN`, and the external `skills/exercise-toolkit` reusable workflows).
The meaningful local checks are:

- **Validate workflow source**: parse every `.github/workflows/*.yml` (e.g. with
  `python3 -c "import yaml"`) and confirm each `STEP_*_FILE` reference points to an
  existing `.github/steps/*.md` file.
- No linter is configured in-repo. `actionlint`/`yamllint` are optional and not
  installed by default; only add them if you specifically need workflow linting.

### Testing the exercise end to end

End-to-end validation requires performing the exercise on GitHub: create branch
`my-first-branch`, edit `PROFILE.md`, open a PR titled "Add my first file", then
merge it — and watch the Actions runs + issue comments. Do **not** trigger the
exercise flow on the canonical repo unless that is explicitly the task; the Step 0
workflow runs on any push to `main`.
