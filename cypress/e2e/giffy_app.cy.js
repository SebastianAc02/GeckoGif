

describe('Gif App',()=>{

    beforeEach(()=>{

        cy.visit('http://localhost:3000/')
     
        cy.request('POST', 'http://localhost:4003/api/testing/reset')

        const user = {
            username:"SebasGecko12", 
            password:"12345"
        }

        cy.request('POST', 'http://localhost:4003/db/users', user)

      

    })

    it('frontpage can be opened', ()=>{
       
        cy.contains('App')
    })

    it('gifs can be opened', ()=>{
       
        cy.get('[alt="hack coding GIF by Matthew Butler"]').click()
        cy.contains('hack coding GIF by Matthew Butler')

    })

    it('login can be performed through UI ' , ()=>{
       
        cy.contains('Login').click()
        cy.get('[placeholder="USERNAME"]').type('SebasGecko12')
        cy.get('[placeholder="PASSWORD"]').type('12345')
        cy.get('#Test-Button-Login').click()
        setTimeout (()=>{
            cy.contains('Favs')
        }, 3000)
    })

//Credentials are wrong

    it('Logging fails with wrong password UI', ()=>{

       
        cy.contains('Login').click()
        cy.get('[placeholder="USERNAME"]').type('SebasGecko00')
        cy.get('[placeholder="PASSWORD"]').type('00')
        cy.get('#Test-Button-Login').click()

        cy.contains('Credentials are wrong')
  
    })

   

    
    
    
    


  
    

})

describe('When logged in ',()=>{

    it('a new gif can be added to favs and remove it ' , ()=>{

        cy.login({username:'SebasGecko12', password:'12345'})

     
        cy.get('.testingheart:first').click() 
   
      
    
        cy.contains('Favs').click()
      

        cy.contains('hack coding GIF by Matthew Butler')


        
       


    })

    it('a gif may be removed from favs', ()=>{

        cy.contains('Favs').click()

        cy.get('.testingheart:first').click() 

        cy.contains('Start searching for gifs you may like here')

    })

})








