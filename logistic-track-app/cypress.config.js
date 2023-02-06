const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5gtaqd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
