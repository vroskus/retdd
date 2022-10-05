// @flow

// Global Types
import type {
  $Component,
} from 'utility.types';

// Global Components
import * as React from 'react';

// Components
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import Spinner from '../../../common/Spinner';

// Services
import Services from '../../../../services';

// Types
export type $Props = {|
|};

type $State = {|
  value: string,
  loading: boolean,
|};

class QuoteSectionView extends React.Component<$Props, $State> {
  constructor(props: $Props) {
    super(props);

    this.state = {
      loading: false,
      value: '',
    };
  }

  setStateAsync(state: $Shape<$State>): Promise<void> {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getQuote(): Promise<void> {
    try {
      await this.setStateAsync({
        loading: true,
      });

      const {
        value,
      } = await Services.Api.getQuote();

      await this.setStateAsync({
        loading: false,
        value,
      });
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.error(error); // This should be error logger

      await this.setStateAsync({
        loading: false,
      });
    }
  }

  render(): $Component {
    const {
      loading,
      value,
    } = this.state;

    return (
      <div id="QuoteSection" className="container pt-5">
        <div className="card w-50 mx-auto">
          <div className="card-body">
            <h4>
              Quote by Kanye West
            </h4>
            <div className="mb-3">
              <Input
                id="InputQuote"
                label="Quote"
                value={value}
              />
            </div>
            <div className="d-flex gap-2">
              <Button
                className="btn-success"
                id="ButtonGetQuote"
                label="Get quote"
                onClick={() => this.getQuote()}
              />
              {loading === true && <Spinner />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteSectionView;
