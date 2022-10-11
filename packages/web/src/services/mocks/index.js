// @flow

// Mock services
import ApiServiceMock from './Api';

// Types
import type {
  $Services,
} from '..';

const mockServices = (): $Services => ({
  Api: new ApiServiceMock({
    apiUrl: '',
    timeout: 0,
  }),
});

export default mockServices;
