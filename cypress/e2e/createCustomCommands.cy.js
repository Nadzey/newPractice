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

    it('register', () => {
    cy.visit('https://demo.nopcommerce.com/')

   
    cy.get('.ico-register').click()
    cy.get('#gender-female').check().should('be.checked')
    cy.get('#FirstName').type('Test')
    .should('have.value', 'Test')
    cy.get('#LastName').type('Test')
    .should('have.value', 'Test')
    cy.get('[name="DateOfBirthDay"]').select('1')
    .should('have.value', '1')
    cy.get('[name="DateOfBirthMonth"]').select('1')
    .should('have.value', '1')
    cy.get('[name="DateOfBirthYear"]').select('1982')
    .should('have.value', '1982')
    cy.get('#Email').type('testingtest@gmail.com')
    .should('have.value', 'testingtest@gmail.com')
    cy.get('#Password').type('test123')
    cy.get('#ConfirmPassword').type('test123')
    cy.get('#register-button').click()
    //cy.get('.button-1.register-continue-button').click()

    //cy.get('.ico-account').should('have.text', 'My account')
    
})

    it('login command', () => {
        cy.visit('https://demo.nopcommerce.com/')

        //login
        cy.clickLink('Log in')
        cy.loginapp('testingtest@gmail.com', 'test123')

        cy.get('.ico-account').should('have.text', 'My account')
        //search

        
    })
})