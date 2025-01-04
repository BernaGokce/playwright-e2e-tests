import { APIRequestContext } from '@playwright/test';

export const postRequest = async (
  request: APIRequestContext,
  baseURL: string,
  endpoint: string,
  data: object
) => {
  const response = await request.post(`${baseURL}${endpoint}`, { data });
  return response;
};

export const getRequest = async (
  request: APIRequestContext,
  baseURL: string,
  endpoint: string
) => {
  const response = await request.get(`${baseURL}${endpoint}`);
  return response;
};

export const putRequest = async (
  request: APIRequestContext,
  baseURL: string,
  endpoint: string,
  data: object
) => {
  const response = await request.put(`${baseURL}${endpoint}`, { data });
  return response;
};

export const deleteRequest = async (
  request: APIRequestContext,
  baseURL: string,
  endpoint: string
) => {
  const response = await request.delete(`${baseURL}${endpoint}`);
  return response;
};
