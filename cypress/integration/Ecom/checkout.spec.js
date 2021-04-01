/// <reference types="Cypress" />

import LoginEcom from '../../element.pom/EcomLogin.page'
const ecomLogin = new LoginEcom

import Checkout from '../../element.pom/EcomCheckout.page'
const checkout = new Checkout

import Home from '../../element.pom/EcomHome.page'
const home = new Home

describe('Ecom',()=>{

    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
           this.data = data
           
           cy.visit(this.data.ecomUrl)
           
           cy.ecomLogin(this.data.ecomUN,this.data.ecomPW)
    
        })

    })

    it('Verify Tests',function(){

        home.logo().click()

        // Search Products
        home.search('Printed Summer Dress')
        home.searchButton()  

        home.itemNames().each(($el,index,$list)=>{
            const names = $el.text()
            cy.log(names)
    
            this.data.ecomProducts.forEach(function(el)
                { 
                if(names.includes(el))
                {
                    home.addToCart().eq(index).click()
                    home.continue()
                }
        })

    })

    // Click on cart button
    home.cart().click()

    // Add and remove quantity
    home.lessQty().click()
    home.addQty().click()

    // Remove item
    home.removeItem().click()

    // Click on checkout button
    home.checkoutButton().click()

    //Add address
    checkout.addAddress().click()

    //Enter address details
    checkout.firstName('Demo')
    checkout.lastName('Address')
    checkout.company('Appsierra')
    checkout.address('white house Tennessee')
    checkout.city('Washington')
    checkout.state().select('Washington')
    checkout.zip('37188')
    checkout.country().select('United States')
    checkout.phone('98888885548154')
    checkout.mobile('977777777777')
    checkout.title('My address new')
    checkout.saveAddress()
    checkout.error().then(($error)=>{
        const error = $error.text()
        expect(error).to.be.equal('This country requires you to chose a State.')
    })
    checkout.state().select('Washington')
    checkout.saveAddress()

    checkout.deliveryAddress().select('My addressMy address')
    cy.wait(3000)
    checkout.checkoutButton()

    //Shipping
    checkout.terms()
    checkout.checkoutButton()

    //Payment
    checkout.payByBankwire()
    checkout.confirmOrder()

    //Order Confirmation Message
    checkout.orderConfirmation().then(($message)=>{
       const message = $message.text()
       expect(message).to.be.equal('Your order on My Store is complete.')
    })

    //Go to my orders
    checkout.myOrders()
    checkout.selectOrder()
    checkout.invoice()

})    

})