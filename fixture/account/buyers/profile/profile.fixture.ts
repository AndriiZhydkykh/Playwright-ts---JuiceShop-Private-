import { test as base } from '@playwright/test';
import { UserProfilePage } from '../../../../app/page/user-cabinet/user.profile';
import userDataJson from '../../../../app/data/user.json'; 

type MyFixtures = {
  userProfilePage: UserProfilePage;
  staticUser: typeof userDataJson['staticUsers'];  // Тип для userData
};

export const profileFixture = base.extend<MyFixtures>({
  userProfilePage: async ({ page }, use) => {
    const userProfilePage = new UserProfilePage(page);
    await use(userProfilePage);
  },
  staticUser: async ({}, use) => {
    const staticUser = userDataJson['staticUsers'];
    await use(staticUser);
  }
});

export { expect } from '@playwright/test';