import BasePageObject from "./base.po";
import { woontype } from "../../utils/types";

interface AutoFields {
  straat: string;
  woonplaats: string;
  gemeente: string;
  land: string;
  woontype: woontype;
}

class AdresToevoegenPageObject extends BasePageObject {
  readonly adres = {
    postcodeInput: () => cy.get("[id='form:zipCodeIt:zipCodeIt']"),
    huisnummerInput: () => cy.get("[id='form:homeNumberIt:homeNumberIt']"),
    straatnaamInput: () => cy.get("[id='form:streetIt:streetIt']"),
    woonplaatsInput: () => cy.get("[id='form:cityIt:cityIt']"),
    gemeenteInput: () => cy.get("[id='form:municipalityIt:municipalityIt']"),
    landInput: () => cy.get("[id='form:countrySom:countrySom_label']"),
    woontypeInput: () => cy.get("[id='form:j_idt277:j_idt277_label']"),
  };

  readonly contactInformatie = {};

  readonly extraInformatie = {
    toelichtingWoonsituatieInput: () =>
      cy.get("[id='form:situationDescription:situationDescription']"),
  };

  readonly header = {
    pageHeader: () => cy.get(".page-title"),
    buttons: {
      annulerenButton: () => cy.get("#form:cancelBtn > .ui-button-text"),
      opslaanButton: () => cy.get("button[id='form:saveBtn']").scrollIntoView(),
    },
  };

  enterNewClientAdress(postcode: string, huisnummer: string): void {
    this.adres.postcodeInput().should("be.visible").type(postcode);
    this.adres.huisnummerInput().should("be.visible").type(huisnummer);
    //testing that zipcode API gets called
  }

  expectAutoFilledFields(adres: AutoFields) {
    //Test that certain fields are correctly (auto) filled
    this.adres
      .straatnaamInput()
      .should("be.visible")
      .and("have.value", adres.straat);
    this.adres
      .woonplaatsInput()
      .should("be.visible")
      .and("have.value", adres.woonplaats);
    this.adres
      .gemeenteInput()
      .should("be.visible")
      .and("have.value", adres.gemeente);
    this.adres.landInput().should("be.visible").and("have.text", adres.land);
    this.adres
      .woontypeInput()
      .should("be.visible")
      .and("have.text", adres.woontype);
  }

  saveNewAdress() {
    this.header.buttons.opslaanButton().should("be.visible").click();
  }
}

export default new AdresToevoegenPageObject();
