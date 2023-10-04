import BasePageObject from "./base.po";

class MenuPageObject extends BasePageObject {
  readonly menuItems = {
    dashboardButton: () => cy.get("#menu-icon-Dashboard"),
    cliëntButton: () => cy.get("#menu-icon-Cliënt"),
  };

  navigetToCliëntpage(cliëntName: string): void {
    this.menuItems.cliëntButton().should("be.visible").click();
  }
}

export default new MenuPageObject();
