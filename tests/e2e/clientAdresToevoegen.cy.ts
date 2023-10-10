import {
  adresToevoegen,
  adressenOverzicht,
  auth,
  clientZoeken,
  menu,
  client,
} from "./pages";

describe("initialize", () => {
  before(function () {
    cy.fixture("clientData.json").then((data) => {
      const timestamp = Date.now();
      this.testdata = {
        ...data,
        nestedItem1: `E2E-Timestamp-${timestamp}`,
      };
    });
    auth.login();
  });
  after(() => {
    adressenOverzicht.removeAllAdresses(); // TODO: Refactor to API request.
  });
  it("I lookup a client to add a new adress", function () {
    // searching and selecting a client
    menu.navigateToClientPage();
    clientZoeken.searchClient(this.testdata.client.nummer);
    clientZoeken.selectTopClientInSearchResults(
      this.testdata.client.achternaam,
    );
    // adding an adress
    client.navigateToAlgemeen();
    client.openAdressToevoegenPage();
    adresToevoegen.enterNewClientAdress(
      this.testdata.client.nieuwAdres.postcode,
      this.testdata.client.nieuwAdres.huisnummer,
    );
    adresToevoegen.expectAutoFilledFields({
      straat: this.testdata.client.nieuwAdres.straat,
      woonplaats: this.testdata.client.nieuwAdres.woonplaats,
      gemeente: this.testdata.client.nieuwAdres.gemeente,
      land: this.testdata.client.nieuwAdres.land,
      woontype: this.testdata.client.nieuwAdres.woontype,
    });
    adresToevoegen.saveNewAdress();
  });
});
