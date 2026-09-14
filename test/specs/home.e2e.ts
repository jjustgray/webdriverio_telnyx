// home.e2e.ts
import { browser, expect } from '@wdio/globals';
import HomePage from '../pages/home.page';

describe('Home page', () => {
  beforeEach(async () => {
    await HomePage.open();
    await HomePage.waitUntilLoaded();
  });

  it('loads successfully', async () => {
    await expect(browser).toHaveUrl(expect.stringContaining('telnyx.com'));
  });
});