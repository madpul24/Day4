describe('Tugas 3 - Register', function(){
    it('register', function(){
        cy.bukaUrl()
        cy.get('#signin2').click()
        cy.wait(1000)
        cy.get('#sign-username').type('testsaiful').should('have.value','testsaiful')
        cy.get('#sign-password').type('testsaiful098').should('have.value','testsaiful098')
        cy.wait(5000)
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    })
})