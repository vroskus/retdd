// @flow

/* eslint-disable import/prefer-default-export */

// Global Types
import type {
  $DeploymentEnvironment,
} from 'utility.enums';

// Global Enums
import {
  deploymentEnvironment,
} from 'utility.enums';

// Types
import type {
  $MandatoryConfigParams,
} from './types';

export const validateConfigParams = <C: { DEPLOYMENT_ENV: $DeploymentEnvironment }>({
  config,
  mandatoryConfigParams,
}: {|
  config: C,
  mandatoryConfigParams: $MandatoryConfigParams<C>,
|}): C => {
  if (!Object.values(deploymentEnvironment).includes(config.DEPLOYMENT_ENV)) {
    throw new Error('Unrecognized DEPLOYMENT_ENV value');
  }

  const deploymentEnvironmentMandatoryConfigParams = mandatoryConfigParams[config.DEPLOYMENT_ENV];

  const emptyMandatoryParams = deploymentEnvironmentMandatoryConfigParams.filter(
    (param) => !config[param] || config[param] === '',
  );

  if (emptyMandatoryParams.length > 0) {
    throw new Error('Unset mandatory config params');
  }

  return config;
};
