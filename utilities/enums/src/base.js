// @flow

type $DeploymentEnvironmentEnums = {|
  test: 'TEST',
  development: 'DEVELOPMENT',
  production: 'PRODUCTION',
|};
export type $DeploymentEnvironment = $Values<$DeploymentEnvironmentEnums>;

export const deploymentEnvironment: $DeploymentEnvironmentEnums = {
  development: 'DEVELOPMENT',
  production: 'PRODUCTION',
  test: 'TEST',
};
