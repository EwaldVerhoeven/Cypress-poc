import { auth } from "./pages";
import { cliëntSearch } from "./pages";

context("initialize", () => {
  before(function () {
    // cy.fixture("my_fixture.json").then((testobject) => {
    //   const timestamp = Date.now();
    //   this.testdata = {
    //     ...testobject,
    //     object1: {
    //       ...testobject.object1,
    //       nestedItem1: `${testobject.object1.nestedItem1}-${timestamp}`,
    //       nestedItem2: `${testobject.object1.nestedItem1}-${timestamp}`,
    //     },
    //   };
    // });
    auth.login();
  });
  it("I lookup a client to add and alter data", function () {
    
    cy.wait(5000);
  });
});
