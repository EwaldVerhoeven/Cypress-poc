declare namespace Cypress {
  interface Chainable {
    dataCy(value: string, timeout?: number): Chainable<Element>;
  }
}

Cypress.Commands.add("dataCy", (value, timeout) => {
  cy.get(`[data-cy="${value}"]`, { timeout });
});
