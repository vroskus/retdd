# Reverse Enforced Test Driven Development

The demo code used for the presentation.

> The presentation aim is to show how test coverage can be used as a validation parameter to enforce writing tests on code update.

## Requirements

- git
- docker-compose
- yarn

## Starting the applications

```
docker-compose up
```

The WEB (client-side) application can be found here: [http://localhost:8001](http://localhost:8001)

The API (server-side) application can be found here: [http://localhost:8002/v1.0/quote/get_one](http://localhost:8002/v1.0/quote/get_one)

## Running tests on applications

Just change dir into a particular application root folder:

```
cd packages/<api|web>
```

and execude the test command:

```
yarn test
```

## The presentation

1. Stage: Running the tests should pass, no changes to the coverage thresholds should be made.
2. Stage: The `update-code` branch should be checked out. Running tests on this code should pass them but fail on test code coverage against saved global thresholds comparison.
3. Stage: The `update-tests` branch should be checked out. Running tests on this code should be succesful also the coverage should meet the threholds and event should bump them.

## Libraries used

For the API (server-side) application:

- Test framework: [jest](https://jestjs.io), [supertest](https://www.npmjs.com/package/supertest)
- Code instrumentation: [babel-plugin-istanbul](https://www.npmjs.com/package/babel-plugin-istanbul) (by jest --coverage)
- Coverage report generator: [nyc](https://www.npmjs.com/package/nyc) (by jest --coverage)
- Coverage comparator: jest (by jest --coverage)
- Covarage bumber: [jest-coverage-thresholds-bumper](https://www.npmjs.com/package/jest-coverage-thresholds-bumper)

For the WEB (client-side) application:

- Test framework: [Cypress](https://www.cypress.io), [cra](https://create-react-app.dev)
- Code instrumentation: [@cypress/instrument-cra
](https://www.npmjs.com/package/@cypress/instrument-cra) (uses babel-plugin-istanbul)
- Coverage report generator: [@cypress/code-coverage
](https://www.npmjs.com/package/@cypress/code-coverage) (uses nyc)
- Coverage comparator: [@vroskus/compare-coverage-thresholds](https://www.npmjs.com/package/@vroskus/compare-coverage-thresholds)
- Covarage bumber: [jest-coverage-thresholds-bumper](https://www.npmjs.com/package/jest-coverage-thresholds-bumper)
