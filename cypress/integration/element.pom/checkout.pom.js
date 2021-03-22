class CheckoutPage
{
    itemNames()
    {
       return cy.get('.inventory_item_name')
  
    }

    checkoutButton()
    {
        return cy.get('.btn_action.checkout_button').should('be.visible').click()
    }

    cart()
    {
        return cy.get('path')
     
    }

    addToCart()
    {
        return cy.get('.pricebar>button')      
    }

    firstName(value)
    {
        return cy.get('#first-name').type(value)
    }

    lastName(value)
    {
        return cy.get('#last-name').type(value)
    }

    zipCode(value)
    {
        return  cy.get('#postal-code').type(value)
    }

    countinue()
    {
        return cy.get('.btn_primary.cart_button').click()
    }

    cancel()
    {
        return cy.get('.cart_cancel_link.btn_secondary').click()
    }

    finish()
    {
        return cy.get('.btn_action.cart_button').should('be.visible').click()
    }

    successMessage()
    {
        return  cy.get('.complete-header')
    }

    error()
    {
        return  cy.get('h3')
    }

    checkprice()
    {
        return cy.get('div.cart_list > div:nth-child(n) > div.cart_item_label > div.inventory_item_price')
    }
}
export default CheckoutPage