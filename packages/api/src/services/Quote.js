// @flow

// Helpers
import axios from 'axios';

export type $Config = {|
  timeout: number,
|};

class QuoteService<C: $Config> {
  connection: any;

  constructor({
    timeout,
  }: C) {
    const options = {
      baseURL: 'https://api.kanye.rest',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      timeout,
    };

    // Connection setup
    this.connection = axios.create(options);
  }

  async get(): Promise<string> {
    const response = await this.connection.get('/');

    return response.data.quote;
  }
}

export default QuoteService;
