import { HomePage, LoginPage } from '../app/page/index';
import { test as setup, expect } from '@playwright/test'
import userData from '../app/data/user.json';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
 const { email, password } = userData.staticUsers.buyers.testingTalk;

 const homePage = new HomePage(page)
 const loginPage = new LoginPage(page)
 await homePage.open();
 await homePage.welcomeBanner.clickCloseWelcomeBannerButton();
 await homePage.cookiesWindow.clickDismissCookiesButton();

 await homePage.header.clickAccountButton();
 await homePage.header.clickLoginButton();
 await expect(await homePage.header.getLoginButton()).toBeHidden();
 await loginPage.setEmailField(email);
 await loginPage.setPasswordField(password);
 await loginPage.clickSubmitBtn();
 await page.waitForURL('https://rough-casey-testingtalk-13d498f2.koyeb.app/#/search');
 await loginPage.header.expectLoaded();
 await expect(await loginPage.header.getBasket()).toBeVisible();
 await loginPage.header.clickAccountButton();
 await expect(await loginPage.header.getGoToUserProfileButtonText()).toHaveText(email);

 await page.context().storageState({ path: authFile });
});