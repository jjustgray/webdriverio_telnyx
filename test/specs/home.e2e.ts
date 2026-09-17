import { browser, expect } from '@wdio/globals';
import HomePage from '../pages/home.page';

describe('Home page', () => {
  beforeEach(async () => {
    await HomePage.open();
    await HomePage.closeCookieBanner();
    await HomePage.waitUntilLoaded();
  });

  it('TC-01 opens the Machine view from the home page', async () => {
    await HomePage.machineLink.click();

    await expect(browser).toHaveUrl(expect.stringContaining('/machine'));
  });

  it('TC-02 opens the sign-up flow from the primary CTA', async () => {
    await HomePage.signUpLink.click();

    await expect(browser).toHaveUrl(expect.stringContaining('/sign-up'));
  });

  it('TC-03 switches the active use case button', async () => {
    const contactCenter = HomePage.useCaseButton('Contact center');

    await HomePage.selectUseCase('Contact center');

    await expect(contactCenter).toHaveAttribute('aria-pressed', 'true');
  });

  it('TC-04 moves the horizontally scrollable use case slider', async () => {
    const scrollActionCompleted = await HomePage.moveUseCasesSlider('Standalone inference');

    expect(scrollActionCompleted).toBe(true);
  });

  it('TC-05 returns from the Machine view to the home page', async () => {
    await HomePage.machineLink.click();
    await browser.back();

    await expect(browser).toHaveUrl(expect.stringMatching(/telnyx\.com\/?$/));
  });
});