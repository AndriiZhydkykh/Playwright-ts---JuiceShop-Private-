import { UserProfilePage } from '../../app/page/index'
import { test, expect } from '@playwright/test';
import { staticUsers } from '../../app/data/user.data.js';

test.describe('Sign in with existing user', () => {
   
const { email, password } = staticUsers.buyers.testingTalk

 test('ID-4 - Visit user profile page - setup auth', async ({page}) => {
  const userProfilePage = new UserProfilePage(page)
  await userProfilePage.open()
  await expect(await userProfilePage.getEmailField()).toHaveValue(email)
 })
 test('ID-5 - Visit user profile page -error - setup auth', async ({page}) => {
    const userProfilePage = new UserProfilePage(page)
    await userProfilePage.open()
    await expect(await userProfilePage.getEmailField()).toHaveValue(password)
 })
})

