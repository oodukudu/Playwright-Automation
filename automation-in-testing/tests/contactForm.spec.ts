// Playwright Test Suite for https://automationintesting.online/
// Using TypeScript

import { test, expect, type Page } from '@playwright/test';

test.describe('Contact Form', () => {
  test('should submit the form successfully with valid inputs', async ({ page }) => {
    await page.goto('/');
    await page.fill('#name', 'John Jake');
    await page.fill('#email', 'john.jake@example.com');
    await page.fill('#phone', '07300000000');
    await page.fill('#description', 'This is a test message.');
    await page.click('#submitContact');
});

  test('should show error for missing inputs', async ({ page }) => {
    await page.goto('/');
    await page.click('#submitContact');
    await expect(page.locator('alert alert-danger')).toBeVisible;
  });
});
