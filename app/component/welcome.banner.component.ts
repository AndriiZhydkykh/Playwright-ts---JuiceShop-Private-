import { Component } from "../page.holder";
import { step } from "../../misc/reporters/step";

export class WelcomeBanner extends Component {
    
    private closeWelcomeBannerButton = this.page.locator('button[aria-label="Close Welcome Banner"]')

    @step()
    async clickCloseWelcomeBannerButton() {
        await this.closeWelcomeBannerButton.click();
    }
}

