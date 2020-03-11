/// <reference types="Cypress" />

describe('My First Test', function() {
     it('Visits the Fun Retro site - Free trial', function() {
      cy.visit('https://funretro.io/')
      cy.get('.home-info .home-button-link').click()
      cy.url().should('include', '/pricing')

      cy.contains('Start Now',{ delay: 100 }).click()
      cy.url().should('include', '/register')

      cy.get('.home-button-secondary').click()

      //click the checkboxes
      const listOfIds = ['#accept-terms', '#accept-subs']
      listOfIds.forEach(id => cy.get(id).click())
      })

     it('Visits the Fun Retro site - Team', function() {
         cy.visit('https://funretro.io/')
         cy.get('.home-info .home-button-link').click()
         cy.url().should('include', '/pricing')
         cy.get('.pricing-title').contains('Try FunRetro with a 14 day free trial with paid plans')

         cy.get('.ng-untouched.ng-valid').should('have.class', 'ng-empty').should('not.have.class', 'ng-not-empty')
         cy.get('#MaterialToggleRed').check({force: true})

         cy.get('.pricing-title.ng-binding').contains('Two months for free with annual paid plans')
         cy.get('.ng-untouched.ng-valid').should('have.class', 'ng-not-empty').should('not.have.class', 'ng-empty')

         cy.get('.tiers').within(() => {
         cy.get('div.tier').should('have.length', 4).eq(1).find('.pricing-button').click()
         })

         cy.get('.swal2-popup').should('be.visible')
         const listOfIds = ['#accept-terms', '#accept-subs']
         listOfIds.forEach(id => cy.get(id).click())

         cy.get('.swal2-close').click()
         cy.get('.swal2-popup').should('not.be.visible')

})
})