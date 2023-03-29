/// <reference types="cypress"/>
import 'cypress-iframe'

describe('Handling iFrames', () => {
    //aproach1
    it('Handling iFrames - aproach1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
   
        const iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        cy.wait(3000)

        iframe.clear().type("Welcome {ctrl+a}")

        cy.get('[aria-label="Bold"]').click()

    })

     //aproach2 by using custom comands
     it('Handling iFrames - aproach2', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
   
        cy.getIframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}")

        cy.get('[aria-label="Bold"]').click()
    })
    
    //by using cypress iframe plugin (npm install -D cypress-iframe)
    it('Handling iFrames - aproach3', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}")

        cy.get('[aria-label="Bold"]').click()
    
    
    })
})