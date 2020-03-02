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

    it.skip('Add New Board site', ()=> {
  // Navigate
         cy.visit('https://trello.com/')
         cy.url().should('include', 'trello.com')
         cy.get('[href="/login"]').click()
         cy.url().should('include', '/login')

  // Google account login
         cy.get('#google-link').click()
         cy.url().should('include', 'mary_korzhenko/boards')

  // Filter and navigate to the Retrospective Automation board

      cy.get('.board-tile.mod-add').click()
      cy.get('.create-board-form').should('be.visible')
      cy.get('.create-board-form').within(() => {
      const listOfIds = cy.get('.background-grid').find('li')
      listOfIds.should('have.length',9)


      cy.get('[data-test-id="create-board-title-input"]')
           .type('fake@email.com').should('have.value', 'fake@email.com')
             .clear()
                 .should('have.value', '')
                  .type('AutoTestBoard').should('have.value', 'AutoTestBoard')

      cy.get('.subtle-chooser-trigger').click()
      })
      cy.get('.pop-over-content').find('ul').find('li:last').click()
      cy.get('.public-confirmation-button').find('[type="submit"]').click()
      cy.get('[data-test-id="create-board-submit-button"]').click()

      cy.wait(2000)
      cy.get('.board-menu-header-back-button', ).click()
      cy.get('.js-open-more').click()
      cy.get('.js-close-board').click()
      cy.get('.js-confirm[type="submit"]').click()


    //    'Logout'
        cy.get('[data-test-id=header-member-menu-button').click()
        cy.get('[data-test-id=header-member-menu-logout').should('be.visible').click()
        cy.get('[data-track-group="Logged Out"]').should('be.visible')
         })
})