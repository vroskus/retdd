// @flow

// Types
import type {
  $Request,
  $Response,
  $Router,
} from 'utility.types';

// Helpers
import express from 'express';

// Services
import Services from '../services';

// Types
import type {
  $ApiRouteResponse,
} from '../types';

const router: $Router = express.Router();

router.get(
  '/get_one',
  async (req: $Request, res: $Response) => {
    const quote: string = await Services.Quote.getQuote();

    const responseBody: $ApiRouteResponse<'/quote/get_one'> = {
      value: quote,
    };

    res.json(responseBody);
  },
);

export default router;
