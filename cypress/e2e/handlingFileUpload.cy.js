/// <reference types="cypress"/>
import 'cypress-file-upload'

//need to install cypress file upload (npm install --save-dev cypress-file-upload)
describe('File Upload', () => {

    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')

    })

    it('Renaming file while uploading', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test.pdf', fileName:'myFile'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')

    })

    it('File Upload Drag & Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('test.pdf', {subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename').contains('test.pdf')
        // cy.get('#file-submit').click()
        // cy.wait(5000)
        // cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')
    })

    it('Multiple Files Upload', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test.pdf', 'test1.pdf'])
        cy.wait(5000)
        cy.get('.demo-wrapper > :nth-child(6)').should('contain.text', 'Files You Selected:')
        cy.get('#fileList > :nth-child(1)').contains('test.pdf')
        cy.get('#fileList > :nth-child(2)').contains('test1.pdf')
    })

    it.only('File Upload in Shadow Dom', () => {
    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
    cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('test.pdf')
    cy.wait(5000)
    cy.get('.smart-item-name', {includeShadowDom:true}).contains('test.pdf')
})
})
