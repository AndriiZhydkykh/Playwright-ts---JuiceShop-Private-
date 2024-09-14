import { App } from "../page.holder";
import { Header, WelcomeBanner, CookiesWindow } from "../component";

export class HomePage extends App {
    constructor(page) {
        super(page)
    }
    header = new Header(this.page);
    welcomeBanner = new WelcomeBanner(this.page);
    cookiesWindow = new CookiesWindow(this.page);


    async open() {
        await super.open('#/');
        await this.header.expectLoaded();
    }
}



