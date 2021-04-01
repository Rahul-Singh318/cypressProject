class Home 
{
 logo()
 {
     return cy.get('img.logo.img-responsive')
 }   

 womenCategory()
 {
     return cy.get('.sf-menu > li:nth-child(1)')
 }

 search(value)
 {
     return cy.get('#search_query_top').type(value)
 }

 searchButton()
 {
     return cy.get('.btn.btn-default.button-search').click()
 }

 sort()
 {
     return cy.get('#selectProductSort')
 }

 itemNames()
 {
     return cy.get('.right-block>h5>a.product-name')
 }

 addToCart()
 {
     return cy.get('.button.ajax_add_to_cart_button >span').should('be.visible')
 }

 continue()
 {
     return cy.get('.continue.btn.btn-default').should('be.visible').click()
 }

 addedItems()
 {
     return cy.get('.ajax_cart_quantity.unvisible')
 }

 cart()
 {
     return cy.get('.shopping_cart>a')
 }

 lessQty()
 {
     return cy.get('.icon-minus').eq('1').should('be.visible')
 }

 addQty()
 {
     return cy.get('.icon-plus').eq('2').should('be.visible')
 }

 removeItem()
 {
     return cy.get('.icon-trash').eq('1').should('be.visible')
 }

 checkoutButton()
 {
     return cy.get('.button.btn.btn-default.standard-checkout.button-medium').should('be.visible')
 }


}
export default Home