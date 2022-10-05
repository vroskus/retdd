// @flow

// Global Types
import type {
  $Component,
} from 'utility.types';

// Global Components
import * as React from 'react';

// Components
import Page from '../../layout/Page';
import QuoteSection from '../../sections/MainPageSections/QuoteSection';

const MainPageView = function (): $Component {
  return (
    <Page id="MainPage">
      <QuoteSection />
    </Page>
  );
};

export default MainPageView;
