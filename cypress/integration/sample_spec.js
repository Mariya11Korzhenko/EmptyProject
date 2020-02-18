/// <reference types="Cypress" />

describe('My First Test', function() {
  it('Visits the Fun Retro site', function() {
      cy.visit('https://funretro.io/')
      cy.get('.home-info .home-button-link').click()
      cy.url().should('include', '/pricing')

      cy.contains('Start Now',{ delay: 100 }).click()
      cy.url().should('include', '/register')

      cy.get('.home-button-secondary').click()

      //click the checkboxes
      const listOfIds = ['#accept-terms', '#accept-subs']
      listOfIds.forEach(id => cy.get(id).click())

//      cy.contains('Google Login').click()
//      cy.get('[autocomplete="username"]').type('fake@email.com')
//       it('cy.window() - get the global window object', () => {
//          // https://on.cypress.io/window
//          cy.window().should('have.property', 'top')
//        })
//
//
//      cy.get('.action-email')
//      .type('fake@email.com')
//      .should('have.value', 'fake@email.com')
//
  })
})