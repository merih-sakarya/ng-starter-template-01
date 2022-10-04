describe('Logout', () => {
    
    beforeEach(() => {
        cy.login();
    })

    it('should logout', () => {
        cy.visit('/');
        // Click to open dropdown menu
        cy.getByDefaultSelector('header-menu').click();
        // Click on logout button in opened dropdown menu
        cy.getByDefaultSelector('header-logout').click();
        // Successfully route to `/login` path
        cy.location('pathname', { timeout: 500 }).should('include', '/login');
    })
})