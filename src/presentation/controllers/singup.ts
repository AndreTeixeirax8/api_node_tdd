import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error("Falta o parametro nome"),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error("Falta o parametro email"),
      };
    }
  }
}
