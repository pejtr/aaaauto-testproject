const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "uncaught:exception": (err) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  },
  chromeWebSecurity: false
});
