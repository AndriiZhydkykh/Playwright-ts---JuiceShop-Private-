import { AppPage } from '../../page.holder';
import { step } from "../../../misc/reporters/step";

export class UserProfilePage extends AppPage {
    public pagePath = 'profile'
    private emailField = this.page.locator('input#email');

    @step()
    async getEmailField() {
        return this.emailField;
    }   
}


