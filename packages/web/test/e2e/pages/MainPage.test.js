context('#MainPage', () => {
  before(() => {
    cy.visit('/');
  });

  it('should be visible', () => {
    cy.get('#MainPage')
      .should('be.visible');
  });

  describe('#QuoteSection', () => {
    it('should be visible', () => {
      cy.get('#QuoteSection')
        .should('be.visible');
    });
  });

  describe('#ButtonGetOneQuote', () => {
    it('should be visible', () => {
      cy.get('#ButtonGetOneQuote')
        .should('be.visible');
    });

    it('should get one quote and show it in #InputQuote', () => {
      cy.get('#ButtonGetOneQuote')
        .click();

      cy.get('#InputQuote')
        .should('have.text', 'Test quote');
    });
  });

  describe('#ButtonGetTwoQuote', () => {
    it('should be visible', () => {
      cy.get('#ButtonGetTwoQuote')
        .should('be.visible');
    });

    it('should get two quotes and show them in #InputQuote', () => {
      cy.get('#ButtonGetTwoQuote')
        .click();

      cy.get('#InputQuote')
        .should('have.text', 'Test quote\n\nTest quote');
    });
  });
});
