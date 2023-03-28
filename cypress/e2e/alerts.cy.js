/// <reference types="cypress"/>

describe('Alerts', () => {
    //cypress events for
    // alerts types:
    //(1)JavaScript alert (have some text and or 'ok' button)
    //(2)JavaScript confirm alert (have some text with 'ok' and 'cancel' button)
    //(3)JavaScript prompt alert (have some text with a text box for user input along with 'ok')
    //(4)authenticated alert
    it('JavaScript alert(1)', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
   
        // cypress automaticaly closed alert window
        cy.on('window:alert', (t)=> {
            expect(t).to.contains('I am a JS Alert')
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')


    })

    it('JavaScript confirm alert(2)', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
   
        // cypress automaticaly closed alert window by cliking 'ok' button
        cy.on('window:confirm', (t)=> {
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it('JavaScript confirm alert using cancel button(2)', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
   
        cy.on('window:confirm', (t)=> {
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm', () => false) // cypress closes alert window using cancel button

        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    it('JavaScript prompt aletrt(3)', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })
        
        cy.get('[onclick="jsPrompt()"]').click()

        //cypress will automaticlly close prompt alert - it will use 'ok' button
        
        cy.get('#result').should('have.text', 'You entered: welcome')
    })

    // it('JavaScript prompt aletrt - close by using cancel(3)', () => {

    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
    //     cy.get('[onclick="jsPrompt()"]').click()

    //     cy.window().then((win) => {
    //         cy.stub(win, 'prompt').returns('welcome')
    //     })

    //     cy.on('window:prompt', () => false)


    //     cy.get('#result').should('have.text', 'You entered: null')
    // })

    it('Authenticated alert(4)', () => {
    //appraoh1
        cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth: 
                                                                        {
                                                                            username: "admin", 
                                                                            password: "admin"
                                                                        }
                                                                    })
        
    cy.get('.example p').should('have.contain', 'Congratulations!')

    })

    it('Authenticated alert aproach2(4)', () => {
        //appraoh2
            cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
            
        cy.get('.example p').should('have.contain', 'Congratulations!')
    
        })

})