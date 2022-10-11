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

    it('should get new quote and show it in #InputQuote', () => {
      cy.get('#ButtonGetOneQuote')
        .click();

      cy.get('#InputQuote')
        .should('have.text', 'Test quote');
    });
  });
});
