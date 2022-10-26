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

  async getOneQuote(
    params: $ApiRouteParams<'/quote/get_one'>,
  ): Promise<$ApiRouteResponse<'/quote/get_one'>> {
    const response = await this.connection.get('/quote/get_one', params);

    return response.data;
  }
}

export default ApiService;
