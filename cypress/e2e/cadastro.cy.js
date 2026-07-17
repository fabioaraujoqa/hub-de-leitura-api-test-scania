/// <reference types="cypress" />

describe('GET - Teste de API - Gestão de Usuários', () => {
    //let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBiaWJsaW90ZWNhLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc4NDI0NDk5NiwiZXhwIjoxNzg0MjczNzk2fQ.Z8p-9_5SJzywWL2OGpDVzp8x5KYATUDqA0SqKvDGF78"

    let token
    beforeEach(() => {
        cy.geraToken('admin@biblioteca.com', 'admin123').then(tkn => {
            token = tkn
        })
    });

    it('GET - Deve listar usuários com sucesso', () => {
        cy.api({
            method: 'GET',
            url: 'users?page=1&limit=20',
            headers: { 'Authorization': token }
        }).should(response => {
            expect(response.status).to.equal(200)
            expect(response.body.users[0]).to.have.property('id')
            expect(response.body.users[0]).to.have.property('email')
        })
    });

    it('POST - Deve cadastrar usuário com sucesso', () => {
        let email = `email${Date.now()}@gmail.com`
        cy.api({
            method: 'POST',
            url: '/users',
            body: {
                "name": "Maria Santos",
                "email": email,
                "password": "senha123"
            }
        }).should(response => {
            expect(response.status).to.equal(201)
            expect(response.body.message).include("Usuário criado") // Valida parte da mensagem
        })
    });

    it('PUT - Deve atualizar usuário com sucesso', () => {
        let id = 3
        let email = `email_alterado${Date.now()}@gmail.com`
        cy.api({
            method: 'PUT',
            url: 'users/' + id,
            body: {
                "name": "Fábio Araújo",
                "email": email
            },
            headers: { 'Authorization': token }
        }).should(response => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal("Usuário atualizado com sucesso.") // Precisa validar a mensagem exatamente igual
        })
    });

    it('DELETE - Deve deletar usuário com sucesso', () => {
        let email = `email_para_deletar${Date.now()}@gmail.com`
        cy.cadastrarUsuario('Fabio Araujo', email, 'senha@123').then(userId => {

            cy.api({
                method: 'DELETE',
                url: `users/${userId}`,
                headers: { 'Authorization': token }

            }).should(response => {
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal("Usuário removido com sucesso.")
            })

        })

    });

    it('DELETE - Deve exibir mensagem de erro ao deletar usuário inexistente', () => {
        let id = 25
        cy.api({
            method: 'DELETE',
            url: `users/${id}`,
            headers: { 'Authorization': token },
            failOnStatusCode: false

        }).should(response => {
            expect(response.status).to.equal(404)
            expect(response.body.message).to.equal("Usuário não encontrado.")
        })
    });


});

