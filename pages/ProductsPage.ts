import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  // Selectors
  productTitle = '[data-test="title"]';

  // Methods
  async isProductTitleVisible(): Promise<boolean> {
    return await this.page.isVisible(this.productTitle);
  }
}
