context('Window', () => {
    beforeEach(() => {
        cy.visit('https://harveys-spaceships.netlify.app/');
    });

    it('get the app title', () => {
        cy.title().should('eq', "Harvey's Spaceships");
    });

    it('get the global window property', () => {
        cy.window().should('have.property', 'top');
    });

    it('get the document (charset) property', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    });
});
