---
---

# Backend Oficina Garcia Azevedo

## Sumário

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Scripts](#scripts)
- [Dependências](#dependências)
- [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Introdução

Este é o backend para a aplicação Oficina Garcia Azevedo. Ele foi construído com Node.js, Express e Sequelize para lidar com requisições de API RESTful, utilizando PostgreSQL como banco de dados. O projeto também inclui autenticação JWT e documentação de API com Swagger.

## Instalação

Para começar com este projeto, siga estes passos:

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/glautonOsorio/Oficina-Garcia-Azevedo-Back.git
   cd Oficina-Garcia-Azevedo-Back
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

## Configuração

1. **Variáveis de Ambiente:**

   Crie um arquivo `.env` no diretório raiz e adicione as seguintes variáveis:

   ```sh
   APP_PORT=<sua_porta_do_aplicativo>
   DB_DIALECT=<seu_dialeto_do_banco_de_dados>
   DB_HOST=<seu_host_do_banco_de_dados>
   DB_USERNAME=<seu_nome_de_usuário_do_banco_de_dados>
   DB_PASSWORD=<sua_senha_do_banco_de_dados>
   DATABASE=<seu_nome_do_banco_de_dados>
   DB_PORT=<sua_porta_do_banco_de_dados>
   JWT_SECRET='seu_segredo_jwt'
   ```

   Substitua os espaços reservados pelos dados reais do seu banco de dados e pelo segredo JWT desejado.

## Uso

### Iniciando o Servidor

Para iniciar o servidor, use:

```sh
npm start
```

### Modo de Desenvolvimento

Para iniciar o servidor no modo de desenvolvimento com `nodemon`, use:

```sh
npm run dev
```

### Gerando Documentação da API

Para gerar a documentação Swagger, use:

```sh
npm run start:gendoc
```

### Migração do Banco de Dados

Para executar migrações do banco de dados, use:

```sh
npm run db:migrate
```

### Semeando o Banco de Dados

Para popular o banco de dados com dados iniciais, use:

```sh
npm run db:seed
```

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

## Dependências

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

## Dependências de Desenvolvimento

- `nodemon`: ^3.1.3
- `sequelize-cli`: ^6.6.2

## Contribuições

Nós recebemos contribuições para este projeto. Por favor, siga estes passos para contribuir:

1. Faça um fork do repositório.
2. Crie um novo branch (`git checkout -b feature/sua-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adicionando uma feature'`).
4. Faça push para o branch (`git push origin feature/sua-feature`).
5. Crie um novo Pull Request.

## Autores

[Glauton Osório](https://github.com/glautonOsorio) -
[Herbert Cardozo](https://github.com/HerbCyor) -
[Thalles Azevedo](https://github.com/TThaz) -

## Licença

Este projeto é licenciado sob a Licença ISC.

---
