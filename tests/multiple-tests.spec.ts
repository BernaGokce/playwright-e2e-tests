import { test, expect } from '@playwright/test';

// Test 1: Check error message (successful test)
test('Verify error message - correct error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'test');
  await page.fill('[data-test="password"]', '12345');
  await page.click('[data-test="login-button"]');
  
  // Verify that the error message is correct
  const errorMessage = await page.textContent('[data-test="error"]');
  expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
});

// Test 2: Successful login and verify "Products" title
test('Successful login and verify "Products" title', async ({ page }) => {
  // Navigate to the Saucedemo page
  await page.goto('https://www.saucedemo.com/');

  // Fill in the username and password
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');

  // Click the login button
  await page.click('[data-test="login-button"]');

  // Verify that the "Products" title is visible
  const isProductTitleVisible = await page.isVisible('[data-test="title"]');
  expect(isProductTitleVisible).toBeTruthy(); // The "Products" title should be visible
});
