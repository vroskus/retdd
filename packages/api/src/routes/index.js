// @flow

// Global Types
import type {
  $Application,
  $Request,
  $Response,
} from 'utility.types';

import {
  apiVersion,
} from '../config';

// Routes
import quoteRoutes from './QuoteRoutes';

export default (app: $Application) => {
  app.get('/', (req: $Request, res: $Response) => {
    res.send('API works!');
  });
  app.use(`/${apiVersion}/quote`, quoteRoutes);
};
