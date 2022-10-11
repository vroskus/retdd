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

// Data
import data from '../../data.json';

// Types
import type {
  $Config as $QuoteConfig,
} from './Quote';

export type $Services = {
  Quote: QuoteService<$QuoteConfig>,
};

const services = (): $Services => ({
  Quote: new QuoteService({
    data,
  }),
});

const servicesToUse: $Services = config.DEPLOYMENT_ENV !== deploymentEnvironment.test
  ? services()
  : mockServices();

export default servicesToUse;
