/// <reference types="cypress"/>
//import Login from "../PageObject/loginPage"
import Login from "../PageObject/loginPage2"

describe('POM', () => {

//general
    it('Login Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })

    //using POM
    it('Login POM test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        const ln = new Login()
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })

     //using POM with fixture
     it('Login POM test2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        cy.fixture('testData').then((data) =>{
            const ln = new Login()
            ln.setUserName(data.name)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })

      
    })


})