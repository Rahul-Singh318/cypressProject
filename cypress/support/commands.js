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
// Cypress.Commands.add('login', (email, password) => { ... })
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


/// <reference types="Cypress" />
import loginPage from '../integration/element.pom/login.pom'
import checkoutPage from '../integration/element.pom/checkout.pom'

Cypress.Commands.add("login", (email, password) => {

    const lp = new loginPage
    cy.fixture('example').then(function(data)
    {
       this.data = data

    lp.visit(this.data.url)
    lp.username(email)
    lp.password(password)
    lp.submit()
    cy.title().should('eq','Swag Labs')

    })
    
})

Cypress.Commands.add("checkout",(firstname,lastname,zip)=>{
    const cp = new checkoutPage

    cp.firstName(firstname)
    cp.lastName(lastname)
    cp.zipCode(zip)
})
