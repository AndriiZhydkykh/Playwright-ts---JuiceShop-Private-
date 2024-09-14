import { Component } from '../page.holder';
import { expect } from '@playwright/test';

export class Header extends Component{
  constructor(page) {
    super(page)
  } 
 #logoButton = this.page.locator('app-navbar button[aria-label="Back to homepage"]'); 
 #searchButton = this.page.locator('app-navbar #searchQuery'); 
 #accountButton = this.page.locator('app-navbar button#navbarAccount'); 
 #goToUserProfileButtonText = this.page.locator('button[aria-label="Go to user profile"] span'); 
 #languageButton = this.page.locator('app-navbar button[aria-label="Language selection menu"]'); 
 #languageButtonText = this.page.locator('app-navbar button[aria-label="Language selection menu"] span'); 
 #loginButton = this.page.locator('button#navbarLoginButton'); 
 #basket = this.page.locator('app-navbar button[aria-label="Show the shopping cart"]'); 

 async getLogoButton() {
   return this.#logoButton;
 }
 async getSearchButton() {
   return this.#searchButton;
 }
 async getAccountButton() {
   return this.#accountButton;
 }
 async getLanguageButton() {
   return this.#languageButton;
 }
 async getLanguageButtonText() {
   return this.#languageButtonText;
 }
 async getLoginButton() {
   return this.#loginButton;
 }
 async getBasket() {
   return this.#basket;
 }

 async clickLogoButton() {
   await this.#logoButton.click();
 }
 async clickSearchButton() {
   await this.#searchButton.click();
 }
 async clickAccountButton() {
   await this.#accountButton.click();
 }
 async getGoToUserProfileButtonText(){
   return this.#goToUserProfileButtonText
 }
 async clickLanguageButton() {
   await this.#languageButton.click();
 }
 async clickLoginButton() {
   await this.#loginButton.click();
 }

 async expectLoaded() {
  await expect(this.#logoButton).toBeVisible();
  await expect(this.#searchButton).toBeVisible();
  await expect(this.#accountButton).toBeVisible();
  await expect(this.#languageButton).toBeVisible();
}
}

