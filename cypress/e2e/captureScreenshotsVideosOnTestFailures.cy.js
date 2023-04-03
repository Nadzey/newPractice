/// <reference types="cypress"/>

describe('How To Capture Screenshots & Videos on Test Failures', () => {

    it('How to capture screenshots & record tests', () => {
     cy.visit('https://demo.opencart.com/')
     cy.screenshot('homepage')

     cy.wait(5000)
     cy.get("img[title='Your Store']").screenshot('logo')
    
    //automatically capturing Capture Screenshots & Videos on Test Failures throught CI tool

    // npx cypress run  // all
    // npx cypress run --spec cypress\e2e\captureScreenshotsVideosOnTestFailures.cy.js // specific
    cy.get('li:nth-child(7) a:nth-child(1)').click()
    //cy.get("div[id='content'] h2").should('have.text', 'Tablets')
    })

})