// Playwright Test Suite for https://automationintesting.online/
// Using TypeScript

import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto('/#/admin');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/#/admin');
  });

  test('should fail login with invalid credentials', async ({ page }) => {
    await page.goto('/#/admin');
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.getByText(`Log into your account`)).toBeVisible(); // there's no error message displayed after clicking the submit button so have to verify the wording is still visible on the page which means the login details were not accepted
  });
});
