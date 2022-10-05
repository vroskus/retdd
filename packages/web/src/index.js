// @flow

/* eslint-disable import/no-import-module-exports */

// polyfills for IE
import './polyfills';

// Global Components
import * as React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
} from 'react-router-dom';
import App from './App';

// import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('app');

// $FlowIgnore[prop-missing]
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

if (root !== null) {
  renderMethod(
    (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ),
    root,
  );
}

// registerServiceWorker();
