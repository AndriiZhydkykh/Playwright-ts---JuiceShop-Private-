import { newUserIsNotAuthTest, expect } from '../fixture/login.fixture';

newUserIsNotAuthTest('ID-3 - fixture example ', async ({ homePage, loginPage, newUser }) => {
  await homePage.open();
  await homePage.welcomeBanner.clickCloseWelcomeBannerButton();
  await homePage.cookiesWindow.clickDismissCookiesButton();
  await homePage.header.clickAccountButton();
  await homePage.header.clickLoginButton();
  await expect(await homePage.header.getLoginButton()).toBeHidden();

  await loginPage.setEmailField(newUser.createdUser.data.email);
  await loginPage.setPasswordField(newUser.userModel.password);
  await loginPage.clickSubmitBtn();
  await loginPage.header.expectLoaded();
  await expect(await loginPage.header.getBasket()).toBeVisible();
});

