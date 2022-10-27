// @flow

// Helpers
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

// Service
import ApiService from '../ApiService';

// Types
import type {
  $Config,
} from '../ApiService';

class ApiServiceMock extends ApiService<$Config> {
  constructor(config: $Config) {
    const mock = new AxiosMockAdapter(axios);

    mock.onGet('/quote/get_one').reply(
      200,
      {
        value: 'Test quote',
      },
    );

    super(config);
  }
}

export default ApiServiceMock;
