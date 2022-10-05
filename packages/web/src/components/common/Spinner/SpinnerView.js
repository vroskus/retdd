// @flow

// Global Types
import type {
  $Component,
} from 'utility.types';

// Global Components
import * as React from 'react';

const SpinnerView = function (): $Component {
  return (
    <div className="spinner-border my-auto mx-2" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default SpinnerView;
