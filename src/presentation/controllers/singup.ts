import { HttpRequest, HttpResponse } from "../protocols/http";
import { badRequest, serverError } from "../helpers/http-helpers";
import { Controller } from "../protocols/controller";
import { EmailValidator } from "../protocols/email-validator";
import { InvalidParamError, MissingParamError } from "../errors";

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ["name", "email", "password"];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const isValid = this.emailValidator.isValid(httpRequest.body.email);
      if (!isValid) {
        return badRequest(new InvalidParamError("email"));
      }

      // Retorno para o caso de sucesso
      return {
        statusCode: 200,
        body: { message: "Success" },
      };
    } catch (error) {
      return serverError();
    }
  }
}
