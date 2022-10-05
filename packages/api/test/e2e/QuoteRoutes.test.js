// @flow

import supertest from 'supertest';

import app from '../../src/app';
import {
  apiVersion,
} from '../../src/config';

const request = supertest(app);

describe('Quote routes', () => {
  describe(`/${apiVersion}/quote/get`, () => {
    it('should return one quote', async () => {
      const response = await request.get(`/${apiVersion}/quote/get`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('value', 'Test quote');
    });
  });
});
