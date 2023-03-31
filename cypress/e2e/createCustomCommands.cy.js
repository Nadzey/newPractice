/// <reference types="cypress"/>

describe('Create Custom commands', () => {

    it('Handling links', () => {
    cy.visit('https://demo.nopcommerce.com/')

    //direct - without using custom command
    //cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div > div.product-grid.home-page-product-grid > div.item-grid > div:nth-child(2) > div > div.details > h2 > a').click()
    
    //using custom command
    cy.clickLink('Apple MacBook Pro 13-inch')
    cy.get('[class="product-name"] h1').should('have.text', 'Apple MacBook Pro 13-inch')

    
})
//modify existing command

// it('Handling links', () => {
//     cy.visit('https://demo.nopcommerce.com/')

//     cy.clickLink('APPLE MACBOOC Pro 13-inch')
//     cy.get('[class="product-name"] h1').should('have.text', 'Apple MacBook Pro 13-inch')

// })

    it('login command', () => {
        cy.visit('https://demo.nopcommerce.com/')

        //login
        cy.clickLink('Log in')
        cy.loginapp('nadiakoluzaeva@gmail.com', 'test123')

        cy.get('.ico-account').should('have.text', 'My account')
        //search

        
    })
})