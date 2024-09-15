import { Component } from "../page.holder";
import { step } from "../../misc/reporters/step";

export class CookiesWindow extends Component {

  private dismissCookiesButton = this.page.locator('a[aria-label="dismiss cookie message"]');

  @step()
  async clickDismissCookiesButton() {
    await this.dismissCookiesButton.click();
  }
}


