/// <reference types="cypress"/>

describe('handle dropdowns', () => {

    it('Dropdowwn with select', () => {
    
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country')
        .select('Benin')
        .should('have.value', 'Benin')
    })
// bootstrap dropdowns without value
    it('Dropdowwn without select', () => {
    
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')
    })

    //autosugest dropdown dynamic
    it('autosugest dropdown', () => {
    
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('new')
        cy.get('.suggestion-title').contains('New York Dolls').click()
    
    })
    
    //dynamic dropdown > jquery function
    it('dynamic dropdown', () => {
    
        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]').type('Grodno')
        cy.wait(3000)
        cy.get('.wM6W7d>span').should('have.length', 12)
        cy.get('.wM6W7d>span').each( ($el, index, $list) => {
        if($el.text()=='grodno belarus map')
        {
            cy.wrap($el).click()
        }
        })
        cy.get('input[name="q"]').should('have.value', 'grodno belarus map')
    
    })

})