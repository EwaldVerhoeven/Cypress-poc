import BasePageObject from "./base.po";
import environment from "../../utils/Environment";

class LoginPageObject extends BasePageObject {
  readonly loginPage = {
    inloggenMetGebruikersnaamButton: () =>
      cy.get(".expand-traditional-login > a"),
    gebruikersnaamInput: () => cy.get("#username"),
    wachtwoordInput: () => cy.get(".password"),
    aanmeldenButton: () => cy.get("form > .login-button"),
  };

  readonly twoFactorAuth = {
    vulCodeInInput: () => cy.get(".token"),
    validerenButton: () => cy.get(".verify-button"),
  };

  login(): void {
    this.loginBase(
      Cypress.env("QAUSERNAME"),
      Cypress.env("QAUSERPASSWORD"),
      Cypress.env("2FA"),
    );
  }

  private loginBase(
    userName: string,
    password: string,
    twoFactorCode: string,
  ): void {
    cy.visit("");
    if (!environment.isLocalEnvironment()) {
      this.loginPage
        .inloggenMetGebruikersnaamButton()
        .should("be.visible")
        .click();
      this.loginPage.gebruikersnaamInput().should("be.visible").type(userName);
      this.loginPage.wachtwoordInput().should("be.visible").type(password);
      this.loginPage.aanmeldenButton().should("be.visible").click();

      this.twoFactorAuth
        .vulCodeInInput()
        .should("be.visible")
        .type(twoFactorCode);
      this.twoFactorAuth.validerenButton().should("be.visible").click();

      this.page.title().should("eq", "Dashboard");
    }
  }
}

export default new LoginPageObject();
