/// <reference types="cypress"/>

//this is test test test

describe('First test', () => {

    beforeEach(() => {
    cy.visit('https://example.cypress.io/')
})

it('clicking "type" navigate to a new url', () => {
    cy.contains('next').click()
    cy.url().should('include', '/commands/traversal')
})

it('clicking "root" navigates to a new url', () => {
    cy.contains('root').click()
})
})