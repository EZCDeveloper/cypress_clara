/// <reference types="cypress" />

/**
 * Select the attribute data-testid and its value whatever it is
 * @param $sel: indicates parameter to select
 */
Cypress.Commands.add('getBySelData', sel => {
  return cy.get(`[data-testid=${sel}]`);
});
