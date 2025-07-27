import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";

test("To Do List CRUD Operation", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await page.goto('/');

  await test.step("Login Successful", async () => {
    await loginPage.clickOnLogin("admin", "password");
    await page.screenshot({ path: 'screenshots/step1-login.png', fullPage: true });
  });

  await test.step("Create To Do List", async () => {
    await dashboardPage.createToDoList("Test new Title", "Test New Description");
    await page.screenshot({ path: 'screenshots/step2-create-todo.png', fullPage: true });
  });

  await test.step("Update To Do List", async () => {
    await dashboardPage.updateToDoList("Update new Description");
    await page.screenshot({ path: 'screenshots/step3-update-todo.png', fullPage: true });
  });

  await test.step("Delete To Do List", async () => {
    await dashboardPage.deleteToDoList();
    await page.screenshot({ path: 'screenshots/step4-delete-todo.png', fullPage: true });
  });
});