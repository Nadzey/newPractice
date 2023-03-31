/// <reference types="cypress"/>

//hooks:
//before
//after
//beforeEach
//AfterEach

//tags:
//.skip
//.only

describe('Hooks & Tags', () => {

before(() => {
    cy.log('****** Launch app') // connect to app (only 1 time before all it's)
})

after(() =>{
    cy.log('******* Close app') // close app (only 1 time after all it's)
})

beforeEach(() => {
    cy.log('******** login') // login (3 times before each it)
})

afterEach(() => {
    cy.log('************ logout') // logout (3 times after each it)
})
it.skip('search', () => {
    cy.log('************advance search')
})

    it.only('Advancedd search', () => {
        cy.log('************advance search')
    })

    it('listing products', () => {
        cy.log('********listing product')

    })
})
