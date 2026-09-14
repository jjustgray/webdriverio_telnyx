# Telnyx WebdriverIO Tests

A TypeScript WebdriverIO starter project for end-to-end testing of [Telnyx](https://telnyx.com/).

## Prerequisites

- Node.js 22 or newer
- Google Chrome

## Setup

```bash
npm install
```

## Run tests

```bash
npm test
```

Run with the browser visible:

```bash
npm run test:headed
```

Override the target URL for another environment:

```bash
BASE_URL=https://telnyx.com npm test
```

On Windows PowerShell:

```powershell
$env:BASE_URL = 'https://telnyx.com'; npm test
```

## Project layout

- `wdio.conf.ts` - WebdriverIO runner and Chrome configuration
- `test/pages` - Page objects
- `test/specs` - Mocha test suites
