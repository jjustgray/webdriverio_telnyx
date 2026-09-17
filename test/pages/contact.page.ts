class ContactPage {
  get form() {
    return $('#mktoForm_1987');
  }

  get reasonSelect() {
    return $('#Reason_for_Contact__c');
  }

  get firstNameInput() {
    return $('#FirstName');
  }

  get lastNameInput() {
    return $('#LastName');
  }

  get emailInput() {
    return $('#Email');
  }

  get submitButton() {
    return this.form.$('button[type="submit"]');
  }

  async open(): Promise<void> {
    await browser.url('/contact-us');
  }

  async waitUntilLoaded(): Promise<void> {
    await this.form.waitForDisplayed();
  }

  async fillContactDetails(): Promise<void> {
    await this.reasonSelect.selectByAttribute('value', 'Sales-Inquiry');
    await this.firstNameInput.setValue('Test');
    await this.lastNameInput.setValue('User');
    await this.emailInput.setValue('test.user@example.com');
  }

  async enterInvalidEmail(): Promise<void> {
    await this.emailInput.setValue('invalid-email');
  }

  async isEmailValid(): Promise<boolean> {
    return browser.execute(() => {
      const email = document.querySelector<HTMLInputElement>('#Email');

      return email?.checkValidity() ?? false;
    });
  }

  async clearEmail(): Promise<void> {
    await this.emailInput.clearValue();
  }
}

export default new ContactPage();