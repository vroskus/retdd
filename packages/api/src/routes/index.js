// @flow

// Global Types
import type {
  $Application,
} from 'utility.types';

import {
  apiVersion,
} from '../config';

// Routes
import quoteRoutes from './QuoteRoutes';

export default (app: $Application) => {
  app.use(`/${apiVersion}/quote`, quoteRoutes);
};
