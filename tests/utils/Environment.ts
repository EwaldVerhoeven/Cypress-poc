class Environment {
  readonly isLocalEnvironment = () =>
    Cypress.config("baseUrl") !== null &&
    Cypress.config("baseUrl")?.includes("localhost") === true;
}

export default new Environment();
