// @flow

// Global Types
import type {
  $Component,
  $Components,
  $WebRouter,
} from 'utility.types';

// Global Components
import * as React from 'react';

// Types
type $Props = {|
  ...$WebRouter,
  children: $Components,
  id: string,
|};

const PageView = function ({
  children,
  id,
}: $Props): $Component {
  return (
    <div id={id} className="page">
      {children}
    </div>
  );
};

export default PageView;
