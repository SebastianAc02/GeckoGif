

Cypress.Commands.add('login', ({username, password}) => {

 
  

    cy.request('POST', 'http://localhost:4003/db/login', {
        username, password      }).then((response =>{
       
            window.sessionStorage.removeItem('jwt')
     
    
            window.sessionStorage.setItem('jwt',  JSON.stringify(response.body.token).replace(/['"]+/g, '')  )//response.body i
        }))
    .then(()=>{

        cy.visit('http://localhost:3000')
    })
   

})

