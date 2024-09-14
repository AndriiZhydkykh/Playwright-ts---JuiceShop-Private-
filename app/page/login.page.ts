import { App } from "../page.holder";
import { Header, WelcomeBanner, CookiesWindow } from "../component";

export class LoginPage extends App {
    constructor(page) {
        super(page)
    }
    header = new Header(this.page);
    welcomeBanner = new WelcomeBanner(this.page);
    cookiesWindow = new CookiesWindow(this.page);
    #emailField = this.page.locator('input#email');
    #passwordField = this.page.locator('input#password')
    #submitBtn = this.page.locator('button#loginButton');


    async open() {
        await super.open('#/login');
    }
    async setEmailField(text) {
        await this.#emailField.fill(text);
    }

    async setPasswordField(text) {
        await this.#passwordField.fill(text);
    }

    async clickSubmitBtn() {
        await this.#submitBtn.click();
        await this.page.waitForLoadState();
    }
}


