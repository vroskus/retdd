// @flow

// Mock services
import ApiServiceMock from './Api';
import HistoryService from '../History';

// Types
import type {
  $Services,
} from '..';

const mockServices = (): $Services => ({
  Api: new ApiServiceMock({
    apiUrl: '',
    timeout: 0,
  }),
  History: HistoryService,
});

export default mockServices;
