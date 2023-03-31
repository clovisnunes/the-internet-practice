/// <reference types="cypress" />

import "cypress-real-events/support"

context('Context menu', () => {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/context_menu')
    })

    it('Context menu', () => {

        cy.get('div#hot-spot').rightclick()

        cy.on('window:alert', (alert_msg) => {
            expect(alert_msg).to.equal('You selected a context menu')
        })

    })

})