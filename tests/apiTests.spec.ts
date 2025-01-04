import { test, expect } from '@playwright/test';
import { getEnvUrl } from '../config/env.ts';

const baseURL = getEnvUrl('baseURL');

console.log('Base URL:', baseURL);

test.describe('JSONPlaceholder API Tests', () => {
  let postId: number;

  test('Create Post (POST)', async ({ request }) => {
    const response = await request.post(`${baseURL}/posts`, {
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');

    postId = responseBody.id;
    console.log('Created Post ID:', postId);
  });

  test('Get Single Post (GET)', async ({ request }) => {
    if (!postId) throw new Error('Post ID is not set! Ensure the POST test runs first.');
    const response = await request.get(`${baseURL}/posts/${postId}`);
    console.log('URL:', `${baseURL}/posts/${postId}`);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.id).toBe(postId);
    expect(responseBody.title).toBe('foo');
    expect(responseBody.body).toBe('bar');
    console.log('Fetched Post:', responseBody);
  });


  test('Update Post (PUT)', async ({ request }) => {
    if (!postId) throw new Error('Post ID is not set! Ensure the POST test runs first.');
    const response = await request.put(`${baseURL}/posts/${postId}`, {
      data: {
        id: postId,
        title: 'updated title',
        body: 'updated body',
        userId: 1,
      },
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.title).toBe('updated title');
    expect(responseBody.body).toBe('updated body');
    console.log('Updated Post:', responseBody);
  });

  test('Delete Post (DELETE)', async ({ request }) => {
    if (!postId) throw new Error('Post ID is not set! Ensure the POST test runs first.');
    const response = await request.delete(`${baseURL}/posts/${postId}`);

    expect(response.status()).toBe(200);
    console.log(`Deleted Post with ID: ${postId}`);
  });

  test('Get Deleted Post (GET)', async ({ request }) => {
    if (!postId) throw new Error('Post ID is not set! Ensure the POST test runs first.');
    const response = await request.get(`${baseURL}/posts/${postId}`);

    expect(response.status()).toBe(404);
    console.log(`Verified Deletion of Post with ID: ${postId}`);
  });
});
