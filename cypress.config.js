const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,

        reporter: 'cypress-mochawesome-reporter',
        e2e: {
//         baseUrl: 'https://openweathermap.org',
            setupNodeEvents(on, config) {
//           // implement node event listeners here
                screenshotOnRunFailure=true;
                require('cypress-mochawesome-reporter/plugin')(on);
        },
   },
})
//     env: {
//         apiBaseUrl: 'https://restful-booker.herokuapp.com'
//     },

