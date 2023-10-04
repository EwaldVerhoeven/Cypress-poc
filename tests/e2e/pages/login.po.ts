import BasePageObject from "./base.po";
import environment from "../../utils/Environment";

class LoginPageObject extends BasePageObject {
  readonly loginPage = {
    inloggenMetGebruikersnaamButton: () =>
      cy.get(".expand-traditional-login > a").should("be.visible"),
    gebruikersnaamInput: () => cy.get("#username").should("be.visible"),
    wachtwoordInput: () => cy.get(".password").should("be.visible"),
    aanmeldenButton: () => cy.get("form > .login-button").should("be.visible"),
  };

  login(): void {
    this.loginBase(Cypress.env("QAUSERNAME"), Cypress.env("QAUSERPASSWORD"));
  }

  private loginBase(userName: string, password: string): void {
    cy.visit("");
    if (!environment.isLocalEnvironment()) {
      this.loginPage.inloggenMetGebruikersnaamButton().click();
      this.loginPage.gebruikersnaamInput().type(userName);
      this.loginPage.wachtwoordInput().type(password);
      this.loginPage.aanmeldenButton().click();
      this.page.title().should("eql", "Dashboard");
    }
  }
}

export default new LoginPageObject();
