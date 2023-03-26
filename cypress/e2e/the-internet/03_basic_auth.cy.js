/// <reference types="cypress" />

context('Basic auth', () => {
    
    it('Basic auth appending correct username and password in URL', () => {

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('contain', 'Congratulations')

    })

    it('Basic auth appending wrong username and password in URL', () => {

        cy.request({
            url: 'https://carlos:alberto@the-internet.herokuapp.com/basic_auth',
            failOnStatusCode: false} )
            .its('status')
            .should('be.equal', 401)

    })

    it('Basic auth headers with correct username and password', () => {

        cy.visit('http://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin',
            }
        })
        cy.get('p').should('contain', 'Congratulations')
    })

    it('Basic auth headers with wrong username and password', () => {

        cy.request({
            url: 'http://the-internet.herokuapp.com/basic_auth',
            failOnStatusCode: false,
            auth: {
                username: 'francisco',
                password: 'vieira',
            }
        }).its('status')
        .should('be.equal', 401)
    })



})