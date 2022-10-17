// @flow

import supertest from 'supertest';

import app from '../../src/app';
import {
  apiVersion,
} from '../../src/config';

const appInTestMode = supertest(app);

describe('Quote routes', () => {
  describe(`/${apiVersion}/quote/get_one`, () => {
    it('should return one quote', async () => {
      const response = await appInTestMode.get(`/${apiVersion}/quote/get_one`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('value', 'Test quote');
    });
  });
});
