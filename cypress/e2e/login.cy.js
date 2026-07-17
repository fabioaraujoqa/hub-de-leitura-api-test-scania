/// <reference types="cypress" />

describe('Teste de API - Autenticação', () => {

  it('Deve fazer login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'login',
      body: {
        email: 'admin@biblioteca.com',
        password: 'admin123'
      }
    }).should((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('token')
    })
  });

});