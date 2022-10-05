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
  const source: { config: C } | void = window || global;

  if (typeof source !== 'undefined' && source.config) {
    const output = {
    };

    params.forEach((param) => {
      output[param] = source.config[param] || '';
    });

    return _.get({
      output,
    }, 'output');
  }

  throw new Error('Config not found');
};
