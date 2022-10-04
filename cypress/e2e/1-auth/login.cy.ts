describe('Login', () => {
    
    it('should login', () => {
        cy.visit('/login');
        // Set username & password
        cy.getByDefaultSelector('login-username').type('merihsakarya@domain.com');
        cy.getByDefaultSelector('login-password').type('pass1word!');
        // Submit Form
        cy.getByDefaultSelector('login-submit').click();
        // Successfully route to `/` path
        cy.location('pathname', { timeout: 500 }).should('eq', '/');
    })
})