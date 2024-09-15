import { AppPage } from "../page.holder";
import { Header, WelcomeBanner, CookiesWindow } from "../component";

import { step } from "../../misc/reporters/step";

export class LoginPage extends AppPage {
    public pagePath = '#/login'
    public header = new Header(this.page);
    public welcomeBanner = new WelcomeBanner(this.page);
    public cookiesWindow = new CookiesWindow(this.page);
    private emailField = this.page.locator('input#email');
    private passwordField = this.page.locator('input#password')
    private submitBtn = this.page.locator('button#loginButton');

    @step()
    async open() {
        await super.open('#/login');
    }
    @step()
    async setEmailField(text) {
        await this.emailField.fill(text);
    }
    @step()
    async setPasswordField(text) {
        await this.passwordField.fill(text);
    }
    @step()
    async clickSubmitBtn() {
        await this.submitBtn.click();
        await this.page.waitForLoadState();
    }
}


