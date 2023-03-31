/// <reference types="cypress"/>

describe('Fixtures & Data Driven Testing (Using JSON Data)', () => {
    
    it('Data Driven Test', () => {

        cy.fixture('testData1').then((data) => {
        
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            
            data.forEach((userdata) => {
                cy.get('[name="username"]').type(userdata.name)
        
                cy.get('[type="password"]').type(userdata.password)
        
                cy.get('[type="submit"]').click()

                cy.wait(5000)

             

                if(userdata.name == 'Admin' && userdata.password == 'admin123') 
                {
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
                    .should('have.text', userdata.expected)
                    
                    cy.get('.oxd-userdropdown-tab').click() // logout
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()  // logout

                }
                else {
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
                    .should('have.text', userdata.expected)

                }

            });
        })
    })
})