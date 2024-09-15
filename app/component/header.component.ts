import { Component } from '../page.holder';
import { expect } from '@playwright/test';
import { step } from "../../misc/reporters/step";

export class Header extends Component{

 private logoButton = this.page.locator('app-navbar button[aria-label="Back to homepage"]'); 
 private searchButton = this.page.locator('app-navbar #searchQuery'); 
 private accountButton = this.page.locator('app-navbar button#navbarAccount'); 
 private goToUserProfileButtonText = this.page.locator('button[aria-label="Go to user profile"] span'); 
 private languageButton = this.page.locator('app-navbar button[aria-label="Language selection menu"]'); 
 private languageButtonText = this.page.locator('app-navbar button[aria-label="Language selection menu"] span'); 
 private loginButton = this.page.locator('button#navbarLoginButton'); 
 private basket = this.page.locator('app-navbar button[aria-label="Show the shopping cart"]'); 


 @step()
 async getLogoButton() {
   return this.logoButton;
 }
 @step()
 async getSearchButton() {
   return this.searchButton;
 }
 @step()
 async getAccountButton() {
   return this.accountButton;
 }
 @step()
 async getLanguageButton() {
   return this.languageButton;
 }
 @step()
 async getLanguageButtonText() {
   return this.languageButtonText;
 }
 @step()
 async getLoginButton() {
   return this.loginButton;
 }
 @step()
 async getBasket() {
   return this.basket;
 }
 @step()
 async clickLogoButton() {
   await this.logoButton.click();
 }
 @step()
 async clickSearchButton() {
   await this.searchButton.click();
 }
 @step()
 async clickAccountButton() {
   await this.accountButton.click();
 }
 @step()
 async getGoToUserProfileButtonText(){
   return this.goToUserProfileButtonText
 }
 @step()
 async clickLanguageButton() {
   await this.languageButton.click();
 }
 @step()
 async clickLoginButton() {
   await this.loginButton.click();
 }
 @step()
 async expectLoaded() {
  await expect(this.logoButton).toBeVisible();
  await expect(this.searchButton).toBeVisible();
  await expect(this.accountButton).toBeVisible();
  await expect(this.languageButton).toBeVisible();
}
}

