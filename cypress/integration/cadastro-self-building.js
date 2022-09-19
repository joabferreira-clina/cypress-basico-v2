/// <reference types="Cypress" />

describe("Suíte de testes area pix Anfitrião", function () {

  beforeEach(() => {
    cy.visit("https://maleta.rocks/host/auth")
  })

  it('Deve realizar cadastro', { keystrokeDelay: 30 }, () => {
    cy.get('.form-control').type('clinatestess@mailinator.com')

    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(500)
    cy.get(':nth-child(2) > .form-control').type('Teste Ferreira Santos')
    cy.get(':nth-child(6) > .form-control').type('31975539282')
    cy.get(':nth-child(8) > clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get(':nth-child(11) > clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.form-check-input').check()
    cy.get('.btn').click({ force: true })
    //terminar verificação de email
  });

  it.only('Deve realizar cadastro', { keystrokeDelay: 30 }, () => {
    cy.get('.form-control').type('clinatestess@mailinator.com')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(500)
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    cy.wait(2500)
    //aceitar os termos de compromisso
    cy.get('.col-12 > .btn').click()
    cy.wait(1500)
    //aceitar os termos de compromisso fim
    cy.get(':nth-child(1) > .form-control').type('Clinca 1')
    cy.get(':nth-child(3) > .form-control').type('31330572')
    cy.wait(1500)

    cy.get(':nth-child(7) > .form-control').type('11')
    cy.wait(1500)
    cy.get('.forward-step').click()
    cy.wait(1500)



    cy.get(':nth-child(2) > .amenity-card > .amenity-checkbox > .form-check > .form-check-input').check()
    cy.get('.forward-step').click()
    cy.wait(1500)

    cy.get(':nth-child(1) > .form-control').type('Consultorio 1')
    cy.get(':nth-child(3) > .form-control').type('Teste')
    cy.get(':nth-child(1) > .form-check-input').check()
    cy.get(':nth-child(4) > .form-check-input').check()
    cy.get('.forward-step').click()
    cy.wait(1500)

    cy.get(':nth-child(3) > ._col-switch > .form-check > .form-check-input').click()
    cy.get(':nth-child(6) > ._col-switch > .form-check > .form-check-input').click()
    cy.get('.forward-step').click()
    cy.wait(1500)

    cy.get('.forward-step').click()
    cy.wait(1500)

    cy.get(':nth-child(2) > :nth-child(1) > .form-check-input').click()
    cy.get(':nth-child(2) > :nth-child(2) > .form-check-input').click()
    cy.get(':nth-child(2) > :nth-child(3) > .form-check-input').click()
    cy.get(':nth-child(2) > :nth-child(4) > .form-check-input').click()

    cy.get(':nth-child(5) > .col-md-10 > .row > :nth-child(1) > .form-check-input').click()
    cy.get(':nth-child(6) > .col-md-10 > .row > :nth-child(2) > .form-check-input').click()
    cy.get('.form-control').type('30')
    cy.get('.forward-step').click()
    cy.wait(1500)

    cy.get('select').select('CPF')
    cy.get(':nth-child(9) > .form-control').type('00200262262')
    cy.get('.forward-step').click()
    cy.wait(1500)




  })



})