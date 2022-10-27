// @flow

// Global Enums
import {
  deploymentEnvironment,
} from 'utility.enums';

// Helpers
import config from '../config';

// Services
import QuoteService from './QuoteService';
import mockServices from './mocks';

// Data
import data from '../../data.json';

// Types
import type {
  $Config as $QuoteServiceConfig,
} from './QuoteService';

export type $Services = {
  Quote: QuoteService<$QuoteServiceConfig>,
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
