/// <reference types="Cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    reporter: "mochawesome",
    reporterOptions: {
        overwrite: false,
        charts: true,
        html: true,
        reportDir: "cypress/reports"
    },
    defaultCommandTimeout: 6000,
    compilerOptions: {
        types: ["Cypress"]
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
