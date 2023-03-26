/// <reference types="cypress" />

context('Add remove elements', () => {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/')
    })

    it('Choose option 1', () => {
        cy.get('ul a:contains("Dropdown")').click()

        // selecting option 1

        cy.get('select#dropdown')
            .select(1)
            .should('have.value', "1")

        cy.get('select#dropdown option[selected]').should('have.text', 'Option 1')

    })

    it('Choose option 2', () => {
        cy.get('ul a:contains("Dropdown")').click()

        // selecting option 2

        cy.get('select#dropdown')
            .select(2)
            .should('have.value', "2")

        cy.get('select#dropdown option[selected]').should('have.text', 'Option 2')

    })

})