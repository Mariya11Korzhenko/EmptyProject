describe('Todos remove Test', function () {
    it('Add and remove items', () => {

// Navigate
        cy.visit('http://todomvc.com/examples/react/#/');
        cy.url().should('include', 'react');

// Enter Items
        const listOfTitles = ['MyFirstTestItem', 'MySecondTestItem', 'MyThirdTestItem'];
        listOfTitles.forEach(title => {
            cy.get('.new-todo').type(title).should('have.value', title);
            cy.get('.new-todo').type('{enter}');
        });
// Verify Items list size; complete 2nd and 3rd items
        cy.get('.todo-list').within(() => {
            cy.get('.view').should('have.length', 3);
            for (let id = 0; id < 3; id++) {
                cy.get('.view').eq(0).find('.destroy').click({force: true});
            }
        });
        cy.get('.todo-list').should('not.exist');
    })
});