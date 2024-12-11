import { MissingParamError } from "../errors/missing-param-error";
import { SignUpController } from "./singup";

describe("SignUp Controller", () => {
  //nome do teste
  test("Shoud return 400 if no name is provide", () => {
    //retorna um erro 400 em caso de o nome não for enviado
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "any_email@mail.com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("nome"));
  });

  test("Shoud return 400 if no email is provide", () => {
    //retorna um erro 400 em caso de o nome não for enviado
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email"));
  });

  test("Shoud return 400 if no password is provide", () => {
    //retorna um erro 400 em caso de o password não for enviado
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("password"));
  });
});
