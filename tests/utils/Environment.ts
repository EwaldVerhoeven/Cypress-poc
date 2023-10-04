class Environment {
  /* eslint-disable class-method-use-this */
  readonly isLocalEnvironment = () =>
    Cypress.config("baseUrl") !== null &&
    Cypress.config("baseUrl")?.includes("localhost") === true;
}

export default new Environment();
