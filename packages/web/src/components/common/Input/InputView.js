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
  value: string,
|};

const InputView = function ({
  id,
  label,
  value,
}: $Props): $Component {
  return (
    <input
      id={id}
      aria-label={label}
      className="form-control"
      readOnly
      type="text"
      value={value}
    />
  );
};

InputView.defaultProps = {
  id: undefined,
};

export default InputView;
