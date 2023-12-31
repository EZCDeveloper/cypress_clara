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
    url: 'https://app.clara.cc/auth/login',
    loginTitle: 'Ingresa a tu cuenta',
    loginButton: 'Ingresar',
    selector: 'country-MX',
  },
  brazil: {
    name: 'Brasil',
    url: 'https://brasil.clara.com/auth/login',
    loginTitle: 'Faça login em sua conta',
    loginButton: 'Entrar',
    selector: 'country-BR',
  },
  colombia: {
    name: 'Colombia',
    url: 'https://colombia.clara.com/auth/login',
    loginTitle: 'Ingresa a tu cuenta',
    loginButton: 'Ingresar',
    selector: 'country-CO',
  },
};
