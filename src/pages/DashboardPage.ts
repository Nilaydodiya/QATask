import { Page,expect } from "@playwright/test";
export class DashboardPage{
    readonly page: Page;

    readonly titleInputSelector = "#todoTitle";
    readonly dropdownSelector = "(//button[@role='combobox'])[1]";
    readonly dropdownvalue = "//select/option[text()='Low']";
    readonly descriptionInputSelector = "#todoDescription";
    readonly submitButton = "//button[@type='submit']"; 
    readonly editButton = "(//button[@title='Edit todo'])[1]"
    readonly deleteButton = "(//button[@title='Delete todo'])[1]"
    readonly confirmDeleteButton = "//button[text()='Delete']"
    
    

    constructor(page : Page){
         this.page = page;
    }

  // Login successfull  
   async createToDoList(title: string, des: string) {

    await this.page.locator(this.titleInputSelector).fill(title);
    await this.page.locator(this.dropdownSelector).click();
    await this.page.getByRole('option', { name: 'Low' }).click();
    await this.page.locator(this.descriptionInputSelector).fill(des)
    await this.page.locator(this.submitButton).click();
  }
  
  async updateToDoList(des: string) {
    
    await this.page.locator(this.editButton).click();
    await this.page.locator(this.descriptionInputSelector).clear();
    await this.page.locator(this.descriptionInputSelector).fill(des);
    await this.page.locator(this.submitButton).click();
    
  }

  async deleteToDoList() {
    await this.page.locator(this.deleteButton).click();
    await this.page.locator(this.confirmDeleteButton).click();
  }

};

  


