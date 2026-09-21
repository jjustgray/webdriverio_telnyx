import { browser, expect } from '@wdio/globals';
import HomePage from '../pages/home.page';
import ProductsPage from '../pages/products.page';

describe('Products page', () => {
  beforeEach(async () => {
    await ProductsPage.open();
    await HomePage.closeCookieBanner();
    await ProductsPage.waitUntilLoaded();
  });

  it('TC-06 opens the primitives section using its anchor link', async () => {
    await ProductsPage.openPrimitivesSection();

    await expect(browser).toHaveUrl(expect.stringContaining('#primitives'));
  });

  it('TC-07 opens the open-source builds section using its anchor link', async () => {
    await ProductsPage.openSourceBuildsSection();

    await expect(browser).toHaveUrl(expect.stringContaining('#open-source-builds'));
  });

  it('TC-08 opens the Voice API product page', async () => {
    await ProductsPage.openVoiceApi();

    await expect(browser).toHaveUrl(expect.stringContaining('/products/voice-api'));
  });

  it('TC-09 opens the SMS API product page', async () => {
    await ProductsPage.openPrimitive('sms-api');

    await expect(browser).toHaveUrl(expect.stringContaining('/products/sms-api'));
  });

  it('TC-10 opens the WhatsApp product page', async () => {
    await ProductsPage.openPrimitive('whatsapp-business-api');

    await expect(browser).toHaveUrl(expect.stringContaining('/products/whatsapp-business-api'));
  });
});