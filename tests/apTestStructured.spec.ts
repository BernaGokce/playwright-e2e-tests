import { test, expect } from '@playwright/test';
import { getEnvUrl } from '../config/env';
import { postRequest, getRequest, putRequest, deleteRequest } from '../utils/apiUtils';

const baseURL = getEnvUrl('baseURL');

test.describe('JSONPlaceholder API Tests', () => {
  let postId: number;

  test('Create Post (POST)', async ({ request }) => {
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    const response = await postRequest(request, baseURL, '/posts', postData);

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    postId = responseBody.id;

    console.log('Created Post ID:', postId);
  });

  test('Get Single Post (GET)', async ({ request }) => {
    const response = await getRequest(request, baseURL, `/posts/${postId}`);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.id).toBe(postId);
    expect(responseBody.title).toBe('foo');
    expect(responseBody.body).toBe('bar');

    console.log('Fetched Post:', responseBody);
  });

  test('Update Post (PUT)', async ({ request }) => {
    const updatedData = {
      id: postId,
      title: 'updated title',
      body: 'updated body',
      userId: 1,
    };

    const response = await putRequest(request, baseURL, `/posts/${postId}`, updatedData);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.title).toBe('updated title');
    expect(responseBody.body).toBe('updated body');

    console.log('Updated Post:', responseBody);
  });

  test('Delete Post (DELETE)', async ({ request }) => {
    const response = await deleteRequest(request, baseURL, `/posts/${postId}`);

    expect(response.status()).toBe(200);

    console.log(`Deleted Post with ID: ${postId}`);
  });

  test('Get Deleted Post (GET)', async ({ request }) => {
    const response = await getRequest(request, baseURL, `/posts/${postId}`);

    expect(response.status()).toBe(404);

    console.log(`Verified Deletion of Post with ID: ${postId}`);
  });
});
