/// <reference types="Cypress" />

import LoginEcom from '../../element.pom/EcomLogin.page'
const ecomLogin = new LoginEcom

describe('Login Into Ecom',()=>{

    
    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
           this.data = data
           cy.visit(this.data.ecomUrl)
    
        })

    })

    it('Login With Invalid Username And Valid Password',function(){

        ecomLogin.ecomUsername(this.data.wrongEcomUN)
        ecomLogin.ecomPassword(this.data.ecomPW)
        ecomLogin.ecomSignIn()
        ecomLogin.error().then(($error)=>{
            const error = $error.text()
            expect(error).to.be.equal('There is 1 error')
        })
      
    })

    it('Login With Valid Username And Invalid Password',function(){

        ecomLogin.ecomUsername(this.data.ecomUN)
        ecomLogin.ecomPassword(this.data.wrongEcomPW)
        ecomLogin.ecomSignIn()
        ecomLogin.error().then(($error)=>{
            const error = $error.text()
            expect(error).to.be.equal('There is 1 error')
        })
      
    })

    it('Login With blank Username And Valid Password',function(){

        ecomLogin.ecomUsernameB()
        ecomLogin.ecomPassword(this.data.ecomPW)
        ecomLogin.ecomSignIn()
        ecomLogin.error().then(($error)=>{
            const error = $error.text()
            expect(error).to.be.equal('There is 1 error')
        })
      
    })

    it('Login With Valid Username And blank Password',function(){

        ecomLogin.ecomUsername(this.data.ecomUN)
        ecomLogin.ecomPasswordB()
        ecomLogin.ecomSignIn()
        ecomLogin.error().then(($error)=>{
            const error = $error.text()
            expect(error).to.be.equal('There is 1 error')
        })
      
    })

    it('Login With blank Username And blank Password',function(){

        ecomLogin.ecomUsernameB()
        ecomLogin.ecomPasswordB()
        ecomLogin.ecomSignIn()
        ecomLogin.error().then(($error)=>{
            const error = $error.text()
            expect(error).to.be.equal('There is 1 error')
        })
      
    })

    it('Login With Valid Username And Valid Password',function(){

        ecomLogin.ecomUsername(this.data.ecomUN)
        ecomLogin.ecomPassword(this.data.ecomPW)
        ecomLogin.ecomSignIn() 
        cy.title().should('eq','My account - My Store')
    })

})