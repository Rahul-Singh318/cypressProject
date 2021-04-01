/// <reference types="Cypress" />

class LoginEcom
{

    visit(value)
    {
        return cy.visit(value)
    }

    ecomUsername(value)
    {
        return cy.get('#email').type(value)
    }

    ecomUsernameB()
    {
        return cy.get('#email')
    }

    ecomPassword(value)
    {
        return cy.get('#passwd').type(value)
    }

    ecomPasswordB()
    {
        return cy.get('#passwd')
    }

    ecomSignIn()
    {
        return cy.get('#SubmitLogin').click()
    }

    error()
    {
        return cy.get('.alert.alert-danger > p')
    }
}
export default LoginEcom