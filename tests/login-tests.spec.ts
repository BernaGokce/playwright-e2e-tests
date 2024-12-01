import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

// Test 1: Verify error message with invalid login credentials
test('Verify error message with invalid login credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await loginPage.navigate();

  // Attempt login with invalid credentials
  await loginPage.login('test', '12345');

  // Verify the error message
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
});

// Test 2: Successful login and verify "Products" title
test('Successful login and verify "Products" title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Navigate to the login page
  await loginPage.navigate();

  // Perform login with valid credentials
  await loginPage.login('standard_user', 'secret_sauce');

  // Verify that the "Products" title is visible
  const isVisible = await productsPage.isProductTitleVisible();
  expect(isVisible).toBeTruthy();
});
