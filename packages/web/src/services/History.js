// @flow

// Global Types
import type {
  $Component,
  $Location,
  $WebRouter,
} from 'utility.types';

import * as React from 'react';
import {
  withRouter,
} from 'react-router-dom';

// Types
type $Listener = (location: $Location) => any;

type $Props = {|
  ...$WebRouter,
|};

let globalHistory = null;
const listeners: Array<$Listener> = [];

class Spy extends React.Component<$Props> {
  componentDidMount(): void {
    this.trackHistoryChange();
  }

  componentDidUpdate(): void {
    this.trackHistoryChange();
  }

  trackHistoryChange(): void {
    const {
      history,
    } = this.props;

    listeners.forEach((listener: $Listener) => {
      listener(history.location);
    });

    globalHistory = history;
  }

  render(): $Component | null {
    return null;
  }
}

export type $RedirectParams = {|
  hash?: string,
  pathname?: string,
  search?: string,
  state?: {},
|};
export type $RedirectResponse = $RedirectParams;

export type $HistoryService = {
  +addListener: (listener: $Listener) => number,
  +getCurrentPathname: () => string | null;
  +redirect: ($RedirectParams) => $RedirectResponse,
  +render: any,
};

const HistoryService: $HistoryService = {
  addListener: (listener: $Listener) => listeners.push(listener),
  getCurrentPathname: () => {
    if (window && window.location) {
      return window.location.pathname || null;
    }

    return null;
  },
  redirect: (params: $RedirectParams): $RedirectResponse => {
    if (globalHistory) {
      globalHistory.push(params);
    }

    return params;
  },
  render: withRouter(Spy),
};

export default HistoryService;
