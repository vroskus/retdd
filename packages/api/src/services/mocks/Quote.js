// @flow

/* eslint-disable class-methods-use-this */

// Service
import QuoteService from '../Quote';

// Types
import type {
  $Config,
} from '../Quote';

class QuoteServiceMock extends QuoteService<$Config> {
  async get(): Promise<string> {
    return 'Test quote';
  }
}

export default QuoteServiceMock;
