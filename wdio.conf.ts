import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',
    maxInstances: process.env.CI ? 1 : 2,
    specs: ['./test/specs/**/*.ts'],
    logLevel: 'error',
    bail: 0,
    baseUrl: process.env.BASE_URL || 'https://telnyx.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};