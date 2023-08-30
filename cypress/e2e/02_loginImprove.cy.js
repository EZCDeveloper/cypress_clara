/// <reference types="cypress" />

import { selectors, countries } from '../support/basics/loginPage';
import { getBySelData } from '../support/commands';
import { assertions } from '../support/basics/constants';

describe('As Enduser, should verify login page of each country', () => {
  const { countrySelector, loginButton } = selectors;
  const { mexico, brazil, colombia } = countries;
  const { includeText, beVisible, include } = assertions;
  const optionSelector = '.css-1oss4zw-option';

  beforeEach(() => {
    cy.visit('/');
  });

  it('TC_01. Should verify country is set in Mexico. Verify url landing, title, submit button exist & are visible.', () => {
    cy.url().should(include, mexico.url);
    getBySelData(countrySelector)
      .should(includeText, mexico.name)
      .should(beVisible)
      .as('selectMexico');

    cy.contains(mexico.loginTitle).should(beVisible);

    getBySelData(loginButton)
      .should(includeText, mexico.loginButton)
      .and(beVisible);
  });

  it('TC_02. Should navigate to Brazil & Colombia. Verify url landing, title, submit button exist & are visible.', () => {
    // Navigate to Brazil
    getBySelData(countrySelector).click();
    cy.get(optionSelector)
      .should(includeText, brazil.name)
      .should(beVisible)
      .eq(0)
      .as('selectBrazil')
      .click();

    cy.origin(
      brazil.url,
      { args: { brazil } },
      ({ brazil: { loginTitle, loginButton, url } }) => {
        cy.url().should('include', url);
        cy.contains(loginTitle).should('be.visible');
        cy.contains('button', loginButton).should('be.visible');
      }
    );

    // Navigate to Colombia
    cy.visit('/');
    getBySelData(countrySelector).click();
    cy.get(optionSelector)
      .should(includeText, colombia.name)
      .should(beVisible)
      .eq(1)
      .as('selectColombia')
      .click();

    cy.origin(
      colombia.url,
      { args: { colombia } },
      ({ colombia: { loginTitle, loginButton, url } }) => {
        cy.url().should('include', url);
        cy.contains(loginTitle).should('be.visible');
        cy.contains('button', loginButton).should('be.visible');
      }
    );
  });
});
