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
} from 'utility.helpers/dist/node';

// Types
export type $Config = {|
  WEB_URL: string,
  DEPLOYMENT_ENV: $DeploymentEnvironment,
  TIMEOUT: string,
|};

const params: Array<$Keys<$Config>> = [
  'WEB_URL',
  'DEPLOYMENT_ENV',
  'TIMEOUT',
];

const mandatoryConfigParams: $MandatoryConfigParams<$Config> = {
  [deploymentEnvironment.test]: [
    'DEPLOYMENT_ENV',
  ],
  [deploymentEnvironment.development]: [
    'DEPLOYMENT_ENV',
  ],
  [deploymentEnvironment.production]: [
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

export const apiVersion = 'v1.0';

export default validConfig;
