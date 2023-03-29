/// <reference types="cypress"/>

describe('Handling Tables', () => {

    beforeEach('Login', () => {
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')

        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn.btn-primary').click()
        cy.get('.btn-close').click()
        cy.get('#menu-customer').click()
        cy.get('#menu-customer ul li:first-child').click()
    })
    
    it('Check numbers rows & Columns', () => {

        cy.get('.table.table-bordered.table-hover tbody tr').should('have.length', '10')

        cy.get('.table.table-bordered.table-hover thead tr td').should('have.length', '7')
    })

    it('Check cell data from specific row & column', () => {

        cy.get('.table.table-bordered.table-hover tbody tr:nth-child(5) td:nth-child(3)')
        .contains('princytrainings4@gmail.com')
    })

    it('Read all the rows & columns data in the first page', () => {
    
    cy.get('.table.table-bordered.table-hover tbody tr')
        .each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col, index, $cols)=> {
                    cy.log($col.text())
                })
            })
    })
    })

    it('Pagination', () => {
// total number of pages
    let totalPages
    cy.get('.col-sm-6.text-end').then((e) => {
        let myText = e.text() //Showing 1 to 10 of 11685 (1169 Pages)
        totalPages = myText.substring(myText.indexOf('(') + 1, myText.indexOf('Pages') - 1)
        cy.log('Total number of pages in a table===========>'+totalPages)
    })

    totalPages = 5
    for (let p = 1; p <= totalPages; p++) 
    {
        if(totalPages > 1) 
        {
            cy.log('Active page is ====>'+p)
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
            cy.wait(3000)

            cy.get('.table.table-bordered.table-hover tbody tr')
            .each(($row, index, $rows) => {
                cy.wrap($row).within (() => {
                    cy.get('td:nth-child(3)').then((e)=>{
                       cy.log(e.text()) // email
                    })
                })

            })
        }
    }

    })
})