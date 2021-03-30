/// <reference types="Cypress" />

class LoginEcom
{
    ecomUsername(value)
    {
        return cy.get('#email').type(value)
    }

    ecomPassword(value)
    {
        return cy.get('#passwd').type(value)
    }

    ecomSignIn()
    {
        return cy.get('#SubmitLogin').click()
    }
}
export default LoginEcom