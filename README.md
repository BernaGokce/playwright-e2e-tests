# Playwright Automation Project

This project uses [Playwright](https://playwright.dev/) for browser automation and end-to-end testing. It also includes continuous integration (CI) support via GitHub Actions.

---

## 🚀 Features

- **Page Object Model (POM):** Structured for more readable and maintainable tests.
- **Environment Support:** Supports testing in `staging` and `production` environments.
- **Parallel Test Execution:** Runs tests in parallel for faster results.
- **GitHub Actions Integration:** Supports daily or manual triggering.
- **HTML Reporting:** Generates detailed test reports for failures.

---

## 📂 Project Structure

```
project-root/
├── .github/
│   ├── workflows/
│   │   ├── playwright-tests.yml    # GitHub Actions Workflow
├── config/
│   ├── env.ts                      # Environment URLs manager
├── pages/
│   ├── LoginPage.ts                # Login Page Object
│   ├── ProductsPage.ts             # Products Page Object
├── tests/
│   ├── login-tests.spec.ts         # Example test file
├── playwright.config.ts            # Playwright configuration file
├── package.json                    # Project dependencies and npm scripts
```

---

## 🛠️ Installation and Usage

### 1. Prerequisites
- Node.js (v16 or higher)

### 2. Install Dependencies
Run the following command in the project directory to install all dependencies:
```bash
npm install
```

### 3. Install Browsers
Install the required browsers for Playwright:
```bash
npx playwright install
```

### 4. Running Tests

#### Run All Tests
```bash
npm test
```

#### Run Tests in Staging Environment
```bash
npm run test:staging
```

#### Run Tests in Production Environment
```bash
npm run test:production
```

#### Run Tests in a Specific Browser (e.g., Chromium)
```bash
npx playwright test --project=chromium
```

---

## 🌐 GitHub Actions

### Workflow Triggers
The GitHub Actions workflow runs:
- Daily at UTC 00:00
- Manually via `workflow_dispatch`
- On `main` branch pushes (optional)

GitHub Actions workflow file: `.github/workflows/playwright-tests.yml`

### Accessing Reports
- After the tests complete, HTML reports can be downloaded from the "Artifacts" section in GitHub Actions.
- Download the report and open `index.html` in your browser to view it.

---

## 🔧 Configuration

### Updating Environment URLs
You can update the staging and production environment URLs in `config/env.ts`:
```typescript
const environments = {
  staging: 'https://staging.saucedemo.com/',
  production: 'https://www.saucedemo.com/',
};
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

To contribute:
1. Fork this repository.
2. Create a new branch (`feature/my-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Open a pull request.
