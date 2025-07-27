import { test, expect, request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;

test.beforeAll(async () => {
  apiContext = await request.newContext();
});

// Test for invalid credentials
test('POST /login - Invalid credentials (Negative)', async () => {
  const response = await apiContext.post('https://taskforge-qy22.onrender.com/api/login', {
    data: { username: 'adminn', password: 'password1233' },
  });

  expect(response.status()).toBe(401);
});

// Test for valid credentials
test('POST /login - Valid credentials (Positive)', async () => {
  const loginRes = await apiContext.post('https://taskforge-qy22.onrender.com/api/login', {
    data: { username: 'admin', password: 'password' },
  });

  expect(loginRes.status()).toBe(200);
});