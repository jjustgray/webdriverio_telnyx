class HomePage {
  get body() {
    return $('body');
  }

  async open(): Promise<void> {
    await browser.url('/');
  }

  async waitUntilLoaded(): Promise<void> {
    await this.body.waitForDisplayed();
  }
}

export default new HomePage();
