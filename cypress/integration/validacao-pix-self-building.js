//Pagina com os exercicios -> https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/02.md

/// <reference types="Cypress" />

describe("Suíte de testes area pix Anfitrião", function () {

  beforeEach(() => {
    cy.visit("https://maleta.rocks/host")
  })


  it("Barrar cadastro CPF inválido chave PIX", { keystrokeDelay: 30 }, () => {
    // cy.visit("https://maleta.rocks/host")

    cy.get('.form-control').type('joab.ferreira@clina.care')
    cy.get('.btn').click()
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    // cy.wait(3000)
    cy.get('.justify-content-between > .ng-star-inserted').click()
    cy.get('.sub-item').click()
    cy.get('.btn').click()
    cy.wait(1500)
    cy.get('.pix-container > .btn').click()
    cy.wait(1500)
    cy.get('select').select('CPF')
    cy.get('#pix-key').type('00000000000')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(1500)
    cy.get(".toast-error").should("be.visible")
  })

  it("Barrar cadastro Email inválido chave PIX", { keystrokeDelay: 30 }, () => {
    //login
    cy.get('.form-control').type('joab.ferreira@clina.care')
    cy.get('.btn').click()
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    cy.wait(3000)
    cy.get('.justify-content-between > .ng-star-inserted').click()
    cy.get('.sub-item').click()
    cy.get('.btn').click()
    cy.wait(1500)
    cy.get('.pix-container > .btn').click()
    cy.wait(1500)
    cy.get('select').select('E-MAIL')
    cy.get('#pix-key').type('joabcks.com')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(1500)
    cy.get('#pix-key').clear()
    cy.wait(1500)
    cy.get(".toast-error").should("be.visible")
  })

  it("Barrar cadastro CNPJ inválido chave PIX", { keystrokeDelay: 30 }, () => {
    //login
    cy.get('.form-control').type('joab.ferreira@clina.care')
    cy.get('.btn').click()
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    // cy.wait(3000)
    cy.get('.justify-content-between > .ng-star-inserted').click()
    cy.get('.sub-item').click()
    cy.get('.btn').click()
    cy.wait(1500)
    cy.get('.pix-container > .btn').click()
    cy.wait(1500)
    //cnpj errado
    cy.get('select').select('CNPJ')
    cy.get('#pix-key').type('0000000000')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(1500)
    cy.get(".toast-error").should("be.visible")
    cy.get('#pix-key').clear()

  })

  it("Barrar cadastro Celular inválido chave PIX", { keystrokeDelay: 30 }, () => {
    cy.get('.form-control').type('joab.ferreira@clina.care')
    cy.get('.btn').click()
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    // cy.wait(3000)
    cy.get('.justify-content-between > .ng-star-inserted').click()
    cy.get('.sub-item').click()
    cy.get('.btn').click()
    cy.wait(1500)
    cy.get('.pix-container > .btn').click()
    cy.wait(1500)
    //celular errado
    cy.get('select').select('CELULAR')
    cy.get('#pix-key').type('0000000000')
    cy.get('.btn > .ng-star-inserted').click()
    cy.wait(1500)
    cy.get(".toast-error").should("be.visible")
    cy.get('#pix-key').clear()
  })

  it("Barrar cadastro Celular com letras", { keystrokeDelay: 30 }, () => {
    cy.get('.form-control').type('joab.ferreira@clina.care')
    cy.get('.btn').click()
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    // cy.wait(3000)
    cy.get('.justify-content-between > .ng-star-inserted').click()
    cy.get('.sub-item').click()
    cy.get('.btn').click()
    cy.wait(1500)
    cy.get('.pix-container > .btn').click()
    cy.wait(1500)
    //celular errado
    cy.get('select').select('CELULAR')
    cy.get('#pix-key').type('abcdefg').should('have.value', '(')
    cy.wait(1500)
    // cy.get(".toast-error").should("be.visible")
    // cy.get('#pix-key').clear()
  })



  it("Cadastro Email válido chave PIX", { keystrokeDelay: 30 }, () => {
    cy.get('.form-control').type('joab.ferreira@clina.care')
    cy.get('.btn').click()
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    // cy.wait(3000)
    cy.get('.justify-content-between > .ng-star-inserted').click()
    cy.get('.sub-item').click()
    cy.get('.btn').click()
    cy.wait(1500)
    cy.get('.pix-container > .btn').click()
    cy.wait(1500)
    //selecionar campo email
    cy.get('select').select('EMAIL')
    cy.get('#pix-key').type('joabcks@gmail.com')
    cy.get('.btn > .ng-star-inserted').click()
    //remover valor inserido
    cy.wait(2000)
    cy.get('.modal-content').type('{esc}');
    cy.get('.border-danger > .clina').click()
    cy.wait(1500)
    cy.get('clina-btn-loading > .btn').click()
    cy.wait(1600)
    cy.get('.modal-content > .d-flex').type('{esc}')

  })


  it("Cadastro CPF válido chave PIX", { keystrokeDelay: 30 }, () => {
    cy.get('.form-control').type('joab.ferreira@clina.care')
    cy.get('.btn').click()
    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    // // cy.wait(3000)
    cy.get('.justify-content-between > .ng-star-inserted').click()
    cy.get('.sub-item').click()
    cy.get('.btn').click()
    cy.wait(1500)
    cy.get('.pix-container > .btn').click()
    cy.wait(1500)
    //selecionar campo CPF
    cy.get('select').select('CPF')
    cy.get('#pix-key').type('00200262262')
    cy.get('.btn > .ng-star-inserted').click()
    //remover valor inserido
    cy.wait(2000)
    cy.get('.modal-content').type('{esc}');
    cy.get('.border-danger > .clina').click()
    cy.wait(1500)
    cy.get('clina-btn-loading > .btn').click()
    cy.wait(1600)
    cy.get('.modal-content > .d-flex').type('{esc}')
    cy.wait(1600)

  })


  it("Cadastro CNPJ válido chave PIX", { keystrokeDelay: 30 }, () => {
    cy.visit("https://maleta.rocks/host")
    cy.get('.form-control').type('joab.ferreira@clina.care')
    cy.get('.btn').click()
    cy.wait(1500)

    cy.get('clina-show-hide-input > div > .form-control').type('Qwe123.,.')
    cy.get('.btn').click()
    // cy.wait(3000)
    cy.get('.justify-content-between > .ng-star-inserted').click()
    cy.get('.sub-item').click()
    cy.get('.btn').click()
    cy.wait(1500)
    cy.get('.pix-container > .btn').click()
    cy.wait(1500)
    //selecionar campo CNPJ
    cy.get('select').select('CNPJ')
    cy.get('#pix-key').type('30547356000100')
    cy.get('.btn > .ng-star-inserted').click()
    //remover valor inserido
    cy.wait(2000)
    cy.get('.modal-content').type('{esc}');
    cy.get('.border-danger > .clina').click()
    cy.wait(1500)
    cy.get('clina-btn-loading > .btn').click()
    cy.wait(1600)

  })



})