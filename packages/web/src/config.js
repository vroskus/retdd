// @flow

// Global Types
import type {
  $DeploymentEnvironment,
} from 'utility.enums';
import type {
  $MandatoryConfigParams,
} from 'utility.helpers';

// Global Enums
import {
  deploymentEnvironment,
} from 'utility.enums';

// Helpers
import {
  getConfig,
  validateConfigParams,
} from 'utility.helpers/dist/browser';

// Types
export type $Config = {|
  API_URL: string,
  DEPLOYMENT_ENV: $DeploymentEnvironment,
  TIMEOUT: string,
|};

const params: Array<$Keys<$Config>> = [
  'API_URL',
  'DEPLOYMENT_ENV',
  'TIMEOUT',
];

const mandatoryConfigParams: $MandatoryConfigParams<$Config> = {
  [deploymentEnvironment.test]: [
    'DEPLOYMENT_ENV',
  ],
  [deploymentEnvironment.development]: [
    'API_URL',
    'DEPLOYMENT_ENV',
  ],
  [deploymentEnvironment.production]: [
    'API_URL',
    'DEPLOYMENT_ENV',
  ],
};

const config = getConfig({
  params,
});

const validConfig: $Config = validateConfigParams({
  config,
  mandatoryConfigParams,
});

export default validConfig;
