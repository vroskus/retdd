// @flow

// Global Types
import type {
  $Component,
} from 'utility.types';

// Global Components
import * as React from 'react';

// Types
type $OptionalProps = {|
  id?: string,
|};

type $Props = {|
  ...$OptionalProps,
  label: string,
  onClick: () => any,
|};

const ButtonView = function ({
  id,
  label,
  onClick,
}: $Props): $Component {
  return (
    <button
      id={id}
      type="button"
      className="btn btn-lg btn-success"
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};

ButtonView.defaultProps = {
  id: undefined,
};

export default ButtonView;
