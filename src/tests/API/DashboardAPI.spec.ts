import { test, expect, request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;
let todoId: string;

test.beforeAll(async () => {
  apiContext = await request.newContext();
});

test.describe.serial('To Do List API', () => {
  test('POST - Create To Do list', async () => {
    const response = await apiContext.post('https://taskforge-qy22.onrender.com/api/todos', {
      data: {
        title: 'Test1',
        description: 'Test',
        priority: 'low',
        completed: false,
      },
    });

    expect(response.status()).toBe(201); 
    const body = await response.json();

    todoId = body.id; 
   // console.log('Created ToDo ID:', todoId);
  });

  test('GET - To Do List', async () => {
    const response = await apiContext.get('https://taskforge-qy22.onrender.com/api/todos');
    expect(response.status()).toBe(200);
    const items = await response.json();
    expect(Array.isArray(items)).toBeTruthy();
  });

  test('PUT - Update To Do item', async () => {
    const response = await apiContext.put(`https://taskforge-qy22.onrender.com/api/todos/${todoId}`, {
      data: {
        title: 'New Updated title',
      },
    });

    expect(response.status()).toBe(200);
    const updated = await response.json();
    expect(updated.title).toContain('New Updated title');
  });

  test('DELETE - Remove To Do item', async () => {
    const response = await apiContext.delete(`https://taskforge-qy22.onrender.com/api/todos/${todoId}`);
    expect(response.status()).toBe(204);
  });
});
