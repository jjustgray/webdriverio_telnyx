class HomePage {
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

  get signUpLink() {
    return $('main a[href="/sign-up"]');
  }

  get useCasesRegion() {
    return $('[aria-label="Use cases"]');
  }

  get acceptAllCookiesButton() {
    return $('button*=Accept all');
  }

  get acceptCookiesButton() {
    return $('button*=Accept');
  }

  get closeCookiesButton() {
    return $('[aria-label*="close" i]');
  }

  useCaseButton(name: string) {
    return this.useCasesRegion.$(`button*=${name}`);
  }

  async open(): Promise<void> {
    await browser.url('/');
  }

  async waitUntilLoaded(): Promise<void> {
    await this.body.waitForDisplayed();
    await this.mainHeading.waitForDisplayed();
  }

  async closeCookieBanner(): Promise<void> {
    if (await this.acceptAllCookiesButton.isExisting() && await this.acceptAllCookiesButton.isDisplayed()) {
      await this.acceptAllCookiesButton.click();
      return;
    }

    if (await this.acceptCookiesButton.isExisting() && await this.acceptCookiesButton.isDisplayed()) {
      await this.acceptCookiesButton.click();
      return;
    }

    if (await this.closeCookiesButton.isExisting() && await this.closeCookiesButton.isDisplayed()) {
      await this.closeCookiesButton.click();
    }
  }

  async selectUseCase(name: string): Promise<void> {
    await browser.execute((buttonText) => {
      const button = [...document.querySelectorAll('button')]
        .find((candidate) => candidate.textContent?.includes(buttonText));

      button?.click();
    }, name);
  }

  async moveUseCasesSlider(buttonText: string): Promise<boolean> {
    return browser.execute((text) => {
      const scroller = document.querySelector('[aria-label="Use cases"]');
      const candidates = [...(scroller?.querySelectorAll('button') ?? [])]
        .filter((candidate) => candidate.textContent?.includes(text));
      const button = candidates.find((candidate) => {
        const rect = candidate.getBoundingClientRect();

        return rect.width > 0 && rect.height > 0;
      }) ?? candidates.at(-1);

      button?.scrollIntoView({ block: 'center', inline: 'center' });

      if (!button || !scroller) {
        return false;
      }

      return true;
    }, buttonText);
  }
}

export default new HomePage();
