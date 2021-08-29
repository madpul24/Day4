
describe('Tugas 3 - Pembelian Barang', function(){
    it('Kunjungi website', function(){
        cy.bukaUrl();
        cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click()
        cy.wait(5000)
        cy.get('.col-sm-12 > .btn').click()
        cy.wait(5000)
        cy.get('#cartur').click()
        cy.wait(5000)
        cy.get('.col-lg-1 > .btn').click()
        cy.wait(1000)
        cy.get('#name').type('saifulbeli').should('have.value','saifulbeli')
        cy.get('#country').type('Indonesia').should('have.value','Indonesia')
        cy.get('#city').type('Batam').should('have.value','Batam')
        cy.get('#card').type('0129384756').should('have.value','0129384756')
        cy.get('#month').type('August').should('have.value','August')
        cy.get('#year').type('2021').should('have.value','2021')
        cy.wait(2000)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(10000)
        cy.get('.confirm').click()

    })
    
})