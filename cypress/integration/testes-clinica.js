/// <reference types="Cypress" />

describe("Testes clínicas SelfBuilding", function () {

  beforeEach(() => {
    cy.visit("https://maleta.rocks/host/auth")
  })

  it('Adicionar clinica', { keystrokeDelay: 40 }, () => {
    cy.get('.form-control').type('clinatestess@mailinator.com')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(500)
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    cy.wait(2500)
    cy.get(':nth-child(4) > .justify-content-between').click()
    cy.get('.col-4 > .btn').click()
   
    cy.get('.col-md-8 > .form-control').type('Clinica teste 1', { force: true })
    
    cy.get(':nth-child(3) > .form-control').type('31330572', { force: true })
    cy.wait(2500)
    cy.get('.col-md-2 > .form-control').type('50', { force: true })
    cy.get(':nth-child(6) > .form-control').type('ap 400', { force: true })
    cy.get(':nth-child(1) > .amenity-card > .radio-container > .form-check-input').check()
    cy.get(':nth-child(4) > .amenity-card > .radio-container > .form-check-input').check()
    cy.get(':nth-child(10) > .amenity-card > .radio-container > .form-check-input').check()

    cy.get('.btn').click()
  });

  it('Barrar CEP invalido', { keystrokeDelay: 40 }, () => {
    cy.get('.form-control').type('clinatestess@mailinator.com')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(500)
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    cy.wait(2500)
    cy.get(':nth-child(4) > .justify-content-between').click()
    cy.get(':nth-child(3) > .row > .col-md-3 > [tooltip="Visualizar"] > .clina').click()
    cy.get('.col-3 > .btn').click()
    cy.get(':nth-child(3) > .form-control').clear({ force: true })
    cy.get(':nth-child(3) > .form-control').type('11111111')
    cy.get('clina-btn-loading.ng-star-inserted > .btn').click()
    cy.get(".toast-message").should("be.visible")
    
  });

})