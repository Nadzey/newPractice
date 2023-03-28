/// <reference types="cypress"/>

describe('Check UI Elements', () => {

    it('Checking Radio Buttons', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
    })

    it('Checking checkboxes Buttons', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get('#monday').should('be.visible')

        cy.get('#monday').check().should('be.checked')
        cy.get('#monday').uncheck().should('not.be.checked')

        //selecting all check boxes

        cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        //select first checkbox and last
        cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').first().uncheck().should('not.be.checked')
        cy.get('.form-check-input[type="checkbox"]').last().uncheck().should('not.be.checked')

    
    })
})