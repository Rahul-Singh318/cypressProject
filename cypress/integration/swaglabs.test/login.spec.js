/// <reference types="Cypress" />

 import LoginPage from '../../element.pom/login.page.js'
 const lp = new LoginPage()

 describe('Login Into SWAGLABS',()=>{

    
    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
           this.data = data
           lp.visit(this.data.url)
    
        })

    })

    
    it('Login With Invalid Username And Valid Password',function(){

        lp.username(this.data.wrongUsername)
        lp.password(this.data.password)
        lp.submit()
        cy.get('h3').then(($error)=> {

            const errorText = $error.text()
            expect(errorText).to.be.equal('Epic sadface: Username and password do not match any user in this service')
    


        })
     
        
    })

    it('Login With valid Username And Invalid Password',function(){

        lp.username(this.data.username)
        lp.password(this.data.wrongPassword)
        lp.submit()
        cy.get('h3').then(($error)=> {

            const errorText = $error.text()
            expect(errorText).to.be.equal('Epic sadface: Username and password do not match any user in this service')


        })
     
        
    })

    it('Login With blank Username And valid Password',function(){

        lp.blankUsername()
        lp.password(this.data.password)
        lp.submit()
        cy.get('h3').then(($error)=> {

            const errorText = $error.text()
            expect(errorText).to.be.equal('Epic sadface: Username is required')


        })
     
        
    })

    it('Login With valid Username And blank Password',function(){

        lp.username(this.data.username)
        lp.blankPassword()
        lp.submit()
        cy.get('h3').then(($error)=> {

            const errorText = $error.text()
            expect(errorText).to.be.equal('Epic sadface: Password is required')


        })
     
        
    })

    it('Login With blank Username And blank Password',function(){

        lp.blankUsername()
        lp.blankPassword()
        lp.submit()
        cy.get('h3').then(($error)=> {

            const errorText = $error.text()
            expect(errorText).to.be.equal('Epic sadface: Username is required')


        })
     
        
    })
 
 
     it('Login With Valid Username And Password',function(){
 
        cy.login(this.data.username,this.data.password)
         
     })
 
 })
 