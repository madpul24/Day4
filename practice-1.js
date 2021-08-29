
describe('test', function(){
    // before(() => {
    //     cy.visit('https://bukalapak.com')
    // })

    // beforeEach(() => {
    //     cy.visit('https://bukalapak.com')
    //     cy.wait(1000)
    // })

    it('test', function(){
        cy.visit('https://bukalapak.com')
        cy.contains('Daftar').click()
        cy.go('back')
        cy.go('forward')
    }),
    it('test-1', function(){
        cy.contains('Daftar').click()
    })
})