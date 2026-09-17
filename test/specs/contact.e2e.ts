import { browser, expect } from '@wdio/globals';
import ContactPage from '../pages/contact.page';
import HomePage from '../pages/home.page';

describe('Contact form', () => {
  beforeEach(async () => {
    await ContactPage.open();
    await HomePage.closeCookieBanner();
    await ContactPage.waitUntilLoaded();
  });

  it('TC-16 opens the contact form page', async () => {
    await expect(browser).toHaveUrl(expect.stringContaining('/contact-us'));
    await expect(ContactPage.form).toBeDisplayed();
  });

  it('TC-17 fills the contact form fields', async () => {
    await ContactPage.fillContactDetails();

    await expect(ContactPage.reasonSelect).toHaveValue('Sales-Inquiry');
    await expect(ContactPage.firstNameInput).toHaveValue('Test');
    await expect(ContactPage.lastNameInput).toHaveValue('User');
    await expect(ContactPage.emailInput).toHaveValue('test.user@example.com');
  });

  it('TC-18 exposes the form submit button', async () => {
    await expect(ContactPage.submitButton).toBeDisplayed();
    await expect(ContactPage.submitButton).toBeEnabled();
  });

  it('TC-19 rejects an invalid email value', async () => {
    await ContactPage.enterInvalidEmail();

    await expect(await ContactPage.isEmailValid()).toBe(false);
  });

  it('TC-20 rejects an empty required email field', async () => {
    await ContactPage.clearEmail();

    await expect(await ContactPage.isEmailValid()).toBe(false);
  });
});