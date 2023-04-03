/// <reference types="cypress"/>

//go()

describe('Browser Navigation | go() & reload()', () => {

    it('How to navigate between browsers', () => {
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'Your Store')
        
        cy.get('li:nth-child(7) a:nth-child(1)').click()
        cy.get("div[id='content'] h2").should('have.text', 'Cameras')
    
        cy.go('back')
        cy.title().should('eq', 'Your Store')

        cy.go('forward')
        cy.get("div[id='content'] h2").should('have.text', 'Cameras')
    
        cy.go(-1) //also go to the previous page
        cy.title().should('eq', 'Your Store')

        cy.go(1) // also go forward
        cy.get("div[id='content'] h2").should('have.text', 'Cameras')
    
        cy.reload() // reload the page
    })
})