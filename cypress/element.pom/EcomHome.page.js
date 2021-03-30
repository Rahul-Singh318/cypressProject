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
}
export default Home