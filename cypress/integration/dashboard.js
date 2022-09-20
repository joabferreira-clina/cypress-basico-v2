/// <reference types="Cypress" />

describe("Testes clínicas SelfBuilding", function () {

  beforeEach(() => {
    cy.visit("https://maleta.rocks/host/auth")
  })

  it('Teste dashboard', { keystrokeDelay: 40 }, () => {
    cy.get('.form-control').type('clinatestess@mailinator.com')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(500)
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    cy.wait(2500)
    cy.get('.profile').should("be.visible")
    cy.get('.host-name > h2').should("be.visible")
    cy.get('.email > p').should("be.visible")
    cy.get('.access > p').should("be.visible")
    cy.get('.five-register').should("be.visible")
    cy.get('.col-xl-6.ng-star-inserted').should("be.visible")
  });



})