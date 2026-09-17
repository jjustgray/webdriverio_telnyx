class ProductsPage {
  get body() {
    return $('body');
  }

  get mainHeading() {
    return $('h1*=Everything you need');
  }

  get primitivesRegion() {
    return $('section[aria-label="All primitives at a glance"]');
  }

  get browsePrimitivesLink() {
    return $('a[href="#primitives"]');
  }

  get openSourceBuildsLink() {
    return $('a[href="#open-source-builds"]');
  }

  get primitiveLinks() {
    return this.primitivesRegion.$$('a[href^="/products/"]');
  }

  primitiveLink(slug: string) {
    return this.primitivesRegion.$(`a[href="/products/${slug}"]`);
  }

  async open(): Promise<void> {
    await browser.url('/products');
  }

  async waitUntilLoaded(): Promise<void> {
    await this.body.waitForDisplayed();
    await this.mainHeading.waitForDisplayed();
    await this.primitivesRegion.waitForDisplayed();
  }

  async openPrimitivesSection(): Promise<void> {
    await this.browsePrimitivesLink.click();
  }

  async openVoiceApi(): Promise<void> {
    await this.primitiveLink('voice-api').click();
  }

  async openPrimitive(slug: string): Promise<void> {
    await this.primitiveLink(slug).click();
  }
}

export default new ProductsPage();