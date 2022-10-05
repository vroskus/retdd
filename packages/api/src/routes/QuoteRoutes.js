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
  '/get',
  async (req: $Request, res: $Response) => {
    const quote: string = await Services.Quote.get();

    const responseBody: $ApiRouteResponse<'/quote/get'> = {
      value: quote,
    };

    res.json(responseBody);
  },
);

export default router;
