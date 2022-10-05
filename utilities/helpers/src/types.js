// @flow

// Global Types
import type {
  $DeploymentEnvironment,
} from 'utility.enums';

export type $MandatoryConfigParams<C: { DEPLOYMENT_ENV: $DeploymentEnvironment }> = {|
  [$DeploymentEnvironment]: Array<$Keys<C>>,
|};
