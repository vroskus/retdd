// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  cy.setCookie('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3YjE0NGM3LWI4YjktNGNkNy1hYjM4LWViYmRmYjQ3ZWJjYyIsInNjb3BlIjpbXSwiaWF0IjoxNTY5ODQ1MTMzLCJleHAiOjI1MjQ2MDgwMDB9.K3zey0-aLyJMZEobry-mgf3R9BqEEJkVJ_KqyKjPQ_I');
});

Cypress.Commands.add('logout', () => {
  cy.clearCookie('accessToken');
});
