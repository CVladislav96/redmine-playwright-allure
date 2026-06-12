# Redmine Playwright Allure

[![Playwright Tests](https://github.com/CVladislav96/redmine-playwright-allure/actions/workflows/playwright.yml/badge.svg)](https://github.com/CVladislav96/redmine-playwright-allure/actions)

Automated test project for `https://www.redmine.org` using Playwright and Allure.

## Project overview

- `@playwright/test` for running tests
- `allure-playwright` for generating Allure reports
- Test files are located in `tests/`
- Playwright configuration is stored in `playwright.config.js`

## Installation

```powershell
npm install
```

## Run tests

Run all tests:

```powershell
npm test
```

Run only smoke tests:

```powershell
npm run test:smoke
```

Open Playwright UI mode:

```powershell
npm run test:ui
```

## Allure report

### Requirements

You need the `allure` CLI installed on your machine. On Windows, install it with Scoop or another package manager:

```powershell
scoop install allure
```

### Generate report

```powershell
npm run allure:generate
```

### Open report

```powershell
npm run allure:open
```

### Note

The `allure:generate` script uses `--clean`, so it clears the `allure-report` folder before generating.

## Ignored files

The following are excluded in `.gitignore`:

- `node_modules/`
- `allure-results/`
- `allure-report/`
- `playwright-report/`
- `test-results/`
- `*.log`
- `.env`
- `.vscode/`
- `.idea/`

## Project structure

- `package.json` — dependencies and npm scripts
- `playwright.config.js` — Playwright configuration
- `tests/` — test files and page objects
- `allure-results/` — Allure results (generated automatically)
- `allure-report/` — generated Allure report
- `playwright-report/` — Playwright HTML report
- `test-results/` — additional test results

## Tips

- Delete `allure-results/` and `allure-report/` before running tests for a clean report
- Run `npm run allure:generate` right after tests complete
- For local debugging, you can temporarily set `headless: false` in `playwright.config.js`
