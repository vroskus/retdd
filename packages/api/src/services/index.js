// @flow

// Global Enums
import {
  deploymentEnvironment,
} from 'utility.enums';

// Helpers
import config from '../config';

// Services
import QuoteService from './Quote';
import mockServices from './mocks';

// Types
import type {
  $Config as $QuoteConfig,
} from './Quote';

export type $Services = {
  Quote: QuoteService<$QuoteConfig>,
};

const services = (): $Services => ({
  Quote: new QuoteService({
    timeout: Number(config.TIMEOUT) || 10000,
  }),
});

const servicesToUse: $Services = config.DEPLOYMENT_ENV !== deploymentEnvironment.test
  ? services()
  : mockServices();

export default servicesToUse;
