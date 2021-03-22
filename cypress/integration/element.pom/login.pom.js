 /// <reference types="Cypress" />

 class LoginPage
 {
    visit(value)
    {
        cy.visit(value)
    }

    username(value)
    {
        cy.get('#user-name').clear().type(value)
        return this
    }

    blankUsername()
    {
        cy.get('#user-name').click()
        return this
    }

    password(value)
    {
        cy.get('#password').clear().type(value)
        return this
    }

    blankPassword()
    {
        cy.get('#password').click()
        return this
    }

    submit()
    {
        cy.get('#login-button').click()
    }

    error()
    {
        cy.get('h3')
    }
 }

 export default LoginPage