# Oficina Garcia Azevedo Backend

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is the backend for the Oficina Garcia Azevedo application. It is built with Node.js, Express, and Sequelize for handling RESTful API requests, and it uses PostgreSQL as the database. The project also includes JWT for authentication and Swagger for API documentation.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/glautonOsorio/Oficina-Garcia-Azevedo-Back.git
   cd Oficina-Garcia-Azevedo-Back
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Configuration

1. **Environment Variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```sh
   APP_PORT=<your_app_port>
   DB_DIALECT=<your_db_dialect>
   DB_HOST=<your_db_host>
   DB_USERNAME=<your_db_username>
   DB_PASSWORD=<your_db_password>
   DATABASE=<your_database_name>
   DB_PORT=<your_db_port>
   JWT_SECRET='your_jwt_secret'
   ```

   Replace the placeholders with your actual database credentials and desired JWT secret.

## Usage

### Starting the Server

To start the server, use:

```sh
npm start
```

### Development Mode

To start the server in development mode with `nodemon`, use:

```sh
npm run dev
```

### Generating API Documentation

To generate the Swagger documentation, use:

```sh
npm run start:gendoc
```

### Database Migration

To run database migrations, use:

```sh
npm run db:migrate
```

### Seeding the Database

To seed the database, use:

```sh
npm run db:seed
```

## Scripts

- **`npm start`**: Starts the server.
- **`npm run dev`**: Starts the server with `nodemon` for development.
- **`npm run start:gendoc`**: Generates Swagger API documentation.
- **`npm run db:migrate`**: Runs database migrations.
- **`npm run db:seed`**: Seeds the database.

---

# Documentação das Rotas

## Introdução

Este documento descreve as rotas disponíveis na API backend da aplicação Oficina Garcia Azevedo. A API é construída com Node.js e Express, utiliza Sequelize para interação com o banco de dados PostgreSQL, e inclui autenticação JWT e documentação Swagger.

## Rotas

### /login

#### POST /

- **Descrição:** Rota para autenticar um usuário.
- **Parâmetros do Corpo da Requisição:**
  - `email`: Email do usuário (string)
  - `password`: Senha do usuário (string)
- **Retorno de Sucesso:** Retorna um token JWT válido.
- **Retorno de Erro:** Retorna mensagem de erro em caso de falha na autenticação.

### /users

#### POST /register

- **Descrição:** Rota para registrar um novo usuário.
- **Parâmetros do Corpo da Requisição:**
- `userName`: Nome completo do usuário (string, obrigatório)
- `gender`: Gênero do usuário (string)
- `email`: Endereço de email do usuário (string, obrigatório)
- `cpf`: Número do CPF do usuário (string, obrigatório)
- `phoneNumber`: Número de telefone do usuário (string)
- `password`: Senha do usuário (string, obrigatório).
- **Retorno de Sucesso:** Retorna os dados do usuário registrado.
- **Retorno de Erro:** Retorna mensagem de erro em caso de falha no registro.

#### PUT /profile

- **Descrição:** Rota para atualizar os dados do perfil do usuário autenticado.
- **Parâmetros do Corpo da Requisição:**
- `userName`: Nome completo do usuário (string, obrigatório)
- `gender`: Gênero do usuário (string)
- `email`: Endereço de email do usuário (string, obrigatório)
- `cpf`: Número do CPF do usuário (string, obrigatório)
- `phoneNumber`: Número de telefone do usuário (string)
- **Requisitos:** Autenticação JWT necessária.
- **Retorno de Sucesso:** Retorna os dados atualizados do usuário.
- **Retorno de Erro:** Retorna mensagem de erro em caso de falha na atualização.

#### DELETE /profile

- **Descrição:** Rota para excluir o perfil do usuário autenticado.
- **Requisitos:** Autenticação JWT necessária.
- **Retorno de Sucesso:** Retorna confirmação de exclusão do perfil.
- **Retorno de Erro:** Retorna mensagem de erro em caso de falha na exclusão.

#### GET /profile

- **Descrição:** Rota para obter os dados do perfil do usuário autenticado.
- **Requisitos:** Autenticação JWT necessária.
- **Retorno de Sucesso:** Retorna os dados do perfil do usuário.
- **Retorno de Erro:** Retorna mensagem de erro em caso de falha na obtenção dos dados.

### Documentação da API

#### GET /docs

- **Descrição:** Rota para visualizar a documentação da API Swagger.
- **Acesso:** Acesse `http://localhost:{PORT_API}/docs` no navegador para visualizar a documentação interativa.

## Configuração

Certifique-se de configurar corretamente as variáveis de ambiente no arquivo `.env` conforme descrito na seção de [Configuração](#configuração) do README principal.

---

## Dependencies

- `bcrypt`: ^5.1.1
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.19.2
- `jsonwebtoken`: ^9.0.2
- `pg`: ^8.12.0
- `pg-hstore`: ^2.3.4
- `sequelize`: ^6.37.3
- `swagger-autogen`: ^2.23.7
- `swagger-ui-express`: ^5.0.1
- `yup`: ^1.4.0

## Dev Dependencies

- `nodemon`: ^3.1.3
- `sequelize-cli`: ^6.6.2

## Contributing

We welcome contributions to this project. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## Autores

[Glauton Osório](https://github.com/glautonOsorio)-
[Herbert Cardozo](https://github.com/HerbCyor)
[Thalles Azevedo](https://github.com/TThaz) -

## License

This project is licensed under the ISC License.
