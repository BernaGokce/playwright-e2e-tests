import { test, expect } from '@playwright/test';

test('Check error message - invalid login', async ({ page }) => {
  // 1. Navigate to the Saucedemo page
  await page.goto('https://www.saucedemo.com/');

  // 2. Enter "test" into the username field
  await page.fill('[data-test="username"]', 'test');

  // 3. Enter "12345" into the password field
  await page.fill('[data-test="password"]', '12345');

  // 4. Click the login button
  await page.click('[data-test="login-button"]');

  // 5. Verify if the error message is visible
  const errorMessage = await page.isVisible('[data-test="error"]');
  expect(errorMessage).toBeTruthy(); // Expect the error message to be visible
});
