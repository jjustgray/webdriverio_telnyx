import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',
    specs: ['./test/specs/**/*.ts'],
    maxInstances: 5,
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://telnyx.com',
    waitforTimeout: 7000,
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