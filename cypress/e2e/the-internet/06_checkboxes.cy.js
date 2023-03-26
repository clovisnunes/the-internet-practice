/// <reference types="cypress" />

context('Checkbox', () => {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('ul a:contains("Checkboxes")').click()
    })

    it('Leaving all marked', () => {

        cy.get('form input:eq(1)').should('be.checked')
        cy.get('form input:eq(0)').should('not.be.checked')

        cy.get('form input:eq(0)').click()

        cy.get('form input:eq(1)').should('be.checked')
        cy.get('form input:eq(0)').should('be.checked')

    })

    it('Leaving all UNmarked', () => {

        cy.get('form input:eq(1)').should('be.checked')
        cy.get('form input:eq(0)').should('not.be.checked')

        cy.get('form input:eq(1)').click()

        cy.get('form input:eq(1)').should('not.be.checked')
        cy.get('form input:eq(0)').should('not.be.checked')

    })

    it('Invert default marks', () => {
        cy.get('form input:eq(1)').should('be.checked')
        cy.get('form input:eq(0)').should('not.be.checked')

        cy.get('form input').click( { multiple: true } )

        cy.get('form input:eq(1)').should('not.be.checked')
        cy.get('form input:eq(0)').should('be.checked')
    })

})