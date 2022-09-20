/// <reference types="Cypress" />

describe("Testes perfil SelfBuilding", function () {

  beforeEach(() => {
    cy.visit("https://maleta.rocks/host/auth")
  })

  it('Adicionar endereço fiscal', { keystrokeDelay: 40 }, () => {
    cy.get('.form-control').type('clinatestess@mailinator.com')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(500)
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    cy.wait(2500)
    cy.get(':nth-child(3) > .justify-content-between > .d-block > .d-flex > .ms-3').click()
    cy.get('.btn').click()
    cy.get(':nth-child(4) > .col-md-4 > .form-group > .form-control').type('31330572')
    cy.get('.col-md-6 > .form-group > .form-control').type('Rua gustavo ladeira')

    cy.get(':nth-child(4) > .col-md-2 > .form-group > .form-control').type('11')
    cy.get(':nth-child(5) > :nth-child(1) > .form-group > .form-control').type('ap 405')

    cy.get(':nth-child(5) > :nth-child(2) > .form-group > .form-control').type('Paqueta')
    cy.get(':nth-child(5) > :nth-child(3) > .form-group > .form-control').type('Belo Horizonte')
    cy.get(':nth-child(4) > .form-group > .form-select').select('MG')
    cy.get('.mt-3 > .btn').click()
  });

  it('Barrar CPF inválido', { keystrokeDelay: 40 }, () => {
    cy.get('.form-control').type('clinatestess@mailinator.com')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(500)
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    cy.wait(2500)
    cy.get(':nth-child(3) > .justify-content-between > .d-block > .d-flex > .ms-3').click()
    cy.get('.btn').click()
    cy.get('.col-md-5 > .form-group > .form-select').select('CPF')
    cy.get(':nth-child(2) > .col-md-7 > .form-group > .form-control').clear()
    cy.get(':nth-child(2) > .col-md-7 > .form-group > .form-control').type('11111111111')
    cy.get('.mt-3 > .btn').click()
    cy.wait(1500)
    cy.get(".toast-message").should("be.visible")
  });

  it('Barrar CEP inválido', { keystrokeDelay: 40 }, () => {
    cy.get('.form-control').type('clinatestess@mailinator.com')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(500)
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    cy.wait(2500)
    cy.get(':nth-child(3) > .justify-content-between > .d-block > .d-flex > .ms-3').click()
    cy.get('.btn').click()
    cy.get(':nth-child(4) > .col-md-4 > .form-group > .form-control').clear()
    cy.get(':nth-child(4) > .col-md-4 > .form-group > .form-control').type('11111111')
    cy.get('.col-md-6 > .form-group > .form-control').clear()
    cy.get('.col-md-6 > .form-group > .form-control').type('Rua gustavo ladeira')
    cy.get(':nth-child(5) > :nth-child(2) > .form-group > .form-control').clear()
    cy.get(':nth-child(5) > :nth-child(2) > .form-group > .form-control').type('Paqueta')
    cy.get(':nth-child(4) > .col-md-2 > .form-group > .form-control').clear()
    cy.get(':nth-child(4) > .col-md-2 > .form-group > .form-control').type('11')
    cy.get(':nth-child(5) > :nth-child(3) > .form-group > .form-control').clear()
    cy.get(':nth-child(5) > :nth-child(3) > .form-group > .form-control').type('Belo Horizonte')
    cy.get(':nth-child(4) > .form-group > .form-select').select('MG')
    cy.get('.mt-3 > .btn').click()
    cy.get(".toast-message").should("be.visible")
  });

})