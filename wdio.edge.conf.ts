import { config as baseConfig } from './wdio.conf.js';

export const config = {
    ...baseConfig,
    capabilities: [{
        maxInstances: 2,
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
            args: process.env.CI ? ['--headless', '--disable-gpu', '--no-sandbox'] : []
        }
    }]
};