// @flow

/* eslint-disable class-methods-use-this */

// Service
import ApiService from '../Api';

// Types
import type {
  $Config,
} from '../Api';

class ApiServiceMock extends ApiService<$Config> {
  async getQuote(): Promise<{|
    value: string,
  |}> {
    return {
      value: 'Test quote',
    };
  }
}

export default ApiServiceMock;
