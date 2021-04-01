class Checkout
{
    addAddress()
    {
        return cy.get('#center_column > form > div > p > a > span').should('be.visible')
    }

    firstName(value)
    {
        return cy.get('#firstname').type(value)
    }

    lastName(value)
    {
        return cy.get('#lastname').type(value)
    }

    company(value)
    {
        return cy.get('#company').type(value)
    }

    address(value)
    {
        return cy.get('#address1').type(value)
    }

    address2(value)
    {
        return cy.get('#address2').type(value)
    }

    city(value)
    {
        return cy.get('#city').type(value)
    }

    state()
    {
        return cy.get('#id_state')
    }

    zip(value)
    {
        return cy.get('#postcode').type(value)
    }

    country()
    {
        return cy.get('#id_country')
    }

    phone(value)
    {
        return cy.get('#phone').type(value)
    }

    mobile(value)
    {
        return cy.get('#phone_mobile').type(value)
    }

    title(value)
    {
        return cy.get('#alias').type(value)
    }

    saveAddress()
    {
        return cy.get('#submitAddress').should('be.visible').click()
    }

    error()
    {
        return cy.get('#center_column > div > div > ol > li')
    }

    deliveryAddress()
    {
        return cy.get('#id_address_delivery')
    }

    checkoutButton()
    {
        return cy.get('button.button.btn.btn-default.button-medium').should('be.visible').click()
    }

    terms()
    {
        return cy.get('#cgv').check()
    }

    payByBankwire()
    {
        return cy.get('.bankwire').should('be.visible').click()
    }

    confirmOrder()
    {
        return cy.get('button.button.btn.btn-default.button-medium').should('be.visible').click()
    }

    orderConfirmation()
    {
        return cy.get('.box>.cheque-indent>.dark')
    }

    myOrders()
    {
        return cy.get('.button-exclusive.btn.btn-default').click()
    }

    selectOrder()
    {
        return cy.get('.color-myaccount').eq('1').click()
    }

    invoice()
    {
        return cy.get('.info-order.box>p:nth-child(3)>a').invoke('removeAttr','target').click()
    }

}
export default Checkout