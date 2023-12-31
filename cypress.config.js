const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  numTestsKeptInMemory: 10,
  watchForFileChanges: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  hideXHR: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    baseUrl: 'https://app.clara.cc/auth/logins',
    //specPattern: 'cypress/e2e/**/*.{js,jsx,tsx}',
  },
});
