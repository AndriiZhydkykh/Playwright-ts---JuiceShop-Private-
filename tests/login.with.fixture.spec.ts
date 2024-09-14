import { notAuthNewUser, expect } from '../fixture/login.fixture';
import { regNewUserDate } from '../app/data/user.data';

notAuthNewUser('ID-3 - fixture example ', async ({ homePage, loginPage, authController, userData }) => {
  await homePage.open();
  await homePage.welcomeBanner.clickCloseWelcomeBannerButton();
  await homePage.cookiesWindow.clickDismissCookiesButton();
  await homePage.header.clickAccountButton();
  await homePage.header.clickLoginButton();
  await expect(await homePage.header.getLoginButton()).toBeHidden();

  await loginPage.setEmailField(userData.data.email);
  await loginPage.setPasswordField(regNewUserDate.password);
  await loginPage.clickSubmitBtn();
  await loginPage.header.expectLoaded();
  await expect(await loginPage.header.getBasket()).toBeVisible();
});

