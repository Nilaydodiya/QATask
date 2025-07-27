import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test("Login Positive & Negative Test Scenarios", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');

  await test.step("Assert Invalid login", async () => {
    await loginPage.assertInvalidLogin("adminnn", "passwrddd");
    await page.screenshot({ path: 'screenshots/step1-invalid-login.png', fullPage: true });
  });

  await test.step("Assert Empty username", async () => {
    await loginPage.assertEmptyUsername("password");
    await page.screenshot({ path: 'screenshots/step2-empty-username.png', fullPage: true });
  });

  await test.step("Assert Empty password", async () => {
    await loginPage.assertEmptyPassword("admin");
    await page.screenshot({ path: 'screenshots/step3-empty-password.png', fullPage: true });
  });

  await test.step("Assert Empty fields", async () => {
    await loginPage.assertEmptyFields();
    await page.screenshot({ path: 'screenshots/step4-empty-fields.png', fullPage: true });
  });

  await test.step("Login Successful", async () => {
    await loginPage.clickOnLogin("admin", "password");
    await page.screenshot({ path: 'screenshots/step5-successful-login.png', fullPage: true });
  });
});