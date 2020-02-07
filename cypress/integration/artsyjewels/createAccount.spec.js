describe('Create an Account', () => {

    beforeEach(() => {
        cy.visit('https://www.artsyjewels.com/');
    });

    it('User should be able to Register for a new account button', () => {
        // My account Button
        cy.get('.jas-col-md-2.jas-col-sm-3 > .jas-action > .jas-my-account > .cb > .pe-7s-user').click();
    });

    it('Enter a new User Information', () => {
        cy.get('#hideFormLogin').click();
        cy.get('#FirstName1').type('Cypress');
        cy.get('#LastName1').type('Test');
        cy.get('#reg_emailSide').type('cypressTest@test.com');
        cy.get('#reg_passwordSide').type('CypressTest1234');
        cy.get('#register_side > p:nth-child(8) > input').click();
    });

});

// Go to the home page - done 
// Click on the GUY/GIRL There - done 
// Input User Information on the popup - done  
// Hit Register. - DONEE!!!!!