# Telnyx WebdriverIO Tests

A TypeScript WebdriverIO starter project for end-to-end testing of [Telnyx](https://telnyx.com/).

## Prerequisites

- Node.js 22 or newer
- Installed browsers: Google Chrome, Mozilla Firefox, or Microsoft Edge (depending on target execution)
- Docker (optional, for isolated container runs or CI/CD execution)

## Setup

```bash
npm install
```

## Running Tests
Standard Execution (Chrome by default)
```bash
npm test
```
### Browser-Specific Runs
Run tests on specific browsers using dedicated configs:
```bash
# Chrome
npm run test:chrome

# Firefox
npm run test:firefox

# Microsoft Edge
npm run test:edge

# Run a single spec file (defaults to Chrome config)
npm run test:single -- --spec="./test/specs/example.e2e.ts"

# Run tests across all browsers sequentially
npm run test:all
```

## Environment Overrides
Override the target URL for another environment:
```bash
BASE_URL=[https://telnyx.com](https://telnyx.com) npm test
```
On Windows PowerShell:
```PowerShell
$env:BASE_URL = '[https://telnyx.com](https://telnyx.com)'; npm test
```

## Reporting (Allure)
Test results are recorded in allure-results. To generate and view the HTML report:
```Bash
# Generate report and open in browser
npm run report

# Run all tests and generate report automatically
npm run test:all:report
```

To clean up previous results, run:
```Bash
npm run clean
```

## Docker & CI/CD Integration
This project is ready for continuous integration (CI/CD) pipelines and Docker execution.

### Docker Execution
Build and run tests inside a containerized environment:
```Bash
# Build the Docker image
docker build -t telnyx-wdio-tests .

# Run tests inside container
docker run --rm telnyx-wdio-tests
```

## Project Layout
* wdio.chrome.conf.ts - WebdriverIO configuration for Google Chrome

* wdio.firefox.conf.ts - WebdriverIO configuration for Mozilla Firefox

* wdio.edge.conf.ts - WebdriverIO configuration for Microsoft Edge

* test/pages - Page Objects pattern implementation

* test/specs - Mocha test suites

* allure-results / allure-report - Generated test reports