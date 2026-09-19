import { config as baseConfig } from './wdio.conf.js';

export const config = {
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
        },
        'wdio:enforceWebDriverClassic': true
    }]
};