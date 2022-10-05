// @flow

// Global Types
import type {
  $RoutedComponent,
} from 'utility.types';

import {
  withRouter,
} from 'react-router-dom';

import PageView from './PageView';

const RoutedComponent = withRouter(PageView);

const Component: $RoutedComponent<typeof PageView> = RoutedComponent;

export default Component;
