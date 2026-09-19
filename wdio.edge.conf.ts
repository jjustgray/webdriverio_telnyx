import { config as baseConfig } from './wdio.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
            args: [
                '--headless=new',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        }
    }]
};