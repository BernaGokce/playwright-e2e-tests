import { test, expect } from '@playwright/test';

test('Check incorrect error message', async ({ page }) => {
  // Navigate to the Saucedemo page
  await page.goto('https://www.saucedemo.com/');

  // Enter "test" into the username field
  await page.fill('[data-test="username"]', 'test');

  // Enter "12345" into the password field
  await page.fill('[data-test="password"]', '12345');

  // Click the login button
  await page.click('[data-test="login-button"]');

  // Verify the error message with an incorrect value (intentionally wrong message)
  const errorMessage = await page.textContent('[data-test="error"]');
  expect(errorMessage).toBe('An incorrect error message'); // Intentionally checking the wrong message
});
