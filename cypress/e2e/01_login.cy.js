/// <reference types="cypress" />

import { getBySelData } from '../support/commands';

describe('As an Enduser, should verify Home page elements', () => {
  const countrySelector = '"country-selector"';

  beforeEach(() => {
    cy.visit('/');
  });

  it('TC_01. Sould verify country is set in Mexico. Verfy defaul url landing is México', () => {
    //Verify México is set at selector
    getBySelData(countrySelector)
      .should('include.text', 'México')
      .should('be.visible');

    // Verify Title Login page
    cy.contains('Ingresa a tu cuenta').should('be.visible');

    // Verify button exists
    getBySelData('"button-login"')
      .should('include.text', 'Ingresar')
      .and('be.visible');
  });

  it('TC_04. Sould navigate on Brasil & Colombia. Verfy on each page, the titles and submit buttons', () => {
    //Verify Brasil is set at selector
    getBySelData(countrySelector).click();
    cy.get('.css-1oss4zw-option')
      .should('include.text', 'Brasil')
      .should('be.visible')
      .eq(0)
      .click();

    // Verify Title Login page
    const loginTitleBrasil = 'Faça login em sua conta';
    cy.origin(
      'https://brasil.clara.com/auth/login',
      { args: { loginTitleBrasil } },
      ({ loginTitleBrasil }) => {
        cy.contains(loginTitleBrasil).should('be.visible');

        // Verify button exists
        cy.contains('button', 'Entrar').should('be.visible');
      }
    );

    //Verify COLOMBIA is set at selector
    cy.visit('/');
    getBySelData(countrySelector).click();
    cy.get('.css-1oss4zw-option')
      .should('include.text', 'Colombia')
      .should('be.visible')
      .eq(1)
      .click();

    // Verify Title Login page
    cy.origin('https://colombia.clara.com/auth/login', () => {
      cy.contains('Ingresa a tu cuenta').should('be.visible');

      // Verify button exists
      cy.contains('button', 'Ingresar').should('be.visible');
    });
  });
});
