/// <reference types="cypress" />

import { selectors, countries } from '../support/basics/loginPage';
import { getBySelData } from '../support/commands';
import { assertions } from '../support/basics/constants';

describe('Home Page Elements Verification', () => {
  const { countrySelector, loginButton } = selectors;
  const { mexico, brazil, colombia } = countries;
  const { includeText, beVisible } = assertions;
  const optionSelector = '.css-1oss4zw-option';

  beforeEach(() => {
    cy.visit('/');
  });

  it('TC_01. Should verify language is set in Mexico. Verify default URL landing is México', () => {
    getBySelData(countrySelector)
      .should(includeText, mexico.name)
      .should(beVisible)
      .as('selectMexico');

    cy.contains(mexico.loginTitle).should(beVisible);

    getBySelData(loginButton)
      .should(includeText, mexico.loginButton)
      .and(beVisible);
  });

  it('TC_02. Should navigate to Brazil & Colombia. Verify titles and submit buttons on each page', () => {
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
      ({ brazil: { loginTitle, loginButton } }) => {
        cy.contains(loginTitle).should('be.visible');
        cy.contains('button', loginButton).should('be.visible');
      }
    );

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
      ({ colombia: { loginTitle, loginButton } }) => {
        cy.contains(loginTitle).should('be.visible');
        cy.contains('button', loginButton).should('be.visible');
      }
    );
  });
});
