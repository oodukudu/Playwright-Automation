// Playwright Test Suite for https://automationintesting.online/
// Using TypeScript

import { test, expect } from '@playwright/test';

// non-functional tests
test.describe('Verify page load performance', () => {
    test('should load homepage within acceptable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('/');
      const loadTime = Date.now() - startTime;
      expect(loadTime).toBeLessThan(4000); // assert that the load time is under 3 seconds
    });
  
    test('should display homepage properly on mobile devices', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 }); //iPhone 12 pro
      await page.goto('/');
      const isVisible = await page.isVisible('.header');
      expect(isVisible).toBeTruthy();
    });
  });