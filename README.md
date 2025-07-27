**🚀 Project Overview**
This project is a full-stack To-Do List Application built with:(I have created this APP just for QA task - (https://github.com/Nilaydodiya/TaskForge))

**Frontend:** React,

**Backend:** Node.js (Express)

**Hosting Platform:** Render


**🔗 Base URL**
https://taskforge-qy22.onrender.com/

⚠️ Important: Since the backend is hosted on Render (which spins down on inactivity), please open the above URL in your browser at least once before running the test suite to ensure the server is active.

**🧪 Automation**
This project includes automated UI and API tests written using Playwright. The test suite covers:


# 🧪 Playwright Automation Project – API + UI Tests

This project demonstrates end-to-end automation using [Playwright](https://playwright.dev/), including:

- ✅ REST API testing (CRUD for a To-Do list)
- 🖥️ UI testing for login and dashboard (Crud operation for To-Do List)

---

## 📁 Project Structure
├── playwright.config.ts # Playwright test configuration

├── package.json # Project dependencies

├── README.md # Project documentation

└── src

├── tests

│ ├── API

│ │ └── DashboardAPI.spec.ts # CRUD operation for API testcases

| | └── LoginAPI.spec.ts # Login for API

│ └── UI

│ └── Dashboard.spec # UI test cases (Crud Operation for UI)

| └── Login.spec.ts  # UI Login cases (Both positive & Negative)

└── pages # Page Object Models (for UI)

└── LoginPage.ts

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js ≥ 18
- Git
- Optional: VS Code with Playwright extension

⚙️ Install Playwright Browsers
npx playwright install



--------------------------------------
🧪** Run Only API Tests**
npx playwright test src/tests/API 

🧪 **Run Only UI Tests**
npx playwright test src/tests/UI 

🧪 **Run both API & UI Tests**
npx playwright test

🖥️ **Run Tests with UI (headed mode)**
npx playwright test --headed

🌐 **Generate and View HTML Report**
npx playwright show-report

📸 Screenshots
See example test result screenshots in the screenshots/ folder.

---------------------------------------
**CI/CD** - **GIT Hub Actions**
⚙️ Continuous Integration with GitHub Actions
This project uses GitHub Actions to run Playwright end-to-end tests automatically on every push and pull request to the main branch.

🧪 What It Does
Installs project dependencies

Installs Playwright with required browsers

Runs all Playwright tests in parallel

Uploads a full HTML test report as an artifact

📁 Workflow File
The CI workflow is defined in:
.github/workflows/playwright.yml

🚀 Running Automatically On
Pushes to main

Pull Requests targeting main

📄 Test Report
After each run, the Playwright HTML test report is uploaded as an artifact to GitHub Actions. You can download and open it locally for full insights into each test.

✅ How to View Locally
To view the test report locally after running tests:
