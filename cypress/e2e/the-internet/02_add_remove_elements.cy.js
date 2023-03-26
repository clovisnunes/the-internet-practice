/// <reference types="cypress" />

context('Add remove elements', () => {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('ul a:contains("Add/Remove Elements")').click()
    })

    it('Adding and removing elements', () => {

        // adding elements
        for (let i = 0; i < 18; i++) {
            cy.get('button:contains("Add Element")').click()
        }

        cy.get('button:contains("Delete")').should('have.length', '18')

        // removing elements
        for (let i = 0; i < 9; i++) {
            cy.get('button:contains("Delete"):first').click()
        }

        cy.get('button:contains("Delete")').should('have.length', '9')

        for (let i = 0; i < 9; i++) {
            cy.get('button:contains("Delete"):last').click()
        }

        cy.get('button:contains("Delete")').should('not.exist')

    })

})