// @flow

// Global Types
import type {
  $Application,
} from 'utility.types';

// Helpers
import express from 'express';

// Middlewares
import middlewares from './middlewares';

// Routes
import routes from './routes';

const app: $Application = express();

middlewares.before(app);
routes(app);
middlewares.after();

export default app;
