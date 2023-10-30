import BasePageObject from "./base.po";

class AdressenOverzichtPageObject extends BasePageObject {
  readonly table = {
    selectAllItems: () => cy.get("[id='form:addressTable:j_idt179']"),
  };

  readonly controlButtons = {
    verwijderenButton: () => cy.get("[id='form:j_idt176']"),
    prompt: {
      verwijderenConfirm: () => cy.get("[id='form:addressTable:0:j_idt208']"),
    },
  };

  removeAllAdresses(): void {
    this.table.selectAllItems().should("be.visible").click();
    this.controlButtons.verwijderenButton().should("be.visible").click();
    this.controlButtons.prompt
      .verwijderenConfirm()
      .should("be.visible")
      .click();
  }
}

export default new AdressenOverzichtPageObject();
