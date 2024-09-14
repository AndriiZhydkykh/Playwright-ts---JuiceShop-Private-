import { App } from '../../page.holder';

export class UserProfilePage extends App {
    constructor(page) {
        super(page)
    }
    #emailField = this.page.locator('input#email');

    async getEmailField() {
        return this.#emailField;
    }

    async open() {
        await super.open('profile');
    }
}


