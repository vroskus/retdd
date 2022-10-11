// @flow

// Global Types
import type {
  $Component,
} from 'utility.types';

// Global Enums
import {
  deploymentEnvironment,
} from 'utility.enums';

// Styles
import 'bootstrap/dist/css/bootstrap.css';

// Helpers
import * as React from 'react';
import config from './config';

// Components
import Main from './components/layout/Main';

// Services
import Services from './services';

if (window && config.DEPLOYMENT_ENV === deploymentEnvironment.test) {
  window.Services = Services;
}

const runBeforeAppStart = (): void => {
};

const App = function (): $Component {
  runBeforeAppStart();

  return (
    <Main />
  );
};

export default App;
