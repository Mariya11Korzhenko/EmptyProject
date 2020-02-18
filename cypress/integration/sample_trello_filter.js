describe('Filter Test', function() {
   it('Visible Trello site', ()=> {

// Navigate
       cy.visit('https://trello.com/')
       cy.url().should('include', 'trello.com')
       cy.get('[href="/login"]').click()
       cy.url().should('include', '/login')

// Google account login
       cy.get('#google-link').click()
       cy.url().should('include', 'mary_korzhenko/boards')

// Filter and navigate to the Retrospective Automation board
       cy.get('[data-test-id="header-boards-menu-button"]').click()


       cy.get('[data-test-id="header-boards-menu-popover"]').within(() => {
       cy.get('[name="search-boards"]').type('Retro')
       cy.should('have.value','Retro')
       cy.contains('Retrospective Automation').should('be.visible')
       cy.contains('Retrospective Automation').click()
       })

       cy.get('.board-header-btn-text').should('be.visible')

//      'Logout'
      cy.get('[data-test-id=header-member-menu-button').click()
      cy.get('[data-test-id=header-member-menu-logout').should('be.visible').click()
      cy.get('[data-track-group="Logged Out"]').should('be.visible')
       })
     })