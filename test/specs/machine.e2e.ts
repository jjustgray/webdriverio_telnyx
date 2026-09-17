import { browser, expect } from '@wdio/globals';
import HomePage from '../pages/home.page';
import MachinePage from '../pages/machine.page';

describe('Machine view', () => {
  beforeEach(async () => {
    await MachinePage.open();
    await HomePage.closeCookieBanner();
    await MachinePage.waitUntilLoaded();
  });

  it('TC-11 replays the agent session without leaving the Machine view', async () => {
    await MachinePage.replayAgentSession();

    await expect(browser).toHaveUrl(expect.stringContaining('/machine'));
  });

  it('TC-12 opens the human view from Machine navigation', async () => {
    await expect(MachinePage.humanLink).toBeDisplayed();
    await MachinePage.humanLink.click();

    await expect(browser).toHaveUrl(expect.stringMatching(/telnyx\.com\/?$/));
  });

  it('TC-13 keeps the replay control available after interaction', async () => {
    await MachinePage.replayAgentSession();

    await expect(MachinePage.replayButton).toBeDisplayed();
  });

  it('TC-14 keeps the Machine route after replaying twice', async () => {
    await MachinePage.replayAgentSession();
    await MachinePage.replayAgentSession();

    await expect(browser).toHaveUrl(expect.stringContaining('/machine'));
  });

  it('TC-15 opens the home page through the Human navigation link', async () => {
    await MachinePage.humanLink.click();

    await expect(browser).toHaveUrl(expect.stringMatching(/telnyx\.com\/?$/));
  });
});