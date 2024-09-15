import { profileFixture, expect } from '../../fixture/account/buyers/profile/profile.fixture';

profileFixture.describe('Profile tests with static user', () => {
   profileFixture('ID-4 - Visit user profile page - setup auth', async ({ userProfilePage, staticUser }) => {
      await userProfilePage.open()
      await expect(await userProfilePage.getEmailField()).toHaveValue(staticUser.buyers.testingTalk.email)
   })
   profileFixture('ID-5 - Visit user profile page -error - setup auth', async ({ userProfilePage, staticUser }) => {
      await userProfilePage.open()
      await expect(await userProfilePage.getEmailField()).toHaveValue(staticUser.buyers.testingTalk.password)
   })
})

