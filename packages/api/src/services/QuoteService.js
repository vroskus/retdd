// @flow

// Helpers
import _ from 'lodash';

// Types
export type $Config = {|
  data: Array<string>,
|};

class QuoteService<C: $Config> {
  data: Array<string>;

  constructor({
    data,
  }: C) {
    this.data = data;
  }

  async getQuote(): Promise<string> {
    return _.sample(this.data);
  }
}

export default QuoteService;
