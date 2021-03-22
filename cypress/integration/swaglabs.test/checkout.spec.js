/// <reference types="Cypress" />

import CheckoutPage from '../../element.pom/checkout.page.js'
const checkout = new CheckoutPage()

describe('SWAGLABS',()=>{

   
    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
           this.data = data
           cy.login(this.data.username,this.data.password)
    
        })
 
    })

    it('Verify Checkout',function(){

         // Select products and add into the cart
         checkout.itemNames().should('have.length',6).and('be.visible').each(($items,index,$list)=>{
            const itemName = $items.text()

            this.data.productName.forEach(function(el)
            { 
            if(itemName.includes(el))
            {
                checkout.addToCart().eq(index).click()
            }

        })    
        })

        checkout.cart().should('be.visible').click()

        checkout.checkoutButton()

        // Checkout without firstname
        checkout.lastName('Singh')
        checkout.zipCode('123')
        checkout.countinue()
        cy.get('h3').then(($error)=> {

            const errorText = $error.text()
            expect(errorText).to.be.equal('Error: First Name is required')
        })

        // Checkout without lastname
        cy.reload()
        checkout.firstName('Rahul')
        checkout.zipCode('123')
        checkout.countinue()
        cy.get('h3').then(($error1)=> {

            const errorText1 = $error1.text()
            expect(errorText1).to.be.equal('Error: Last Name is required')
        })

        // Checkout without zipcode
        cy.reload()
        checkout.firstName('Rahul')
        checkout.lastName('Singh')
        checkout.countinue()
        cy.get('h3').then(($error1)=> {

            const errorText1 = $error1.text()
            expect(errorText1).to.be.equal('Error: Postal Code is required')
        })

        // checkout with valid user details
        cy.checkout('Rahul','Singh','123')
        checkout.countinue()
        checkout.finish()
        checkout.successMessage().then(($success)=>{
            const messsage = $success.text()
            expect(messsage).to.be.equal('THANK YOU FOR YOUR ORDER')
        })

    })    

})