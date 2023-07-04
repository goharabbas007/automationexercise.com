/// <reference types="Cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,
    compilerOptions: {
        types: ["Cypress"]
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
