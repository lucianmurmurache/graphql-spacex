describe('Application actions', () => {
    beforeEach(() => {
        cy.visit('https://harveys-spaceships.netlify.app/');
    });

    it('type into search input', () => {
        cy.get('input')
            .type('Just Read The Instructions')
            .should('have.value', 'Just Read The Instructions');
    });

    it('clears search input', () => {
        cy.get('input')
            .type('Just Read The Instructions 2')
            .clear()
            .should('have.value', '');
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
