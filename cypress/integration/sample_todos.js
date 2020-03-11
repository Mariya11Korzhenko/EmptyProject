describe('Add New Item to Todos', function () {

    it('Add New Items to Todos', () => {

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
                cy.get('.view').eq(id).find('.toggle').click();
            }
        });

//Navigate to the Completed tab
        cy.contains('Completed').click();
        cy.url().should('include', '#/completed');

//Verify Completed Items
        cy.get('.todo-list').within(() => {
            listOfTitles.forEach(title => {
            cy.get('li.completed').should('have.length', 3).contains(title);
            })
        });
        cy.get('.clear-completed').click();
        cy.get('.todo-list').should('not.exist');
    });
});