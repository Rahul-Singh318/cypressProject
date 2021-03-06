/// <reference types="Cypress" />

import ProductsPage from '../../element.pom/products.page.js'
const product = new ProductsPage()

describe('SWAGLABS',()=>{

   
    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
           this.data = data
           cy.login(this.data.username,this.data.password)
    
        })
 
    })

    it('Verify Products',function(){

        //Verify Filters
        product.dropdown().select('Name (A to Z)').should('have.value','az')
        product.dropdown().select('Name (Z to A)').should('have.value','za')

        var allproducts=[];
        var sortedProducts= this.data.productsZA
        product.itemNames().each(($e1, index, $list)=>{

        for(let i=index;i<=index;i++)
        {
            allproducts[i]=$e1.text()
        } 
      
    }).then(()=>{
        allproducts.sort()
        allproducts.reverse()
        expect(sortedProducts).to.deep.equal(allproducts)        
    })

        product.dropdown().select('Price (low to high)').should('have.value','lohi')

        var allprices=[];
        var sortedprices= this.data.priceLH
        product.itemPrice().each(($e1, index, $list)=>{

        for(let i=index;i<=index;i++)
        {
            allprices[i]=$e1.text()
        } 
      
    }).then(()=>{
        expect(sortedprices).to.deep.equal(allprices)        
    })
        product.dropdown().select('Price (high to low)').should('have.value','hilo')

        // Backpack price
        var productPrice;
        var pPrice;
        product.itemPrice().then(($price)=>{
          productPrice = $price.eq('1').text()
          pPrice = productPrice.replace("$29.99","29.99");
        })


        // Select products and add into the cart
        product.itemNames().should('have.length',6).and('be.visible').each(($items,index,$list)=>{
            const itemName = $items.text()

            this.data.productName.forEach(function(el)
            { 
            if(itemName.includes(el))
            {
                product.addToCart().eq(index).click()
            }

        })    
        })

        // Verify added products into the cart
        product.addedProducts().then(($num)=>{

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

        // Cart button
        product.cart().should('be.visible').click()

        // Verify product price
        var cartPrice;
        product.itemPrice().then(($cprice)=>{
            cartPrice = $cprice.eq('0').text()
            expect(cartPrice).to.be.equal(pPrice)
        })

        // Remove product from the cart
        product.cartItems().each(($cartlist,index,$list) =>{

            const cartItems = $cartlist.text()

            if(cartItems.includes('Sauce Labs Backpack'))
            {
                product.removeCart()
            }

        })

        
    
    })

})