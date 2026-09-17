class MachinePage {
  get body() {
    return $('body');
  }

  get mainHeading() {
    return $('main h1');
  }

  get renderingNavigation() {
    return $('nav[aria-label="Page rendering"]');
  }

  get humanLink() {
    return $('a[href="/"]');
  }

  get machineLink() {
    return $('a[href="/machine"]');
  }

  get replayButton() {
    return $('button*=REPLAY');
  }

  async open(): Promise<void> {
    await browser.url('/machine');
  }

  async waitUntilLoaded(): Promise<void> {
    await this.body.waitForDisplayed();
    await this.mainHeading.waitForDisplayed();
  }

  async replayAgentSession(): Promise<void> {
    await this.replayButton.click();
  }
}

export default new MachinePage();