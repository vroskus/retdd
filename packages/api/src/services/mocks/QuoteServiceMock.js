// @flow

/* eslint-disable class-methods-use-this */

// Service
import QuoteService from '../QuoteService';

// Types
import type {
  $Config,
} from '../QuoteService';

class QuoteServiceMock extends QuoteService<$Config> {
}

export default QuoteServiceMock;
