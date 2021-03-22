class productsPage
{
    allProduct(){
       return cy.get('.inventory_item')
    
    }

    itemNames()
    {
       return cy.get('.inventory_item_name')
  
    }

    itemPrice()
    {
        return cy.get('.inventory_item_price')
    }

    dropdown()
    {
        return cy.get('.product_sort_container')
    }

    addToCart()
    {
        return cy.get('.pricebar>button')      
    }

    addedProducts()
    {
        return cy.get('.fa-layers-counter')
    
    }

    cart()
    {
        return cy.get('path')
     
    }

    cartItems() 
    {
        return cy.get('.inventory_item_name')

    }

    removeCart()
    {
        return cy.get('.btn_secondary').eq(0).should('be.visible').click()
    
    }

    cartItemsName()
    {
        return cy.get('.inventory_item_name')
     
    }


    
}
export default productsPage
