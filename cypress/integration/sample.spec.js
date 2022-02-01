describe('Kitchen Sink Test', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io');
    });

    it('finds the app title', () => {
        cy.contains('Kitchen Sink');
    });

    it('finds the content "Commands"', () => {
        cy.contains('Commands');
    });

    it('finds the available subcontent within "Commands"', () => {
        cy.contains('Querying');
        cy.contains('Traversal');
        cy.contains('Actions');
        cy.contains('Window');
        cy.contains('Location');
        cy.contains('Navigation');
        cy.contains('Assertions');
        cy.contains('Misc');
        cy.contains('Connectors');
        cy.contains('Aliasing');
        cy.contains('Waiting');
        cy.contains('Network Requests');
        cy.contains('Files');
        cy.contains('Local Storage');
        cy.contains('Cookies');
        cy.contains('Spies, Stubs & Clocks');
    });

    it('finds the content "Utilities"', () => {
        cy.contains('Utilities');
    });

    it('finds the content "Cypress API"', () => {
        cy.contains('Cypress API');
    });
});
