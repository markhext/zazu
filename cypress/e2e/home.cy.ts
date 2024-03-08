describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");

    const input = cy.get("input");

    input.should("have.value", "0");

    input.type("71");

    input.should("have.value", "71");
  });
});
