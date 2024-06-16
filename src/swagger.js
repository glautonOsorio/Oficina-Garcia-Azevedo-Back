require("dotenv").config();
const swaggerAutogen = require("swagger-autogen")();

const {
  env: { APP_PORT },
} = process;

const doc = {
  info: {
    title: "Oficina-Garcia-Azevedo",
    description: "Api criada pelos 3 Mosqueteiros",
  },
  host: `localhost:${APP_PORT}`,
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Users",
      description: "Requisições de usuários",
    },
  ],
  definitions: {
    userLoginBody: {
      email: "email do usuário",
      password: "123456",
    },
    userLogin200: {
      message: "Usuário logado com sucesso",
      accessToken: "token",
    },
    userLogin400: {
      message: "Usuário / Senha inválido(s)",
    },
    userLogin404: {
      message: "Usuário não encontrado",
    },
    userLogin500: {
      message: "Não foi possível completar a exclusão.",
    },
    userRegisterBody: {
      userName: "Osvaldo Tiago Ferreira",
      gender: "male",
      email: "osvaldo.tiago.ferreira@supracolor.com.br",
      cpf: "13573541500",
      phoneNumber: "79998355326",
      password: "Tm9r6xUxBK",
    },
    userRegister201: { message: "Usuário registrado com sucesso" },
    userRegister400: {
      message: "Campo cpf deve estar no formato 000.000.000-00",
    },
    userRegister409: { message: "E-mail já cadastrado" },
    userRegister500: { message: "Não foi possível completar o registro." },

    userUpdateBody: {
      userName: "Osvaldo Tiago Ferreira",
      gender: "male",
      email: "osvaldo.tiago.ferreira@supracolor.com.br",
      cpf: "13573541500",
      phoneNumber: "79998355326",
    },
    userUpdate200: { message: "Dados do usuário atualizados com sucesso" },
    userUpdate400: { message: "Usuário não encontrado" },
    userUpdate500: { message: "Não foi possível completar a atualização." },

    userDelete200: { message: "Usuário deletado com sucesso" },
    userDelete500: { message: "Não foi possível completar a exclusão." },

    userShow200: {
      data: {
        userName: "Osvaldo Tiago Ferreira",
        gender: "male",
        email: "osvaldo.tiago.ferreira@supracolor.com.br",
        cpf: "135.735.415-00",
        phoneNumber: "(79) 99835-5326",
        createdAt: "2023-10-15T00:14:49.882Z",
        updatedAt: "2023-10-15T00:14:49.882Z",
      },
    },
    userShow400: { message: "Id deve ser um INTEGER" },
    userShow404: { message: "Usuário não encontrado" },
    userShow500: { message: "Não foi possível completar a requisição." },
  },
};

const outputFile = "./src/swagger.json";
const endpointsFiles = ["./src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
