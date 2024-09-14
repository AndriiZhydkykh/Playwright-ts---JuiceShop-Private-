import { UserProfilePage } from '../../app/page/index'
import { test, expect } from '@playwright/test';
import { staticUsers } from '../../app/data/user.data.js';

test.describe('Sign in with existing user', () => {
const { email } = staticUsers.buyers.testingTalk
const { password } = staticUsers.buyers.testingTalk
 test('ID-4 - Visit user profile page', async ({page}) => {
  const userProfilePage = new UserProfilePage(page)
  await userProfilePage.open()
  await expect(await userProfilePage.getEmailField()).toHaveValue(email)
 })
 test('ID-5 - Visit user profile page -error', async ({page}) => {
    const userProfilePage = new UserProfilePage(page)
    await userProfilePage.open()
    await expect(await userProfilePage.getEmailField()).toHaveValue(password)
 })
})

