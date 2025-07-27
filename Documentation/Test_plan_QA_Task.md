## 🔪 Test Plan / Test Strategy – To-Do List App (TaskForge)

### 📌 Objective
This test strategy outlines the approach for testing the full-stack To-Do List application built using React (frontend) and Node.js (Express) as backend, hosted on Render. The application includes automated API and UI test coverage using Playwright.

---

### ✅ Scope of Testing

**What is being tested:**

- **API Endpoints** for To-Do operations:  
  - `POST /api/todos` – Create a task  
  - `GET /api/todos` – Fetch all tasks  
  - `PUT /api/todos/:id` – Update a task  
  - `DELETE /api/todos/:id` – Delete a task  
  - `POST /api/login` – User login

- **UI Functionality** for:
  - Login screen (Positive & Negative)
  - Dashboard (To-Do CRUD operations)

---

### 📦 Test Coverage Areas

| Area            | Type    | Coverage                                                                 |
|------------------|---------|--------------------------------------------------------------------------|
| Login            | API/UI  | Positive and negative test scenarios for authentication                 |
| Dashboard / To-Do | API/UI  | CRUD operations: create, view, update, delete via both UI and REST API   |
| Error Handling   | API     | Validation for missing fields, invalid IDs, and proper status codes     |
| Navigation/UX    | UI      | User flow from login to dashboard, form interactions, validations       |

---

### 🛠️ Tools Used

| Tool         | Purpose                                                   | Reason for Selection                                 |
|--------------|-----------------------------------------------------------|------------------------------------------------------|
| **Playwright** | UI & API test automation                                 | Unified framework, fast execution, rich reporting    |
| **Node.js**   | Backend (Express)                                         | Lightweight, suitable for quick REST API development |
| **React**     | Frontend SPA                                              | Industry-standard for modern UI                      |
| **Render**    | Hosting platform (Frontend & Backend)                     | Simple, free-tier hosting with live URL support      |
| **GitHub Actions** | CI/CD automation                                     | Seamless integration with GitHub for test pipelines  |

---

### 🚀 How to Run the Tests

> ⚠️ **Important:** The app is hosted on Render which spins down when idle.  
> ➤ **Before running tests, open the base URL in a browser to activate the backend:**

🔗 **Base URL:** https://taskforge-qy22.onrender.com/

#### 🔧 Prerequisites

- Node.js ≥ 18
- Git
- Install project dependencies: `npm install`
- Install browsers: `npx playwright install`

#### ▶️ Test Commands

| Action                         | Command                                      |
|--------------------------------|----------------------------------------------|
| Run all tests                  | `npx playwright test`                        |
| Run only API tests             | `npx playwright test src/tests/API`          |
| Run only UI tests              | `npx playwright test src/tests/UI`           |
| View HTML test report          | `npx playwright show-report`                 |
| Headed mode for debugging      | `npx playwright test --headed`               |

---

### 📄 Assumptions & Limitations

- Backend requires manual triggering (wake-up via browser) due to Render free-tier limitations.
- Tests assume clean data; currently no mocking/stubbing is applied.
- Only one user scenario is implemented (login is non-dynamic for demo purposes).
- No multi-browser/device coverage in this phase (can be added).

