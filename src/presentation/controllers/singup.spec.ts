import { InvalidParamError } from "../errors/invalid-param-error copy";
import { MissingParamError } from "../errors/missing-param-error";
import { SignUpController } from "./singup";

const makeSut = (): SignUpController => {
  class EmailValidatorStub {
    isValid(email: string): boolean {
      return true;
    }
  }

  const emailValidatorStub = new EmailValidatorStub();

  return new SignUpController(emailValidatorStub);
};

describe("SignUp Controller", () => {
  test("Shoud return 400 if no name is provide", () => {
    //retorna um erro 400 em caso de o nome não for enviado
    const sut = makeSut();
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
    const sut = makeSut();
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
    const sut = makeSut();
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

  test("Shoud return 400 if an invalid email is is provided", () => {
    //retorna um erro 400 em caso de o password não for enviado
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email@mail.com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new InvalidParamError("email"));
  });
});
