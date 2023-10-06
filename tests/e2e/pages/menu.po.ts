import BasePageObject from "./base.po";

class MenuPageObject extends BasePageObject {
  readonly menuItems = {
    dashboardButton: () => cy.get("#menu-icon-Dashboard"),
    cliëntButton: () => cy.get("#menu-icon-Cliënt"),
  };

  navigateToClientPage(): void {
    this.menuItems.cliëntButton().should("be.visible").click();
    this.page.title().should("eq", "Cliëntzoeken");
  }
}

export default new MenuPageObject();
