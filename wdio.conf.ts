import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--window-size=1920,1080']
    }
  }],
  logLevel: 'info',
  baseUrl: process.env.BASE_URL ?? 'https://telnyx.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,
  framework: 'mocha',
  reporters: ['spec'],
  services: [],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json'
    }
  }
};