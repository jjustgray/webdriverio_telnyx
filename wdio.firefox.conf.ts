import { config as baseConfig } from './wdio.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless']
        }
    }]
};