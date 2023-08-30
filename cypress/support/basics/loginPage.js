/// <reference types="cypress" />

// Country selector
export const selectors = {
  countrySelector: '"country-selector"',
  loginButton: '"button-login"',
};

// Country Object
export const countries = {
  mexico: {
    name: 'México',
    url: '/',
    loginTitle: 'Ingresa a tu cuenta',
    loginButton: 'Ingresar',
  },
  brazil: {
    name: 'Brasil',
    url: 'https://brasil.clara.com/auth/login',
    loginTitle: 'Faça login em sua conta',
    loginButton: 'Entrar',
  },
  colombia: {
    name: 'Colombia',
    url: 'https://colombia.clara.com/auth/login',
    loginTitle: 'Ingresa a tu cuenta',
    loginButton: 'Ingresar',
  },
};
