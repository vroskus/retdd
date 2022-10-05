// @flow

// Global Types
import type {
  $ApiRouteParams,
  $ApiRouteResponse,
} from 'retdd.api';

// Helpers
import axios from 'axios';

// Types
export type $Config = {|
  apiUrl: string,
  timeout: number,
|};

class ApiService<C: $Config> {
  connection: any;

  constructor({
    apiUrl,
    timeout,
  }: C) {
    // Connection setup
    this.connection = axios.create({
      baseURL: `${apiUrl}/v1.0`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      timeout,
    });
  }

  async getQuote(
    params: $ApiRouteParams<'/quote/get'>,
  ): Promise<$ApiRouteResponse<'/quote/get'>> {
    const response = await this.connection.get('/quote/get', params);

    return response.data;
  }
}

export default ApiService;
