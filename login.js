
describe('Tugas 3 - Login', function(){
    it('login', function(){
        cy.bukaUrl()
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('testsaiful').should('have.value','testsaiful')
        cy.get('#loginpassword').type('testsaiful098').should('have.value','testsaiful098')
        cy.wait(1000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.contains('testsaiful').should('exist')
    })
})