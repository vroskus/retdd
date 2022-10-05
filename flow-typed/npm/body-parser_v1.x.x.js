// flow-typed signature: 09c78e8e0a764f42b27e28c07db3604f
// flow-typed version: c6154227d1/body-parser_v1.x.x/flow_>=v0.104.x

// @flow

declare type bodyParser$Options = {
  inflate?: boolean,
  limit?: number | string,
  type?: string | string[] | ((req: express$Request) => any),
  verify?: (
    req: express$Request,
    res: express$Response,
    buf: Buffer,
    encoding: string
  ) => void,
  ...
};

declare type bodyParser$OptionsText = bodyParser$Options & {
  reviver?: (key: string, value: any) => any,
  strict?: boolean,
  ...
};

declare type bodyParser$OptionsJson = bodyParser$Options & {
  reviver?: (key: string, value: any) => any,
  strict?: boolean,
  ...
};

declare type bodyParser$OptionsUrlencoded = bodyParser$Options & {
  extended?: boolean,
  parameterLimit?: number,
  ...
};

declare module "body-parser" {
  declare type Options = bodyParser$Options;
  declare type OptionsText = bodyParser$OptionsText;
  declare type OptionsJson = bodyParser$OptionsJson;
  declare type OptionsUrlencoded = bodyParser$OptionsUrlencoded;

  declare function json(options?: OptionsJson): express$Middleware<express$Request, express$Response>;

  declare function raw(options?: Options): express$Middleware<express$Request, express$Response>;

  declare function text(options?: OptionsText): express$Middleware<express$Request, express$Response>;

  declare function urlencoded(options?: OptionsUrlencoded): express$Middleware<express$Request, express$Response>;
}
