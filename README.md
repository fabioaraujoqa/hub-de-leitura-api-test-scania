# 🧪 Hub de Leitura — Testes de API com Cypress

Projeto de automação de testes de API para o sistema [Hub de Leitura](https://github.com/fabioaraujoqa/hub-de-leitura), desenvolvido com Cypress e cypress-plugin-api.

---

## 📋 Pré-requisitos

- [Node.js 18+](https://nodejs.org/)
- [Git](https://git-scm.com/)
- API do Hub de Leitura rodando localmente na porta `3000`

---

## 🚀 Subindo a API (Hub de Leitura)

Antes de rodar os testes, a API precisa estar no ar:

```bash
# Clone a API
git clone https://github.com/fabioaraujoqa/hub-de-leitura.git
cd hub-de-leitura

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

A API estará disponível em:
- **Base URL:** `http://localhost:3000/api`
- **Swagger:** `http://localhost:3000/api-docs`

---

## 📦 Instalando o projeto de testes

```bash
# Clone este repositório
git clone https://github.com/fabioaraujoqa/hub-de-leitura-api-test-scania.git
cd hub-de-leitura-api-test-scania

# Instale as dependências
npm install
```

---

## ▶️ Executando os testes

### Modo interativo (Cypress App)

```bash
npx cypress open
```

### Modo headless (linha de comando)

```bash
npx cypress run
```

### Rodando um arquivo específico

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
npx cypress run --spec "cypress/e2e/cadastro.cy.js"
```

---

## 🔑 Credenciais de teste

| Perfil        | E-mail                    | Senha      |
|---------------|---------------------------|------------|
| Administrador | `admin@biblioteca.com`    | `admin123` |
| Usuário comum | `usuario@teste.com`       | `user123`  |

---

## 🗂️ Estrutura do projeto

```
cypress/
├── e2e/
│   ├── login.cy.js        # Testes de autenticação
│   └── cadastro.cy.js     # Testes de gestão de usuários (CRUD)
├── fixtures/
│   └── example.json
└── support/
    ├── commands.js        # Comandos customizados (geraToken, cadastrarUsuario)
    └── e2e.js             # Configuração global e imports
cypress.config.js
```

---

## 🧩 Cobertura de testes

### Autenticação (`login.cy.js`)
- ✅ Login com sucesso

### Gestão de Usuários (`cadastro.cy.js`)
- ✅ GET — Listar usuários com paginação
- ✅ POST — Cadastrar novo usuário
- ✅ PUT — Atualizar dados de usuário
- ✅ DELETE — Deletar usuário existente
- ✅ DELETE — Erro ao deletar usuário inexistente

---

## 🛠️ Tecnologias

| Ferramenta | Versão |
|---|---|
| [Cypress](https://www.cypress.io/) | ^15.x |
| [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api) | ^2.x |

---

## 👤 Autor

**Fábio Araújo** — [GitHub](https://github.com/fabioaraujoqa) · [LinkedIn](https://www.linkedin.com/in/fabio10/)