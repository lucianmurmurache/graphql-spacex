describe('Application ship cards', () => {
    beforeEach(() => {
        cy.visit('https://harveys-spaceships.netlify.app/');
    });

    it('finds the first ship by name', () => {
        cy.contains('GO Ms Tree');
    });
    it('finds the "Just Read The Instructions 2" ship by name', () => {
        cy.contains('Just Read The Instructions 2');
    });

    it('finds the "add to favourites" button', () => {
        cy.title('Add to favourites');
    });

    it('the "add to favourites" button has a href', () => {
        cy.get('a[href*="#favList"]').should('have.attr', 'href', '#favList');
    });

    it('finds the ship status', () => {
        cy.contains('Active');
        cy.contains('Inactive');
    });

    it('finds the total number of missions', () => {
        cy.contains('Total number of missions:');
    });

    it('finds the "More details" anchor', () => {
        cy.contains('More details');
    });
});
