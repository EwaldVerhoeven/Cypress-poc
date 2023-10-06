import BasePageObject from "./base.po";

class AdresGegevensPageObject extends BasePageObject {
    readonly table = {
        selectAllItems: () => cy.get('#form\:addressTable\:j_idt173 > .ui-chkbox > .ui-chkbox-box > .ui-chkbox-icon'),
    }

    readonly controlButtons = {
        // removeButton: () => 
    }

    removeAllAdresses(): void {
        this.table.selectAllItems().click();

    }
}

export default new AdresGegevensPageObject();