// @flow

// Global Types
import type {
  $Component,
} from 'utility.types';

// Global Components
import * as React from 'react';

// Components
import Page from '../../layout/Page';
import Input from '../../common/Input';
import Button from '../../common/Button';
import Spinner from '../../common/Spinner';

// Services
import Services from '../../../services';

// Types
export type $Props = {|
|};

type $State = {|
  value: string,
  loading: boolean,
|};

class MainPageView extends React.Component<$Props, $State> {
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

  async getOneQuote(): Promise<void> {
    await this.setStateAsync({
      loading: true,
    });

    const {
      value,
    } = await Services.Api.getOneQuote();

    await this.setStateAsync({
      loading: false,
      value,
    });
  }

  render(): $Component {
    const {
      loading,
      value,
    } = this.state;

    return (
      <Page id="MainPage">
        <div id="QuoteSection" className="container pt-5">
          <div className="card w-50 mx-auto">
            <div className="card-body">
              <h4>
                The quote:
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
                  id="ButtonGetOneQuote"
                  label="Get one quote"
                  onClick={() => this.getOneQuote()}
                />
                {loading === true && <Spinner />}
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default MainPageView;
