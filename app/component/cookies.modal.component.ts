import { Component } from "../page.holder";

export class CookiesWindow extends Component {
  constructor(page) {
    super(page)
  }

  #dismissCookiesButton = this.page.locator('a[aria-label="dismiss cookie message"]');
  async clickDismissCookiesButton() {
    await this.#dismissCookiesButton.click();
  }
}


