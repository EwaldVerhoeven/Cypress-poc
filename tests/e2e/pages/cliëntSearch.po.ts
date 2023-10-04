import BasePageObject from "./base.po";

class CliëntSearchPageObject extends BasePageObject {
  readonly lijstWeergave = {
    zoekenInput: () => cy.get("#form:client-search-tab:clientSearchInput"),
    zoekenIcon: () => cy.get("#form:client-search-tab:j_idt161"),
  };
}

export default new CliëntSearchPageObject();
