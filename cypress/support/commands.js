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
import LoginPage from '../element.pom/login.page'
import CheckoutPage from '../element.pom/checkout.page'
import LoginEcom from '../element.pom/EcomLogin.page'

Cypress.Commands.add("login", (email, password) => {

    const lp = new LoginPage
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
    const cp = new CheckoutPage

    cp.firstName(firstname)
    cp.lastName(lastname)
    cp.zipCode(zip)
})

Cypress.Commands.add("ecomLogin", (ecomEmail, ecomPassword) => {

    const ecomLogin = new LoginEcom
    cy.fixture('example').then(function(data)
    {
       this.data = data

    ecomLogin.visit(this.data.ecomUrl)
    ecomLogin.ecomUsername(ecomEmail)
    ecomLogin.ecomPassword(ecomPassword)
    ecomLogin.ecomSignIn()
    cy.title().should('eq','My account - My Store')

    })
    
})

const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

compareSnapshotCommand({
    capture: 'fullPage'
  });
