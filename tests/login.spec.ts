import userData from '../app/data/user.json';
import { HomePage, LoginPage } from '../app/page/index';
import { createUser } from '../app/helper/user.helper';
import { regNewUserDate } from '../app/data/user.data';
import { test, expect } from '@playwright/test';

test.describe('Main page', () => {
    test.beforeAll(async ({ request }) => {
        await createUser(request)
    });

    test.use({ storageState: { cookies: [], origins: [] } });

    test('ID-1 - Login via existing user - random user', async ({ page }) => {
        const homePage = new HomePage(page)
        const loginPage = new LoginPage(page)
        await homePage.open();
        await homePage.welcomeBanner.clickCloseWelcomeBannerButton();
        await homePage.cookiesWindow.clickDismissCookiesButton();
        await homePage.header.clickAccountButton();
        await homePage.header.clickLoginButton();
        await expect(await homePage.header.getLoginButton()).toBeHidden();
        await loginPage.setEmailField(regNewUserDate.email);
        await loginPage.setPasswordField(regNewUserDate.password);
        await loginPage.clickSubmitBtn();
        await loginPage.header.expectLoaded();
        await expect(await loginPage.header.getBasket()).toBeVisible();
    });

    test('ID-2 - Login via existing user - static user', async ({ page }) => {
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
        await loginPage.header.expectLoaded();
        await expect(await loginPage.header.getBasket()).toBeVisible();
    });
})

