// Playwright Test Suite for https://automationintesting.online/
// Using TypeScript

import { test, expect } from '@playwright/test';

// PLEASE NOTE, THIS TEST DOESN'T RUN BECAUSE THE BOOKING FUNTIONALITY DOES NOT WORK BUT THIS IS A SAMPLE TEST STEP

test.describe('Booking Functionality', () => {
  test('should create a new booking successfully', async ({ page }) => {
    await page.goto('/#/admin');

    await page.fill('#firstname', 'John');
    await page.fill('#lastname', 'Doe');
    await page.fill('#totalprice', '150');
    await page.check('#depositpaid');
    await page.fill('#checkin', '2025-01-01');
    await page.fill('#checkout', '2025-01-10');
    await page.click('button#submit');

    const confirmation = page.locator('text=Booking Confirmed');
    await expect(confirmation).toBeVisible();
  });
});
