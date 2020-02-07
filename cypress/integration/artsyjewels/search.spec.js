describe('Login as existing Users ', () => {

    beforeEach(() => {
        cy.visit('https://www.artsyjewels.com/');
    });

    it('Search from Homepage', () => {
        cy.get('.search > [type="text"]').type('Bracelet');
        cy.get('.search > [type="submit"]').click();
        cy.queryAllByText('178 results for "Bracelet"').should('exist')
    });

    it('Search from the Search Menu', () => {
        cy.get('.pe-7s-search').click();
        cy.get('#q').type('Rings {enter}');
    });

});


// Go to Home Page
// On the Top banner

// Click the Search Button
// Enter Bracelet
// Click Search Button
// Search page for a specificed search term should display

// 2	
// On the Menu Header

// Click on the Search Icon
// Enter Rings
// Click Search Icon.
// Search result page for query Rings should display.