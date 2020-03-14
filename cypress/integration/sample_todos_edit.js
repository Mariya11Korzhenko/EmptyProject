describe('Todos Edit Test', function() {
   it('Add and edit items', ()=> {

// Navigate
        cy.visit('http://todomvc.com/examples/react/#/');
        cy.url().should('include', 'react');

// Enter Items
        const listOfTitles = ['MyFirstTestItem', 'MySecondTestItem', 'MyThirdTestItem'];
        listOfTitles.forEach(title => {
            cy.get('.new-todo').type(title).should('have.value', title);
            cy.get('.new-todo').type('{enter}');
        });

//Verify Entered Items
         cy.get('.todo-list').within(() => {
         cy.get('.view').should('have.length', 3);
                listOfTitles.forEach(title => {
                cy.get('.view > label').contains(title);
                })
         });

//Edit items
         const listOfNewTitles = ['MyFirstNewTestItem', 'MySecondNewTestItem', 'MyThirdNewTestItem'];

         cy.get('.todo-list').within(() => {

         for (let id = 0; id < 3; id++) {
                  cy.get('.view').eq(id).dblclick();
                  cy.get('.editing').find('input.edit').clear().type(listOfNewTitles[id]).type('{enter}');
                }
            });


//Verify Edited Items
         cy.get('.todo-list').within(() => {
         cy.get('.view').should('have.length', 3);
               listOfNewTitles.forEach(title => {
               cy.get('.view > label').contains(title);
               })
            });

//Navigate to the Active tab
                    cy.contains('Active').click();
                    cy.url().should('include', '#/active');

//Verify Edited Items are displayed in the Active tab
                  cy.get('.todo-list').within(() => {
                  cy.get('.view').should('have.length', 3);
                        listOfNewTitles.forEach(title => {
                        cy.get('.view > label').contains(title);
                     })
             });
          });
      });
