/// <reference types="cypress"/>

describe('Fixtures & Data Driven Testing (Using JSON Data)', () => {

    //direct access
    it('Fixture demo test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('testData').then((data) => {


        cy.get('[name="username"]').type(data.name)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()

        cy.get('.oxd-topbar-header-breadcrumb h6').should('have.text', data.expected)
    })
})

//access through hook - for multiple it blocks
let userdata
before(() => {
    cy.fixture('testData').then((data) => {
        userdata = data
    })

})

    it('Fixture for multiple it blocks', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.get('[name="username"]').type(userdata.name)
        cy.get('[name="password"]').type(userdata.password)
        cy.get('[type="submit"]').click()

        cy.get('.oxd-topbar-header-breadcrumb h6').should('have.text', userdata.expected)
    })

})