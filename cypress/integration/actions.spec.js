describe('Application actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('adds all ships to list of favourites', () => {
        cy.get('a[href*="#favList"]')
            .click({ multiple: true })
            .invoke('attr', 'aria-label')
            .should('eq', 'Remove from favourites');
    });

    it('removes all ships from list of favourites', () => {
        cy.get('a[href*="#favList"]')
            .dblclick({ multiple: true })
            .invoke('attr', 'aria-label')
            .should('eq', 'Add to favourites');
    });
});
