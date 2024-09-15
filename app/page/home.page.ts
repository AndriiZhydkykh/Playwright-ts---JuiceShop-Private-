import { AppPage } from "../page.holder";
import { Header, WelcomeBanner, CookiesWindow } from "../component";
import { step } from "../../misc/reporters/step";

export class HomePage extends AppPage {
    public pagePath = '#/'

    public header = new Header(this.page);
    public welcomeBanner = new WelcomeBanner(this.page);
    public cookiesWindow = new CookiesWindow(this.page);

    @step()
    async open() {
        await super.open('#/');
        await this.header.expectLoaded();
    }
}



