import base from '@playwright/test'
import { AuthController } from '../api/index'
import { HomePage, LoginPage } from '../app/page/index'
export const notAuthNewUser = base.test.extend({
 storageState: {
  cookies: [],
  origins: [],
},
 authController: async ({request }, use) => {

  const regNewUserDate = {
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
  const userData  = await authController.createNewUser(regNewUserDate);
  await use({ authController, userData });
 },
 homePage: async ({ page }, use) => {
  const homePage = new HomePage(page)
  await use(homePage);
 },
 loginPage: async ({ page }, use) => {
 const loginPage = new LoginPage(page)
 await use(loginPage);
 },
 userData: async ({ authController }, use) => {
  const userData = authController.userData; 
  await use(userData);
},
});

export const expect = base.expect;

