// @flow

// Types
import type {
  $Services,
} from '..';

// Mock services
import QuoteServiceMock from './Quote';

const mockServices = (): $Services => ({
  Quote: new QuoteServiceMock({
    data: [
      'Test quote',
    ],
  }),
});

export default mockServices;
