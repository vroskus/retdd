// @flow

type $ApiRoutes = {|
  '/': {|
    params: void,
    response: string,
  |},
  '/quote/get_one': {|
    params: void,
    response: {|
      value: string,
    |},
  |},
  '/quote/get_two': {|
    params: void,
    response: {|
      value: [string, string],
    |},
  |},
|};

export type $ApiRouteParams<ROUTE: string> = $ApiRoutes[ROUTE]['params'];
export type $ApiRouteResponse <ROUTE: string> = $ApiRoutes[ROUTE]['response'];
