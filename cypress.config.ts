import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '8b7x8g',
  e2e: {
    retries: {openMode: 0, runMode: 2},
    baseUrl: 'http://localhost:4200/',
    specPattern: 'cypress/e2e/**/*.{spec,cy}.{js,ts}',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
