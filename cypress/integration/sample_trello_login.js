describe('Login Test', function() {
  it('Visible Trello site', function() {
      cy.visit('https://trello.com/')
      cy.url().should('include', 'trello.com')
      cy.get('[href="/login"]').click()
      cy.url().should('include', '/login')


//      'Login using Google account'
      cy.get('#google-link').click()
      cy.url().should('include', 'mary_korzhenko/boards')


//      'Verify that User Board page is displayed'
      cy.get('.boards-page-board-section-header-name').should('be.visible')


//      'Logout'
      cy.get('[data-test-id=header-member-menu-button').click()
      cy.get('[data-test-id=header-member-menu-logout').should('be.visible').click()
      cy.get('[data-track-group="Logged Out"]').should('be.visible')

      })
    })