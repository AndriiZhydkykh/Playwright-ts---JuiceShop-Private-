import { test as base } from '@playwright/test';
import { AuthController } from '../api/index'
import { HomePage, LoginPage } from '../app/page/index'
import { UserCreateRequest, UserCreatedResponse } from "../api/models";

interface UserContext {
  userModel: UserCreateRequest;
  createdUser: UserCreatedResponse;
}

type MyFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  authController: AuthController;
  newUser: UserContext;
};

export const newUserIsNotAuthFixture = base.extend<MyFixtures>({
  storageState: {
    cookies: [],
    origins: [],
  },
  newUser: async ({ request }, use) => {

    const userModel = {
      "email": `test${crypto.randomUUID()}@test.com`,
      "password": "superSecretPassword!!!",
      "passwordRepeat": "superSecretPassword!!!",
      "securityAnswer": "Nadia",
      "securityQuestion": {
        "id": 5,
        "question": "Maternal grandmother's first name?"
      }
    };

    const authController = new AuthController(request);
    const createdUser = await authController.createNewUser(userModel);
    await use({ userModel, createdUser });
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page)
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';

