// Playwright Test Suite for https://automationintesting.online/
// Using TypeScript

import { test, expect } from '@playwright/test';

test.describe('Verify the homepage loads correctly', () => {

  test('Homepage should load with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Restful-booker-platform demo');
  });
});