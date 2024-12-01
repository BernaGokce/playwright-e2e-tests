import { Page } from '@playwright/test';
import { getEnvUrl } from '../config/env';

export class LoginPage {
  readonly page: Page;
  readonly baseUrl: string;

  // Constructor
  constructor(page: Page) {
    this.page = page;

    const env = process.env.ENV || 'production';
    this.baseUrl = getEnvUrl(env);
  }

  // Selectors
  usernameInput = '[data-test="username"]';
  passwordInput = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  errorMessage = '[data-test="error"]';

  // Methods
  async navigate() {
    await this.page.goto(this.baseUrl);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}
