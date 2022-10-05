// @flow

// Global Types
import type {
  $Component,
} from 'utility.types';

// Global Components
import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import MainPage from '../../pages/MainPage';

const MainView = function (): $Component {
  return (
    <React.Suspense
      fallback={(
        <div>Page not found</div>
      )}
    >
      <Switch>
        <Route
          key="main"
          exact
          path="/"
          component={MainPage}
        />
      </Switch>
    </React.Suspense>
  );
};

export default MainView;
