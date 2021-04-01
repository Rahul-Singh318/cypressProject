/// <reference types="Cypress" />

import LoginEcom from '../../element.pom/EcomLogin.page'
const ecomLogin = new LoginEcom

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
        
        // Sort Products    
        home.sort().select('Price: Lowest first').should('have.value','price:asc')
        home.sort().select('Product Name: Z to A').should('have.value','name:desc')

        var allproducts=[];
        var sortedProducts= this.data.ecomProductsZA
        home.itemNames().each(($e1, index, $list)=>{

        for(let i=index;i<=index;i++)
        {
            allproducts[i]=$e1.text().trim()
        }
      
    }).then(()=>{
        allproducts.sort()
        allproducts.reverse()
        expect(sortedProducts).to.deep.equal(allproducts)   
    })

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

       // Verify added products into the cart
       home.addedItems().then(($num)=>{

        const addedProduct = $num.text()

        var i;
        for(i=0; i<=6; i++)
        {
            if(i==addedProduct)
            {
                expect(parseInt(addedProduct)).to.be.equal(i) 
            }
        }
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


    // cy.compareSnapshot('home', 0.0);
    // cy.compareSnapshot('home', 0.1);

})

})