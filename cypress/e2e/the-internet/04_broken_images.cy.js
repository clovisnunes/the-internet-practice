/// <reference types="cypress" />

context('Broken images', () => {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('ul a:contains("Broken Images")').click()
    })

    it('Image 1', () => {

        // image 1
        cy.get('div h3 ~ img:eq(0)').then($img => {
            let currentSrc = $img[0].src

            // cy.request({url: currentSrc, failOnStatusCode: false}).then(res => {
            //     expect(res.status).to.be.equal(200)
            // })

            cy.request({url: currentSrc, failOnStatusCode: false}).its('status').should('be.equal', 200)
        })

    })

    it('Image 2', () => {

        // image 2
        cy.get('div h3 ~ img:eq(1)').then($img => {
            let currentSrc = $img[0].src

            // cy.request({url: currentSrc, failOnStatusCode: false}).then(res => {
            //     expect(res.status).to.be.equal(200)
            // })

            cy.request({url: currentSrc, failOnStatusCode: false}).its('status').should('be.equal', 200)
        })

    })

    it('Image 2', () => {

        // image 3
        cy.get('div h3 ~ img:eq(2)').then($img => {
            let currentSrc = $img[0].src

            // cy.request({url: currentSrc, failOnStatusCode: false}).then(res => {
            //     expect(res.status).to.be.equal(200)
            // })

            cy.request({url: currentSrc, failOnStatusCode: false}).its('status').should('be.equal', 200)
        })
    })

})