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
           ecomLogin.ecomUsername(this.data.ecomUN)
           ecomLogin.ecomPassword(this.data.ecomPW)
           ecomLogin.ecomSignIn()
           cy.title().should('eq','My account - My Store')
    
        })

    })

    it('Verify Tests',function(){

        home.logo().click()
        // home.womenCategory().click()         

        // cy.compareSnapshot('home', 0.0);
        // cy.compareSnapshot('home', 0.1);


    })

})