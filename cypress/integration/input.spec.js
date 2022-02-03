describe('Search input', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('focuses input on load', () => {
        cy.focused().should('have.class', 'search-input');
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
});
