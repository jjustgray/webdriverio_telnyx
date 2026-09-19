import { config as baseConfig } from './wdio.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless'],
            binary: process.env.CI ? '/ms-playwright/firefox-1454/firefox/firefox' : undefined
        },
        'wdio:enforceWebDriverClassic': true
    }]
};