import BasePageObject from "./base.po";
import { adresToevoegen } from ".";

class ClientPageObject extends BasePageObject {
  readonly menu = {
    Algemeen: () =>
      cy.get('[href="/client/470/view?tabidx=1"] > .sidebar-item'),
  };

  readonly header = {
    clientName: () => cy.get(".client-header-title > .ui-link"),
  };

  readonly adressen = {
    plusIcon: () => cy.get(":nth-child(2) > h2 > .toolbar-right > .plus-link"),
  };

  navigateToAlgemeen(): void {
    this.menu.Algemeen().should("be.visible").click();
    this.page.title().should("eq", "Algemeen");
  }

  openAdressToevoegenPage(): void {
    this.adressen.plusIcon().should("be.visible").click();

    adresToevoegen.page.title().should("eq", "Adres toevoegen");
    adresToevoegen.header
      .pageHeader()
      .invoke("text")
      .should("contain", "Adres toevoegen");
  }
}

export default new ClientPageObject();
