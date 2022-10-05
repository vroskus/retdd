// @flow

import * as React from 'react';

import type {
  $Application as Application,
  $Request as Request,
  $Response as Response,
  Middleware,
  NextFunction,
  Router,
} from 'express';

import type {
  ContextRouter,
  Location,
} from 'react-router-dom';

export type $WebRouter = ContextRouter;
export type $Location = Location;

export type $Component = React.Element<*>;
export type $Components = React.ChildrenArray<React.Node>;
export type $ConnectedComponent<P> = React$ComponentType<P>;
export type $RoutedComponent<C> = React$ComponentType<$Diff<
  React$ElementConfig<C>, $WebRouter,
>>;

export type $LocalStorage = Storage;

export type $Request = Request;

export type $Response = Response;

export type $Router = Router<$Request, $Response>;

export type $Application = Application<$Request, $Response>;

export type $Middleware = Middleware<$Request, $Response>;

export type $Next = NextFunction;
