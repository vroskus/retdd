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

  describe('#ButtonGetQuote', () => {
    it('should be visible', () => {
      cy.get('#ButtonGetQuote')
        .should('be.visible');
    });

    it('should get new quote and show it in #InputQuote', () => {
      cy.get('#ButtonGetQuote')
        .click();

      cy.get('#InputQuote')
        .should('have.value', 'Test quote');
    });
  });
});
