/// <reference types="cypress" />
// ***********************************************
// Cypress comes with its own API for creating custom commands and overwriting existing commands.
// Examples of custom commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/*
 * We should add every command to the existing Cypress interface!
 * Alternatively, you can create an './index.d.ts' file and move the following code in it.
 */
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command for login.
       * @example cy.login()
       */
      login(email?: string, password?: string): void,
      /**
       * Custom command for logout.
       * @example cy.logout()
       */
      logout(): void,
      /**
       * Custom command to select DOM element by data-test attribute.
       * @example cy.getByDefaultSelector('username')
       */
      getByDefaultSelector(selector: string, ...args: Partial<Cypress.Loggable & Timeoutable & Withinable & Shadow>[]): Chainable<any>
    }
  }
}

/**
 * Create and add Cypress commands.
 */
Cypress.Commands.add('getByDefaultSelector', getByDefaultSelector);
Cypress.Commands.add('login', login);
Cypress.Commands.add('logout', logout);

/**
 * Create functions for related commands.
 */
export function getByDefaultSelector(selector: string, ...args: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>[]): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get(`[data-test=${selector}]`, ...args);
}

export function login(username = 'merihsakarya@domain.com', password = 'pass1word!'): void {
  cy.visit('/login');
  // Set username & password
  cy.getByDefaultSelector('login-username').type(username);
  cy.getByDefaultSelector('login-password').type(password);
  // Submit Form
  cy.getByDefaultSelector('login-submit').click();
  // Successfully route to `/` path
  cy.location('pathname', { timeout: 1000 }).should('eq', '/');
};

export function logout(): void {
  window.localStorage.clear();
  cy.visit('/login');
};
