describe('Login as existing Users ', () => {

    beforeEach(() => {
        cy.visit('https://www.artsyjewels.com/');
    });

    it('Login as Cypress User', () => {
        cy.get('.jas-col-md-2.jas-col-sm-3 > .jas-action > .jas-my-account > .cb > .pe-7s-user').click();
        cy.get('#usernamelogin').type('cypressTest@test.com');
        cy.get('#passwordlogin').type('CypressTest1234');
        cy.get('#customer_login_side > p:nth-child(6) > input').click();
        cy.queryAllByText('Cypress Test').should('exist')
    });

});

// Login as existing Users 
// Login with

// Username : Cypress Test User
// Password: CypressTest1235