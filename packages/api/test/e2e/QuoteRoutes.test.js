// @flow

import supertest from 'supertest';

import app from '../../src/app';
import {
  apiVersion,
} from '../../src/config';

const request = supertest(app);

describe('Quote routes', () => {
  describe(`/${apiVersion}/quote/get_one`, () => {
    it('should return one quote', async () => {
      const response = await request.get(`/${apiVersion}/quote/get_one`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('value', 'Test quote');
    });
  });

  describe(`/${apiVersion}/quote/get_two`, () => {
    it('should return two quotes', async () => {
      const response = await request.get(`/${apiVersion}/quote/get_two`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('value', ['Test quote', 'Test quote']);
    });
  });
});
