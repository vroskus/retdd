// @flow

// Global Types
import type {
  $Component,
} from 'utility.types';

// Global Components
import * as React from 'react';

// Types
type $OptionalProps = {|
  className?: string,
  id?: string,
|};

type $Props = {|
  ...$OptionalProps,
  label: string,
  onClick: () => any,
|};

const ButtonView = function ({
  className,
  id,
  label,
  onClick,
}: $Props): $Component {
  return (
    <button
      id={id}
      type="button"
      className={`btn btn-lg ${className || ''}`}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};

ButtonView.defaultProps = {
  className: undefined,
  id: undefined,
};

export default ButtonView;
