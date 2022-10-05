// @flow

import app from './app';

// Types
export * from './types';

const port = Number(process.env.PORT) || 8080;
const packageName = process.env.npm_package_name || '';
const packageVersion = process.env.npm_package_version || '';

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`${packageName}:${packageVersion} is listening on ${port}`);
});
