### Getting started

First install the node project: `npm i`

Then check the following things:

- Make sure to have a file (ignored by git) `cypress.env.json` containing the object and values from the `cypres.env.EXAMPLE.json`. Copy them in and change the values.
- Check the 'baseUrl' in the `cypress.config.ts` to ensure you are testing the desired environment.

To run tests in headed-mode first open the test runner using the npm script `npm run cy:open`. Select 'e2e' testing and click on the test you'd like to run.

To run tests headless just use `npm run cy:headless:all`.
