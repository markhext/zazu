describe("Prime Number Appliction", () => {
  it("Should accept user input and indicate the value is NOT a prime number", () => {
    cy.visit("/");

    const input = cy.get("input");

    input.should("have.value", "0");

    input.type("6");

    input.should("have.value", "6");

    cy.get("#prime-badge").contains("THIS IS NOT A PRIME NUMBER");
  });

  it("Should Accept a user input and indicate the value IS a Prime number", () => {
    cy.visit("/");

    const input = cy.get("input");

    input.type("7");

    cy.get("#prime-badge").contains("THIS IS A PRIME NUMBER");
  });

  it("Should show the Next and Previous Prime numbers", () => {
    cy.visit("/");

    const input = cy.get("input");

    input.type("71"); // IS A PRIME NUMBER

    cy.get("#next-prime-number").contains("73");
    cy.get("#previous-prime-number").contains("67");
  });
});
