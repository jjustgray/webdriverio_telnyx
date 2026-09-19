import { config as baseConfig } from './wdio.conf.js';

export const config = {
    ...baseConfig,
    capabilities: [{
        maxInstances: 2,
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: process.env.CI ? ['-headless'] : []
        }
    }]
};