const { test, expect } = require('@playwright/test');

test('Hello World Test', async ({ page }) => {
  // Open a page in the browser
  await page.goto('https://example.com');

  // Check the page title
  const title = await page.title();
  console.log(`Page title is: ${title}`);
  expect(title).toBe('Example Domain');

  // Check the text on the page
  const content = await page.textContent('h1');
  expect(content).toBe('Example Domain');

  console.log('Hello World test passed!');
});
