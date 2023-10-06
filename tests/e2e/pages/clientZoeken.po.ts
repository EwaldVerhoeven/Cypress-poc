import BasePageObject from "./base.po";
import { client } from ".";

class ClientZoekenPageObject extends BasePageObject {
  readonly lijstWeergave = {
    zoekenInput: () =>
      cy.get("[id='form:client-search-tab:clientSearchInput']"),
    zoekenIcon: () => cy.get("[id='form:client-search-tab:j_idt161']"),
    searchResults: {
      topRow: () => cy.get("tr[data-ri='0']"),
    },
  };

  searchClient(searchValue: string): void {
    this.lijstWeergave.zoekenInput().should("be.visible").type(searchValue);
    this.lijstWeergave.zoekenIcon().should("be.visible").click();
  }

  selectTopClientInSearchResults(clientName: string): void {
    this.lijstWeergave.searchResults.topRow().should("be.visible").click();

    // testing that we now are on the 'overzicht' page seeing the clients data
    this.page.title().should("eq", "Overzicht");
    client.header.clientName().should("be.visible").contains(clientName);
  }
}

export default new ClientZoekenPageObject();
