// @flow

// Global Types
import type {
  $Application,
} from 'utility.types';

// Helpers
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import config from '../config';

const middlewares = {
  after: () => {
  },
  before: (app: $Application) => {
    app.set('trust proxy', 1);
    app.use(bodyParser.urlencoded({
      extended: true,
    }));
    app.use(bodyParser.json());
    app.use(cors({
      origin: config.WEB_URL,
    }));
    app.use(compression());
  },
};

export default middlewares;
