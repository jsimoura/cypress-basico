const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://bit.ly',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
