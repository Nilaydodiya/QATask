import { Page,expect } from "@playwright/test";
export class LoginPage{
    readonly page: Page;

    readonly usernameInputSelector = "#username";
    readonly passwordInputSelector = "#password";
    readonly signinButtonSelector = "//button[@type='submit']";
    readonly invalidErrorMessage = "//span[text()='Invalid username or password']";

    constructor(page : Page){
         this.page = page;
    }

  // Login successfull  
   async clickOnLogin(uname: string,pwd: string) {
    await this.page.locator(this.usernameInputSelector).fill(uname);
    await this.page.locator(this.passwordInputSelector).fill(pwd);
    await  this.page.locator(this.signinButtonSelector).click();
  }
  // Wrong Credentials
   async assertInvalidLogin(uname: string, pwd: string) {
    await this.clickOnLogin(uname, pwd);
    const error = this.page.locator(this.invalidErrorMessage);
    await expect(error).toBeVisible();
  }
  // Empty usename
   async assertEmptyUsername(pwd: string){
    await this.page.locator(this.usernameInputSelector).fill("");
    await this.page.locator(this.passwordInputSelector).fill(pwd);
    await this.page.locator(this.signinButtonSelector).click();
    const validity = await this.page.locator('#username').evaluate( input => (input as HTMLInputElement).validity.valueMissing);
    expect(validity).toBe(true); 
}
  // Empty password
   async assertEmptyPassword(uname: string) {
    await this.page.locator(this.usernameInputSelector).fill(uname);
    await this.page.locator(this.passwordInputSelector).fill("");
    await this.page.locator(this.signinButtonSelector).click();

    const validity = await this.page.locator('#password').evaluate( input => (input as HTMLInputElement).validity.valueMissing);
    expect(validity).toBe(true); 
  }

  // Both fields empty
  async assertEmptyFields() {
    await this.page.locator(this.usernameInputSelector).fill("");
    await this.page.locator(this.passwordInputSelector).fill("");
    await this.page.locator(this.signinButtonSelector).click();

    const validity = await this.page.locator('#username').evaluate( input => (input as HTMLInputElement).validity.valueMissing);
    const validitynew = await this.page.locator('#password').evaluate( input => (input as HTMLInputElement).validity.valueMissing);
    expect(validity).toBe(true);
    expect(validitynew).toBe(true);
  }

}   


