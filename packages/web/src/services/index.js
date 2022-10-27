// @flow

// Global Enums
import {
  deploymentEnvironment,
} from 'utility.enums';

// Helpers
import mockServices from './mocks';
import config from '../config';

// Services
import ApiService from './ApiService';

// Types
import type {
  $Config as $ApiConfig,
} from './ApiService';

// Types
export type $Services = {|
  Api: ApiService<$ApiConfig>,
|};

const services = (): $Services => ({
  Api: new ApiService({
    apiUrl: config.API_URL,
    timeout: Number(config.TIMEOUT) || 10000,
  }),
});

const servicesToUse: $Services = config.DEPLOYMENT_ENV !== deploymentEnvironment.test
  ? services()
  : mockServices();

export default servicesToUse;
