// @flow

// Global Types
import type {
  $DeploymentEnvironment,
} from 'utility.enums';

// Helpers
import _ from 'lodash';

export * from './common';

export const getConfig = <C: { DEPLOYMENT_ENV: $DeploymentEnvironment }>({
  params,
}: {|
  params: Array<$Keys<C>>,
|}): C => {
  const output = {
  };

  params.forEach((param) => {
    output[param] = process.env[param] || '';
  });

  return _.get({
    output,
  }, 'output');
};
