// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => { 
    cy.session('loginSession', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('gohar123@invozone.com')
        cy.get('[data-qa="login-password"]').type('gohar123')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
    })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })